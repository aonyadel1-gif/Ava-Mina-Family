(function(){
'use strict';
/* ====== بيانات الموقع (عدّل من هنا) ====== */
var CONFIG={
  familyPhone:'201010032148',
  priestPhone:'201273466140',
  facebook:'https://www.facebook.com/share/1BzT7VTaoM/',
  supabaseUrl:(window.AVA_CONFIG||{}).url||'',
  supabaseKey:(window.AVA_CONFIG||{}).key||''
};
var SECRETARY="img/cc1a1c8cc4.webp",LOGO="img/96a5198fc4.webp",COVER="img/6edce40434.jpg",FATHER="img/61328c1ee6.jpg",MARINA="img/d0c0fda2a1.jpg";
var SERVANTS=[{"name": "Shery Ashraf", "img": "img/1788710f43.jpg"}, {"name": "Nabil Gamal", "img": "img/3f28c80a27.jpg"}, {"name": "Felopateer Nagi", "img": "img/f088f8a782.jpg"}, {"name": "Ebram Romany", "img": "img/e3f30af085.jpg"}, {"name": "Olivea Hany", "img": "img/a60f4019ae.jpg"}, {"name": "Bassant Fakhoury", "img": "img/a9cb307ec6.jpg"}, {"name": "Mary Gerges", "img": "img/7f9a88c4b6.jpg"}, {"name": "Karolin Gaper", "img": "img/d117b231bc.jpg"}, {"name": "Remonda Hani", "img": "img/6ca9032b1c.jpg"}, {"name": "Merna Wageh", "img": "img/ccc9e82a39.jpg"}, {"name": "Youssef Ayman", "img": "img/983db1a1db.jpg"}, {"name": "kerolos shenouda", "img": "img/d53ce9f38a.jpg"}, {"name": "Jessice Atef", "img": "img/4a820b4932.jpg"}];
var GALLERY=["img/174a806662.jpg", "img/76f4ade5ee.jpg", "img/e2a0ab38ba.jpg", "img/6136156838.jpg", "img/8062c3e7f3.jpg", "img/488182fc82.jpg", "img/e7f178f995.jpg"];
var VERSES=[["الرَّبُّ نُورِي وَخَلاَصِي، مِمَّنْ أَخَافُ؟ الرَّبُّ حِصْنُ حَيَاتِي، مِمَّنْ أَرْتَعِبُ؟", "مزمور 27:1"], ["الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ.", "مزمور 23:1"], ["أَسْتَطِيعُ كُلَّ شَيْءٍ فِي الْمَسِيحِ الَّذِي يُقَوِّينِي.", "فيلبي 4:13"], ["تَوَكَّلْ عَلَى الرَّبِّ بِكُلِّ قَلْبِكَ، وَعَلَى فَهْمِكَ لاَ تَعْتَمِدْ. فِي كُلِّ طُرُقِكَ اعْرِفْهُ، وَهُوَ يُقَوِّمُ سُبُلَكَ.", "أمثال 3:5-6"], ["لأَنَّهُ هكَذَا أَحَبَّ اللهُ الْعَالَمَ حَتَّى بَذَلَ ابْنَهُ الْوَحِيدَ، لِكَيْ لاَ يَهْلِكَ كُلُّ مَنْ يُؤْمِنُ بِهِ، بَلْ تَكُونُ لَهُ الْحَيَاةُ الأَبَدِيَّةُ.", "يوحنا 3:16"], ["تَعَالَوْا إِلَيَّ يَا جَمِيعَ الْمُتْعَبِينَ وَالثَّقِيلِي الأَحْمَالِ، وَأَنَا أُرِيحُكُمْ.", "متى 11:28"], ["لاَ تَخَفْ لأَنِّي مَعَكَ. لاَ تَتَلَفَّتْ لأَنِّي إِلهُكَ. قَدْ أَيَّدْتُكَ وَأَعَنْتُكَ وَعَضَدْتُكَ بِيَمِينِ بِرِّي.", "إشعياء 41:10"], ["اُطْلُبُوا أَوَّلاً مَلَكُوتَ اللهِ وَبِرَّهُ، وَهذِهِ كُلُّهَا تُزَادُ لَكُمْ.", "متى 6:33"], ["هذِهِ هِيَ وَصِيَّتِي أَنْ تُحِبُّوا بَعْضُكُمْ بَعْضًا كَمَا أَحْبَبْتُكُمْ.", "يوحنا 15:12"], ["الْمَحَبَّةُ تَتَأَنَّى وَتَرْفُقُ. الْمَحَبَّةُ لاَ تَحْسِدُ. الْمَحَبَّةُ لاَ تَتَفَاخَرُ وَلاَ تَنْتَفِخُ.", "1 كورنثوس 13:4"], ["الرَّبُّ قَرِيبٌ مِنَ الْمُنْكَسِرِي الْقُلُوبِ، وَيُخَلِّصُ الْمُنْسَحِقِي الرُّوحِ.", "مزمور 34:18"], ["لأَنِّي عَرَفْتُ الأَفْكَارَ الَّتِي أَنَا مُفْتَكِرٌ بِهَا عَنْكُمْ، يَقُولُ الرَّبُّ، أَفْكَارَ سَلاَمٍ لاَ شَرٍّ، لأُعْطِيَكُمْ آخِرَةً وَرَجَاءً.", "إرميا 29:11"], ["افْرَحُوا فِي الرَّبِّ كُلَّ حِينٍ، وَأَقُولُ أَيْضًا: افْرَحُوا.", "فيلبي 4:4"], ["أَلْقُوا كُلَّ هَمِّكُمْ عَلَيْهِ لأَنَّهُ هُوَ يَعْتَنِي بِكُمْ.", "1 بطرس 5:7"], ["أَنَا هُوَ الطَّرِيقُ وَالْحَقُّ وَالْحَيَاةُ. لَيْسَ أَحَدٌ يَأْتِي إِلَى الآبِ إلاَّ بِي.", "يوحنا 14:6"], ["وَلْنُلاَحِظْ بَعْضُنَا بَعْضًا لِلتَّحْرِيضِ عَلَى الْمَحَبَّةِ وَالأَعْمَالِ الْحَسَنَةِ.", "عبرانيين 10:24"], ["فِي الْعَالَمِ سَيَكُونُ لَكُمْ ضِيقٌ، وَلكِنْ ثِقُوا: أَنَا قَدْ غَلَبْتُ الْعَالَمَ.", "يوحنا 16:33"], ["الرَّبُّ يُقَاتِلُ عَنْكُمْ وَأَنْتُمْ تَصْمُتُونَ.", "خروج 14:14"], ["لأَنَّ اللهَ لَمْ يُعْطِنَا رُوحَ الْفَشَلِ، بَلْ رُوحَ الْقُوَّةِ وَالْمَحَبَّةِ وَالنُّصْحِ.", "2 تيموثاوس 1:7"], ["طُوبَى لِلْحَزَانَى لأَنَّهُمْ يَتَعَزَّوْنَ.", "متى 5:4"], ["أَنْتُمْ نُورُ الْعَالَمِ. لاَ يُمْكِنُ أَنْ تُخْفَى مَدِينَةٌ مَوْضُوعَةٌ عَلَى جَبَلٍ.", "متى 5:14"], ["كُنْ أَمِينًا إِلَى الْمَوْتِ فَسَأُعْطِيَكَ إِكْلِيلَ الْحَيَاةِ.", "رؤيا 2:10"], ["أَمَّا مُنْتَظِرُو الرَّبِّ فَيُجَدِّدُونَ قُوَّةً. يَرْفَعُونَ أَجْنِحَةً كَالنُّسُورِ.", "إشعياء 40:31"], ["بِالْمَحَبَّةِ اخْدِمُوا بَعْضُكُمْ بَعْضًا.", "غلاطية 5:13"], ["اشْكُرُوا فِي كُلِّ شَيْءٍ، لأَنَّ هذِهِ هِيَ مَشِيئَةُ اللهِ فِي الْمَسِيحِ يَسُوعَ مِنْ جِهَتِكُمْ.", "1 تسالونيكي 5:18"], ["اسْأَلُوا تُعْطَوْا. اطْلُبُوا تَجِدُوا. اقْرَعُوا يُفْتَحْ لَكُمْ.", "متى 7:7"], ["إِنْ كَانَ اللهُ مَعَنَا فَمَنْ عَلَيْنَا؟", "رومية 8:31"], ["تَشَدَّدْ وَتَشَجَّعْ. لاَ تَرْهَبْ وَلاَ تَرْتَعِبْ، لأَنَّ الرَّبَّ إِلهَكَ مَعَكَ حَيْثُمَا تَذْهَبُ.", "يشوع 1:9"], ["صَلُّوا بِلاَ انْقِطَاعٍ.", "1 تسالونيكي 5:17"]];
var RULES=[
{t:"المحبة أساس كل علاقة",v:"بِهذَا يَعْرِفُ الْجَمِيعُ أَنَّكُمْ تَلاَمِيذِي: إِنْ كَانَ لَكُمْ حُبٌّ بَعْضًا لِبَعْضٍ. (يوحنا 13:35)",x:"نقبل بعض بمحبة حقيقية من غير حكم أو مقارنة، ونشجع بعض، واحنا موجودين في الوسط دا عشان نساعد ونحمي بعض في أي مكان"},
{t:"الاحترام المتبادل وعدم الإدانة",v:"كَرِّمُوا الْجَمِيعَ. أَحِبُّوا الإِخْوَةَ. (1 بطرس 2:17)<br>لاَ تَدِينُوا لِكَيْ لاَ تُدَانُوا. (متى 7:1)",x:"نحترم آراء بعض، ونسمع لبعض من غير مقاطعة أو سخرية، ونتعامل بود وذوق ومحبة"},
{t:"الالتزام بالحدود المناسبة بين الأولاد والبنات",v:"اِهْرُبُوا مِنَ الشَّهَوَاتِ الشَّبَابِيَّةِ، وَاتْبَعُوا الْبِرَّ وَالإِيمَانَ وَالْمَحَبَّةَ وَالسَّلاَمَ. (2 تيموثاوس 2:22)",x:"نتعامل باحترام ونقاوة، ونتجنب المحادثات الخاصة (برايفت) بين الأولاد والبنات من غير سبب واضح أو حاجة خدمية، كل تعامل يكون في النور بروح الأخوة المسيحية وتحت نظر ربنا"},
{t:"المشاركة الفعالة",v:"كُلُّ وَاحِدٍ مِنْكُمْ يَأْخُذُ مَوْهِبَةً... لِيَخْدِمَ بِهَا بَعْضُكُمْ بَعْضًا. (1 بطرس 4:10)",x:"كل واحد ليه دور، نشارك في الاجتماعات والأنشطة وأيام الأسرة، ووجود كل واحد معانا بيفرق"},
{t:"الغيرة المقدسة والصلاة المستمرة",v:"فِي الْغَيْرَةِ لاَ تَكُونُوا مُتَكَاسِلِينَ. حَارِّينَ فِي الرُّوحِ، عَابِدِينَ الرَّبَّ. (رومية 12:11)<br>صَلُّوا بِلاَ انْقِطَاعٍ. (1 تسالونيكي 5:17)",x:"الغيرة المقدسة بتبان في الصلاة والخدمة، نصلي دايماً من أجل بعض ومن أجل الأسرة، ونفتكر كل واحد بالاسم في خلواتنا، مشاركتك في الخلوة والصلاة بتقوي جسد الأسرة كله وتفتح الطريق لعمل ربنا بينا"}
];
/* ========================================= */

var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var de=document.documentElement;
function esc(s){var d=document.createElement('div');d.textContent=s==null?'':String(s);return d.innerHTML}
function AR(n){return String(n).replace(/\d/g,function(d){return '٠١٢٣٤٥٦٧٨٩'[d]})}
function safeUrl(u){return /^https?:\/\//i.test(u||'')?u:''}
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
de.classList.add('js');
var RMSYS=matchMedia('(prefers-reduced-motion: reduce)').matches,OFF=store('ava_motion')==='0',RM=(RMSYS&&store('ava_motion')!=='1')||OFF;
if(RM)de.classList.add('rm');
var LITE=(navigator.deviceMemory&&navigator.deviceMemory<=3)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4)||!!(navigator.connection&&navigator.connection.saveData);
if(LITE)de.classList.add('lite');
de.style.setProperty('--cover','url("'+COVER+'")');
$$('[data-logo]').forEach(function(i){i.src=LOGO});
$$('[data-cover]').forEach(function(i){i.src=COVER});
$$('[data-father]').forEach(function(i){i.src=FATHER});
$$('[data-marina]').forEach(function(i){i.src=MARINA});
$$('[data-secretary]').forEach(function(i){i.src=SECRETARY});

/* ---------- Supabase ---------- */
var SB=null;var S={};
function sbClient(){
  if(!SB&&CONFIG.supabaseUrl&&CONFIG.supabaseKey&&window.supabase){SB=window.supabase.createClient(CONFIG.supabaseUrl,CONFIG.supabaseKey,{auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}})}
  return SB;
}
function uuid(){
  if(window.crypto&&crypto.randomUUID)return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0;return (c==='x'?r:(r&3|8)).toString(16)});
}
function media(p){return CONFIG.supabaseUrl+'/storage/v1/object/public/site-media/'+String(p).split('/').map(encodeURIComponent).join('/')}

/* ---------- icons ---------- */
var I_SUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"/></svg>';
var I_MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>';
var I_TROPHY='<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10h24v14a12 12 0 0 1-24 0z"/><path d="M20 14H10c0 10 4 15 10 16M44 14h10c0 10-4 15-10 16"/><path d="M32 36v10M26 46h12v8H26zM22 54h20"/></svg>';
var I_CAL='<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="48" height="44" rx="6"/><path d="M8 26h48M20 6v10M44 6v10"/></svg>';
var I_IMG='<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="48" height="40" rx="6"/><circle cx="22" cy="26" r="5"/><path d="M8 46l14-12 10 8 10-10 14 12"/></svg>';
var I_FB='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21z"/></svg>';
var I_PH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>';

/* ---------- theme ---------- */
var tg=$('#tg');
function curTheme(){return de.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}
function paintToggle(){var t=curTheme();tg.innerHTML=t==='dark'?I_SUN:I_MOON;tg.setAttribute('aria-pressed',String(t==='dark'));tg.setAttribute('title',t==='dark'?'الوضع النهاري':'الوضع الليلي')}
var saved=store('avaTheme');if(saved==='dark'||saved==='light')de.setAttribute('data-theme',saved);
paintToggle();
tg.addEventListener('click',function(){var n=curTheme()==='dark'?'light':'dark';de.setAttribute('data-theme',n);store('avaTheme',n);paintToggle()});

/* ---------- ألوان الموقع ---------- */
(function(){
  var pl=$('#pl'),p=$('#palp');if(!pl||!p)return;
  var cur='lapis';try{cur=localStorage.getItem('avaPal')||'lapis'}catch(e){}
  function apply(k){cur=k;if(k==='lapis')de.removeAttribute('data-pal');else de.setAttribute('data-pal',k);
    $$('[data-pal]',p).forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.pal===k))});
    try{localStorage.setItem('avaPal',k)}catch(e){}}
  apply(cur);
  function open(v){p.hidden=!v;pl.setAttribute('aria-expanded',String(v))}
  pl.addEventListener('click',function(e){e.stopPropagation();open(p.hidden)});
  p.addEventListener('click',function(e){var b=e.target.closest('[data-pal]');if(b)apply(b.dataset.pal)});
  document.addEventListener('click',function(e){if(!p.hidden&&!p.contains(e.target)&&e.target!==pl)open(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')open(false)});
})();

/* ---------- nav (القائمة على الموبايل) ---------- */
var nav=$('#nav'),burger=$('#bg'),links=$('#links');
$$('#links a').forEach(function(a,i){a.style.setProperty('--k',i)});
function menu(open){nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);burger.setAttribute('aria-expanded',String(open));burger.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة')}
burger.addEventListener('click',function(){menu(!nav.classList.contains('open'))});
links.addEventListener('click',function(e){if(e.target.closest('a'))menu(false)});
document.addEventListener('click',function(e){if(nav.classList.contains('open')&&!nav.contains(e.target))menu(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){menu(false);burger.focus()}});
matchMedia('(min-width:1180px)').addEventListener('change',function(){menu(false)});

var bar=$('#bar'),up=$('#up'),ticking=false;
function onScroll(){
  var h=de.scrollHeight-innerHeight,y=window.scrollY||de.scrollTop;
  bar.style.transform='scaleX('+(h>0?Math.min(1,y/h):0)+')';
  up.classList.toggle('show',y>700);nav.classList.toggle('scrolled',y>10);ticking=false;
}
addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});
up.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
onScroll();

if('IntersectionObserver' in window){
  var navLinks=$$('.links a[href^="#"]');
  var so=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){navLinks.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
  $$('main section[id]').forEach(function(s){so.observe(s)});
}

/* ---------- reveal ---------- */
var rio=('IntersectionObserver' in window)?new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('in');rio.unobserve(t);setTimeout(function(){t.classList.remove('rv','in');t.style.transitionDelay=''},800)}})},{threshold:.08}):null;
function observe(list){list.forEach(function(el,i){if(!rio)return;el.classList.add('rv');el.style.transitionDelay=((i%4)*70)+'ms';rio.observe(el)})}
observe($$('.rv'));

/* ---------- نص الآيات (كل جملة في سطر، من غير نقط) ---------- */
function scripture(t){return String(t).replace(/\.\.\./g,'،').replace(/\.\s+/g,'\n').replace(/\.$/,'')}

/* ---------- آية اليوم ---------- */
(function(){
  var d=new Date(),n=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5),v=VERSES[n%VERSES.length],t=scripture(v[0]);
  $('#vt').textContent='«'+t+'»';$('#vr').textContent=v[1];
  $('#vcp').addEventListener('click',function(){var b=this;copyText('«'+t.replace(/\n/g,' ')+'» ('+v[1]+')',function(ok){var o='نسخ الآية';b.textContent=ok?'اتنسخت':'انسخها بإيدك';setTimeout(function(){b.textContent=o},1800)})});
})();

/* ---------- الخدام ---------- */
$('#crew').innerHTML=SERVANTS.slice().sort(function(a,b){return a.name.localeCompare(b.name,'en',{sensitivity:'base'})}).map(function(s){return '<li data-role="'+esc(s.role||'خادم في الأسرة')+'"><img src="'+s.img+'" alt="'+esc(s.name)+'" loading="lazy" width="112" height="112"><b>'+esc(s.name)+'</b></li>'}).join('');
observe($$('#crew li'));observe($$('.leader'));

