/* ===== البحث داخل الموقع + فلترة بالأقسام (Phase 4) =====
   بيقرا النصوص الظاهرة على الصفحة وقت ما تفتح البحث، فمابيحتاجش أي اتصال بالسيرفر.
   النتيجة بتوديك للقسم اللي فيه الكلمة وبتعلّم عليها. */
(function(){
  'use strict';
  var MAX = 60;
  var SEL = 'h3,h4,h5,p,li,dt,dd,blockquote,figcaption,td,summary';
  var SKIP = '#tiles,.qbar,#tabbar,footer,.appset,.sheet,.srch,.updbar,.offbar,#toast,script,style,button,[hidden],[aria-hidden="true"]';

  function isEn(){ return document.documentElement.lang === 'en'; }
  function L(ar, en){ return isEn() ? en : ar; }
  function el(tag, cls, text){
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* تطبيع للبحث: حروف صغيرة، من غير تشكيل، أ/إ/آ=ا، ى=ي، ة=ه.
     بيرجع النص المطبّع + مكان كل حرف في النص الأصلي (عشان نعلّم الكلمة صح). */
  function normMap(s){
    var out = '', idx = [], prevSpace = true;
    for (var i = 0; i < s.length; i++) {
      var c = s.charAt(i).toLowerCase();
      if (/[ً-ٰٟـ]/.test(c)) continue;
      if (/\s/.test(c)) {
        if (prevSpace) continue;
        c = ' ';
        prevSpace = true;
      } else {
        prevSpace = false;
      }
      c = c.replace(/[أإآ]/, 'ا').replace('ى', 'ي').replace('ة', 'ه');
      out += c;
      idx.push(i);
    }
    return { str: out, idx: idx };
  }

  /* الأقسام اللي تقدر تدور فيها (الظاهرة بس) */
  function sections(){
    var list = [];
    document.querySelectorAll('.sec').forEach(function(s){
      if (!s.id || s.id === 'bday' || s.hidden || s.closest('[hidden]')) return;
      var h = s.querySelector('h2');
      list.push({ key: s.id, title: (h ? h.textContent : s.id).replace(/\s+/g, ' ').trim(), roots: [s] });
    });
    var verses = Array.prototype.filter.call(document.querySelectorAll('.vod'), function(v){ return !v.hidden && !v.closest('[hidden]'); });
    if (verses.length) list.unshift({ key: 'verse', title: L('آية اليوم', 'Verse of the day'), roots: verses });
    return list;
  }

  /* فهرس: كل فقرة/عنوان/عنصر نص ظاهر، ومعاه القسم بتاعه */
  function buildIndex(){
    var items = [];
    sections().forEach(function(sec){
      sec.roots.forEach(function(root){
        root.querySelectorAll(SEL).forEach(function(n){
          if (n.closest(SKIP)) return;
          if (n.querySelector(SEL)) return; // ناخد أعمق عنصر بس عشان ماتتكررش النتيجة
          var t = (n.textContent || '').replace(/\s+/g, ' ').trim();
          if (t.length < 2) return;
          var m = normMap(t);
          items.push({ key: sec.key, title: sec.title, node: n, text: t, nstr: m.str, idx: m.idx });
        });
      });
    });
    return items;
  }

  function search(items, raw, filter){
    var q = normMap(raw.trim()).str;
    if (q.length < 2) return null;
    var res = [];
    for (var i = 0; i < items.length && res.length < MAX; i++) {
      var it = items[i];
      if (filter !== 'all' && it.key !== filter) continue;
      var p = it.nstr.indexOf(q);
      if (p < 0) continue;
      res.push({
        it: it,
        start: it.idx[p],
        end: it.idx[Math.min(p + q.length - 1, it.idx.length - 1)] + 1
      });
    }
    return res;
  }

  var box = null, input, chips, msg, list, items = [], results = [], filter = 'all';

  function ensure(){
    if (box) return;
    box = el('div', 'srch');
    box.id = 'srch';
    box.hidden = true;
    var inner = el('div', 'srch-box');
    inner.setAttribute('role', 'dialog');
    inner.setAttribute('aria-modal', 'true');
    inner.setAttribute('aria-label', L('البحث', 'Search'));

    var hd = el('div', 'srch-hd');
    input = el('input', 'srch-in');
    input.type = 'search';
    input.autocomplete = 'off';
    input.placeholder = L('اكتب كلمة، مثلاً: فعالية أو ترنيمة', 'Type a word, e.g. event or hymn');
    input.setAttribute('aria-label', L('البحث', 'Search'));
    var x = el('button', 'srch-x', '×');
    x.type = 'button';
    x.setAttribute('aria-label', L('إغلاق', 'Close'));
    hd.appendChild(input);
    hd.appendChild(x);

    chips = el('div', 'srch-chips');
    chips.setAttribute('role', 'group');
    chips.setAttribute('aria-label', L('فلترة بالقسم', 'Filter by section'));
    msg = el('p', 'srch-msg');
    msg.setAttribute('role', 'status');
    list = el('div', 'srch-list');

    inner.appendChild(hd);
    inner.appendChild(chips);
    inner.appendChild(msg);
    inner.appendChild(list);
    box.appendChild(inner);
    document.body.appendChild(box);

    box.addEventListener('click', function(e){
      if (e.target === box || e.target.closest('.srch-x')) { close(); return; }
      var c = e.target.closest('[data-f]');
      if (c) { filter = c.dataset.f; renderChips(); run(); return; }
      var r = e.target.closest('[data-i]');
      if (r && results[+r.dataset.i]) jump(results[+r.dataset.i].it);
    });

    var timer;
    input.addEventListener('input', function(){ clearTimeout(timer); timer = setTimeout(run, 120); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && box && !box.hidden) close(); });
  }

  function renderChips(){
    chips.textContent = '';
    var all = [{ key: 'all', title: L('الكل', 'All') }].concat(sections().map(function(s){ return { key: s.key, title: s.title }; }));
    all.forEach(function(c){
      var b = el('button', 'srch-chip' + (filter === c.key ? ' on' : ''), c.title);
      b.type = 'button';
      b.dataset.f = c.key;
      b.setAttribute('aria-pressed', filter === c.key ? 'true' : 'false');
      chips.appendChild(b);
    });
  }

  function run(){
    list.textContent = '';
    results = search(items, input.value || '', filter) || [];
    var q = normMap((input.value || '').trim()).str;
    if (q.length < 2) {
      msg.textContent = L('اكتب حرفين على الأقل', 'Type at least 2 letters');
      return;
    }
    if (!results.length) {
      msg.textContent = L('مالقيناش حاجة بالكلمة دي. جرّب كلمة تانية أو قسم تاني', 'No results. Try another word or section');
      return;
    }
    msg.textContent = L(
      'لقينا ' + results.length + ' نتيجة' + (results.length === MAX ? ' (أول ' + MAX + ')' : ''),
      results.length + ' result' + (results.length === 1 ? '' : 's')
    );
    results.forEach(function(r, i){
      var b = el('button', 'srch-row');
      b.type = 'button';
      b.dataset.i = String(i);
      b.appendChild(el('small', '', r.it.title));
      var sn = el('span', 'srch-snip');
      var t = r.it.text;
      var s = Math.max(0, r.start - 50), e = Math.min(t.length, r.end + 70);
      if (s > 0) sn.appendChild(document.createTextNode('… '));
      sn.appendChild(document.createTextNode(t.slice(s, r.start)));
      sn.appendChild(el('mark', '', t.slice(r.start, r.end)));
      sn.appendChild(document.createTextNode(t.slice(r.end, e)));
      if (e < t.length) sn.appendChild(document.createTextNode(' …'));
      b.appendChild(sn);
      list.appendChild(b);
    });
  }

  function jump(it){
    close();
    if (document.documentElement.classList.contains('app') && window.appTab) window.appTab(it.key);
    setTimeout(function(){
      var target = it.node;
      target.classList.add('srch-flash');
      setTimeout(function(){ target.classList.remove('srch-flash'); }, 1800);
      if (window.__lenis) window.__lenis.scrollTo(target, { offset: -80 });
      else target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);
  }

  function open(){
    ensure();
    items = buildIndex();
    filter = 'all';
    input.value = '';
    results = [];
    list.textContent = '';
    msg.textContent = L('اكتب كلمة عشان تبدأ البحث', 'Type a word to start searching');
    renderChips();
    box.hidden = false;
    box.classList.add('open');
    setTimeout(function(){ input.focus(); }, 50);
  }

  function close(){
    if (!box) return;
    box.classList.remove('open');
    box.hidden = true;
  }

  window.openSearch = open;

  // زرار البحث (في الشريط أو في الفوتر)
  document.addEventListener('click', function(e){
    var t = e.target.closest && e.target.closest('[data-search], [data-open-search]');
    if (!t) return;
    e.preventDefault();
    e.stopPropagation();
    open();
  }, true);
})();
