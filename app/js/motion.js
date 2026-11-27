addEventListener('load',function(){
  var de=document.documentElement;
  function navOff(){return (parseFloat(getComputedStyle(de).getPropertyValue('--navh'))||72)+14}
  function setNavH(){var n=document.querySelector('.nav');if(n)de.style.setProperty('--navh',n.offsetHeight+'px')}
  setNavH();addEventListener('resize',setNavH);
  /* الروابط الداخلية: تنزل للقسم بالظبط تحت الشريط، وتصحح لو الصور اتحمّلت وغيّرت الطول */
  function goTo(el,n){
    var y=el.getBoundingClientRect().top+scrollY-navOff();
    var fix=function(){if(Math.abs(el.getBoundingClientRect().top-navOff())>3&&n<4)goTo(el,n+1)};
    if(window.__lenis){window.__lenis.scrollTo(y,{duration:n?.3:1.2,onComplete:fix})}
    else{window.scrollTo({top:y,behavior:n?'auto':'smooth'});setTimeout(fix,n?300:1600)}
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;
    var h=a.getAttribute('href');if(!h||h.length<2)return;
    var el=document.getElementById(h.slice(1));if(!el)return;
    e.preventDefault();goTo(el,0);history.replaceState(null,'',h);
  });
  if(de.classList.contains('rm')||!window.gsap)return;
  if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
  /* SplitText: كلمات عناوين الأقسام بتطلع كلمة كلمة لما توصلها */
  document.querySelectorAll('.sh h2').forEach(function(h){
    if(h.children.length||h.dataset.split)return;
    var t=h.textContent.trim();h.dataset.split='1';h.setAttribute('aria-label',t);
    h.innerHTML=t.split(/\s+/).map(function(w){return '<span class="sw" aria-hidden="true"><span class="sc">'+w+'</span></span>'}).join(' ');
    gsap.from(h.querySelectorAll('.sc'),{yPercent:110,opacity:0,duration:.8,ease:'power3.out',stagger:.07,
      scrollTrigger:{trigger:h,start:'top 88%',once:true}});
  });
  /* Lenis: سكرول ناعم على الكمبيوتر بس (الموبايل بيستخدم السكرول الأصلي) */
  if(!window.Lenis||matchMedia('(hover:none)').matches)return;
  var lenis=new Lenis({duration:1.15,smoothWheel:true,syncTouch:false});
  window.__lenis=lenis;
  if(window.ScrollTrigger)lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(function(t){lenis.raf(t*1000)});
  gsap.ticker.lagSmoothing(0);
});