/* ---------- القواعد (أكورديون) ---------- */
$('#rulesList').innerHTML=RULES.map(function(r,i){
  return '<div class="rule spot'+(i===0?' open':'')+'"><button class="rh" type="button" aria-expanded="'+(i===0)+'" aria-controls="rb'+i+'" id="rh'+i+'"><span class="num">'+AR(i+1)+'</span><span class="rt">'+r.t+'</span><span class="chev" aria-hidden="true"></span></button><div class="rb" id="rb'+i+'" role="region" aria-labelledby="rh'+i+'"><div><div class="in"><div class="v">'+scripture(r.v)+'</div><p>'+r.x+'</p></div></div></div></div>';
}).join('');
$('#rulesList').addEventListener('click',function(e){
  var b=e.target.closest('.rh');if(!b)return;
  var rule=b.parentNode,open=!rule.classList.contains('open');
  rule.classList.toggle('open',open);b.setAttribute('aria-expanded',String(open));
});

/* ---------- المعرض + الأرشيف: عارض الصور ---------- */
var lb=$('#lb'),li=$('#li'),LB=[],lbi=0,lastFocus=null;
function showLB(i){
  lbi=(i+LB.length)%LB.length;var it=LB[lbi];
  li.src=it.src;li.alt=it.title||'';
  $('#lc').innerHTML=it.title?'<b>'+esc(it.title)+'</b>'+(it.desc?'<span>'+esc(it.desc)+'</span>':''):'';
  $('#lcnt').textContent=AR(lbi+1)+' / '+AR(LB.length);
  $('#lp').hidden=$('#ln').hidden=LB.length<2;
}
function openLB(items,i){
  LB=items;lastFocus=document.activeElement;showLB(i);lb.hidden=false;document.body.style.overflow='hidden';$('#lx').focus();
}
function closeLB(){lb.hidden=true;document.body.style.overflow='';li.removeAttribute('src');if(lastFocus&&lastFocus.focus)lastFocus.focus()}
$('#lx').addEventListener('click',closeLB);
$('#lp').addEventListener('click',function(){showLB(lbi-1)});
$('#ln').addEventListener('click',function(){showLB(lbi+1)});
lb.addEventListener('click',function(e){if(e.target===lb)closeLB()});
document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')closeLB();if(e.key==='ArrowLeft')showLB(lbi-1);if(e.key==='ArrowRight')showLB(lbi+1)});
var tx=0;
lb.addEventListener('touchstart',function(e){tx=e.touches[0].clientX},{passive:true});
lb.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>60)showLB(lbi+(dx<0?1:-1))});

var GL=GALLERY.map(function(s){return{src:s}});
$('#ft').innerHTML='<img src="'+GALLERY[0]+'" alt="صورة جماعية من أنشطة أسرة آڤا مينا" data-i="0" loading="lazy">';
$('#mas').innerHTML=GALLERY.slice(1).map(function(s,i){return '<img src="'+s+'" alt="صورة من أنشطة أسرة آڤا مينا" data-i="'+(i+1)+'" loading="lazy">'}).join('');
$('#gallery').addEventListener('click',function(e){if(e.target.tagName==='IMG')openLB(GL,+e.target.dataset.i)});
observe($$('#mas img'));

/* ---------- تواريخ ---------- */
var MN=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
var WD=['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
function cairoToday(){return new Date().toLocaleDateString('en-CA',{timeZone:'Africa/Cairo'})}
function dn(s){var p=s.split('-').map(Number);return Date.UTC(p[0],p[1]-1,p[2])/864e5}
function until(s){return Math.round(dn(s)-dn(cairoToday()))}
function longDate(s){var p=s.split('-').map(Number);return AR(p[2])+' '+MN[p[1]-1]+' '+AR(p[0])}
function dayAfter(s){var p=s.split('-').map(Number),d=new Date(Date.UTC(p[0],p[1]-1,p[2]+1));return d.toISOString().slice(0,10).replace(/-/g,'')}
function inDays(n){return n===0?'النهاردة':n===1?'بكرة':n===2?'بعد يومين':n<=10?'بعد '+AR(n)+' أيام':'بعد '+AR(n)+' يوم'}
function emptyBox(icon,title,text){return '<div class="empty">'+icon+'<b>'+title+'</b><span>'+text+'</span></div>'}

/* ---------- الفعاليات ---------- */
var KINDS={meeting:'اجتماع',trip:'رحلة',carnival:'كرنفال',day:'يوم أسرة',service:'خدمة',other:'فعالية'};
function renderWeek(rows){
  var box=$('#wk');if(!box)return;
  var wk=rows.filter(function(e){var n=until(e.event_date);return n>=0&&n<=7});
  if(!wk.length){box.innerHTML='';return}
  box.innerHTML='<p class="wkh">أجندة الأسبوع ده</p>'+wk.map(function(e){
    return '<span class="wkc"><b>'+esc(TX(e,'title'))+'</b>'+esc(inDays(until(e.event_date)))+'</span>'}).join('');
}
function TX(o,f){var en=document.documentElement.lang==='en';var v=(en&&o)?o[f+'_en']:null;return (v&&String(v).trim())?String(v).trim():(o?o[f]:'')}
function DT(s){return (document.documentElement.lang==='en'&&window.AVA_EN_EXTRA&&window.AVA_EN_EXTRA[s])||s}
function renderEvents(list){
  var box=$('#evs');
  var rows=(list||[]).filter(function(e){return until(e.end_date||e.event_date)>=0}).sort(function(a,b){return a.event_date.localeCompare(b.event_date)});
  renderWeek(rows);
  if(!rows.length){box.innerHTML=emptyBox(I_CAL,'مفيش فعاليات قادمة دلوقتي','أول ما نحدد موعد اجتماع أو رحلة هتلاقيه هنا');return}
  box.innerHTML=rows.map(function(e,i){
    var p=e.event_date.split('-').map(Number),wd=WD[new Date(Date.UTC(p[0],p[1]-1,p[2])).getUTCDay()];
    var multi=e.end_date&&e.end_date!==e.event_date,q=multi?e.end_date.split('-').map(Number):null;
    var n=until(e.event_date),pill=n<0?'شغّالة دلوقتي':inDays(n);
    var dayTxt=AR(p[2]),sm=multi?'لحد '+AR(q[2])+(q[1]!==p[1]?' '+MN[q[1]-1]:''):wd;
    var cal='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(TX(e,'title'))+'&dates='+e.event_date.replace(/-/g,'')+'/'+dayAfter(e.end_date||e.event_date)+'&details='+encodeURIComponent(TX(e,'details')||'')+'&location='+encodeURIComponent(TX(e,'place')||'');
    return '<article class="ev spot'+(i===0?' next':'')+'"><div class="date"><b>'+dayTxt+'</b><span>'+MN[p[1]-1]+'</span><small>'+sm+'</small></div>'+
      '<div class="evb"><div class="evt"><h3>'+esc(TX(e,'title'))+'</h3><span class="chip">'+esc(DT(KINDS[e.kind]||KINDS.other))+'</span><span class="chip in">'+pill+'</span>'+(i===0?'<span class="chip ok">الفعالية الجاية</span>':'')+'</div>'+
      ((e.event_time||TX(e,'place'))?'<div class="meta">'+(e.event_time?'<span>الميعاد: <b>'+esc(e.event_time)+'</b></span>':'')+(TX(e,'place')?'<span>المكان: <b>'+esc(TX(e,'place'))+'</b></span>':'')+'</div>':'')+
      (TX(e,'details')?'<p class="det">'+esc(TX(e,'details'))+'</p>':'')+
      '<a class="btn line sm" href="'+cal+'" target="_blank" rel="noopener">أضف للتقويم</a></div></article>';
  }).join('');
  observe($$('.ev',box));
  startCountdown(rows);
}

/* ---------- المسابقات ---------- */
var COMPS=[],cpFilter='all';
function compClosed(c){return c.status==='closed'||(c.deadline&&until(c.deadline)<0)}
function renderComps(){
  var box=$('#cps'),f=$('#cpf');
  f.hidden=!COMPS.length;
  if(!COMPS.length){box.innerHTML=emptyBox(I_TROPHY,'المسابقات جاية قريباً','أول ما نطلق مسابقة جديدة هتلاقيها هنا بتفاصيلها وجوايزها');return}
  var rows=COMPS.filter(function(c){return cpFilter==='all'||(cpFilter==='open'?!compClosed(c):compClosed(c))});
  if(!rows.length){box.innerHTML=emptyBox(I_TROPHY,'مفيش مسابقات هنا','جرّب تغيّر التصفية من فوق');return}
  box.innerHTML=rows.map(function(c,i){
    var closed=compClosed(c),link=safeUrl(c.link),left=(c.deadline&&!closed)?until(c.deadline):null;
    return '<article class="cp spot"><div class="cpi">'+(c.image_path?'<img src="'+media(c.image_path)+'" alt="'+esc(TX(c,'title'))+'" loading="lazy">':I_TROPHY)+'<span class="chip '+(closed?'red':'ok')+'">'+(closed?'انتهت':'مفتوحة')+'</span></div>'+
      '<div class="cpb"><h3>'+esc(TX(c,'title'))+'</h3>'+(TX(c,'description')?'<p class="cpd" id="cd'+i+'">'+esc(TX(c,'description'))+'</p>'+(TX(c,'description').length>120?'<button class="more" type="button" data-more="cd'+i+'">اقرأ المزيد</button>':''):'')+
      ((c.prize||c.deadline)?'<dl class="cpm">'+(c.prize?'<div><dt>الجايزة</dt><dd>'+esc(c.prize)+'</dd></div>':'')+(c.deadline?'<div><dt>آخر موعد</dt><dd>'+longDate(c.deadline)+(left!==null?' ('+(left===0?'النهاردة':'باقي '+AR(left)+' يوم')+')':'')+'</dd></div>':'')+'</dl>':'')+
      (closed&&c.winners?'<div class="win">الفائزين: '+esc(c.winners)+'</div>':'')+
      (!closed&&link?'<a class="btn gold sm" href="'+esc(link)+'" target="_blank" rel="noopener">شارك دلوقتي</a>':'')+'</div></article>';
  }).join('');
  observe($$('.cp',box));
}
$('#cpf').addEventListener('click',function(e){var b=e.target.closest('[data-f]');if(!b)return;cpFilter=b.dataset.f;$$('#cpf .fchip').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});renderComps()});
$('#cps').addEventListener('click',function(e){var b=e.target.closest('[data-more]');if(!b)return;var p=document.getElementById(b.dataset.more),full=p.classList.toggle('full');b.textContent=full?'عرض أقل':'اقرأ المزيد'});

/* ---------- الأرشيف ---------- */
var ARCH=[],arYear='all';
function renderArchive(){
  var box=$('#arch'),f=$('#arf');
  f.hidden=!ARCH.length;
  if(!ARCH.length){box.innerHTML=emptyBox(I_IMG,'الأرشيف لسه بيتجمّع','هنضيف هنا ذكريات الأسرة ولحظاتها، سنة بسنة');return}
  var years=[];ARCH.forEach(function(a){if(years.indexOf(a.year)<0)years.push(a.year)});years.sort(function(a,b){return b-a});
  f.innerHTML=['all'].concat(years).map(function(y){return '<button class="fchip" type="button" data-y="'+y+'" aria-pressed="'+(String(y)===String(arYear))+'">'+(y==='all'?'كل السنين':AR(y))+'</button>'}).join('');
  var rows=ARCH.filter(function(a){return arYear==='all'||String(a.year)===String(arYear)});
  var imgs=rows.filter(function(a){return a.image_path}).map(function(a){return{src:media(a.image_path),title:TX(a,'title'),desc:(TX(a,'description')||'')+(TX(a,'description')?' • ':'')+AR(a.year)}});
  var k=0;
  box.innerHTML=rows.map(function(a){
    var inner='<div class="im">'+(a.image_path?'<img src="'+media(a.image_path)+'" alt="'+esc(TX(a,'title'))+'" loading="lazy">':I_IMG)+'</div><div class="tx"><span>'+AR(a.year)+'</span><b>'+esc(TX(a,'title'))+'</b>'+(TX(a,'description')&&!a.image_path?'<small>'+esc(TX(a,'description'))+'</small>':'')+'</div>';
    return a.image_path?'<button class="ar spot" type="button" data-k="'+(k++)+'">'+inner+'</button>':'<div class="ar spot" style="cursor:default">'+inner+'</div>';
  }).join('');
  box._items=imgs;
  observe($$('.ar',box));
}
$('#arf').addEventListener('click',function(e){var b=e.target.closest('[data-y]');if(!b)return;arYear=b.dataset.y;renderArchive()});
$('#arch').addEventListener('click',function(e){var b=e.target.closest('[data-k]');if(!b)return;openLB(this._items,+b.dataset.k)});

  /* المكتبة: مذكرات وPDF وكورسات ومحتوى روحي وفيديوهات */
  var RES_CATS={notes:'مذكرات وملخصات',pdf:'ملفات PDF',courses:'كورسات تعليمية',spiritual:'محتوى روحي ودراسي',videos:'فيديوهات ومصادر مفيدة'};
  var RES_LIST=[],RES_CUR='all';
  function paintRes(){
    var box=$('#rs');if(!box)return;
    var cats=Object.keys(RES_CATS).filter(function(k){return RES_LIST.some(function(r){return r.category===k})});
    box.querySelector('.rcs').innerHTML=['all'].concat(cats).map(function(k){
      return '<button type="button" class="rc'+(RES_CUR===k?' on':'')+'" data-rc="'+k+'">'+(k==='all'?DT('الكل'):DT(RES_CATS[k]))+'</button>';
    }).join('');
    var items=RES_LIST.filter(function(r){return RES_CUR==='all'||r.category===RES_CUR});
    box.querySelector('.rl').innerHTML=items.map(function(r){
      var href=r.path?media(r.path):(r.url&&/^https:\/\//.test(r.url)?r.url:'');
      var btn=href?'<a class="rb" href="'+esc(href)+'" target="_blank" rel="noopener">'+(r.path?DT('فتح الملف'):DT('فتح الرابط'))+'</a>':'';
      return '<article class="rci"><span class="rk">'+esc(DT(RES_CATS[r.category]||''))+'</span><b>'+esc(TX(r,'title'))+'</b>'+(TX(r,'description')?'<p>'+esc(TX(r,'description'))+'</p>':'')+btn+'</article>';
    }).join('')||'<p class="em">'+DT('مفيش حاجات في القسم ده لسه.')+'</p>';
  }
  function renderRes(list){
    var sec=$('#resources');if(!sec)return;
    RES_LIST=list||[];
    sec.hidden=!RES_LIST.length;
    if(RES_LIST.length)paintRes();
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('#rs [data-rc]');if(!b)return;
    RES_CUR=b.dataset.rc;paintRes();
  });
  /* مكتبة الصوتيات: مشغّل واحد بيشتغل بزرار صغير لكل مقطع */
  var AU_LIST=[],AU_EL=null;
  function fmtDur(s){s=Math.max(0,Math.round(+s||0));var r=s%60;return Math.floor(s/60)+':'+(r<10?'0':'')+r}
  function paintAu(){
    var box=$('#au');if(!box)return;
    var cur=AU_EL&&!AU_EL.paused?AU_EL.dataset.id:null;
    box.querySelectorAll('.au-b').forEach(function(b){
      var on=b.dataset.au===cur;
      b.textContent=on?'❚❚':'▶';
      b.setAttribute('aria-label',(on?'إيقاف ':'تشغيل ')+b.dataset.t);
    });
  }
  function renderAudio(list){
    var sec=$('#audio'),box=$('#au');if(!sec||!box)return;
    AU_LIST=list||[];
    sec.hidden=!AU_LIST.length;
    if(!AU_LIST.length){box.innerHTML='';return}
    box.innerHTML=AU_LIST.map(function(a){
      return '<div class="au-i"><button class="au-b" type="button" data-au="'+esc(a.id)+'" data-t="'+esc(TX(a,'title'))+'">▶</button><div class="au-m"><b>'+esc(TX(a,'title'))+'</b><span>'+esc(a.kind)+(a.speaker?' · '+esc(a.speaker):'')+' · '+fmtDur(a.duration_sec)+'</span></div></div>';
    }).join('');
    paintAu();
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('#au [data-au]');if(!b)return;
    if(!AU_EL){
      AU_EL=new Audio();AU_EL.preload='none';
      AU_EL.addEventListener('play',paintAu);AU_EL.addEventListener('pause',paintAu);AU_EL.addEventListener('ended',paintAu);
    }
    var item=AU_LIST.find(function(a){return String(a.id)===b.dataset.au});if(!item)return;
    if(AU_EL.dataset.id===String(item.id)&&!AU_EL.paused){AU_EL.pause();return}
    var h=$('#hymn');if(h&&!h.paused)h.pause();
    AU_EL.dataset.id=String(item.id);
    AU_EL.src=media(item.path);
    AU_EL.play().catch(function(){});
  });
