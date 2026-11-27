/* ===== الترحيب أول مرة في التطبيق المثبّت (Phase 3) ===== */
(function(){
  'use strict';
  var KEY = 'ava_onb';
  function store(k, v){ try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function isEn(){ return document.documentElement.lang === 'en'; }
  function L(ar, en){ return isEn() ? en : ar; }

  var STEPS = [
    { ico: '🙏', t: ['أهلاً بيك في أسرة آڤا مينا', 'Welcome to Ava Mina Family'],
      p: ['آية اليوم، وسؤال اليوم، والفعاليات والترانيم، كلها في مكان واحد.', 'The daily verse, daily question, events and hymns in one place.'] },
    { ico: '🔔', t: ['خلي آية اليوم توصلك', 'Get the daily verse'],
      p: ['تقدر تفعّل الإشعارات عشان تفتكر بالآية والسؤال كل يوم. وتقدر تلغيها في أي وقت.', 'Turn on notifications to get the verse and question each day. You can turn them off anytime.'],
      act: 'push' },
    { ico: '👤', t: ['سجّل دخولك (اختياري)', 'Sign in (optional)'],
      p: ['اربط حسابك بعضويتك عشان تشوف بياناتك. ولو مش عايز، تقدر تكمّل من غير حساب.', 'Link your account to your membership, or continue without one.'],
      act: 'account' }
  ];

  var box, i = 0;
  function el(tag, cls, text){ var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }

  function build(){
    if (box) return;
    box = el('div', 'onb');
    box.id = 'onb';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', L('الترحيب', 'Welcome'));
    box.appendChild(el('div', 'onb-box'));
    document.body.appendChild(box);
    box.addEventListener('click', onClick);
  }

  function render(){
    var st = STEPS[i], w = box.firstChild;
    w.textContent = '';
    w.appendChild(el('div', 'onb-ico', st.ico));
    w.appendChild(el('h2', '', L(st.t[0], st.t[1])));
    w.appendChild(el('p', '', L(st.p[0], st.p[1])));
    var dots = el('div', 'onb-dots');
    STEPS.forEach(function(_, k){ dots.appendChild(el('i', k === i ? 'on' : '')); });
    w.appendChild(dots);
    var acts = el('div', 'onb-acts');
    if (st.act === 'push') {
      acts.appendChild(btn(L('فعّل الإشعارات', 'Turn on notifications'), 'push', 'acct-btn gold'));
    }
    if (st.act === 'account') {
      acts.appendChild(btn(L('سجّل دخولي', 'Sign in'), 'account', 'acct-btn gold'));
    }
    var last = i === STEPS.length - 1;
    acts.appendChild(btn(last ? L('ابدأ', 'Start') : L('التالي', 'Next'), 'next', st.act ? 'acct-btn' : 'acct-btn gold'));
    if (!last) acts.appendChild(btn(L('تخطي', 'Skip'), 'skip', 'onb-skip'));
    w.appendChild(acts);
  }

  function btn(label, act, cls){
    var b = el('button', cls, label);
    b.type = 'button';
    b.dataset.act = act;
    return b;
  }

  function finish(){
    store(KEY, '1');
    box.classList.remove('open');
  }

  function next(){
    if (i >= STEPS.length - 1) return finish();
    i++;
    render();
  }

  function onClick(e){
    var b = e.target.closest && e.target.closest('[data-act]');
    if (!b) return;
    var act = b.dataset.act;
    if (act === 'next') return next();
    if (act === 'skip') return finish();
    if (act === 'push') {
      var pb = document.getElementById('pushbtn');
      if (pb) pb.click();
      return next();
    }
    if (act === 'account') {
      finish();
      if (window.openAccount) window.openAccount();
    }
  }

  function show(){
    build();
    i = 0;
    render();
    box.classList.add('open');
  }

  window.openOnboarding = show;

  // أول مرة بس، وفي وضع التطبيق المثبّت بس
  if (document.documentElement.classList.contains('app') || window.matchMedia('(display-mode: standalone)').matches) {
    if (store(KEY) !== '1') {
      store('ava_intro', '1'); // عشان ماتظهرش نافذة الترحيب القديمة فوقهم
      setTimeout(show, 1200);
    }
  }
})();
