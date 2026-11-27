(function(){
  var de=document.documentElement,a=document.getElementById('hymn'),b=document.getElementById('hy');if(!a||!b)return;
  var START=15,NOTE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
      PAUSE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M9 5v14M15 5v14"/></svg>';
  var pref=null;try{pref=sessionStorage.getItem('ava_hymn')}catch(e){}
  function paint(p){b.setAttribute('aria-pressed',String(p));b.title=p?'إيقاف الترنيمة':'تشغيل الترنيمة';b.setAttribute('aria-label',p?'إيقاف الترنيمة':'تشغيل الترنيمة');b.innerHTML=p?PAUSE:NOTE;b.classList.toggle('pulse',!p)}
  function seek(){if(a.readyState>=1&&a.currentTime<START)a.currentTime=START}
  a.addEventListener('loadedmetadata',seek);
  a.addEventListener('play',function(){paint(true)});a.addEventListener('pause',function(){paint(false)});a.addEventListener('ended',function(){paint(false)});
  function play(){seek();var p=a.play();if(p&&p.catch)p.catch(function(){paint(false)})}
  function setPref(v){pref=v;try{sessionStorage.setItem('ava_hymn',v)}catch(e){}}
  b.addEventListener('click',function(){if(a.paused){setPref('1');play()}else{setPref('0');a.pause()}});
  paint(false);
  /* أول زيارة بتبدأ لوحدها (لو المتصفح سمح)، ولو ماسمحش بتبدأ أول ما المستخدم يلمس الصفحة */
  if(pref!=='0'){
    play();
    var go=function(e){if(pref==='0'||!a.paused||(e&&e.target&&e.target.closest&&e.target.closest('#hy')))return;play()};
    ['pointerdown','keydown','touchstart','wheel','scroll'].forEach(function(t){document.addEventListener(t,go,{passive:true})});
  }
})();