/* النماذج اللي الأدمن بيعملها (بتظهر بس لو الأدمن فعّلها) */
var FORM_DEFS={};
function frmCtl(q){
  var id=esc(q.id),opts=q.options||[];
  var rd=function(v,lbl){return '<label class="frmchk"><input type="radio" name="'+id+'" value="'+esc(v)+'"> '+esc(lbl)+'</label>'};
  switch(q.type){
    case 'long': return '<textarea name="'+id+'" rows="3" maxlength="2000"></textarea>';
    case 'email': return '<input name="'+id+'" type="email" maxlength="200" dir="ltr">';
    case 'phone': return '<input name="'+id+'" type="tel" maxlength="20" dir="ltr">';
    case 'number': return '<input name="'+id+'" type="number" dir="ltr">';
    case 'date': return '<input name="'+id+'" type="date">';
    case 'choice': return '<select name="'+id+'"><option value="">اختار</option>'+opts.map(function(o){return '<option>'+esc(o)+'</option>'}).join('')+'</select>';
    case 'radio': return '<div class="frmgrp">'+opts.map(function(o){return rd(o,o)}).join('')+'</div>';
    case 'multi': return '<div class="frmgrp">'+opts.map(function(o){return '<label class="frmchk"><input type="checkbox" name="'+id+'" value="'+esc(o)+'"> '+esc(o)+'</label>'}).join('')+'</div>';
    case 'yesno': return '<div class="frmgrp">'+rd('صح','✅ صح')+rd('غلط','❌ غلط')+'</div>';
    case 'rating': return '<div class="frmgrp">'+[1,2,3,4,5].map(function(n){return rd(String(n),n+' ⭐')}).join('')+'</div>';
    case 'image': return '<input name="'+id+'" type="file" accept="image/*">';
    case 'file': return '<input name="'+id+'" type="file" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png">';
    default: return '<input name="'+id+'" type="text" maxlength="200">';
  }
}
function renderForms(list){
  var sec=document.getElementById('forms'),box=document.getElementById('frms');
  if(!sec||!box)return;
  var shown=(list||[]).filter(function(f){return f.show_on_site===true});
  if(!shown.length)return;
  sec.hidden=false;
  box.innerHTML=shown.map(function(f){
    var fields=Array.isArray(f.fields)?f.fields:[];
    FORM_DEFS[f.id]=fields;
    var inner=fields.map(function(q){
      var tag=(q.type==='multi'||q.type==='radio'||q.type==='yesno'||q.type==='rating')?'div':'label';
      return '<'+tag+' class="frmfield"><b>'+esc(q.label)+(q.required?' <span class="frmreq">*</span>':'')+'</b>'+frmCtl(q)+'</'+tag+'>';
    }).join('');
    return '<article class="frmcard"><h3>'+esc(f.title)+'</h3>'+(f.description?'<p class="frmdesc">'+esc(f.description)+'</p>':'')+
      '<form class="frmform" data-fid="'+esc(f.id)+'" novalidate>'+inner+'<p class="frmmsg" role="status"></p><button class="btn gold" type="submit">إرسال</button></form></article>';
  }).join('');
}
document.addEventListener('submit',async function(e){
  var fm=e.target;
  if(!fm.classList||!fm.classList.contains('frmform'))return;
  e.preventDefault();
  var msg=fm.querySelector('.frmmsg'),btn=fm.querySelector('button');
  var fd=new FormData(fm),answers={},files=[],bad='';
  var defs=FORM_DEFS[fm.dataset.fid]||[];
  for(var i=0;i<defs.length;i++){
    var q=defs[i];
    if(q.type==='image'||q.type==='file'){
      var f=fd.get(q.id),has=!!(f&&f.size>0);
      if(q.required&&!has){bad='ارفع: '+q.label;break}
      if(has){
        if(f.size>5*1024*1024){bad='الملف كبير في: '+q.label+' (الحد 5 ميجا)';break}
        if(q.type==='image'&&!/^image\//.test(f.type)){bad='ارفع صورة في: '+q.label;break}
        files.push({id:q.id,file:f});
      }
      continue;
    }
    var vals=fd.getAll(q.id).map(function(x){return String(x).trim()}).filter(Boolean);
    if(q.required&&!vals.length){bad='اكتب أو اختار: '+q.label;break}
    if(q.type==='email'&&vals.length&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals[0])){bad='الإيميل مش صح في: '+q.label;break}
    if(q.type==='phone'&&vals.length&&!/^[0-9+\s-]{6,20}$/.test(vals[0])){bad='رقم التليفون مش صح في: '+q.label;break}
    if(q.type==='number'&&vals.length&&isNaN(+vals[0])){bad='الرقم مش صح في: '+q.label;break}
    answers[q.id]=q.type==='multi'?vals:(vals[0]||'');
  }
  if(bad){msg.textContent=bad;return}
  btn.disabled=true;msg.textContent='جاري الإرسال...';
  try{
    var cl=sbClient();
    for(var j=0;j<files.length;j++){
      var it=files[j],ext=(it.file.name.split('.').pop()||'bin').toLowerCase().replace(/[^a-z0-9]/g,'')||'bin';
      var path='forms/'+crypto.randomUUID()+'.'+ext;
      var up=await cl.storage.from('member-photos').upload(path,it.file,{contentType:it.file.type||'application/octet-stream'});
      if(up.error)throw up.error;
      answers[it.id]={path:path,name:it.file.name};
    }
    var r=await cl.from('form_responses').insert({form_id:fm.dataset.fid,answers:answers});
    if(r.error)throw r.error;
    fm.reset();msg.textContent='تم إرسال ردك، شكراً ✓';
  }catch(err){msg.textContent='ماتبعتش: '+((err&&err.message)||err)}
  finally{btn.disabled=false}
});


/* ---- بوستر عيد الميلاد: صورة العضو داخل الإطار ---- */
function bdImg(u){return new Promise(function(res,rej){var i=new Image();i.onload=function(){res(i)};i.onerror=rej;i.src=u})}
function bdImgX(u){return new Promise(function(res,rej){var i=new Image();i.crossOrigin='anonymous';i.onload=function(){res(i)};i.onerror=function(){bdImg(u).then(res,rej)};i.src=u})}
function bdMsg(g){
  if(g==='بنت')return 'كل سنة وانتِ طيبة وبخير وعقبال سنين كتير حلوة وتحققي كل اللي نفسكِ فيه وتلمسي ايدين ربنا فيها أكتر واكتر وتكوني دايما معانا وجودك دايما فارق❤️❤️\nأسرة آڤا مينا بتحبك أوي وبتتمنالك سنة سعيدة يا صديقتي🥰❤️';
  return 'كل سنة وانت طيب وبخير وعقبال سنين كتير حلوة وتحقق كل اللي نفسك فيه وتلمس ايدين ربنا فيها أكتر واكتر وتكون دايما معانا وجودك دايما فارق❤️❤️\nأسرة آڤا مينا بتحبك أوي وبتتمنالك سنة سعيدة يا صديقي🥰❤️';
}
function bdPaint(photo,frame){
  var c=document.createElement('canvas');c.width=c.height=1000;var x=c.getContext('2d');
  var cx=508.7,cy=472.7;
  x.fillStyle='#ece4d1';x.fillRect(0,0,1000,1000);
  x.save();x.beginPath();x.ellipse(cx,cy,312,286,0,0,Math.PI*2);x.clip();
  var sc=Math.max(624/photo.naturalWidth,572/photo.naturalHeight),w=photo.naturalWidth*sc,h=photo.naturalHeight*sc;
  x.drawImage(photo,cx-w/2,cy-h/2,w,h);x.restore();
  x.drawImage(frame,0,0,1000,1000);
  return c;
}
function bdBlob(c){return new Promise(function(res,rej){c.toBlob(function(b){b?res(b):rej(new Error('no blob'))},'image/png')})}
function bdOpen(src,alt){var o=document.createElement('div');o.className='bdlb';o.setAttribute('role','dialog');var i=document.createElement('img');i.src=src;i.alt=alt;o.appendChild(i);o.onclick=function(){o.remove()};document.body.appendChild(o)}
function bdShare(blob,name,msg){
  var title='🎂 كل سنة '+name,file=null;
  try{file=new File([blob],'birthday-'+name+'.png',{type:'image/png'})}catch(e){}
  try{
    if(file&&navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],title:title,text:msg}).catch(function(){});return}
    if(navigator.share){navigator.share({title:title,text:msg}).catch(function(){});return}
  }catch(e){}
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='birthday-'+name+'.png';document.body.appendChild(a);a.click();a.remove();
  try{navigator.clipboard.writeText(msg).then(function(){toast('اتحفظت الصورة واتنسخ الكلام، ابعتهم على السوشيال ميديا')},function(){toast('اتحفظت الصورة، ابعتها على السوشيال ميديا')})}catch(e){toast('اتحفظت الصورة')}
}
// البوسترات بتظهر بس للأعضاء اللي الأمين سمح لهم (بعد تسجيل الدخول)
async function loadBday(){
  var box=document.getElementById('bdl'),sec=document.getElementById('bday');
  if(!box||!sec)return;
  box.textContent='';sec.hidden=true;
  if(S.hide_bday==='1')return;
  try{
    var r=await sb.rpc('my_birthday_posters');
    if(!r.error&&r.data&&r.data.length)renderBday(r.data.filter(function(x){return x.photo_path}));
  }catch(e){}
}
document.addEventListener('ava:me',function(){loadBday()});
function renderBday(rows){
  var box=document.getElementById('bdl'),sec=document.getElementById('bday');
  if(!box||!sec)return;
  rows.forEach(function(rw){
    var name=(rw.full_name||'').trim(),msg=bdMsg(rw.gender);
    var fig=document.createElement('figure');fig.className='bdp';
    var im=document.createElement('img');im.className='bdimg';im.alt='بوستر عيد ميلاد '+name;
    var cap=document.createElement('figcaption'),h=document.createElement('b'),p=document.createElement('p'),btn=document.createElement('button');
    h.textContent='🎂 '+name;p.className='bdm';p.textContent=msg;btn.type='button';btn.className='bdsh';btn.textContent='📤 شير';
    cap.appendChild(h);cap.appendChild(p);fig.appendChild(im);fig.appendChild(cap);fig.appendChild(btn);
    fig.hidden=true;box.appendChild(fig);
    sb.storage.from('birthday-private').createSignedUrl(rw.photo_path,600).then(function(s){
      if(s.error||!s.data)throw new Error('no signed url');
      return fetch(s.data.signedUrl);
    }).then(function(r){
      if(!r.ok)throw new Error('poster fetch');
      return r.blob();
    }).then(function(blob){
      im.src=URL.createObjectURL(blob);im.style.cursor='zoom-in';im.onclick=function(){bdOpen(im.src,im.alt)};
      btn.onclick=function(){bdShare(blob,name,msg)};
      fig.hidden=false;sec.hidden=false;
    }).catch(function(){});
  });
}
var PUSH_PUB='BAWvii4WV0gSEFAEvsjAXQrtTBR4qVGhcNMOHqP-rpGfg2BnG_6ALRNhZkBCxvU5w178FyMTwL3tC1EoZ3_7nVs';
function b64ToU8(s){var p='='.repeat((4-s.length%4)%4),b=atob((s+p).replace(/-/g,'+').replace(/_/g,'/')),u=new Uint8Array(b.length);for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u}
async function pushInit(){
  var box=document.getElementById('pushbox'),btn=document.getElementById('pushbtn');
  if(!box||!btn)return;
  if(!('serviceWorker' in navigator)||!('PushManager' in window)||!('Notification' in window)||!/^https?:$/.test(location.protocol))return;
  box.hidden=false;
  var reg=await navigator.serviceWorker.ready,sub=await reg.pushManager.getSubscription();
  if(sub&&Notification.permission==='granted'){btn.textContent='🔔 الإشعارات مفعّلة';btn.dataset.on='1'}
  btn.onclick=async function(){
    if(btn.dataset.on==='1'){
      try{
        var cur=await reg.pushManager.getSubscription();
        if(cur)await cur.unsubscribe();
        btn.dataset.on='';btn.textContent='🔔 فعّل الإشعارات اليومية';toast('اتلغت الإشعارات، تقدر تفعّلها في أي وقت','good');
      }catch(e){toast('ماقدرناش نلغي الإشعارات، جرّب تاني','bad')}
      return;
    }
    try{
      var perm=await Notification.requestPermission();
      if(perm!=='granted'){toast('لازم تسمح بالإشعارات عشان توصلك آية اليوم');return}
      var s=sub||await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64ToU8(PUSH_PUB)});
      var j=s.toJSON();
      var r=await sbClient().from('push_subscriptions').upsert({endpoint:j.endpoint,p256dh:j.keys.p256dh,auth:j.keys.auth},{onConflict:'endpoint',ignoreDuplicates:true});
      if(r.error)throw r.error;
      btn.textContent='🔔 الإشعارات مفعّلة';btn.disabled=false;btn.dataset.on='1';
    }catch(e){toast('ماقدرناش نفعّل الإشعارات، جرّب تاني. لو على الآيفون لازم تضيف الموقع للشاشة الرئيسية الأول')}
  };
}
function renderCustomSections(S){
  document.querySelectorAll('section.cs-custom').forEach(function(n){n.remove()});
  var raw=S.custom_sections;if(!raw)return;
  var arr;try{arr=Array.isArray(raw)?raw:JSON.parse(raw)}catch(e){return}
  if(!Array.isArray(arr))return;
  var en=document.documentElement.lang==='en',foot=document.querySelector('footer');
  arr.forEach(function(c,i){
    if(!c||c.visible===false)return;
    var t=(en&&c.title_en)?c.title_en:c.title,b=(en&&c.body_en)?c.body_en:c.body;
    if(!t)return;
    var sec=document.createElement('section');sec.className='sec cs-custom';sec.id='cs-'+(c.id||i);
    var w=document.createElement('div');w.className='wrap';
    var hd=document.createElement('header');hd.className='sh';
    var h=document.createElement('h2');h.textContent=t;hd.appendChild(h);w.appendChild(hd);
    if(b){var p=document.createElement('p');p.style.cssText='max-width:70ch;margin:0 auto;line-height:1.9;white-space:pre-line;color:var(--mute);text-align:center';p.textContent=b;w.appendChild(p)}
    sec.appendChild(w);
    if(foot&&foot.parentNode)foot.parentNode.insertBefore(sec,foot);else document.body.appendChild(sec);
  });
}
async function loadDynamic(){
  var sb=sbClient();
  if(!sb){renderEvents([]);renderComps();renderArchive();return}
  try{
    var r=await Promise.all([
      sb.from('events').select('*').order('event_date'),
      sb.from('competitions').select('*').order('created_at',{ascending:false}),
      sb.from('archive_items').select('*').order('year',{ascending:false}).order('created_at',{ascending:false}),
      sb.from('member_quotes').select('*').order('created_at',{ascending:false}),
      sb.from('audio_items').select('*').order('created_at',{ascending:false}),
      sb.from('resource_items').select('*').order('created_at',{ascending:false})
    ]);
    renderEvents(r[0].error?[]:r[0].data);
    COMPS=r[1].error?[]:r[1].data;renderComps();
    ARCH=r[2].error?[]:r[2].data;renderArchive();
    renderQuotes(r[3].error?[]:r[3].data);
    renderAudio(r[4].error?[]:r[4].data);
    renderRes(r[5].error?[]:r[5].data);
  }catch(e){renderEvents([]);renderComps();renderArchive()}
}
loadDynamic();

/* ---------- التصويت على مكان Welcome Day ---------- */
var POLL_DEFAULT={question:'فين نعمل Welcome Day 2027؟',description:'اختار الدير اللي نفسك نعمل فيه يوم الأسرة، وصوتك بيفرق',status:'open',options:[
 {id:'d1',label:'الدير الأبيض (دير الأنبا شنودة)',place:'غرب سوهاج'},
 {id:'d2',label:'الدير الأحمر (دير الأنبا بيشاي)',place:'غرب سوهاج'},
 {id:'d3',label:'دير الشهداء',place:'أخميم'},
 {id:'d4',label:'دير الأنبا بسادة',place:'أخميم'},
 {id:'d5',label:'دير الشهيدة دميانة',place:'سوهاج'}]};
var POLL=null,POLLRES={},POLLMODE='vote',pollTimer=null;
function voterId(){var v=store('ava_voter');if(!v){v=uuid();store('ava_voter',v)}return v}
function myVote(){return store('ava_vote_'+(POLL&&POLL.id))}
function pollOpen(){
  if(!POLL)return false;
  if(POLL.status!=='open')return false;
  if(POLL.closes_at&&new Date(POLL.closes_at)<=new Date())return false;
  return true;
}
function renderPoll(){
  var box=$('#poll');if(!box)return;
  if(!POLL){box.hidden=true;return}
  box.hidden=false;
  var open=pollOpen(),mine=myVote(),showRes=(POLLMODE==='res')||!open||!!mine;
  var total=0,max=0;POLL.options.forEach(function(o){var n=+POLLRES[o.id]||0;total+=n;if(n>max)max=n});
  var h='<div class="phead"><h3>'+esc(POLL.question)+'</h3><span class="pchip'+(open?'':' off')+'">'+(open?'التصويت شغال':'التصويت اتقفل')+'</span></div>';
  if(POLL.description)h+='<p class="psub">'+esc(POLL.description)+'</p>';
  h+='<div class="popts" role="'+(showRes?'list':'radiogroup')+'">';
  POLL.options.forEach(function(o){
    var n=+POLLRES[o.id]||0,pc=total?Math.round(n*100/total):0;
    var inner='<span><b>'+esc(o.label)+'</b>'+(o.place?'<small>'+esc(o.place)+'</small>':'')+'</span>';
    if(showRes){
      h+='<div class="popt res'+(max>0&&n===max?' lead':'')+(mine===o.id?' sel':'')+'"><i class="bar" style="width:'+pc+'%"></i><span aria-hidden="true">'+(mine===o.id?'✓':'')+'</span>'+inner+'<span class="pc">'+AR(pc)+'٪</span></div>';
    }else{
      h+='<label class="popt"><input type="radio" name="pv" value="'+esc(o.id)+'">'+inner+'<span></span></label>';
    }
  });
  h+='</div>';
  if(showRes){
    h+='<div class="pacts"><span class="ptot">إجمالي الأصوات: '+AR(total)+'</span>'+(mine?'<span class="pchip">وصل صوتك، شكراً ليك ❤️</span>':'')+(open&&!mine&&POLLMODE==='res'?'<button class="btn pri sm" type="button" data-pa="back">ارجع للتصويت</button>':'')+'</div>';
  }else{
    h+='<div class="pacts"><button class="btn pri" type="button" data-pa="vote" disabled>أكّد تصويتي</button><button class="btn line sm" type="button" data-pa="res">شوف النتايج بس</button></div>';
  }
  h+='<p class="msg" id="pm" role="status"></p>';
  box.innerHTML=h;
}
async function loadPoll(){
  var sb=sbClient();
  if(!sb){POLL=POLL_DEFAULT;POLL.id='demo';renderPoll();
    var m=$('#pm');if(m)say(m,'التصويت هيشتغل بعد ما الموقع يتربط بقاعدة البيانات','');return}
  try{
    var r=await sb.from('polls').select('*').eq('slug','welcome-day').maybeSingle();
    if(r.error||!r.data){POLL=null;renderPoll();return}
    var o=await sb.from('poll_options').select('*').eq('poll_id',r.data.id).order('sort');
    if(o.error||!o.data.length){POLL=null;renderPoll();return}
    POLL=r.data;POLL.options=o.data;
    await refreshPoll();
  }catch(e){POLL=null;renderPoll()}
}
async function refreshPoll(){
  var sb=sbClient();if(!sb||!POLL||POLL.id==='demo')return;
  var r=await sb.rpc('poll_results',{p_poll:POLL.id});
  if(!r.error){POLLRES={};r.data.forEach(function(x){POLLRES[x.option_id]=+x.votes})}
  var sel=$('input[name=pv]:checked');
  if(!sel)renderPoll();
}
document.addEventListener('change',function(e){
  if(e.target.name!=='pv')return;
  $$('#poll .popt').forEach(function(l){l.classList.toggle('sel',l.contains(e.target))});
  var b=$('#poll [data-pa=vote]');if(b)b.disabled=false;
});
document.addEventListener('click',async function(e){
  var b=e.target.closest&&e.target.closest('#poll [data-pa]');if(!b)return;
  var a=b.dataset.pa;
  if(a==='res'){POLLMODE='res';renderPoll();return}
  if(a==='back'){POLLMODE='vote';renderPoll();return}
  if(a==='vote'){
    var sel=$('input[name=pv]:checked'),m=$('#pm');
    if(!sel){say(m,'اختار الدير الأول','bad');return}
    var sb=sbClient();
    if(!sb){say(m,'التصويت هيشتغل بعد ما الموقع يتربط بقاعدة البيانات','');return}
    b.disabled=true;
    var r=await sb.from('poll_votes').insert({poll_id:POLL.id,option_id:sel.value,voter_id:voterId()});
    if(r.error&&r.error.code!=='23505'){b.disabled=false;say(m,'حصلت مشكلة، جرب تاني بعد شوية','bad');return}
    if(!r.error)store('ava_vote_'+POLL.id,sel.value);
    else store('ava_vote_'+POLL.id,'x');
    await refreshPoll();renderPoll();
  }
});
loadPoll();
pollTimer=setInterval(function(){if(!document.hidden)refreshPoll()},20000);

