/* ===== حسابات الأعضاء: دخول بالإيميل أو جوجل، وربط الحساب بالعضوية ===== */
(function(){
  'use strict';
  var CFG = window.AVA_CONFIG || {};
  var client = null;

  function isEn(){ return document.documentElement.lang === 'en'; }
  function L(ar, en){ return isEn() ? en : ar; }
  function say(t, k){ if (window.toast) window.toast(t, k); }

  // عميل منفصل للأعضاء: بيحفظ الجلسة باسم مختلف عن جلسة الأمين
  function sb(){
    if (client) return client;
    try {
      if (window.supabase && CFG.url && CFG.key) {
        client = window.supabase.createClient(CFG.url, CFG.key, {
          auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: 'ava-member-auth' }
        });
        client.auth.onAuthStateChange(function(){ loadMe(); });
        loadMe();
      }
    } catch (e) { client = null; }
    return client;
  }

  // بيانات العضو المربوط بالحساب (الاسم والصورة) — بتتحدّث شاشة التطبيق
  async function loadMe(){
    var c = client;
    var me = null;
    try {
      var s = c && (await c.auth.getSession());
      if (s && s.data && s.data.session) {
        var r = await c.rpc('my_member');
        var row = r.data && r.data[0];
        if (row) {
          me = { name: row.full_name || '', photo: null, linked: true };
          if (row.photo_path) {
            var u = await c.storage.from('member-photos').createSignedUrl(row.photo_path, 3600);
            if (u.data && u.data.signedUrl) me.photo = u.data.signedUrl;
          }
        } else {
          me = { name: '', photo: null, linked: false };
        }
      }
    } catch (e) { me = null; }
    window.avaMe = me;
    document.dispatchEvent(new CustomEvent('ava:me'));
  }
  // بعد التسجيل: لو الشخص داخل بحسابه، الحساب بيتربط بالبيانات اللي سجّلها
  window.avaAfterRegister = async function(phone){
    try {
      var c = sb();
      var s = c && (await c.auth.getSession());
      if (!s || !s.data || !s.data.session) return;
      await c.rpc('link_my_member', { p_phone: phone });
      loadMe();
    } catch (e) {}
  };

  function el(tag, cls, text){
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function sheet(){
    var o = document.getElementById('acct');
    if (o) return o;
    o = el('div', 'appset');
    o.id = 'acct';
    var box = el('div', 'appset-box');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    var hd = el('div', 'appset-hd');
    hd.appendChild(el('b', '', L('حسابي', 'My account')));
    var x = el('button', 'appset-x', '×');
    x.type = 'button';
    x.setAttribute('aria-label', L('إغلاق', 'Close'));
    x.dataset.act = 'close';
    hd.appendChild(x);
    box.appendChild(hd);
    box.appendChild(el('div', 'acct-body'));
    o.appendChild(box);
    o.addEventListener('click', onClick);
    o.addEventListener('submit', onSubmit);
    document.body.appendChild(o);
    return o;
  }

  function body(){ return sheet().querySelector('.acct-body'); }

  function button(label, act, cls){
    var b = el('button', cls || 'acct-btn', label);
    b.type = 'button';
    b.dataset.act = act;
    return b;
  }

  // ترجمة أخطاء Supabase المعروفة لرسائل واضحة
  function explain(err){
    var t = String((err && (err.message || err.error_description)) || '');
    var l = t.toLowerCase();
    if (/rate limit|too many|over_email_send_rate/.test(l)) return L('وصلنا للحد المسموح من الرسايل دلوقتي. استنى ساعة وجرّب تاني.', 'Email limit reached. Wait an hour and try again.');
    if (/signups? not allowed|signup.*disabled|not allowed for otp/.test(l)) return L('التسجيل بالإيميل مقفول. الأمين لازم يفعّل Allow new users to sign up في Supabase.', 'Email sign-up is disabled. The admin must enable sign-ups in Supabase.');
    if (/redirect|redirect_to/.test(l)) return L('رابط الرجوع مش متسجل في Supabase (Redirect URLs). الأمين لازم يضيف رابط الموقع.', 'The redirect URL is not allowed in Supabase.');
    if (/error sending|smtp|email.*send/.test(l)) return L('الإيميل مش راضي يتبعت. الأمين لازم يراجع إعدادات SMTP في Supabase.', 'Email could not be sent. Check SMTP settings in Supabase.');
    if (/invalid.*email|email address/.test(l)) return L('الإيميل مش صحيح، اكتبه تاني.', 'The email is not valid.');
    if (/مالقيناش|متربط|كامل|لازم|كلّم/.test(t)) return t;
    if (/Failed to fetch|NetworkError/i.test(t)) return L('مفيش اتصال بالنت دلوقتي.', 'No internet connection.');
    return L('حصلت مشكلة: ' + (t || 'جرّب تاني'), 'Something went wrong: ' + (t || 'try again'));
  }

  function validEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  // الإعدادات: بتظهر للزائر والعضو
  function prefs(){
    var wrap = el('div', 'acct-prefs');
    wrap.appendChild(el('b', 'acct-h', L('الإعدادات', 'Settings')));

    var supported = ('serviceWorker' in navigator) && ('PushManager' in window) && ('Notification' in window) && /^https?:$/.test(location.protocol);
    var pb = document.getElementById('pushbtn');
    var on = !!(pb && pb.dataset.on === '1');
    var r1 = el('div', 'acct-row');
    r1.appendChild(el('span', '', L('🔔 الإشعارات اليومية', '🔔 Daily notifications')));
    if (supported) r1.appendChild(button(on ? L('مفعّلة · اقفلها', 'On · turn off') : L('فعّلها', 'Turn on'), 'push', 'acct-mini'));
    else r1.appendChild(el('small', '', L('مش متاحة على الجهاز ده', 'Not available on this device')));
    wrap.appendChild(r1);

    var r2 = el('div', 'acct-row');
    r2.appendChild(el('span', '', L('🌐 اللغة والثيم', '🌐 Language & theme')));
    r2.appendChild(button(L('افتح', 'Open'), 'settings', 'acct-mini'));
    wrap.appendChild(r2);

    var r3 = el('div', 'acct-row');
    r3.appendChild(el('span', '', L('🔍 ابحث في الموقع', '🔍 Search the site')));
    r3.appendChild(button(L('ابحث', 'Search'), 'search', 'acct-mini'));
    wrap.appendChild(r3);

    var r4 = el('div', 'acct-row');
    r4.appendChild(el('span', '', L('🔒 الخصوصية', '🔒 Privacy')));
    var pl = el('a', 'acct-mini', L('اقرأ السياسة', 'Read the policy'));
    pl.href = 'privacy.html';
    r4.appendChild(pl);
    wrap.appendChild(r4);

    var r5 = el('div', 'acct-row');
    r5.appendChild(el('span', '', L('💬 الدعم والأسئلة', '💬 Support & FAQ')));
    var fq = el('a', 'acct-mini', L('الأسئلة الشائعة', 'FAQ'));
    fq.href = 'faq.html';
    r5.appendChild(fq);
    var sp = el('a', 'acct-mini', L('تواصل معنا', 'Contact us'));
    sp.href = 'index.html#contact';
    r5.appendChild(sp);
    wrap.appendChild(r5);

    var r6 = el('div', 'acct-row');
    r6.appendChild(el('span', '', L('🌙 الوضع الليلي', '🌙 Dark mode')));
    r6.appendChild(button(L('بدّل', 'Toggle'), 'dark', 'acct-mini'));
    wrap.appendChild(r6);

    wrap.appendChild(el('p', 'acct-note', L('لو عايز تحذف بياناتك أو عندك سؤال، كلّم أمين الأسرة.', 'To delete your data or ask a question, contact the family secretary.')));
    return wrap;
  }

  async function render(){
    try { await renderMain(); } catch (e) {}
    body().appendChild(prefs());
  }

  async function renderMain(){
    var c = sb();
    var bd = body();
    bd.textContent = '';
    if (!c) {
      bd.appendChild(el('p', 'acct-note', L('الحسابات مش متاحة دلوقتي. لازم إعدادات الموقع تتكمل الأول.', 'Accounts are not available yet. The site setup must be completed first.')));
      return;
    }
    var s = await c.auth.getSession();
    var user = s.data && s.data.session && s.data.session.user;

    if (!user) {
      bd.appendChild(el('p', 'acct-note', L('سجّل دخولك عشان تربط حسابك بعضويتك في الأسرة.', 'Sign in to link your account to your family membership.')));
      var f = el('form', 'acct-form');
      f.dataset.form = 'mail';
      var inp = el('input');
      inp.type = 'email';
      inp.required = true;
      inp.autocomplete = 'email';
      inp.placeholder = L('الإيميل', 'Email');
      inp.name = 'email';
      f.appendChild(inp);
      f.appendChild(button(L('ابعتلي رابط الدخول', 'Send me a sign-in link'), 'mail', 'acct-btn gold'));
      bd.appendChild(f);
      bd.appendChild(el('div', 'acct-or', L('أو', 'or')));
      bd.appendChild(button(L('كمّل بحساب جوجل', 'Continue with Google'), 'google', 'acct-btn'));
      bd.appendChild(el('p', 'acct-note', L('تقدر تكمّل تصفح من غير حساب، وأي حاجة هتفضل متاحة.', 'You can keep browsing without an account.')));
      return;
    }

    bd.appendChild(el('p', 'acct-note', user.email || ''));
    var r = await c.rpc('my_member');
    var row = r.data && r.data[0];
    if (row) {
      var card = el('div', 'acct-card');
      card.appendChild(el('b', '', row.full_name || ''));
      card.appendChild(el('span', '', L('✅ حسابك متربط بعضويتك', '✅ Your account is linked to your membership')));
      bd.appendChild(card);
    } else {
      bd.appendChild(el('p', 'acct-note', L('اكتب رقم موبايلك اللي سجّلت بيه عشان نربط الحساب بعضويتك.', 'Enter the phone number you registered with to link your membership.')));
      var lf = el('form', 'acct-form');
      lf.dataset.form = 'link';
      var pi = el('input');
      pi.type = 'tel';
      pi.inputMode = 'tel';
      pi.required = true;
      pi.name = 'phone';
      pi.placeholder = '01xxxxxxxxx';
      lf.appendChild(pi);
      lf.appendChild(button(L('اربط حسابي', 'Link my account'), 'link', 'acct-btn gold'));
      bd.appendChild(lf);
    }
    bd.appendChild(button(L('تسجيل الخروج', 'Sign out'), 'logout', 'acct-btn line'));
    bd.appendChild(button(L('احذف حسابي', 'Delete my account'), 'delete', 'acct-btn line acct-danger'));
  }

  async function onClick(e){
    if (e.target === sheet() || (e.target.closest && e.target.closest('[data-act="close"]'))) {
      sheet().classList.remove('open');
      return;
    }
    var b = e.target.closest && e.target.closest('[data-act]');
    if (!b) return;
    var act = b.dataset.act;
    if (act === 'dark') { var tg = document.getElementById('tg'); if (tg) tg.click(); setTimeout(render, 100); return; }
    if (act === 'push') {
      var pb = document.getElementById('pushbtn');
      if (pb) pb.click();
      else say(L('الإشعارات مش متاحة على المتصفح ده. على الآيفون: افتح الموقع من زرار "إضافة للشاشة الرئيسية" وافتحه من الأيقونة.', 'Notifications are not available in this browser. On iPhone, add the app to your home screen and open it from there.'), 'bad');
      setTimeout(render, 2000);
      return;
    }
    if (act === 'settings' || act === 'search') {
      // نقفل شاشة الحساب الأول عشان الشاشة الجديدة تبان فوقها
      sheet().classList.remove('open');
      if (act === 'settings' && window.openSettings) window.openSettings();
      if (act === 'search' && window.openSearch) window.openSearch();
      return;
    }
    var c = sb();
    if (!c) return;
    try {
      if (act === 'delete') {
        if (!b.dataset.sure) {
          b.dataset.sure = '1';
          b.textContent = L('اضغط تاني عشان تأكد الحذف', 'Tap again to confirm');
          return;
        }
        var d = await c.rpc('delete_my_account');
        if (d.error) throw d.error;
        await c.auth.signOut();
        say(L('اتحذف حسابك. بياناتك كعضو عند الأمين لحد ما تطلب مسحها.', 'Your account was deleted.'), 'good');
        render();
      } else if (act === 'google') {
        var g = await c.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.origin + location.pathname } });
        if (g.error) throw g.error;
      } else if (act === 'logout') {
        await c.auth.signOut();
        say(L('سجّلت خروجك', 'You are signed out'), 'good');
        render();
      }
    } catch (err) {
      say(explain(err), 'bad');
    }
  }

  async function onSubmit(e){
    e.preventDefault();
    var f = e.target;
    var c = sb();
    if (!c) return;
    var btn = f.querySelector('button');
    try {
      if (f.dataset.form === 'mail') {
        var email = (f.email.value || '').trim();
        if (!validEmail(email)) { say(L('اكتب إيميل صحيح', 'Enter a valid email'), 'bad'); return; }
        btn.disabled = true;
        var m = await c.auth.signInWithOtp({ email: email, options: { emailRedirectTo: location.origin + location.pathname } });
        if (m.error) throw m.error;
        body().textContent = '';
        body().appendChild(el('p', 'acct-note', L('بعتنالك رابط الدخول على إيميلك. افتحه من نفس الجهاز ده.', 'We sent a sign-in link to your email. Open it on this device.')));
      } else if (f.dataset.form === 'link') {
        var phone = (f.phone.value || '').trim();
        btn.disabled = true;
        var l = await c.rpc('link_my_member', { p_phone: phone });
        if (l.error) throw l.error;
        say(L('تم ربط حسابك بعضويتك ✅', 'Your account is linked ✅'), 'good');
        render();
      }
    } catch (err) {
      say(explain(err), 'bad');
    } finally {
      if (btn) btn.disabled = false;
    }
  }

  function open(){
    sheet().classList.add('open');
    render();
  }
  window.openAccount = open;

  // أي زرار أو رابط "حسابي" بيفتح الشاشة
  document.addEventListener('click', function(e){
    var t = e.target.closest && e.target.closest('[data-open-account], a[href="#account"]');
    if (!t) return;
    e.preventDefault();
    e.stopPropagation();
    open();
  }, true);
})();
