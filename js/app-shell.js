/* ===== شاشة التطبيق المثبّت: شاشة واحدة + تنقل بالإيماءات =====
   بيتبني دايمًا، والشكل بيظهر بس في وضع التطبيق (html.app).
   أي زرار هنا بيكلّم الزرار الأصلي في الموقع (مشاركة الصورة، شير البوستر، فتح الفعالية)
   عشان نفس المنطق يشتغل من غير تكرار. */
(function(){
  'use strict';
  var LOGO_FALLBACK = 'img/96a5198fc4.webp';
  function isEn(){ return document.documentElement.lang === 'en'; }
  function L(ar, en){ return isEn() ? en : ar; }
  function el(tag, cls, text){
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function isApp(){ return document.documentElement.classList.contains('app'); }
  function go(id){ if (window.appTab) window.appTab(id); }

  var ready = false; // بعد 4 ثواني نعتبر البيانات خلصت، وقبلها بنعرض هيكل التحميل
  var top, home, greet, ph, hi, name, verse, vt, vtxt, vref, avatar, shareBtn, bdayCard, evCard;

  function build(){
    if (top) return;
    home = document.getElementById('home');
    if (!home) return;

    // الشريط اللي فوق: الحساب على الشمال، واسم الأسرة على اليمين
    top = el('header', '');
    top.id = 'shelltop';
    var title = el('div', 'sh-title');
    var logo = el('img');
    var brand = document.querySelector('.brand img');
    logo.src = (brand && brand.getAttribute('src')) || LOGO_FALLBACK;
    logo.alt = '';
    title.appendChild(logo);
    title.appendChild(el('b', '', L('أسرة آڤا مينا', 'Ava Mina Family')));
    avatar = el('button', 'sh-av');
    avatar.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
    avatar.type = 'button';
    avatar.setAttribute('aria-label', L('حسابي', 'My account'));
    avatar.dataset.open = 'account';
    top.appendChild(title);
    top.appendChild(avatar);
    document.body.insertBefore(top, document.body.firstChild);

    // الشاشة الرئيسية
    var box = el('div', 'sh-home');
    box.id = 'shhome';

    greet = el('div', 'sh-greet');
    ph = el('div', 'sh-ph');
    ph.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
    var gt = el('div');
    hi = el('p', 'sh-hi');
    name = el('h1', 'sh-name');
    gt.appendChild(hi);
    gt.appendChild(name);
    gt.appendChild(el('p', 'sh-sub', L('أسرة جامعيين العلوم المالية والإدارية · سوهاج', 'Financial & Administrative Sciences students · Sohag')));
    greet.appendChild(ph);
    greet.appendChild(gt);
    box.appendChild(greet);

    // أعياد الميلاد (بتظهر بس لو فيه عيد النهارده)
    bdayCard = el('div', 'sh-bday');
    bdayCard.hidden = true;
    box.appendChild(bdayCard);

    // آية اليوم
    verse = el('button', 'sh-verse');
    verse.type = 'button';
    verse.dataset.go = 'verse';
    var vl = el('small', 'sh-lbl');
    vl.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></svg>' + '<span>' + L('آية اليوم', 'Verse of the day') + '</span>';
    verse.appendChild(vl);
    vt = el('p', 'sh-vt');
    verse.appendChild(vt);
    vtxt = el('span');
    vt.appendChild(vtxt);
    vref = el('span', 'sh-vref');
    vt.appendChild(vref);
    var cta = el('span', 'sh-cta');
    cta.innerHTML = '<span>' + L('اقرأ الآية', 'Read') + '</span>' + '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
    verse.appendChild(cta);
    box.appendChild(verse);

    // مشاركة الآية كصورة (نفس زرار الموقع)
    shareBtn = el('button', 'sh-share');
    shareBtn.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>' + '<span>' + L('شارك الآية كصورة', 'Share verse as image') + '</span>';
    shareBtn.type = 'button';
    shareBtn.dataset.share = '1';
    box.appendChild(shareBtn);

    // الفعالية الجاية (بتظهر بس لو فيه فعاليات)
    evCard = el('button', 'sh-ev');
    evCard.type = 'button';
    evCard.dataset.go = 'events';
    evCard.hidden = true;
    box.appendChild(evCard);

    // سؤال اليوم
    var q = el('button', 'sh-q');
    q.type = 'button';
    q.dataset.go = 'daily';
    var qi = el('span', 'sh-qi');
    qi.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>';
    q.appendChild(qi);
    var qt = el('span');
    qt.appendChild(el('b', '', L('سؤال اليوم', 'Question of the day')));
    qt.appendChild(el('small', '', L('جاوب وشوف ترتيبك', 'Answer and see your rank')));
    q.appendChild(qt);
    var qa = el('span', 'sh-arr');
    qa.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
    q.appendChild(qa);
    box.appendChild(q);

    home.appendChild(box);
    refreshAll();
  }

  function refreshVerse(){
    if (!vt) return;
    var vp = document.getElementById('vt');
    var vr = document.getElementById('vr');
    var t = vp ? vp.textContent.replace(/\s+/g, ' ').trim().replace(/^[«»"“”]\s*|\s*[«»"“”]$/g, '') : '';
    var ref = vr ? vr.textContent.replace(/\s+/g, ' ').trim().replace(/^[—–-]\s*/, '') : '';
    if (vref) vref.textContent = ref ? '(' + ref + ')' : '';
    if (!t && !ready) { vtxt.textContent = ''; vt.classList.add('skel'); return; }
    vt.classList.remove('skel');
    vtxt.textContent = t || L('اقرأ آية اليوم وخليها تبدأ يومك', 'Read today’s verse and start your day with it');
  }

  function refreshGreeting(){
    if (!hi) return;
    var h = new Date().getHours();
    hi.textContent = h < 12 ? L('صباح الخير ☀️', 'Good morning ☀️') : h < 18 ? L('مساء الخير 🌤️', 'Good afternoon 🌤️') : L('مساء النور 🌙', 'Good evening 🌙');
    var me = window.avaMe;
    var first = me && me.name ? me.name.split(' ')[0] : '';
    name.textContent = first ? L('أهلاً يا ' + first, 'Welcome, ' + first) : L('أهلاً بيك', 'Welcome');
    ph.textContent = '';
    avatar.textContent = '';
    if (me && me.photo) {
      var im = el('img'); im.alt = ''; im.src = me.photo; ph.appendChild(im);
      var ai = el('img'); ai.alt = ''; ai.src = me.photo; avatar.appendChild(ai);
    } else {
      ph.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
      avatar.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
    }
  }

  // أعياد الميلاد: بنعرض صور البوسترات، والضغط عليها أو على شير بيكلّم الزرار الأصلي
  function refreshBday(){
    if (!bdayCard) return;
    var sec = document.getElementById('bday');
    var figs = (sec && !sec.hidden)
      ? Array.prototype.filter.call(document.querySelectorAll('#bdl .bdp'), function(f){ return !f.hidden; })
      : [];
    bdayCard.textContent = '';
    if (!figs.length) { bdayCard.hidden = true; return; }
    bdayCard.hidden = false;
    bdayCard.appendChild(el('b', 'sh-bd-h', L('النهارده عيد ميلاد', 'Birthday today')));
    var row = el('div', 'sh-bd-row');
    figs.slice(0, 6).forEach(function(f){
      var orig = f.querySelector('.bdimg');
      var sh = f.querySelector('.bdsh');
      var nm = f.querySelector('figcaption b');
      var item = el('div', 'sh-bd');
      var im = el('img');
      im.alt = '';
      if (orig && orig.getAttribute('src')) im.src = orig.getAttribute('src');
      im.addEventListener('click', function(){ if (orig) orig.click(); });
      item.appendChild(im);
      item.appendChild(el('span', 'sh-bd-n', nm ? nm.textContent : ''));
      var s = el('button', 'sh-bd-s', L('شير', 'Share'));
      s.type = 'button';
      s.addEventListener('click', function(){ if (sh) sh.click(); });
      item.appendChild(s);
      row.appendChild(item);
    });
    bdayCard.appendChild(row);
  }

  // الفعالية الجاية: بنقرأها من قسم الفعاليات الأصلي
  function refreshEvent(){
    if (!evCard) return;
    var first = document.querySelector('#evs .ev.next') || document.querySelector('#evs .ev');
    evCard.textContent = '';
    if (!first && !ready) { evCard.hidden = false; evCard.classList.add('skel'); return; }
    evCard.classList.remove('skel');
    if (!first) {
      evCard.hidden = false;
      var ei = el('span', 'sh-ev-d');
      ei.innerHTML = icon('calendarX');
      var eb = el('span', 'sh-ev-b');
      eb.appendChild(el('small', '', L('الفعاليات', 'Events')));
      eb.appendChild(el('b', '', L('مفيش فعاليات قريبة دلوقتي', 'No upcoming events right now')));
      evCard.appendChild(ei); evCard.appendChild(eb);
      return;
    }
    evCard.hidden = false;
    var d = first.querySelector('.date');
    var h = first.querySelector('h3');
    var pill = first.querySelector('.chip.in');
    var dd = el('span', 'sh-ev-d');
    dd.appendChild(el('b', '', d && d.querySelector('b') ? d.querySelector('b').textContent : ''));
    dd.appendChild(el('small', '', d && d.querySelector('span') ? d.querySelector('span').textContent : ''));
    var body = el('span', 'sh-ev-b');
    body.appendChild(el('small', '', L('الفعالية الجاية', 'Next event')));
    body.appendChild(el('b', '', h ? h.textContent : ''));
    if (pill) body.appendChild(el('small', '', pill.textContent));
    evCard.appendChild(dd);
    evCard.appendChild(body);
    var ea = el('span', 'sh-arr');
    ea.innerHTML = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
    evCard.appendChild(ea);
  }

  // التنبيه اللي من الأدمن بيظهر فوق كل الشاشات (تحت الشريط العلوي)
  function refreshAnn(){
    document.documentElement.classList.toggle('has-ann', !!document.getElementById('ann'));
  }

  // كل تغيير شاشة يبدأ من فوق
  (function(){
    var orig = window.appTab;
    if (typeof orig !== 'function') return;
    window.appTab = function(id){
      // لو القسم مخفي لأنه فاضي، نفتحه ونعرض رسالة "مفيش محتوى" بدل شاشة بيضا
      var target = document.getElementById(id);
      if (target && target.classList.contains('sec') && target.hidden && EMPTY_IDS.indexOf(id) > -1) {
        target.hidden = false;
        setTimeout(markEmpty, 2500);
      }
      var r = orig.apply(this, arguments);
      if (isApp()) window.scrollTo(0, 0);
      return r;
    };
  })();

  function refreshAll(){
    refreshGreeting();
    refreshVerse();
    refreshBday();
    refreshEvent();
    refreshAnn();
  }

  // الأقسام اللي فاضية (مفيهاش محتوى بعد التحميل) بتعرض رسالة هادية بدل شاشة فاضية
  var EMPTY_IDS = ['audio','resources','forms','archive','gallery','competitions','about','servants','rules','first','voice','contact','events','daily','join'];
  function markEmpty(){
    EMPTY_IDS.forEach(function(id){
      var sec = document.getElementById(id);
      if (!sec || sec.hidden || sec.querySelector('[data-empty]')) return;
      var has = sec.querySelector('img,audio,video,form,iframe,button:not(.sh-q),a.btn,article,figure,li,.ev,.card,.tile,table,textarea,input,select,canvas,.quiz > *,.poll > *');
      var text = Array.prototype.map.call(sec.querySelectorAll('p,h3,h4,dt,dd,span,div'), function(n){ return n.closest('.sh') ? '' : (n.childElementCount ? '' : n.textContent.trim()); }).join(' ').trim();
      if (has || text.length > 40) return;
      var box = el('div', 'sh-empty');
      box.setAttribute('data-empty', '1');
      box.innerHTML = icon(id);
      var t = el('div');
      t.appendChild(el('b', '', L('مفيش محتوى هنا دلوقتي', 'Nothing here yet')));
      t.appendChild(el('small', '', L('ارجع تاني قريب، الأمين بيضيف الجديد باستمرار', 'Check back soon, new content is added regularly')));
      box.appendChild(t);
      var wrap = sec.querySelector('.wrap') || sec;
      wrap.appendChild(box);
    });
  }

  // شيت "كل الأقسام" (بيفتح من زرار المزيد في الشريط السفلي)
  function moreSheet(){
    var o = document.getElementById('more-sheet');
    if (!o) {
      o = el('div', 'appset');
      o.id = 'more-sheet';
      var box = el('div', 'appset-box');
      var hd = el('div', 'appset-hd');
      hd.appendChild(el('b', '', L('كل الأقسام', 'All sections')));
      var x = el('button', 'appset-x', '×');
      x.type = 'button';
      x.setAttribute('aria-label', L('إغلاق', 'Close'));
      x.dataset.close = '1';
      hd.appendChild(x);
      box.appendChild(hd);
      var sb = el('button', 'more-search');
      sb.innerHTML = icon('search') + '<span>' + L('ابحث في الأقسام', 'Search sections') + '</span>';
      sb.type = 'button';
      sb.setAttribute('data-search', '');
      box.appendChild(sb);
      box.appendChild(el('div', 'more-body'));
      o.appendChild(box);
      document.body.appendChild(o);
      o.addEventListener('click', function(e){
        if (e.target === o || e.target.closest('[data-close]')) return o.classList.remove('open');
      });
    }
    var src = document.getElementById('tiles');
    o.querySelector('.more-body').innerHTML = src ? src.innerHTML : '';
    o.classList.add('open');
  }

  // ===== الإيماءات =====
  var sx = 0, sy = 0, st = 0, skip = false;
  function inHScroll(node){
    while (node && node !== document.body) {
      if (node.nodeType === 1) {
        var cs = getComputedStyle(node);
        if (node.scrollWidth > node.clientWidth + 2 && /(auto|scroll)/.test(cs.overflowX)) return true;
      }
      node = node.parentElement;
    }
    return false;
  }
  function order(){
    return Array.prototype.map.call(document.querySelectorAll('#qbar a:not([data-more])'), function(a){ return a.getAttribute('href').slice(1); });
  }
  function current(){ return (history.state && history.state.tab) || 'home'; }

  document.addEventListener('touchstart', function(e){
    if (!isApp()) return;
    if (e.touches.length !== 1) { skip = true; return; }
    var t = e.touches[0];
    sx = t.clientX; sy = t.clientY; st = Date.now();
    skip = !!(e.target.closest && e.target.closest('input,textarea,select,[contenteditable],.appset,.srch,.onb,.lb,.sheet')) || inHScroll(e.target);
  }, { passive: true });

  document.addEventListener('touchend', function(e){
    if (skip || !isApp()) { skip = false; return; }
    var t = e.changedTouches[0];
    var dx = t.clientX - sx, dy = t.clientY - sy;
    if (Date.now() - st > 700 || Math.abs(dy) > 60 || Math.abs(dx) < 70) return;
    if (sx > window.innerWidth - 28 && dx < 0) {
      if (current() !== 'home') history.back();
      return;
    }
    var list = order();
    var i = list.indexOf(current());
    if (i < 0) i = 0;
    var next = dx < 0 ? Math.min(list.length - 1, i + 1) : Math.max(0, i - 1);
    if (next !== i) go(list[next]);
  }, { passive: true });

  // ===== الأحداث =====
  document.addEventListener('click', function(e){
    var more = document.getElementById('more-sheet');
    if (more && more.classList.contains('open') && e.target.closest && e.target.closest('#more-sheet a[href^="#"], #more-sheet [data-search]')) more.classList.remove('open');
    var t = e.target.closest && e.target.closest('[data-go],[data-more],[data-open="account"],[data-share]');
    if (!t) return;
    if (t.dataset.share) {
      e.preventDefault();
      var vb = document.getElementById('vsh');
      if (vb) vb.click();
      return;
    }
    if (t.dataset.open === 'account') { e.preventDefault(); if (window.openAccount) window.openAccount(); return; }
    if (t.hasAttribute('data-more')) { e.preventDefault(); e.stopPropagation(); moreSheet(); return; }
    if (t.dataset.go) { e.preventDefault(); go(t.dataset.go); }
  }, true);

  document.addEventListener('ava:me', refreshGreeting);

  // ===== الموقع: زرار "ثبّت التطبيق" جنب الزرار الرئيسي (بيظهر بس لو المتصفح بيسمح) =====
  var deferredInstall = null;
  function setupInstall(){
    if (isApp()) return;
    var row = document.querySelector('.hero .cta-row');
    if (!row || document.getElementById('installBtn')) return;
    var btn = el('button', 'btn ghost install-btn', L('ثبّت التطبيق', 'Install the app'));
    btn.type = 'button';
    btn.id = 'installBtn';
    btn.hidden = true;
    row.appendChild(btn);
    window.addEventListener('beforeinstallprompt', function(e){
      e.preventDefault();
      deferredInstall = e;
      btn.hidden = false;
    });
    window.addEventListener('appinstalled', function(){ btn.hidden = true; deferredInstall = null; });
    btn.addEventListener('click', function(){
      if (deferredInstall) {
        deferredInstall.prompt();
        deferredInstall.userChoice.finally(function(){ deferredInstall = null; btn.hidden = true; });
        return;
      }
      if (window.toast) window.toast(L('على الموبايل: من قايمة المتصفح اختار "إضافة للشاشة الرئيسية"', 'On mobile: from the browser menu choose "Add to Home Screen"'));
    });
    // على iPhone مفيش beforeinstallprompt، فنظهر الزرار كمرشد
    var ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (ios) btn.hidden = false;
  }


  function watch(){
    // لما أعياد الميلاد أو الفعاليات أو التنبيه تتغير في الموقع الأصلي
    var bdl = document.getElementById('bdl');
    if (bdl) new MutationObserver(refreshBday).observe(bdl, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'hidden'] });
    var sec = document.getElementById('bday');
    if (sec) new MutationObserver(refreshBday).observe(sec, { attributes: true, attributeFilter: ['hidden'] });
    var evs = document.getElementById('evs');
    if (evs) new MutationObserver(refreshEvent).observe(evs, { childList: true, subtree: true });
    new MutationObserver(function(){ refreshAnn(); refreshVerse(); }).observe(document.body, { childList: true });
    var vod = document.querySelector('.vod');
    if (vod) new MutationObserver(refreshVerse).observe(vod, { childList: true, subtree: true, characterData: true });
  }

  document.addEventListener('DOMContentLoaded', function(){
    build();
    watch();
    setupInstall();
    setTimeout(function(){ build(); refreshAll(); watch(); }, 1200);
    setTimeout(function(){ ready = true; refreshAll(); }, 4000);
    // رسالة الأقسام الفاضية بعد ما البيانات تكون اتحمّلت فعلاً (بعد 8 ثواني)
    setTimeout(function(){ markEmpty(); setInterval(markEmpty, 1500); }, 8000);
  });
  if (document.readyState !== 'loading') { build(); watch(); }
})();