/* ---------- حماية الصور من الحفظ السهل ---------- */
document.addEventListener('contextmenu',function(e){if(e.target.closest&&e.target.closest('img,.lb,.shield'))e.preventDefault()});
document.addEventListener('dragstart',function(e){if(e.target.tagName==='IMG')e.preventDefault()});
document.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&(e.key==='s'||e.key==='S'||e.key==='u'||e.key==='U'))e.preventDefault()});
$$('img').forEach(function(i){i.draggable=false});

/* ---------- امتحان سفر التثنية (مرة واحدة) ---------- */
var QZ={"mcq": [{"q": "معنى اسم سفر «التثنية»؟", "o": ["تكرار الشريعة وإعادتها", "قصة الخلق", "بناء الهيكل", "سبي بابل"], "a": 0, "x": "التثنية معناها التكرار، فيه موسى بيعيد الشريعة للجيل الجديد"}, {"q": "مين هو كاتب سفر التثنية حسب التقليد؟", "o": ["يشوع", "موسى النبي", "هارون", "صموئيل"], "a": 1, "x": "موسى النبي هو كاتب الأسفار الخمسة"}, {"q": "فين كان بنو إسرائيل لما ألقى موسى خطبه؟", "o": ["في مصر", "في بابل", "في عبر الأردن في أرض موآب", "في أورشليم"], "a": 2, "x": "تث ١:٥، في عبر الأردن في أرض موآب"}, {"q": "كم سنة قضى بنو إسرائيل في البرية؟", "o": ["٧ سنين", "٤٠ سنة", "٧٠ سنة", "١٢٠ سنة"], "a": 1, "x": "تث ٨:٢، أربعين سنة"}, {"q": "قال موسى «اسمع يا إسرائيل» وبعدها مباشرة قال", "o": ["الرب إلهنا رب واحد", "اتركوا الأصنام", "احفظوا السبت", "ابنوا بيتاً"], "a": 0, "x": "تث ٦:٤"}, {"q": "على أي جبل صعد موسى ليشوف أرض الموعد قبل موته؟", "o": ["جبل سيناء", "جبل نبو", "جبل الزيتون", "جبل حرمون"], "a": 1, "x": "تث ٣٤:١، جبل نبو"}, {"q": "مين خلف موسى في قيادة الشعب؟", "o": ["كالب", "هارون", "يشوع بن نون", "جدعون"], "a": 2, "x": "تث ٣٤:٩، يشوع بن نون امتلأ روح حكمة"}, {"q": "كان عمر موسى لما مات", "o": ["٨٠ سنة", "١٠٠ سنة", "١٢٠ سنة", "١٥٠ سنة"], "a": 2, "x": "تث ٣٤:٧"}, {"q": "في أي أصحاح من التثنية اتكررت الوصايا العشر؟", "o": ["الأصحاح ٥", "الأصحاح ١", "الأصحاح ١٠", "الأصحاح ٢٠"], "a": 0, "x": "تث ٥، وهو تكرار للوصايا اللي في سفر الخروج"}, {"q": "الرب يسوع قال لإبليس «مكتوب ليس بالخبز وحده يحيا الإنسان» وهي مأخوذة من", "o": ["سفر التثنية", "سفر الخروج", "سفر المزامير", "سفر اللاويين"], "a": 0, "x": "تث ٨:٣"}, {"q": "كم مدينة ملجأ عيّنها موسى شرقي الأردن؟", "o": ["مدينة واحدة", "٣ مدن", "١٢ مدينة", "٤٨ مدينة"], "a": 1, "x": "تث ٤:٤١-٤٣، باصر وراموت جلعاد وجولان"}, {"q": "في نشيد موسى، شبّه الرب اعتناءه بشعبه بـ", "o": ["الأسد", "النسر", "الحمامة", "الراعي والغنم فقط"], "a": 1, "x": "تث ٣٢:١١، كالنسر الذي يُحرّك عشه وعلى فراخه يرف"}, {"q": "حسب تث ٦:٥ نحب الرب إلهنا من", "o": ["كل القلب والنفس والقوة", "الفم فقط", "الأعمال فقط", "وقت الشدة فقط"], "a": 0, "x": "تث ٦:٥"}, {"q": "على أي جبلين اتقالت البركة واللعنة؟", "o": ["حرمون وتابور", "جرزيم وعيبال", "سيناء وحوريب", "نبو وفسجة"], "a": 1, "x": "تث ١١:٢٩، البركة على جرزيم واللعنة على عيبال"}, {"q": "كم يوم بكى بنو إسرائيل على موسى؟", "o": ["٧ أيام", "١٠ أيام", "٣٠ يوماً", "٤٠ يوماً"], "a": 2, "x": "تث ٣٤:٨، ثلاثين يوماً"}], "tf": [{"q": "سفر التثنية هو الخامس في أسفار موسى الخمسة", "a": 1, "x": "صح، آخر الأسفار الخمسة"}, {"q": "موسى دخل أرض الموعد مع الشعب", "a": 0, "x": "غلط، مات في أرض موآب بعد ما شاف الأرض من بعيد"}, {"q": "أوصى الرب ألا يزيدوا على كلامه ولا يُنقصوا منه", "a": 1, "x": "صح، تث ٤:٢"}, {"q": "سمح الرب لبني إسرائيل يصنعوا تمثالاً منحوتاً للعبادة", "a": 0, "x": "غلط، الوصية الثانية تمنع ده، تث ٥:٨"}, {"q": "أوصى الرب بتعليم الوصايا للأولاد والكلام عنها في البيت وفي الطريق", "a": 1, "x": "صح، تث ٦:٧"}, {"q": "العشور والتقدمات كانت تُقدَّم في المكان اللي يختاره الرب", "a": 1, "x": "صح، تث ١٢:١١"}, {"q": "قال الرب إن الإنسان مش بالخبز وحده يحيا", "a": 1, "x": "صح، تث ٨:٣"}, {"q": "في ٤٠ سنة البرية ثياب الشعب ما بليتش ورجليهم ما تورمتش", "a": 1, "x": "صح، تث ٨:٤"}, {"q": "اختار الرب شعبه لأنهم أكثر الشعوب عدداً", "a": 0, "x": "غلط، اختارهم لمحبته لهم وهم أقل الشعوب، تث ٧:٧-٨"}, {"q": "يوم السبت يوم عادي نشتغل فيه زي باقي الأيام", "a": 0, "x": "غلط، السبت للراحة والتقديس، تث ٥:١٢-١٤"}, {"q": "أوصى الرب بمحبة الغريب لأنهم كانوا غرباء في أرض مصر", "a": 1, "x": "صح، تث ١٠:١٩"}, {"q": "الشريعة ما كانتش بتتقري على الشعب بعد موسى", "a": 0, "x": "غلط، كانت تُقرأ كل سبع سنين في عيد المظال، تث ٣١:١٠-١١"}, {"q": "اتدفن موسى في مكان معروف وقبره موجود لحد النهارده", "a": 0, "x": "غلط، ما عرفش إنسان قبره، تث ٣٤:٦"}, {"q": "ما قامش بعد موسى في إسرائيل نبي زيه", "a": 1, "x": "صح، تث ٣٤:١٠"}, {"q": "نهى الرب عن العرافة والسحر وتحضير الأرواح", "a": 1, "x": "صح، تث ١٨:١٠-١٢"}]};
var QOPEN=false;
var QPART={mcq:'الجزء الأول: اختيار من متعدد',tf:'الجزء التاني: صح وغلط'},qs=null,QKEY='ava_quiz_done';
function qShuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function qNorm(s){return String(s||'').trim().replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/\s+/g,' ').toLowerCase()}
function qDone(){try{return JSON.parse(store(QKEY)||'null')}catch(e){return null}}
function qHome(){
  qs=null;var d=qDone();
  if(d){qReview(d,true);return}
  var nm=store('ava_qname')||'';
  $('#quiz').innerHTML='<div class="qhd"><span class="qtag">'+(QOPEN?'مسابقة مفتوحة':'مقفولة دلوقتي')+'</span><h3>امتحان سفر التثنية</h3><p class="psub">اختبر معلوماتك في سفر التثنية، وصاحب أعلى درجة ياخد شهادة تقدير من الأسرة</p></div>'+
  '<div class="qstats"><div><b>٣٠</b><span>سؤال</span></div><div><b>١٥</b><span>اختيار من متعدد</span></div><div><b>١٥</b><span>صح وغلط</span></div><div><b>١</b><span>محاولة واحدة</span></div></div>'+
  '<ol class="qsteps"><li><b>اكتب اسمك</b><span>اسمك الأول والتاني على الأقل</span></li><li><b>جاوب براحتك</b><span>تقدر ترجع وتغيّر إجابتك قبل التسليم</span></li><li><b>سلّم الامتحان</b><span>مفيش تصحيح أثناء الحل، والامتحان مرة واحدة بس</span></li><li><b>شوف نتيجتك</b><span>درجتك وكل الإجابات الصح والغلط والتصحيح في الآخر</span></li></ol>'+
  (QOPEN?'<div class="qform"><label class="fld" for="qn">اسمك بالكامل<input class="qn" id="qn" maxlength="80" autocomplete="name" value="'+esc(nm)+'" placeholder="الاسم الثلاثي"></label>'+
  '<button class="btn gold" type="button" data-qgo="1">ابدأ الامتحان</button></div><p class="msg" id="qm"></p>':'<div class="qlock"><b>المسابقة مقفولة دلوقتي</b><span>هنفتحها قريباً، خليك متابعنا وذاكر سفر التثنية كويس</span>'+(QWHY?'<small style="opacity:.6;margin-top:6px">('+esc(QWHY)+')</small>':'')+'</div>');
}
async function qStart(btn){
  var n=($('#qn').value||'').trim(),m=$('#qm');
  if(n.split(/\s+/).length<2||n.length<5){say(m,'اكتب اسمك الأول والتاني على الأقل','bad');$('#qn').focus();return}
  var sb=sbClient();
  if(sb){
    btn.disabled=true;
    try{
      var r=await sb.rpc('quiz_taken',{p_quiz:'deuteronomy',p_name_key:qNorm(n),p_device:voterId()});
      if(r.error)throw r.error;
      if(r.data){btn.disabled=false;say(m,'الاسم ده أو الجهاز ده امتحن قبل كده، الامتحان مرة واحدة بس','bad');return}
    }catch(e){btn.disabled=false;say(m,'حصلت مشكلة في الاتصال، جرب تاني بعد شوية','bad');return}
  }
  store('ava_qname',n);
  var list=[];
  ['mcq','tf'].forEach(function(part){
    var items=QZ[part].map(function(q){
      if(part==='tf')return {part:part,q:q.q,o:['صح','غلط'],a:q.a?0:1,x:q.x};
      var idx=qShuffle([0,1,2,3]);
      return {part:part,q:q.q,o:idx.map(function(k){return q.o[k]}),a:idx.indexOf(q.a),x:q.x}});
    list=list.concat(qShuffle(items));
  });
  qs={name:n,list:list,i:0,pick:list.map(function(){return -1}),t0:Date.now()};qAsk();
}
function qAsk(){
  var q=qs.list[qs.i],t=qs.list.length,last=qs.i===t-1,got=qs.pick.filter(function(x){return x>=0}).length;
  $('#quiz').innerHTML='<div class="qmeta"><span>'+QPART[q.part]+'</span><span>سؤال '+AR(qs.i+1)+' من '+AR(t)+'</span></div><div class="qbar"><i style="width:'+((qs.i+1)/t*100)+'%"></i></div>'+
   '<p class="qq">'+esc(q.q)+'</p><div class="qopts" role="radiogroup">'+
   q.o.map(function(o,k){return '<button class="qo'+(qs.pick[qs.i]===k?' on':'')+'" type="button" role="radio" aria-checked="'+(qs.pick[qs.i]===k)+'" data-qa="'+k+'">'+esc(o)+'</button>'}).join('')+'</div>'+
   '<div class="qrow qnav"><button class="btn line sm" type="button" data-qprev="1"'+(qs.i?'':' disabled')+'>السؤال اللي قبله</button>'+
   (last?'<button class="btn gold" type="button" data-qfin="1">سلّم الامتحان</button>':'<button class="btn pri" type="button" data-qnext="1">اللي بعده</button>')+'</div>'+
   '<p class="psub" style="text-align:center">جاوبت على '+AR(got)+' من '+AR(t)+'</p><p class="msg" id="qm"></p>';
}
async function qFinish(btn){
  var m=$('#qm'),t=qs.list.length,left=qs.pick.filter(function(x){return x<0}).length;
  if(left&&!confirm('لسه '+AR(left)+' سؤال من غير إجابة وهتتحسب غلط، تسلّم برضه؟'))return;
  if(!left&&!confirm('تسلّم الامتحان؟ مش هتقدر تعدّل بعد كده'))return;
  var sm=0,st=0,res=qs.list.map(function(q,i){
    var ok=qs.pick[i]===q.a;if(ok){if(q.part==='mcq')sm++;else st++}
    return {p:q.part,q:q.q,m:qs.pick[i]>=0?q.o[qs.pick[i]]:'',r:q.o[q.a],x:q.x,ok:ok}});
  var d={name:qs.name,score:sm+st,total:t,sm:sm,st:st,secs:Math.round((Date.now()-qs.t0)/1000),res:res},sb=sbClient();
  if(sb){
    btn.disabled=true;say(m,'جاري تسليم الامتحان','');
    var r=await sb.from('quiz_results').insert({quiz:'deuteronomy',part:'all',name:qs.name,name_key:qNorm(qs.name),device_id:voterId(),score:d.score,total:t,score_mcq:sm,score_tf:st,seconds:d.secs});
    if(r.error&&r.error.code==='23505'){
      qs=null;$('#quiz').innerHTML='<span class="qtag">تنبيه</span><h3>الامتحان اتسلّم قبل كده</h3><p class="psub">الاسم ده أو الجهاز ده امتحن قبل كده، والامتحان مرة واحدة بس</p>';return}
    if(r.error){btn.disabled=false;say(m,'حصلت مشكلة وإجاباتك لسه محفوظة، دوس تاني بعد شوية','bad');return}
    d.saved=true;
  }
  store(QKEY,JSON.stringify(d));qs=null;qReview(d,false);
  $('#quiz').scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});
}
function qReview(d,again){
  var pc=d.score/d.total,msg=pc===1?'ممتاز، كل إجاباتك صح 🎉':pc>=.8?'جميل جداً، ربنا يباركك':pc>=.5?'كويس، وبالمذاكرة هتبقى أحسن':'ولا يهمك، افتح سفر التثنية وذاكر وهتبقى أحسن';
  var wrong=d.res.filter(function(x){return !x.ok}).length;
  var h='<div class="qend"><span class="qtag">'+(again?'امتحنت قبل كده':'اتسلّم الامتحان')+'</span><p class="psub">'+esc(d.name)+'</p><div class="qscore">'+AR(d.score)+' / '+AR(d.total)+'</div><p class="qq">'+msg+'</p>'+
   '<div class="qrow"><span class="pchip">اختيار من متعدد: '+AR(d.sm)+' / ١٥</span><span class="pchip">صح وغلط: '+AR(d.st)+' / ١٥</span><span class="pchip">الوقت: '+AR(Math.floor(d.secs/60))+' د و'+AR(d.secs%60)+' ث</span></div>'+
   (d.saved===false?'<p class="msg">الامتحان ده تجريبي ومش اتبعت للأسرة لأن الموقع مش مربوط بقاعدة البيانات</p>':'<p class="msg good">نتيجتك وصلت للأسرة ❤️</p>')+'</div>'+
   '<div class="qrow"><button class="fchip" type="button" data-qf="all" aria-pressed="true">كل الأسئلة ('+AR(d.total)+')</button><button class="fchip" type="button" data-qf="bad" aria-pressed="false">الغلط بس ('+AR(wrong)+')</button></div><div class="qrev" id="qrev">';
  var last='';
  d.res.forEach(function(x,i){
    if(x.p!==last){last=x.p;h+='<h4 class="qh">'+QPART[x.p]+'</h4>'}
    h+='<article class="qc '+(x.ok?'ok':'no')+'" data-ok="'+(x.ok?1:0)+'"><div class="qcn">'+AR(i+1)+'</div><div><p class="qcq">'+esc(x.q)+'</p>'+
     '<p class="qca">إجابتك: <b>'+(x.m?esc(x.m):'ما جاوبتش')+'</b> '+(x.ok?'✓':'✗')+'</p>'+
     (x.ok?'':'<p class="qca">الإجابة الصح: <b>'+esc(x.r)+'</b></p>')+'<p class="qx">'+esc(x.x)+'</p></div></article>';
  });
  h+='</div>';
  $('#quiz').innerHTML=h;
}

var QWHY='';
async function loadQuizState(){
  var sb=sbClient();
  if(!sb){QWHY='الموقع مش مربوط بقاعدة البيانات (راجع config.js)';return}
  try{
    var r=await sb.from('polls').select('status,closes_at').eq('slug','quiz-deuteronomy').maybeSingle();
    var why='';
    if(r.error)why='مشكلة في قراءة الحالة: '+(r.error.message||r.error.code);
    else if(!r.data)why='مسابقة التثنية مش موجودة في قاعدة البيانات، شغّل all-updates.sql';
    else if(r.data.status!=='open')why='الحالة في الأدمن لسه "مقفول"، افتحها من تبويب التصويت';
    else if(r.data.closes_at&&new Date(r.data.closes_at)<=new Date())why='ميعاد القفل التلقائي عدّى';
    var o=!why;QWHY=why;
    if(o!==QOPEN){QOPEN=o;if(!qs&&!qDone())qHome()}
    else if(!qs&&!qDone()&&!QOPEN)qHome();
  }catch(e){QWHY='خطأ في الاتصال'}
}

document.addEventListener('click',function(e){
  var b=e.target.closest&&e.target.closest('#quiz button');if(!b)return;
  if(b.dataset.qgo)qStart(b);
  else if(b.dataset.qa!==undefined){qs.pick[qs.i]=+b.dataset.qa;qAsk()}
  else if(b.dataset.qnext){qs.i++;qAsk()}
  else if(b.dataset.qprev){qs.i--;qAsk()}
  else if(b.dataset.qfin)qFinish(b);
  else if(b.dataset.qf){
    $$('#quiz [data-qf]').forEach(function(c){c.setAttribute('aria-pressed',c===b)});
    $$('#qrev .qc').forEach(function(c){c.hidden=(b.dataset.qf==='bad'&&c.dataset.ok==='1')});
  }
});
qHome();loadQuizState();setInterval(function(){if(!document.hidden)loadQuizState()},30000);

