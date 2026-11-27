addEventListener('load',function(){
  var de=document.documentElement;
  if(de.classList.contains('rm')||!window.gsap||!window.ScrollTrigger)return;
  gsap.registerPlugin(ScrollTrigger);
  var lite=de.classList.contains('lite');
  /* خط التقدم في أعلى الصفحة */
  var bar=document.createElement('div');bar.id='prog';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
  ScrollTrigger.create({start:0,end:'max',onUpdate:function(st){gsap.set(bar,{scaleX:st.progress})}});
  /* الهيرو: الشعار بيتفتح من دايرة، والنص بيتباعد لوحده مع السكرول */
  var em=document.querySelector('.halo img');
  if(em)gsap.fromTo(em,{clipPath:'circle(0% at 50% 50%)'},{clipPath:'circle(72% at 50% 50%)',duration:1.8,ease:'expo.out',delay:.35,clearProps:'clipPath'});
  if(!lite){
    gsap.to('.hero-txt',{yPercent:-16,opacity:.3,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  }
  /* أقنعة الصور: كل نوع ليه حركة مختلفة */
  function mask(el,from,to,extra){
    if(el.dataset.mr)return;el.dataset.mr='1';
    var v={duration:1.2,ease:'expo.out',clearProps:'clipPath',scrollTrigger:{trigger:el,start:'top 88%',once:true}};
    for(var k in extra)v[k]=extra[k];
    gsap.fromTo(el,from,Object.assign(v,to));
  }
  function scan(){
    document.querySelectorAll('.cover').forEach(function(el){
      mask(el,{clipPath:'inset(0% 0% 100% 0%)'},{clipPath:'inset(0% 0% 0% 0%)'});
    });
    document.querySelectorAll('.cover img').forEach(function(im){
      if(im.dataset.mr)return;im.dataset.mr='1';
      gsap.fromTo(im,{scale:1.28},{scale:1,duration:1.8,ease:'power3.out',clearProps:'transform',scrollTrigger:{trigger:im,start:'top 88%',once:true}});
    });
    document.querySelectorAll('.leader .ring').forEach(function(el){
      mask(el,{clipPath:'inset(100% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.4});
    });
    document.querySelectorAll('.ar,.cp .cpi').forEach(function(el){
      mask(el,{clipPath:'inset(100% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.1,stagger:0});
    });
    /* عناوين الأقسام: الكلمات بتطلع من قناع، ومع السكرول الخلفية بتتحرك بهدوء */
    if(!lite){
      document.querySelectorAll('.sh .sub').forEach(function(el){
        if(el.dataset.mr)return;el.dataset.mr='1';
        gsap.fromTo(el,{opacity:0,y:14},{opacity:1,y:0,duration:1,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true}});
      });
    }
  }
  scan();
  var t=0,mo=new MutationObserver(function(){clearTimeout(t);t=setTimeout(function(){scan();ScrollTrigger.refresh()},180)});
  mo.observe(document.body,{childList:true,subtree:true});
  /* زراير الأساسي بتتبع المؤشر خفيف (كمبيوتر بس) */
  if(!lite&&matchMedia('(hover:hover) and (pointer:fine)').matches){
    document.addEventListener('pointermove',function(e){
      var b=e.target.closest&&e.target.closest('.btn.gold,.btn.pri');
      if(!b)return;
      var r=b.getBoundingClientRect(),dx=(e.clientX-(r.left+r.width/2))/r.width,dy=(e.clientY-(r.top+r.height/2))/r.height;
      gsap.to(b,{x:dx*10,y:dy*8,duration:.45,ease:'power3.out',overwrite:'auto'});
    });
    document.addEventListener('pointerout',function(e){
      var b=e.target.closest&&e.target.closest('.btn.gold,.btn.pri');
      if(b&&!b.contains(e.relatedTarget))gsap.to(b,{x:0,y:0,duration:.6,ease:'elastic.out(1,.5)',overwrite:'auto'});
    });
  }
});