/* ---------- لمسات حركة إضافية ---------- */
(function(){
  /* شريط تقدم القراءة */
  var bar=$('#sp i'),tk=false;
  function prog(){var h=de.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')';tk=false}
  addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(prog)}},{passive:true});prog();
  /* ريبل على الأزرار */
  document.addEventListener('pointerdown',function(e){
    var b=e.target.closest&&e.target.closest('.btn');if(!b||RM||b.disabled)return;
    var r=b.getBoundingClientRect(),d=Math.max(r.width,r.height)*1.2,i=document.createElement('span');
    i.className='rp';i.style.cssText='width:'+d+'px;height:'+d+'px;left:'+(e.clientX-r.left-d/2)+'px;top:'+(e.clientY-r.top-d/2)+'px';
    b.appendChild(i);setTimeout(function(){i.remove()},650);
  });
  /* جزيئات ذهبية ناعمة في الهيرو (للأجهزة القوية بس) */
  return;
  var hero=$('#home');if(!hero)return;
  var cv=document.createElement('canvas');cv.id='pt';hero.insertBefore(cv,hero.firstChild);
  var cx=cv.getContext('2d'),W=0,H=0,P=[],on=true,N=innerWidth<700?18:36;
  function size(){W=cv.width=hero.clientWidth;H=cv.height=hero.clientHeight}
  size();addEventListener('resize',size);
  for(var i=0;i<N;i++)P.push({x:Math.random(),y:Math.random(),r:.8+Math.random()*2,v:.02+Math.random()*.05,a:.2+Math.random()*.5,p:Math.random()*6});
  new IntersectionObserver(function(en){on=en[0].isIntersecting;if(on)loop()}).observe(hero);
  function loop(){
    if(!on)return;cx.clearRect(0,0,W,H);
    P.forEach(function(q){q.y-=q.v*.01;q.p+=.02;if(q.y<-.02){q.y=1.02;q.x=Math.random()}
      cx.globalAlpha=q.a*(.6+.4*Math.sin(q.p));cx.fillStyle='#e8b04a';cx.beginPath();cx.arc(q.x*W+Math.sin(q.p)*10,q.y*H,q.r,0,7);cx.fill()});
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ---------- عدّاد تنازلي لأقرب فعالية ---------- */
var cdTimer=null;
function cairoSecs(){
  var f=new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Cairo',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).formatToParts(new Date()),o={};
  f.forEach(function(x){o[x.type]=+x.value});return o.hour*3600+o.minute*60+o.second;
}
function startCountdown(rows){
  clearInterval(cdTimer);var old=$('#cdw');if(old)old.remove();
  var nx=rows.filter(function(e){return until(e.event_date)>0})[0];if(!nx)return;
  var box=$('#evs'),w=document.createElement('div');w.className='cdw';w.id='cdw';
  w.innerHTML='<div class="cdt">باقي على <b>'+esc(nx.title)+'</b></div><div class="cdg"><div><b id="cd-d">٠</b><span>يوم</span></div><div><b id="cd-h">٠</b><span>ساعة</span></div><div><b id="cd-m">٠</b><span>دقيقة</span></div><div><b id="cd-s">٠</b><span>ثانية</span></div></div>';
  box.parentNode.insertBefore(w,box);
  function tick(){
    var n=until(nx.event_date),t=n*86400-cairoSecs();if(t<0)t=0;
    $('#cd-d').textContent=AR(Math.floor(t/86400));$('#cd-h').textContent=AR(Math.floor(t%86400/3600));
    $('#cd-m').textContent=AR(Math.floor(t%3600/60));$('#cd-s').textContent=AR(t%60);
  }
  tick();cdTimer=setInterval(function(){if(!document.hidden)tick()},1000);
}
/* ---------- تثبيت الموقع كتطبيق ---------- */
(function(){
  var ft=$('footer');if(!ft)return;
  var bt=document.createElement('button');bt.type='button';bt.className='btn ghost sm inst';bt.textContent='ثبّت الموقع كتطبيق على موبايلك';ft.appendChild(bt);
  var dp=null,standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone;
  if(standalone)bt.remove();
  addEventListener('beforeinstallprompt',function(e){e.preventDefault();dp=e;bt.style.display='inline-flex'});
  if(/iphone|ipad|ipod/i.test(navigator.userAgent)&&!/crios|fxios/i.test(navigator.userAgent))bt.style.display='inline-flex';
  bt.addEventListener('click',async function(){
    if(dp){dp.prompt();await dp.userChoice;dp=null;bt.style.display='none'}
    else toast('افتح قايمة المشاركة في سفاري، واختار "إضافة إلى الشاشة الرئيسية"');
  });
  addEventListener('appinstalled',function(){bt.style.display='none'});
  /* كلام من الأعضاء: بيتبدل كل 7 ثواني */
  function renderQuotes(list){
    var box=$('#qt');if(!box||!list||!list.length)return;
    var i=0;
    function show(){var q=list[i%list.length];box.innerHTML='<p class="qt-t">«'+esc(q.text)+'»</p><p class="qt-n">— '+esc(q.name)+'</p>';box.hidden=false;i++}
    show();
    if(list.length>1&&!(de.classList.contains('rm'))) setInterval(function(){
      box.classList.add('qt-out');setTimeout(function(){show();box.classList.remove('qt-out')},300);
    },7000);
  }
  /* رسالة الترحيب بعد التسجيل */
  function greet(n){
    var d=$('#done');if(!d)return;
    var p=d.querySelector('.wel');
    if(!p){p=document.createElement('p');p.className='wel';d.insertBefore(p,d.firstChild)}
    p.textContent='أهلاً يا '+(n||'')+' ❤️ اتسجلت في الأسرة';
  }
  /* شارك الآية كصورة (واتساب وغيره) */
  (function(){
    var btn=$('#vsh');if(!btn)return;
    var d=new Date(),nn=Math.floor((d-new Date(d.getFullYear(),0,0))/864e5),v=VERSES[nn%VERSES.length],t=scripture(v[0]).replace(/\n/g,' ');
    function wrap(ctx,text,maxW){
      var words=text.split(/\s+/),lines=[],cur='';
      words.forEach(function(w){var test=cur?cur+' '+w:w;if(ctx.measureText(test).width>maxW&&cur){lines.push(cur);cur=w}else cur=test});
      if(cur)lines.push(cur);return lines;
    }
    btn.addEventListener('click',async function(){
      var old=btn.textContent;btn.disabled=true;btn.textContent='جاري التجهيز...';
      try{
        try{await document.fonts.load('700 56px Amiri')}catch(e){}
        var c=document.createElement('canvas');c.width=1080;c.height=1350;var x=c.getContext('2d');
        var logo=await new Promise(function(res){var im=new Image();im.onload=function(){res(im)};im.onerror=function(){res(null)};im.src=LOGO});
        var bgImg=await new Promise(function(res){var im=new Image();im.onload=function(){res(im)};im.onerror=function(){res(null)};im.src='img/mina-bg.jpg'});
        try{await document.fonts.load('700 52px "Cormorant Garamond"')}catch(e){}
        function rr(a,b,w,h,r){x.beginPath();x.moveTo(a+r,b);x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
        function cross(cx,cy,sz){x.beginPath();x.moveTo(cx,cy-sz);x.lineTo(cx,cy+sz);x.moveTo(cx-sz*.6,cy-sz*.35);x.lineTo(cx+sz*.6,cy-sz*.35);x.stroke()}
        function paintCard(lg,bg){
          x.setTransform(1,0,0,1,0,0);x.globalAlpha=1;
          if(bg){
            var sc=Math.max(1080/bg.width,1350/bg.height),bw=bg.width*sc,bh=bg.height*sc;
            x.drawImage(bg,(1080-bw)/2,(1350-bh)/2,bw,bh);
            var og=x.createLinearGradient(0,0,0,1350);og.addColorStop(0,'rgba(7,20,47,.35)');og.addColorStop(.45,'rgba(7,20,47,.2)');og.addColorStop(1,'rgba(7,20,47,.88)');
            x.fillStyle=og;x.fillRect(0,0,1080,1350);
          }else{
            var g=x.createRadialGradient(540,380,80,540,675,1000);g.addColorStop(0,'#1d4c9a');g.addColorStop(.55,'#0f2a5c');g.addColorStop(1,'#07142f');
            x.fillStyle=g;x.fillRect(0,0,1080,1350);
          }
          /* نقش صليب خفيف */
          x.save();x.globalAlpha=.08;x.strokeStyle='#e8b04a';x.lineWidth=3;
          for(var yy=40;yy<1350;yy+=110){for(var xx=(Math.round(yy/110)%2?40:95);xx<1080;xx+=110){cross(xx,yy,12)}}
          x.restore();
          /* الإطار الذهبي */
          x.strokeStyle='#e8b04a';x.lineWidth=6;rr(40,40,1000,1270,40);x.stroke();
          x.lineWidth=2;x.globalAlpha=.6;rr(62,62,956,1226,28);x.stroke();x.globalAlpha=1;
          /* اللوجو في الركن العلوي (بعيد عن وش القديس) */
          var LX=170,LY=175,LR=80;
          x.fillStyle='#e8b04a';x.beginPath();x.arc(LX,LY,LR+10,0,Math.PI*2);x.fill();
          x.fillStyle='#0f2a5c';x.beginPath();x.arc(LX,LY,LR,0,Math.PI*2);x.fill();
          if(lg){var ls=Math.max((LR*2-8)/lg.width,(LR*2-8)/lg.height),lw=lg.width*ls,lh1=lg.height*ls;x.save();x.beginPath();x.arc(LX,LY,LR-4,0,Math.PI*2);x.clip();x.drawImage(lg,LX-lw/2,LY-lh1/2,lw,lh1);x.restore()}
          /* لوح الآية */
          x.fillStyle='rgba(7,20,47,.74)';rr(110,430,860,530,36);x.fill();
          x.strokeStyle='#e8b04a';x.lineWidth=3;rr(110,430,860,530,36);x.stroke();
          x.textAlign='center';x.textBaseline='middle';
          x.fillStyle='#e8b04a';x.font='700 46px Amiri, serif';x.fillText('آية اليوم',540,490);
          x.strokeStyle='#e8b04a';x.lineWidth=3;x.globalAlpha=.8;
          x.beginPath();x.moveTo(270,540);x.lineTo(490,540);x.moveTo(590,540);x.lineTo(810,540);x.stroke();x.globalAlpha=1;
          cross(540,540,13);
          var lines=[],fs,lineH;
          for(fs=72;fs>=38;fs-=4){x.font='700 '+fs+'px Amiri, serif';lines=wrap(x,'«'+t+'»',760);lineH=fs*1.55;if(lines.length*lineH<=280)break}
          x.fillStyle='#f7f2e6';x.font='700 '+fs+'px Amiri, serif';
          var y0=735-(lines.length-1)*lineH/2;
          lines.forEach(function(l,i){x.fillText(l,540,y0+i*lineH)});
          x.fillStyle='#e8b04a';x.font='700 40px Amiri, serif';x.direction='rtl';x.fillText(v[1],540,905);x.direction='ltr';
          /* التذييل */
          x.strokeStyle='#e8b04a';x.lineWidth=2;x.globalAlpha=.7;
          x.beginPath();x.moveTo(380,1030);x.lineTo(490,1030);x.moveTo(590,1030);x.lineTo(700,1030);x.stroke();x.globalAlpha=1;
          cross(540,1030,11);
          x.fillStyle='#f7f2e6';x.font='700 64px "Cormorant Garamond", serif';x.fillText('Ava Mina Family',540,1118);
          x.fillStyle='#e8b04a';x.font='700 34px Amiri, serif';x.fillText('أسرة آڤا مينا · سوهاج',540,1186);
        }
        paintCard(logo,bgImg);
        /* لو الصور من مصدر مختلف الكانفاس بيتقفل؛ نرسم من غير الصور */
        try{x.getImageData(0,0,1,1)}catch(e){c.width=1080;c.height=1350;paintCard(null,null)}
        c.toBlob(async function(blob){
          if(!blob){toast('ماقدرتش أجهز الصورة دلوقتي، جرّب تاني');return}
          var file=new File([blob],'ava-mina-verse.png',{type:'image/png'});
          if(navigator.canShare&&navigator.canShare({files:[file]})){
            try{await navigator.share({files:[file],title:'آية اليوم'});return}catch(e){if(e&&e.name==='AbortError')return}
          }
          var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ava-mina-verse.png';
          document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},2000);
        },'image/png');
      }catch(e){toast('ماقدرتش أجهز الصورة دلوقتي، جرّب تاني')}
      finally{btn.disabled=false;btn.textContent=old}
    });
  })();
  /* شريط التنقل: يخفي الزرار لو القسم مخفي */
  (function(){
    var bar=document.getElementById('qbar');if(!bar)return;
    var sync=function(){bar.querySelectorAll('a').forEach(function(a){var t=document.querySelector(a.getAttribute('href'));var w=!t||t.hidden;if(a.hidden!==w)a.hidden=w})};
    sync();
    if('MutationObserver' in window)new MutationObserver(sync).observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden']});
  })();
  /* ===== وضع التطبيق المثبّت: كل قسم صفحة مستقلة من الشريط السفلي ===== */
  var TILE_ICO={about:'about',servants:'servants',rules:'rules',events:'events',competitions:'competitions',daily:'daily',archive:'archive',gallery:'gallery',join:'join',voice:'voice',contact:'contact',first:'first',audio:'audio',resources:'resources',forms:'forms'};
  function buildTiles(){
    var box=document.getElementById('tiles');if(!box)return;
    var en=document.documentElement.lang==='en';
    var h='<a href="#verse" class="tile"><i>'+icon('verse')+'</i><b>'+(en?'Verse of the day':'آية اليوم')+'</b></a><button type="button" class="tile" data-hy><i>'+icon('hymns')+'</i><b>'+(en?'Hymns':'الترانيم')+'</b></button>';
    document.querySelectorAll('.sec').forEach(function(s){
      if(!s.id||s.id==='bday'||s.hidden)return;
      var t=(s.querySelector('h2')||{}).textContent||s.id;
      h+='<a href="#'+s.id+'" class="tile"><i>'+icon(TILE_ICO[s.id]||'pin')+'</i><b>'+t.trim()+'</b></a>';
    });
    h+='<button type="button" class="tile" data-search><i>'+icon('search')+'</i><b>'+(en?'Search':'بحث')+'</b></button>';
    h+='<a href="#account" class="tile"><i>'+icon('account')+'</i><b>'+(en?'My account':'حسابي')+'</b></a>';
    h+='<a href="#settings" class="tile"><i>'+icon('settings')+'</i><b>'+(en?'Settings':'الإعدادات')+'</b></a>';
    box.innerHTML=h;
  }
  /* رسائل احترافية داخل الصفحة بدل alert */
  function toast(msg,kind){
    msg=T(msg);
    var t=document.getElementById('toast');
    if(!t){t=document.createElement('div');t.id='toast';t.setAttribute('role','status');t.setAttribute('aria-live','polite');document.body.appendChild(t)}
    t.textContent=msg;t.className='toast show'+(kind==='bad'?' bad':kind==='good'?' good':'');
    clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove('show')},3800);
  }
  window.toast=toast;
  /* ===== اللغة والثيم داخل التطبيق ===== */
  var EN={"تخطي للمحتوى": "Skip to content", "الترانيم": "Hymns", "الترنيمة": "Hymn", "الرئيسية": "Home", "عن الأسرة": "About", "الخدام": "Servants", "خدام الأسرة": "Servants", "القواعد": "Rules", "قواعد الأسرة": "Family Rules", "الفعاليات": "Events", "فعاليات الأسرة": "Events", "المسابقات": "Competitions", "مسابقات الأسرة": "Competitions", "أول مرة؟": "New here?", "أول مرة تزورنا؟ 👋": "New here? 👋", "الصوتيات": "Audio", "مكتبة الصوتيات": "Audio Library", "المكتبة": "Library", "سؤال اليوم": "Question", "الأرشيف": "Archive", "أرشيف الأسرة": "Family Archive", "الصور": "Photos", "صور الأسرة": "Family Photos", "صلاة واقتراحات": "Prayer & Suggestions", "تواصل": "Contact", "تواصل معنا": "Contact us", "تسجيل عضو": "Register", "سجّل": "Register", "سجّل في الأسرة": "Join the family", "تعرّف علينا": "About us", "آية اليوم": "Verse of the day", "نسخ الآية": "Copy verse", "شارك الآية كصورة": "Share verse as image", "جامعيين علوم مالية وإدارية بسوهاج": "Finance & Admin students, Sohag", "أسرة آڤا مينا": "Ava Mina Family", "وسط مريح للكل، قايم على المحبة والخدمة والصلاة": "A comfortable place for everyone, built on love, service and prayer", "نماذج الأسرة": "Family Forms", "قريباً": "Coming soon", "الكل": "All", "مفتوحة": "Open", "انتهت": "Ended", "التعارف": "Intro", "تسجيل": "Register", "اختار": "Choose", "الاسم بالكامل": "Full name", "رقم الموبايل": "Phone number", "رقم الهاتف": "Phone number", "النوع": "Gender", "بنت": "Female", "ولد": "Male", "الإيميل": "Email", "تاريخ الميلاد": "Birth date", "المحافظة": "Governorate", "أب اعترافك وأهلك": "Confessor & family", "السكن": "Residence", "الدراسة": "Study", "الأهل والكنيسة": "Family & Church", "ابدأ التسجيل دلوقتي": "Start registration", "الالتزام بالقواعد": "Commitment to rules", "🎂 النهارده عيد ميلاد": "🎂 Birthdays today", "انتظرونا في": "Stay tuned for", "رجوع": "Back", "تحديث الآن": "Update now", "الإعدادات": "Settings", "اللغة": "Language", "الثيم": "Theme", "الترنيمة": "Hymn", "سياسة الخصوصية": "Privacy policy", "ثبّت الموقع كتطبيق على موبايلك": "Install the app on your phone", "🔔 فعّل الإشعارات اليومية": "🔔 Enable daily notifications", "🔕 إلغاء الإشعارات": "🔕 Turn off notifications", "🔔 الإشعارات مفعّلة": "🔔 Notifications on", "🔔 فعّل الإشعارات اليومية ": "🔔 Enable daily notifications", "اتلغت الإشعارات، تقدر تفعّلها في أي وقت": "Notifications turned off. You can enable them anytime", "ماقدرناش نلغي الإشعارات، جرّب تاني": "Could not turn off notifications. Try again", "لازم تسمح بالإشعارات عشان توصلك آية اليوم": "Please allow notifications to get the daily verse", "ماقدرناش نفعّل الإشعارات، جرّب تاني. لو على الآيفون لازم تضيف الموقع للشاشة الرئيسية الأول": "Could not enable notifications. On iPhone, add the site to your home screen first", "في تحديث جديد للتطبيق": "A new version is available", "أنت مش متصل بالنت، بتشوف آخر نسخة محفوظة": "You are offline. Showing the last saved version", "العربية": "العربية", "English": "English", "تركواز": "Teal", "بنفسجي": "Plum", "أخضر": "Forest", "نحاسي": "Ember"};
  function T(k){var l=document.documentElement.lang;return (l==='en'&&EN[k])?EN[k]:k}
  function DICT(){return Object.assign({},EN,window.AVA_EN_EXTRA||{})}
  function trNode(n,en,D){
    var par=n.parentNode;if(!par||/^(SCRIPT|STYLE)$/.test(par.nodeName))return;
    if(n.__ar===undefined)n.__ar=n.nodeValue;
    var src=n.__ar,k=src.trim();
    n.nodeValue=(en&&D[k])?src.replace(k,D[k]):src;
  }
  function trAttrs(root,en,D){
    var list=(root.querySelectorAll?root.querySelectorAll('[placeholder],[aria-label],[alt],[title]'):[]);
    Array.prototype.forEach.call(list,function(e){
      ['placeholder','aria-label','alt','title'].forEach(function(a){
        if(!e.hasAttribute(a))return;
        if(!e.__ar)e.__ar={};
        if(e.__ar[a]===undefined)e.__ar[a]=e.getAttribute(a);
        var v=e.__ar[a].trim();
        e.setAttribute(a,(en&&D[v])?D[v]:e.__ar[a]);
      });
    });
  }
  function applyLang(l){
    var en=(l==='en');
    try{localStorage.setItem('ava_lang',en?'en':'ar')}catch(e){}
    document.documentElement.lang=en?'en':'ar';
    document.documentElement.dir=en?'ltr':'rtl';
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null);var n;
    while((n=w.nextNode())){
      var par=n.parentNode;if(!par||/^(SCRIPT|STYLE)$/.test(par.nodeName))continue;
      if(n.__ar===undefined)n.__ar=n.nodeValue;
      trNode(n,en,DICT());
    }
    trAttrs(document.body,en,DICT());
    var nd=document.querySelector('.hero h1');
    var sb2=document.querySelector('.qbar');
    if(window.__lang_done){}
    window.__lang_done=true;
  }
  window.applyLang=applyLang;
  window.avaReloadData=function(){try{if(typeof loadDynamic==='function')loadDynamic()}catch(e){}};
  /* أي محتوى يتضاف بعد كده (من الدالات أو الداتا) يتترجم لو اللغة إنجليزي */
  new MutationObserver(function(ms){
    if(document.documentElement.lang!=='en')return;
    var D=DICT();
    ms.forEach(function(m){
      Array.prototype.forEach.call(m.addedNodes,function(nd){
        if(nd.nodeType===3){trNode(nd,true,D);return}
        if(nd.nodeType!==1)return;
        var w=document.createTreeWalker(nd,NodeFilter.SHOW_TEXT,null),t;
        while((t=w.nextNode()))trNode(t,true,D);
        trAttrs(nd,true,D);
      });
    });
  }).observe(document.body,{childList:true,subtree:true});
  function setTheme(t){
    try{localStorage.setItem('ava_app_theme_v2',t)}catch(e){}
    document.documentElement.setAttribute('data-apptheme',t);
  }
  function openSettings(){
    var o=document.getElementById('appset');
    if(!o){
      o=document.createElement('div');o.id='appset';o.className='appset';
      o.innerHTML='<div class="appset-box" role="dialog" aria-modal="true"><div class="appset-hd"><b></b><button type="button" class="appset-x" aria-label="إغلاق">×</button></div><p class="appset-l"></p><div class="appset-seg" data-seg="lang"></div><p class="appset-l"></p><div class="appset-th" data-seg="theme"></div></div>';
      document.body.appendChild(o);
      o.addEventListener('click',function(e){if(e.target===o||e.target.closest('.appset-x'))o.classList.remove('open');
        var lb=e.target.closest('[data-lang]');if(lb){applyLang(lb.dataset.lang);refreshSettings();buildTiles()}
        var tb=e.target.closest('[data-theme-set]');if(tb){setTheme(tb.dataset.themeSet);refreshSettings()}
      });
    }
    refreshSettings();
    o.classList.add('open');
  }
  function refreshSettings(){
    var o=document.getElementById('appset');if(!o)return;
    var en=document.documentElement.lang==='en',cur=document.documentElement.getAttribute('data-apptheme')||'calm';
    o.querySelector('.appset-hd b').textContent=en?'Settings':'الإعدادات';
    var ls=o.querySelectorAll('.appset-l');ls[0].textContent=en?'Language':'اللغة';ls[1].textContent=en?'Theme':'الثيم';
    o.querySelector('[data-seg="lang"]').innerHTML='<button type="button" data-lang="ar" class="'+(en?'':'on')+'">العربية</button><button type="button" data-lang="en" class="'+(en?'on':'')+'">English</button>';
    var names={calm:en?'Navy (default)':'أزرق ليلي (افتراضي)',teal:en?'Teal':'تركواز',plum:en?'Plum':'بنفسجي',forest:en?'Forest':'أخضر',ember:en?'Ember':'نحاسي'};
    o.querySelector('[data-seg="theme"]').innerHTML=Object.keys(names).map(function(k){return '<button type="button" data-theme-set="'+k+'" class="sw-'+k+(k===cur?' on':'')+'"><i></i>'+names[k]+'</button>'}).join('');
  }
  (function(){try{var t=localStorage.getItem('ava_app_theme_v2');document.documentElement.setAttribute('data-apptheme',t||'calm')}catch(e){document.documentElement.setAttribute('data-apptheme','calm')}})();
  try{if(localStorage.getItem('ava_lang')==='en')document.addEventListener('DOMContentLoaded',function(){applyLang('en');if(window.avaSyncLangBtn)window.avaSyncLangBtn()})}catch(e){}

  function appTab(id){
    if(!document.documentElement.classList.contains('app'))return false;
    var home=(id==='home'),verse=(id==='verse');
    document.querySelectorAll('.sec').forEach(function(s){s.classList.toggle('tabhide',home?s.id!=='bday':s.id!==id)});
    document.querySelectorAll('.vod').forEach(function(e){e.classList.toggle('tabhide',!verse)});
    document.querySelectorAll('footer,#home,#tiles').forEach(function(e){e.classList.toggle('tabhide',!home&&e.id!=='tiles'||(e.id==='tiles'&&!home))});
    document.querySelectorAll('.qbar a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+(verse?'':id))});
    document.documentElement.classList.toggle('onhome',home);
    var nv=document.querySelector('.nav');if(nv)nv.classList.remove('open');document.body.classList.remove('menu-open');
    if(window.__lenis)window.__lenis.scrollTo(0,{immediate:true});else window.scrollTo(0,0);
    if(window.ScrollTrigger&&ScrollTrigger.refresh)ScrollTrigger.refresh();
    if(!fromPop&&(history.state||{}).tab!==id){try{history.pushState({tab:id},'')}catch(e){}}
    setTabBar(id);
    return true;
  }
  var TAB_TITLES={};
  function tabTitle(id){
    if(id==='verse')return 'آية اليوم';
    var el=document.getElementById(id);var h=el&&el.querySelector('h2');return h?h.textContent.trim():'';
  }
  function setTabBar(id){
    var bar=document.getElementById('tabbar');
    if(!bar){bar=document.createElement('div');bar.id='tabbar';bar.className='tabbar';bar.innerHTML='<button type="button" class="tabback" aria-label="رجوع"><span aria-hidden="true">›</span> رجوع</button><b class="tabtitle"></b>';document.body.appendChild(bar);bar.querySelector('.tabback').onclick=function(){if(history.state&&history.state.tab)history.back();else appTab('home')}}
    var show=document.documentElement.classList.contains('app')&&id!=='home';
    bar.hidden=!show;
    if(show)bar.querySelector('.tabtitle').textContent=tabTitle(id);
  }
  var fromPop=false;
  window.addEventListener('popstate',function(e){fromPop=true;appTab((e.state&&e.state.tab)||'home');fromPop=false});
  window.appTab=appTab;
  window.openSettings=openSettings;
  document.addEventListener('click',function(e){
    if(!document.documentElement.classList.contains('app'))return;
    var hyb=e.target.closest&&e.target.closest('[data-hy]');if(hyb){e.preventDefault();e.stopPropagation();var hyEl=document.getElementById('hy');if(hyEl)hyEl.click();return}
    var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;
    var id=a.getAttribute('href').slice(1);if(id==='top')id='home';
    if(id==='settings'){e.preventDefault();e.stopPropagation();openSettings();return}
    var t=document.getElementById(id);
    if(id==='home'||id==='verse'||(t&&t.classList.contains('sec'))){e.preventDefault();e.stopPropagation();appTab(id)}
  },true);
  if('MutationObserver' in window)new MutationObserver(function(){if(document.documentElement.classList.contains('app'))buildTiles()}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden']});
  if(document.documentElement.classList.contains('app')){
    var h0=(location.hash||'').slice(1);var t0=document.getElementById(h0);
    appTab(t0&&t0.classList.contains('sec')?h0:'home');
    buildTiles();setTimeout(function(){buildTiles();try{if(localStorage.getItem('ava_lang')==='en')applyLang('en');buildTiles()}catch(e){}},1500);setTimeout(function(){buildTiles()},4000);
  }
  /* نافذة التفاصيل الصغيرة: الكروت بتفتح تفاصيلها لما تتضغط */
  (function(){
    var sh=document.createElement('div');sh.className='sheet';sh.hidden=true;
    sh.innerHTML='<div class="sheet-box" role="dialog" aria-modal="true"><button class="sheet-x" type="button" aria-label="قفل">×</button><div class="sheet-in"></div></div>';
    document.body.appendChild(sh);
    var box=sh.querySelector('.sheet-in');
    function close(){sh.hidden=true;document.body.style.overflow=''}
    function open(el){
      if(el.tagName==='LI'){
        var im=el.querySelector('img'),nm=el.querySelector('b');
        box.innerHTML='<article class="leader"><div class="ring">'+(im?im.outerHTML:'')+'</div><div><span class="role">'+esc(el.dataset.role||'خادم في الأسرة')+'</span><h3 dir="ltr">'+esc(nm?nm.textContent:'')+'</h3></div></article>';
      }else box.innerHTML=el.innerHTML;
      sh.hidden=false;document.body.style.overflow='hidden';
      sh.querySelector('.sheet-x').focus();
    }
    sh.addEventListener('click',function(e){if(e.target===sh||e.target.closest('.sheet-x'))close()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!sh.hidden)close()});
    document.addEventListener('click',function(e){
      if(e.target.closest('a,button,input,select,textarea,label,.sheet'))return;
      var c=e.target.closest('#evs .ev, #cps .cp, .leaders .leader, #crew li');
      if(c)open(c);
    });
  })();
  if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol)){
    var swReloaded=false;
    navigator.serviceWorker.addEventListener('controllerchange',function(){if(swReloaded)return;swReloaded=true;location.reload()});
    navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(function(reg){
      var offer=function(w){
        if(document.getElementById('updbar'))return;
        var bar=document.createElement('div');bar.id='updbar';bar.className='updbar';bar.setAttribute('role','status');
        var t=document.createElement('span');t.textContent='في تحديث جديد للتطبيق';
        var b=document.createElement('button');b.type='button';b.textContent='تحديث الآن';
        b.onclick=function(){w.postMessage('SKIP_WAITING')};
        bar.appendChild(t);bar.appendChild(b);document.body.appendChild(bar);
      };
      if(reg.waiting&&navigator.serviceWorker.controller)offer(reg.waiting);
      reg.addEventListener('updatefound',function(){
        var w=reg.installing;if(!w)return;
        w.addEventListener('statechange',function(){if(w.state==='installed'&&navigator.serviceWorker.controller)offer(w)});
      });
    }).catch(function(){});
  }
  /* شريط "مفيش نت": بيظهر لما الاتصال يقطع */
  var offBar=function(){
    var on=navigator.onLine,el=document.getElementById('offbar');
    if(!on&&!el){el=document.createElement('div');el.id='offbar';el.className='offbar';el.textContent='أنت مش متصل بالنت، بتشوف آخر نسخة محفوظة';document.body.appendChild(el)}
    if(on&&el)el.remove();
  };
  addEventListener('online',offBar);addEventListener('offline',offBar);offBar();
})();

/* ---------- حركة وتأثيرات v2 ---------- */
(function(){
  var sp=$('#splash');
  function hideSplash(){var e=sp;if(e){sp=null;e.classList.add('out');setTimeout(function(){e.remove()},800)}}
  var seen=null;try{seen=sessionStorage.getItem('ava_splash')}catch(e){}
  if(RM||seen){if(sp){sp.remove();sp=null}}else{try{sessionStorage.setItem('ava_splash','1')}catch(e){}
    var t0=Date.now();addEventListener('load',function(){setTimeout(hideSplash,Math.max(0,(LITE?400:900)-(Date.now()-t0)))});setTimeout(hideSplash,2500)}
  if(RM)return;
  /* ظهور متتابع للخدام وعناوين الأقسام */
  observe($$('#crew li'));
  $$('.sh h2').forEach(function(h){
    if(!('IntersectionObserver' in window))return;
    var o=new IntersectionObserver(function(en){if(en[0].isIntersecting){(h.dataset.split?h.querySelectorAll('.sc'):[h]).forEach(function(x){x.classList.add('shine')});o.disconnect()}},{threshold:.6});o.observe(h);
  });
  var fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  /* بارالاكس خفيف للهيرو */
  var hi=$('.hero-in'),hero=$('#home'),py=false;
  if(hi&&hero&&!LITE)addEventListener('scroll',function(){if(py)return;py=true;requestAnimationFrame(function(){
    var y=scrollY;if(y<hero.offsetHeight){hi.style.transform='translateY('+(y*.12).toFixed(1)+'px)';hi.style.opacity=(1-y/(hero.offsetHeight*1.1)).toFixed(2)}py=false})},{passive:true});
  if(!fine)return;
  /* توهج ذهبي ناعم يتبع الماوس */
  var gl=$('#glow'),gx=0,gy=0,gp=false;gl.style.display='block';
  addEventListener('pointermove',function(e){gx=e.clientX;gy=e.clientY;gl.style.opacity=1;if(!gp){gp=true;requestAnimationFrame(function(){gl.style.transform='translate('+gx+'px,'+gy+'px)';gp=false})}},{passive:true});
  document.addEventListener('pointerleave',function(){gl.style.opacity=0});
  /* أزرار مغناطيسية */
  document.addEventListener('pointermove',function(e){
    var b=e.target.closest&&e.target.closest('.btn.gold,.btn.pri');
    $$('.btn.mag').forEach(function(x){if(x!==b){x.style.transform='';x.classList.remove('mag')}});
    if(!b||b.disabled)return;var r=b.getBoundingClientRect();
    b.classList.add('mag');b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.12).toFixed(1)+'px,'+((e.clientY-r.top-r.height/2)*.18-2).toFixed(1)+'px)';
  },{passive:true});
  /* ميل ثلاثي الأبعاد للكروت */
  document.addEventListener('pointermove',function(e){
    var c=e.target.closest&&e.target.closest('.ev,.cp,.poll,.quiz');
    $$('.t3').forEach(function(x){if(x!==c){x.style.transform='';x.classList.remove('t3')}});
    if(!c||c.id==='quiz'||c.id==='poll')return;
    var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py2=(e.clientY-r.top)/r.height-.5;
    c.classList.add('t3');c.style.transform='perspective(900px) rotateX('+(-py2*5).toFixed(2)+'deg) rotateY('+(px*5).toFixed(2)+'deg) translateY(-3px)';
  },{passive:true});
})();

/* ---------- حجم الخط (بيتحفظ في المتصفح) ---------- */
(function(){
  var ft=$('footer');if(!ft)return;
  var fs=parseInt(store('ava_fs')||'0',10)||0;
  var root=document.documentElement;
  var apply=function(){root.classList.toggle('fs1',fs===1);root.classList.toggle('fs2',fs===2)};
  apply();
  var b=document.createElement('button');b.type='button';b.className='btn ghost sm';
  var lab=function(){b.textContent='حجم الخط: '+(fs===0?'عادي':fs===1?'كبير':'كبير جداً')};
  lab();
  b.addEventListener('click',function(){fs=(fs+1)%3;store('ava_fs',String(fs));apply();lab()});
  ft.appendChild(b);
})();

/* ---------- تأثيرات اللمس + زرار تشغيل الحركات ---------- */
(function(){
  var ft=$('footer');
  if(ft){
    var b=document.createElement('button');b.type='button';b.className='btn ghost sm';
    b.textContent=RM?'شغّل الحركات والتأثيرات':'اقفل الحركات والتأثيرات';
    b.addEventListener('click',function(){store('ava_motion',RM?'1':'0');location.reload()});
    ft.appendChild(b);
  }
  if(RM||!matchMedia('(hover:none)').matches)return;
  /* توهج ذهبي يتبع الإصبع */
  var gl=$('#glow'),hide;
  gl.style.display='block';
  function mv(e){var t=e.touches?e.touches[0]:e;gl.style.opacity=1;gl.style.transform='translate('+t.clientX+'px,'+t.clientY+'px)';clearTimeout(hide);hide=setTimeout(function(){gl.style.opacity=0},900)}
  addEventListener('touchstart',mv,{passive:true});addEventListener('touchmove',mv,{passive:true});
})();

/* النوع: الشخص بيكتب بأي شكل (ولد/ولاد/صبي/بنت/بنات/انثى...)، والموقع بيحوّله لـ ولد أو بنت */
function normGender(x){
  var t=String(x||'').trim().replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/\s+/g,'');
  if(/^(ولد|اولاد|ولاد|صبي|ذكر|راجل|شاب)$/.test(t))return 'ولد';
  if(/^(بنت|بنات|انثي|فتاه|بنوته|ست)$/.test(t))return 'بنت';
  return null;
}
/* ---------- إعدادات الموقع (من لوحة الأدمن) ---------- */
(async function(){
  var sb=sbClient();if(!sb)return;
  try{
    var r=await sb.from('site_settings').select('key,value');if(r.error||!r.data)return;
    S={};r.data.forEach(function(x){S[x.key]=x.value||''});
    document.querySelectorAll('[data-t]').forEach(function(el){var tv=S['t_'+el.getAttribute('data-t')];if(tv&&tv.trim())el.textContent=tv.trim()});
    renderCustomSections(S);
    if(S.welcome_show==='0'){var w=$('.soon');if(w)w.hidden=true}
    var SP={lent:'violet',easter:'papyrus',christmas:'sage'};var uPal=null;try{uPal=localStorage.getItem('avaPal')}catch(e){}
    /* الألوان موحدة مع التطبيق: مفيش تغيير ألوان موسمي */
    /* صورة الغلاف: صورة الموسم من الأدمن، ولو مفيش بنستخدم الصورة الافتراضية أو اللي حددها الأدمن */
    var CK='cover_'+(['lent','easter','christmas'].indexOf(S.season)>=0?S.season:'');
    var cvp=S[CK]||S.cover_;
    if(cvp){var cvu=media(cvp);de.style.setProperty('--cover','url("'+cvu+'")');$$('[data-cover]').forEach(function(i){i.src=cvu})}
    /* إخفاء الأقسام اللي الأمين أخفاها من لوحة الأدمن */
    ['about','servants','rules','events','competitions','daily','archive','gallery','join','voice','contact','first','audio','resources','bday','forms'].forEach(function(id){
      if(S['hide_'+id]==='1'){var el=document.getElementById(id);if(el)el.hidden=true;var lk=document.querySelector('.links a[href="#'+id+'"]');if(lk)lk.hidden=true}});
    if(S.hide_hymn==='1'){var hideHy=function(){var hy=document.getElementById('hy'),ha=document.getElementById('hymn');if(hy)hy.hidden=true;if(ha)ha.pause()};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',hideHy);else hideHy()}
    var t=(S.announce_text||'').trim();
    if(t&&store('ava_ann')!==t){
      var a=document.createElement('div');a.id='ann';a.setAttribute('role','status');
      var l=safeUrl(S.announce_link);
      a.innerHTML=(l?'<a href="'+esc(l)+'" target="_blank" rel="noopener">'+esc(t)+'</a>':esc(t))+'<button type="button" aria-label="إغلاق">×</button>';
      a.querySelector('button').addEventListener('click',function(){store('ava_ann',t);a.remove()});
      document.body.insertBefore(a,document.body.firstChild);
    }
    try{pushInit()}catch(e){}
    try{loadBday()}catch(e){}
    try{
      var fr=await sb.from('forms').select('id,title,description,fields,show_on_site').eq('active',true);
      if(!fr.error&&fr.data)renderForms(fr.data);
    }catch(e){}
    if(store('ava_intro')!=='1'){
      setTimeout(function(){
        var ov=document.createElement('div');ov.className='intro';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-labelledby','introT');
        ov.innerHTML='<div class="intro-box"><h2 id="introT">أهلاً بيك في أسرة آڤا مينا 🙏</h2>'+
          '<p><b>التسجيل كعضو مهم جداً</b>، عشان:</p>'+
          '<ul><li>نتابعك ونطمّن عليك في أي وقت</li><li>توصلك الفعاليات والاجتماعات والتذكيرات</li><li>تتضم لجروب الأسرة وجروب فرقتك على واتساب</li><li>تشارك في سؤال اليوم وتجمع نقط</li></ul>'+
          '<p class="intro-n">التسجيل بياخد دقيقة، وبياناتك بتتحفظ بأمان ومحدش غير الأمناء بيشوفها.</p>'+
          '<div class="intro-a"><a class="btn gold" href="#join" data-intro>سجّل دلوقتي</a><button type="button" class="btn ghost" data-intro>بعدين</button></div></div>';
        document.body.appendChild(ov);
        var onKey=function(e){if(e.key==='Escape')closeIntro()};
        var closeIntro=function(){store('ava_intro','1');ov.remove();document.removeEventListener('keydown',onKey)};
        ov.addEventListener('click',function(e){if(e.target===ov||e.target.hasAttribute('data-intro'))closeIntro()});
        document.addEventListener('keydown',onKey);
        var first=ov.querySelector('a');if(first)first.focus();
      },1400);
    }
  }catch(e){}
})();

/* ---------- confetti لكارت Welcome Day ---------- */
(function(){
  var c=$('#conf'),h='';
  for(var i=0;i<16;i++)h+='<i style="left:'+(4+i*6)+'%;animation-delay:'+(Math.random()*6).toFixed(1)+'s;animation-duration:'+(5+Math.random()*4).toFixed(1)+'s"></i>';
  c.innerHTML=h;
})();

/* ---------- نموذج التسجيل (خطوتين) ---------- */
var jf=$('#jf'),step=1,picFile=null,prev=$('#prev');
function setStep(n){
  step=n;if(n===5&&!JR_T0)JR_T0=Date.now();
  $$('fieldset[data-step]',jf).forEach(function(fs){fs.hidden=(+fs.dataset.step!==n)});
  $('#jb').hidden=(n===1);$('#jn').hidden=(n===5);$('#js').hidden=(n!==5);
  $('#jp').style.width=(n*20)+'%';
  $$('.steps .s').forEach(function(s){s.classList.toggle('on',+s.dataset.s<=n);s.classList.toggle('cur',+s.dataset.s===n)});
  $('#jm').textContent='';$('#jm').className='msg';
}

jf.elements.nh.addEventListener('change',function(){
  var off=this.checked;$$('[data-hf]',jf).forEach(function(l){l.hidden=off;var i=l.querySelector('input');i.disabled=off;i.required=!off});
});
/* تاريخ الميلاد: يوم / شهر / سنة */
var DOB=(function(){
  var d=$('#bd'),m=$('#bm'),y=$('#by'),h=jf.elements.b,MN=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],i,t='<option value="">اليوم</option>';
  for(i=1;i<=31;i++)t+='<option value="'+i+'">'+AR(i)+'</option>';d.innerHTML=t;
  t='<option value="">الشهر</option>';MN.forEach(function(n,k){t+='<option value="'+(k+1)+'">'+n+'</option>'});m.innerHTML=t;
  var Y=new Date().getFullYear();t='<option value="">السنة</option>';for(i=Y-15;i>=Y-40;i--)t+='<option value="'+i+'">'+AR(i)+'</option>';y.innerHTML=t;
  function sync(){
    var dv=d.value,mv=m.value,yv=y.value,n=(dv?1:0)+(mv?1:0)+(yv?1:0);y.setCustomValidity('');h.value='';
    if(n===0){y.setCustomValidity('اختار تاريخ الميلاد (يوم وشهر وسنة)');return}
    if(n<3){y.setCustomValidity('كمّل تاريخ الميلاد: اليوم والشهر والسنة');return}
    var dt=new Date(+yv,+mv-1,+dv);
    if(dt.getMonth()!==+mv-1){y.setCustomValidity('التاريخ ده مش موجود، راجع اليوم والشهر');return}
    h.value=yv+'-'+('0'+mv).slice(-2)+'-'+('0'+dv).slice(-2);
  }
  [d,m,y].forEach(function(e){e.addEventListener('change',sync)});sync();return sync;
})();
/* الأرقام: ١١ رقم بالإنجليزي وبيبدأ بـ 01 */
$$('input[type=tel]',jf).forEach(function(e){
  e.addEventListener('input',function(){
    var v=e.value.replace(/[٠-٩]/g,function(c){return c.charCodeAt(0)-1632}).replace(/[۰-۹]/g,function(c){return c.charCodeAt(0)-1776}).replace(/\D/g,'').slice(0,11);
    if(v!==e.value)e.value=v;
    e.setCustomValidity(v&&!/^01[0-9]{9}$/.test(v)?(v.length<11?'الرقم لازم يكون ١١ رقم (كتبت '+AR(v.length)+' بس)':'الرقم لازم يبدأ بـ 01'):'');
  });
});
/* المحافظة ← المركز */
var EGY={"القاهرة":["مدينة نصر","مصر الجديدة","المعادي","حلوان","شبرا","الزيتون","عين شمس","المطرية","النزهة","السلام","التجمع الخامس","الشروق","بدر","العبور","15 مايو","المرج","الساحل","روض الفرج","وسط البلد","الزمالك","السيدة زينب","الخليفة","المقطم","البساتين","دار السلام","مصر القديمة","الأزبكية","الجمالية","الوايلي","الظاهر","حدائق القبة","الأميرية","القاهرة الجديدة"],"الجيزة":["الجيزة","إمبابة","الدقي","العجوزة","الهرم","فيصل","بولاق الدكرور","الوراق","أبو النمرس","الحوامدية","البدرشين","العياط","الصف","أطفيح","أوسيم","كرداسة","منشأة القناطر","6 أكتوبر","الشيخ زايد","الواحات البحرية","القرية الذكية"],"الإسكندرية":["المنتزه","شرق","وسط","غرب","الجمرك","العطارين","العجمي","الدخيلة","برج العرب","اللبان","كرموز","مينا البصل","المنتزه ثان","برج العرب الجديدة"],"القليوبية":["بنها","شبرا الخيمة","القناطر الخيرية","الخانكة","كفر شكر","طوخ","قليوب","شبين القناطر","العبور","الخصوص","قها"],"الشرقية":["الزقازيق","بلبيس","منيا القمح","أبو حماد","فاقوس","ههيا","أبو كبير","كفر صقر","الحسينية","ديرب نجم","مشتول السوق","أولاد صقر","الإبراهيمية","القرين","صان الحجر القبلية","العاشر من رمضان","الصالحية الجديدة","القنايات"],"الدقهلية":["المنصورة","طلخا","ميت غمر","دكرنس","أجا","منية النصر","السنبلاوين","المطرية","بلقاس","شربين","الجمالية","المنزلة","تمي الأمديد","نبروه","ميت سلسيل","بني عبيد","جمصة","الكردي"],"الغربية":["طنطا","المحلة الكبرى","كفر الزيات","زفتى","السنطة","بسيون","قطور","سمنود"],"المنوفية":["شبين الكوم","منوف","أشمون","الباجور","قويسنا","بركة السبع","تلا","الشهداء","السادات"],"البحيرة":["دمنهور","كفر الدوار","رشيد","إيتاي البارود","أبو حمص","الدلنجات","المحمودية","شبراخيت","كوم حمادة","إدكو","حوش عيسى","أبو المطامير","وادي النطرون","بدر","النوبارية الجديدة"],"كفر الشيخ":["كفر الشيخ","دسوق","فوه","مطوبس","بلطيم","الحامول","بيلا","الرياض","سيدي سالم","قلين","البرلس"],"دمياط":["دمياط","فارسكور","كفر سعد","الزرقا","كفر البطيخ","دمياط الجديدة","رأس البر"],"بورسعيد":["الشرق","العرب","الضواحي","المناخ","الزهور","بورفؤاد","الجنوب"],"الإسماعيلية":["الإسماعيلية","فايد","القنطرة شرق","القنطرة غرب","التل الكبير","أبو صوير","القصاصين"],"السويس":["السويس","الأربعين","عتاقة","فيصل","الجناين"],"شمال سيناء":["العريش","الشيخ زويد","رفح","بئر العبد","الحسنة","نخل"],"جنوب سيناء":["الطور","شرم الشيخ","دهب","نويبع","طابا","أبو رديس","أبو زنيمة","رأس سدر","سانت كاترين"],"الفيوم":["الفيوم","سنورس","إطسا","طامية","إبشواي","يوسف الصديق"],"بني سويف":["بني سويف","الواسطى","ناصر","إهناسيا","ببا","سمسطا","الفشن","نبسطا"],"المنيا":["المنيا","العدوة","مغاغة","بني مزار","مطاي","سمالوط","أبو قرقاص","ملوي","دير مواس"],"أسيوط":["أسيوط","ديروط","القوصية","أبنوب","منفلوط","أبو تيج","الغنايم","ساحل سليم","البداري","صدفا","الفتح","أسيوط الجديدة"],"سوهاج":["سوهاج","أخميم","البلينا","المراغة","المنشأة","دار السلام","جرجا","جهينة","ساقلتة","طما","طهطا","العسيرات","الكوثر"],"قنا":["قنا","أبو تشت","نجع حمادي","دشنا","الوقف","قفط","نقادة","فرشوط","قوص"],"الأقصر":["الأقصر","إسنا","أرمنت","الطود","البياضة","القرنة","الزينية"],"أسوان":["أسوان","دراو","كوم أمبو","نصر النوبة","إدفو","كلابشة","أبو سمبل"],"البحر الأحمر":["الغردقة","رأس غارب","سفاجا","القصير","مرسى علم","شلاتين","حلايب"],"الوادي الجديد":["الخارجة","الداخلة","الفرافرة","باريس","بلاط"],"مطروح":["مرسى مطروح","الحمام","العلمين","الضبعة","النجيلة","سيدي براني","السلوم","سيوة"]};
(function(){
  var g=jf.elements.g,m=jf.elements.m;
  g.addEventListener('change',function(){
    var l=EGY[g.value]||[];
    m.innerHTML='<option value="">'+(l.length?'اختار المركز / الحي':'اختار المحافظة الأول')+'</option>'+l.map(function(x){return '<option>'+x+'</option>'}).join('');
    m.disabled=!l.length;
  });
})();
/* قواعد الأسرة: لازم يوصل لآخرها قبل ما يوافق */
var JR_SEEN=false,JR_T0=0,JR_SECS=0,JR_IO=null;
function jrBuild(){
  JR_SEEN=false;JR_T0=0;JR_SECS=0;
  $('#jrules').innerHTML=RULES.map(function(r,i){return '<article class="jrl"><h4><span class="num">'+AR(i+1)+'</span>'+r.t+'</h4><div class="v">'+scripture(r.v)+'</div><p>'+r.x+'</p></article>'}).join('');
  var ok=jf.elements.ok;ok.checked=false;ok.disabled=true;$('#jrhint').hidden=false;
  function seen(){JR_SEEN=true;ok.disabled=false;$('#jrhint').hidden=true}
  if('IntersectionObserver' in window){
    if(JR_IO)JR_IO.disconnect();
    JR_IO=new IntersectionObserver(function(en){if(en[0].isIntersecting){seen();JR_IO.disconnect()}},{threshold:1});JR_IO.observe($('#jrend'));
  }else seen();
}
jrBuild();
function stepValid(n){
  var els=$$('fieldset[data-step="'+n+'"] input,fieldset[data-step="'+n+'"] select',jf);
  for(var i=0;i<els.length;i++){if(!els[i].checkValidity()){els[i].reportValidity();return false}}
  if(n===1&&!picFile){say($('#jm'),'لازم تضيف صورتك الشخصية الأول قبل ما تكمل','bad');$('#pic').focus();return false}
  return true;
}
$('#jn').addEventListener('click',function(){if(stepValid(step)){setStep(step+1);jf.scrollIntoView({behavior:'smooth',block:'start'})}});
$('#jb').addEventListener('click',function(){setStep(step-1)});
function shrink(file,max){
  return new Promise(function(res){
    var r=new FileReader();
    r.onload=function(){var im=new Image();im.onload=function(){
      var s=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);
      c.getContext('2d').drawImage(im,0,0,c.width,c.height);
      c.toBlob(function(b){res(b?new File([b],'photo.jpg',{type:'image/jpeg'}):file)},'image/jpeg',.82)};
      im.onerror=function(){res(file)};im.src=r.result};
    r.onerror=function(){res(file)};r.readAsDataURL(file);
  });
}
$('#pic').addEventListener('change',async function(){
  var f=this.files[0];if(!f){picFile=null;prev.hidden=true;return}
  picFile=await shrink(f,900);prev.src=URL.createObjectURL(picFile);prev.hidden=false;
});
var I_WA='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z"/></svg>';
var GROUP_MAIN='https://chat.whatsapp.com/FN8mVF0yXRi61zL3fK8WZQ?s=cl&p=a&mlu=4&ilr=4';
var GROUP_YEAR={'الأولى':'https://chat.whatsapp.com/EnJJpKiYQ2F3vgdVVAUlib?s=cl&p=a&mlu=4&ilr=4','الثانية':'https://chat.whatsapp.com/JwSc5RLXA8PJPPaMxWhpYi?s=cl&p=a&mlu=4&ilr=4','الثالثة':'https://chat.whatsapp.com/IZdO3ruouFE3ThVz00B5Fi?s=cl&p=a&mlu=4&ilr=4','الرابعة':'https://chat.whatsapp.com/E7o5appbQ753FVz2igdkXs?s=cl&p=a&mlu=4&ilr=4'};
function showGroups(y){
  var g=[{t:'الجروب العام والأساسي للأسرة',u:GROUP_MAIN}];
  if(GROUP_YEAR[y])g.push({t:'جروب الفرقة '+y,u:GROUP_YEAR[y]});
  $('#grps').innerHTML='<p class="note" style="margin:0">انضم للجروبات دي على واتساب:</p>'+g.map(function(x){return '<a class="btn gold" target="_blank" rel="noopener" href="'+x.u+'">'+x.t+'</a>'}).join('');
}
function say(el,t,cls){el.textContent=t;el.className='msg'+(cls?' '+cls:'')}
jf.addEventListener('submit',async function(e){
  e.preventDefault();
  if(jf.elements.website&&jf.elements.website.value)return; // خانة الحماية من البوتات
  if(step<5){if(stepValid(step))setStep(step+1);return}
  if(!JR_SEEN){say($('#jm'),'اقرا قواعد الأسرة لآخرها الأول','bad');return}
  if(!stepValid(5))return;
  var v=function(n){return jf.elements[n].value.trim()},msg=$('#jm'),btn=$('#js');
  JR_SECS=Math.max(1,Math.round((Date.now()-JR_T0)/1000));
  btn.disabled=true;say(msg,'جاري التسجيل…');
  var sb=sbClient();
  for(var w=0;!sb&&w<16;w++){await new Promise(function(r){setTimeout(r,250)});sb=sbClient()}
  if(!sb){say(msg,'الموقع مش متصل بقاعدة البيانات دلوقتي، جرّب تاني بعد شوية أو كلّم أمين الأسرة','bad');btn.disabled=false;return}
  try{var dq=await sb.rpc('member_exists',{p_phone:v('p'),p_name:v('n'),p_birth:v('b')||null});
    if(!dq.error&&dq.data===true){say(msg,'انت متسجل في الأسرة قبل كده، مش محتاج تسجل تاني. لو عايز تعدّل بياناتك كلّم أمين الأسرة','bad');btn.disabled=false;return}
  }catch(e){}
  var stage='';
  try{
    var id=uuid(),path=null;stage='photo';
    if(picFile){path=id+'.jpg';var u=await sb.storage.from('member-photos').upload(path,picFile,{contentType:'image/jpeg'});if(u.error)throw u.error}
    var nh=jf.elements.nh.checked;
    var gd=normGender(v('gn'));
    if(!gd){say(msg,'اكتب النوع: ولد أو بنت','bad');btn.disabled=false;return}
    var row0={id:id,gender:gd,full_name:v('n'),phone:v('p'),email:v('e')||null,year:v('y'),department:v('d'),section:v('s2'),housing_name:nh?'لا يوجد سكن':v('h1'),housing_desc:nh?null:v('h2'),landlord_name:nh?null:v('ln'),landlord_phone:nh?null:v('lp'),governorate:v('g'),district:v('m'),village:v('v'),denomination:v('dn'),confessor_name:v('cn'),confessor_phone:v('cp'),guardian_type:v('gt'),guardian_phone:v('gp'),rules_read_secs:JR_SECS,birth_date:v('b')||null,joined_year:v('j')?+v('j'):null,skills:v('s')||null,prev_service:v('x')==='نعم',photo_path:path,agreed:true};
    stage='data';var r=await sb.from('members').insert(row0);
    if(r.error)throw r.error;
    if(window.avaAfterRegister)window.avaAfterRegister(v('p'));
    showGroups(v('y'));jf.reset();DOB();jf.elements.nh.dispatchEvent(new Event('change'));jf.elements.g.dispatchEvent(new Event('change'));jrBuild();picFile=null;prev.hidden=true;setStep(1);jf.hidden=true;$('#done').hidden=false;greet(v('n'));$('#done').scrollIntoView({behavior:'smooth',block:'center'});
  }catch(err){
    if(err&&err.code==='23505'){say(msg,'انت متسجل في الأسرة قبل كده، مش محتاج تسجل تاني','bad');btn.disabled=false;return}
    var em=String((err&&(err.message||err.error_description))||err||'');
    say(msg,'التسجيل ماتحفظش ('+(stage==='photo'?'رفع الصورة':'حفظ البيانات')+'): '+em.slice(0,140)+(/row-level|policy/i.test(em)?' (لازم الأمين يشغّل update-11.sql في Supabase)':'')+(/column|schema/i.test(em)?' (لازم الأمين يشغّل update-10.sql في Supabase)':' — جرّب تاني أو كلّم أمين الأسرة'),'bad');
  }
  btn.disabled=false;
});
function copyText(t,done){
  function fb(){var ta=document.createElement('textarea');ta.value=t;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();var ok=false;try{ok=document.execCommand('copy')}catch(e){}ta.remove();done(ok)}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){done(true)},fb)}else fb();
}
$('#again').addEventListener('click',function(){$('#done').hidden=true;jf.hidden=false;setStep(1);jf.scrollIntoView({behavior:'smooth'})});
setStep(1);

/* ---------- صلاة + اقتراحات ---------- */
var tabs=[['#t-pr','#p-pr'],['#t-sg','#p-sg']];
function pick(i){tabs.forEach(function(t,k){var on=k===i;$(t[0]).setAttribute('aria-selected',String(on));$(t[0]).tabIndex=on?0:-1;$(t[1]).hidden=!on})}
tabs.forEach(function(t,i){
  $(t[0]).addEventListener('click',function(){pick(i)});
  $(t[0]).addEventListener('keydown',function(e){if(e.key==='ArrowLeft'||e.key==='ArrowRight'){var j=1-i;pick(j);$(tabs[j][0]).focus()}});
});
pick(0);
function throttled(k,ms){var t=+store(k)||0;return Date.now()-t<ms}
$('#pa').addEventListener('change',function(){var n=$('#pn');n.disabled=this.checked;if(this.checked)n.value=''});
function sendSimple(opts){
  var msg=$(opts.msg),ta=$(opts.ta),btn=$(opts.btn),body=ta.value.trim(),sb=sbClient();
  if(ta.form&&ta.form.elements.website&&ta.form.elements.website.value){say(msg,opts.ok,'good');ta.value='';return} // بوت: بنقوله تمام ومانبعتش
  if(body.length<3){say(msg,'اكتب رسالتك الأول','bad');ta.focus();return}
  if(!sb){say(msg,'الإرسال هيشتغل بعد ما الموقع يتربط بقاعدة البيانات','bad');return}
  if(throttled(opts.key,30000)){say(msg,'استنى شوية قبل ما تبعت مرة تانية','bad');return}
  btn.disabled=true;say(msg,'جاري الإرسال');
  sb.from(opts.table).insert(opts.row(body)).then(function(r){
    if(r.error){say(msg,'حصلت مشكلة، جرّب تاني','bad')}
    else{ta.value='';store(opts.key,String(Date.now()));say(msg,opts.ok,'good');if(opts.after)opts.after()}
    btn.disabled=false;
  },function(){say(msg,'حصلت مشكلة في الاتصال، جرّب تاني','bad');btn.disabled=false});
}
$('#p-pr').addEventListener('submit',function(e){e.preventDefault();sendSimple({msg:'#pm',ta:'#pb',btn:'#pbtn',key:'avaPr',table:'prayers',ok:'وصل طلبك، هنفتكرك في صلواتنا ❤️',row:function(b){return{name:$('#pa').checked?null:($('#pn').value.trim()||null),body:b}}})});
$('#p-sg').addEventListener('submit',function(e){e.preventDefault();sendSimple({msg:'#sm',ta:'#sb',btn:'#sbtn',key:'avaSg',table:'suggestions',ok:'وصل اقتراحك، شكراً ليك ❤️',row:function(b){return{body:b}}})});

/* ---------- التواصل ---------- */
function fmtNum(n){return '+'+n.slice(0,2)+' '+n.slice(2,4)+' '+n.slice(4,8)+' '+n.slice(8)}
function phoneCard(title,n){
  return '<article class="cc rv spot"><span class="ico">'+I_PH+'</span><h3>'+title+'</h3><div class="num">'+fmtNum(n)+'</div><div class="row"><a class="btn gold sm" href="https://wa.me/'+n+'" target="_blank" rel="noopener">واتساب</a><a class="btn line sm" href="tel:+'+n+'">اتصال</a><button class="btn line sm" type="button" data-copy="+'+n+'">نسخ الرقم</button></div></article>';
}
$('#contacts').innerHTML='<article class="cc rv spot"><span class="ico">'+I_FB+'</span><h3>صفحة الأسرة على فيسبوك</h3><div class="num" style="font-size:18px;letter-spacing:0">Ava Mina Family</div><div class="row"><a class="btn gold sm" href="'+CONFIG.facebook+'" target="_blank" rel="noopener">افتح الصفحة</a></div></article><article class="cc rv spot"><span class="ico">'+I_WA+'</span><h3>الجروب الرسمي للأسرة</h3><div class="num" style="font-size:16px;letter-spacing:0">واتساب</div><div class="row"><a class="btn gold sm" href="'+GROUP_MAIN+'" target="_blank" rel="noopener">انضم للجروب</a></div></article>'+phoneCard('رقم الأسرة',CONFIG.familyPhone)+phoneCard('أبونا ديفيد، راعي الأسرة',CONFIG.priestPhone);
$('#contacts').addEventListener('click',function(e){var b=e.target.closest('[data-copy]');if(!b)return;copyText(b.dataset.copy,function(ok){var o=b.textContent;b.textContent=ok?'اتنسخ':'انسخه بإيدك';setTimeout(function(){b.textContent=o},1800)})});
observe($$('.cc'));

/* ---------- حركة الهيرو: كتابة السطر اللي تحت الاسم ---------- */
(function(){
  var lead=$('#lead');if(!lead)return;
  var txt=lead.getAttribute('data-text')||lead.textContent;
  lead.style.animation='none';lead.style.visibility='visible';
  if(RM)return;
  lead.textContent='';
  setTimeout(function(){
    lead.classList.add('caret');var i=0;
    (function tick(){
      i++;lead.textContent=txt.slice(0,i);
      if(i<txt.length)setTimeout(tick,34+Math.random()*34);
      else setTimeout(function(){lead.classList.remove('caret')},1600);
    })();
  },2300);
})();

/* ---------- ميلان اللوجو مع حركة الماوس ---------- */
(function(){
  var hero=$('.hero'),t=$('#tilt');
  if(!hero||!t||RM||!matchMedia('(hover:hover)').matches)return;
  hero.addEventListener('pointermove',function(e){
    var r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    t.style.transform='perspective(900px) rotateY('+(x*-16).toFixed(2)+'deg) rotateX('+(y*14).toFixed(2)+'deg)';
  },{passive:true});
  hero.addEventListener('pointerleave',function(){t.style.transform=''});
})();

/* ---------- لمعة الكروت مع الماوس ---------- */
if(matchMedia('(hover:hover)').matches){
  document.addEventListener('pointermove',function(e){
    var c=e.target.closest&&e.target.closest('.spot');if(!c)return;
    var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');
  },{passive:true});
}

/* ---------- مشاركة الموقع ---------- */
$$('[data-share]').forEach(function(b){
  b.addEventListener('click',async function(){
    var data={title:'أسرة آڤا مينا',text:'أسرة آڤا مينا، جامعيين علوم مالية وإدارية بسوهاج',url:location.href.split('#')[0]};
    try{if(navigator.share){await navigator.share(data);return}}catch(err){if(err&&err.name==='AbortError')return}
    copyText(data.url,function(ok){var o=b.textContent;b.textContent=ok?'اتنسخ رابط الموقع':'انسخ الرابط من المتصفح';setTimeout(function(){b.textContent=o},2000)});
  });
});
/* ---------- سؤال اليوم ---------- */
/* ---------- سؤال اليوم: الوقت والإجابة على السيرفر، والمتصفح بيعرض بس ---------- */
var DQ_CAT={religious:['دينية مسيحية','✝️'],general:['ثقافية ومعلومات عامة','📚'],science:['علمية','🔬'],history:['تاريخية','🏛️'],geography:['جغرافية','🌍'],math:['رياضية','➗'],art:['فنية','🎨'],tech:['تكنولوجيا وبرمجة','💻'],puzzle:['ألغاز وذكاء','🧩'],speed:['أسئلة سرعة','⚡']};
var DQ={q:null,who:null,off:0,end:0,timer:null,locked:false};
var DQ_LET=['أ','ب','ج','د'];
function dqWho(){try{return JSON.parse(localStorage.getItem('ava_dq')||'null')}catch(e){return null}}
function dqSave(w){try{localStorage.setItem('ava_dq',JSON.stringify(w))}catch(e){}}
function dqForget(){try{localStorage.removeItem('ava_dq')}catch(e){}}
function dqDigits(s){return String(s||'').replace(/[٠-٩]/g,function(d){return String(d.charCodeAt(0)-1632)}).replace(/\D/g,'')}
function dqCard(inner){return '<article class="dq-card">'+inner+'</article>'}
function dqHead(){var c=DQ_CAT[DQ.q.category]||['سؤال','❓'];return '<div class="dq-top"><span class="dq-cat"><i>'+c[1]+'</i>'+c[0]+'</span><span class="dq-kind">'+(DQ.q.kind==='tf'?'صح ولا غلط؟':'اختار الإجابة الصح')+'</span></div>'}
function dqRing(){return '<div class="dq-ring" id="dqRing"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54"/><circle class="dq-arc" id="dqArc" cx="60" cy="60" r="54"/></svg><b id="dqSec">30</b></div>'}

async function dqInit(){
  var box=$('#dq');if(!box)return;
  var sb=sbClient();
  if(!sb){box.innerHTML=dqCard('<p class="dq-msg">سؤال اليوم هيظهر لما الموقع يتربط بقاعدة البيانات</p>');return}
  box.innerHTML=dqCard('<p class="dq-msg">جاري تحميل سؤال النهارده…</p>');
  try{
    var r=await sb.rpc('daily_today');if(r.error)throw r.error;
    if(!r.data){box.innerHTML=dqCard('<div class="dq-empty"><b>سؤال النهارده لسه ماتنزلش</b><p>ارجع تاني بعد شوية، كل يوم فيه سؤال جديد</p></div>');return}
    DQ.q=r.data;dqIntro();
  }catch(e){box.innerHTML=dqCard('<p class="dq-msg">حصلت مشكلة في تحميل السؤال، جرّب تحدّث الصفحة بعد شوية</p>')}
}
function dqIntro(){
  var w=dqWho();DQ.who=w;DQ.locked=false;
  $('#dq').innerHTML=dqCard(dqHead()+
    '<div class="dq-hero">'+dqRing()+'<p>عندك <b>30 ثانية بالظبط</b> من لحظة ما تفتح السؤال. بعدها بيتقفل لوحده، والإجابة المتأخرة مابتتحسبش.</p></div>'+
    (w?'<p class="dq-msg">أهلاً '+esc(w.name)+'، جاهز؟ <button class="dq-x" type="button" id="dqX">مش أنا؟</button></p>'
      :'<div class="dq-who"><label>اسمك بالكامل<input id="dqN" maxlength="80" autocomplete="name" placeholder="الاسم الثلاثي"></label><label>رقم موبايلك المسجل<input id="dqP" inputmode="numeric" maxlength="14" autocomplete="tel" placeholder="01xxxxxxxxx"></label></div><p class="dq-msg">بتكتب اسمك ورقمك مرة واحدة بس، وبعدين تجاوب على طول.</p>')+
    '<button class="btn gold dq-go" type="button" id="dqGo">ابدأ السؤال</button><p class="msg" id="dqM"></p>');
  $('#dqGo').addEventListener('click',dqStart);
  var x=$('#dqX');if(x)x.addEventListener('click',function(){dqForget();dqIntro()});
}
async function dqStart(){
  var m=$('#dqM'),btn=$('#dqGo'),w=DQ.who;
  if(!w){
    var n=($('#dqN').value||'').trim().replace(/\s+/g,' '),p=dqDigits($('#dqP').value);
    if(n.split(' ').length<2){say(m,'اكتب اسمك الثلاثي زي ما هو مسجل','bad');return}
    if(!/^01[0-9]{9}$/.test(p)){say(m,'رقم الموبايل لازم يكون 11 رقم وبيبدأ بـ 01','bad');return}
    w={name:n,phone:p};
  }
  btn.disabled=true;say(m,'جاري التحقق…');
  try{
    var r=await sbClient().rpc('daily_open',{p_q:DQ.q.id,p_name:w.name,p_phone:w.phone});
    if(r.error)throw r.error;
    dqSave(w);DQ.who=w;dqRun(r.data);
  }catch(e){
    btn.disabled=false;
    var em=String((e&&(e.message||TX(e,'details')))||'');
    say($('#dqM'),/not_member/.test(em)?'الاسم أو الرقم ده مش مسجلين في الأسرة. اتأكد منهم زي ما سجلت بالظبط':'حصلت مشكلة في الاتصال، جرّب تاني بعد شوية','bad');
  }
}
function dqRun(d){
  DQ.off=new Date(d.now).getTime()-Date.now();
  DQ.end=new Date(d.expires_at).getTime();
  DQ.q=Object.assign({},DQ.q,{question:d.question,options:d.options,kind:d.kind||DQ.q.kind,category:d.category||DQ.q.category});
  if(d.status==='answered'){dqRender(d);dqReveal(d.choice,d,true);return}
  if(d.status==='expired'){dqRender(d);dqEnd('⏱️ الوقت خلص قبل ما تجاوب، السؤال اتقفل.',d);return}
  dqRender(d);dqTick();
}
function dqRender(d){
  var opts=DQ.q.options||[],locked=d.status!=='open';
  DQ.locked=locked;
  $('#dq').innerHTML=dqCard(dqHead()+'<h3 class="dq-q">'+esc(DQ.q.question)+'</h3>'+
    '<p class="dq-pt" style="margin:-6px 0 14px;color:var(--mute);font-size:14px">الإجابة الصح بـ <b style="color:var(--goldt)">'+(d.qpoints!=null?d.qpoints:10)+'</b> نقطة</p>'+
    (locked?'':'<div class="dq-tm">'+dqRing()+'<p class="dq-msg">اختار إجابتك، الوقت بيجري!</p></div>')+
    '<div class="dq-opts'+(DQ.q.kind==='tf'?' tf':'')+'" role="group" aria-label="الإجابات">'+
    opts.map(function(o,i){return '<button class="dq-opt" type="button" data-i="'+i+'" style="--i:'+i+'"'+(locked?' disabled':'')+'>'+(DQ.q.kind==='tf'?'':'<span class="lt">'+DQ_LET[i]+'</span>')+'<span>'+esc(o)+'</span></button>'}).join('')+'</div>'+
    '<div id="dqOut" aria-live="polite"></div><p class="msg" id="dqM"></p>');
  $$('.dq-opt').forEach(function(b){b.addEventListener('click',function(){dqPick(+b.dataset.i,b)})});
}
function dqTick(){
  clearInterval(DQ.timer);
  var step=function(){
    var left=Math.max(0,Math.ceil((DQ.end-(Date.now()+DQ.off))/1000));
    var s=$('#dqSec'),a=$('#dqArc'),rg=$('#dqRing');
    if(s)s.textContent=left;
    if(a)a.style.strokeDashoffset=(339.3*(1-Math.min(30,left)/30)).toFixed(1);
    if(rg)rg.classList.toggle('warn',left<=5);
    if(left<=0){clearInterval(DQ.timer);dqEnd('⏱️ الوقت خلص! السؤال اتقفل، ومابتتحسبش إجابة بعد كده.',null)}
  };
  step();DQ.timer=setInterval(step,200);
}
function dqEnd(msg,d){
  DQ.locked=true;clearInterval(DQ.timer);
  $$('.dq-opt').forEach(function(b){b.disabled=true;b.classList.add('dim')});
  var c=(d&&d.correct!=null)?'<p class="dq-msg">الإجابة الصح كانت: <b>'+esc((DQ.q.options||[])[d.correct])+'</b></p>':'';
  var o=$('#dqOut');if(o)o.innerHTML='<div class="dq-pts"><span>'+msg+'</span>'+c+'</div>';
}
function dqStats(){
  var o=$('#dqOut');if(!o||!DQ.who||!sbClient())return;
  sbClient().rpc('my_dq_stats',{p_name:DQ.who.name,p_phone:DQ.who.phone}).then(function(r){
    if(r.error||!r.data||!$('#dqOut'))return;
    var p=document.createElement('p');p.className='dq-stat';
    p.innerHTML='مجموع نقطك: <b>'+AR(r.data.total)+'</b> · المركز '+AR(r.data.rank)+' من '+AR(r.data.players);
    $('#dqOut').appendChild(p);
  }).catch(function(){});
}
async function dqPick(i,btn){
  if(DQ.locked)return;
  DQ.locked=true;clearInterval(DQ.timer);
  $$('.dq-opt').forEach(function(b){b.disabled=true});
  try{
    var r=await sbClient().rpc('daily_answer',{p_q:DQ.q.id,p_name:DQ.who.name,p_phone:DQ.who.phone,p_choice:i});
    if(r.error)throw r.error;
    dqReveal(i,r.data,false);
  }catch(e){
    var em=String((e&&(e.message||TX(e,'details')))||'');
    if(/expired/.test(em)){dqEnd('⏱️ الوقت خلص قبل ما الإجابة توصل، ومابتتحسبش.',null);return}
    if(/already/.test(em)){dqRefresh();return}
    DQ.locked=false;$$('.dq-opt').forEach(function(b){b.disabled=false});dqTick();
    say($('#dqM'),'الإجابة ماتسجلتش، جرّب تضغط تاني','bad');
  }
}
async function dqRefresh(){
  try{var r=await sbClient().rpc('daily_open',{p_q:DQ.q.id,p_name:DQ.who.name,p_phone:DQ.who.phone});if(!r.error)dqRun(r.data)}catch(e){}
}
function dqCount(el,to){if(!el)return;var t0=performance.now();function f(t){var k=Math.min(1,(t-t0)/900);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
function dqReveal(i,d,stored){
  DQ.locked=true;clearInterval(DQ.timer);
  $$('.dq-opt').forEach(function(b,k){
    b.disabled=true;
    if(k===d.correct)b.classList.add('ok');
    else if(k===i&&!d.is_correct)b.classList.add('bad');
    else b.classList.add('dim');
  });
  var ok=!!d.is_correct,pts=d.points||0;
  var head=stored?'جاوبت على السؤال ده قبل كده. ':'';
  var msg=ok?'✅ '+head+'إجابة صح!':'❌ '+head+'مش المرة دي، الإجابة الصح موضحة فوق';
  var sec=(d.seconds!=null)?'<small>جاوبت في '+d.seconds+' ثانية</small>':'';
  var o=$('#dqOut');if(o)o.innerHTML='<div class="dq-pts"><span>'+msg+'</span><b id="dqPts">'+(stored?pts:0)+'</b><small>نقطة اتضافت لنقطك</small>'+sec+'</div>';
  dqCount($('#dqPts'),pts);
  dqStats();
}
dqInit();
})();
