// ===== خدمة العمل بدون نت وتحديث التطبيق =====
// الشبكة أولاً للصفحات (آخر نسخة)، ولو النت قطع بتفتح آخر نسخة محفوظة.
// الملفات الثابتة (صور، أيقونات) بتتفتح من الكاش فوراً وبتتحدّث في الخلفية.
// بيانات الموقع (Supabase) مابتتحفظش أبداً.
const V='ava-v35';
const SHELL=['./','./index.html','./js/icons.js','./js/i18n-en.js','./offline.html','./privacy.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./img/birthday-frame.webp','./img/96a5198fc4.webp','./css/app.css','./css/auth.css','./css/search.css','./css/app-skin.css','./css/app-shell.css','./js/app-shell.js','./js/main.js','./js/motion.js','./js/extras.js','./js/extras-2.js','./js/auth.js','./js/search.js','./js/onboarding.js','./js/monitor.js','./faq.html','./terms.html'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).catch(()=>{}));
});
// التحديث بياخد مفعول لما المستخدم يضغط "تحديث الآن" من الموقع
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

function keep(req,res){
  if(res&&res.ok&&res.type!=='opaque')caches.open(V).then(c=>c.put(req,res.clone())).catch(()=>{});
}

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==location.origin)return; // Supabase والـ CDN: الشبكة مباشرة من غير كاش
  if(req.mode==='navigate'){
    e.respondWith(
      fetch(req).then(r=>{keep(req,r);return r}).catch(()=>
        caches.match(req).then(m=>m||caches.match('./index.html')).then(m=>m||caches.match('./offline.html'))
      )
    );
    return;
  }
  // الكود (JS/CSS/JSON) والصور: من النت الأول، والكاش بس لو النت مش موجود.
  // كده التطبيق المثبّت ما يفضلش شغال على نسخة قديمة من الكود.
  if(/\.(js|css|json)$/.test(url.pathname)){
    e.respondWith(fetch(req).then(r=>{keep(req,r);return r}).catch(()=>caches.match(req)));
    return;
  }
  e.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(r=>{keep(req,r);return r}).catch(()=>cached)));
});

// ---- إشعارات الدفع (آية اليوم / سؤال اليوم) ----
self.addEventListener('push',function(e){
  var d={};try{d=e.data?e.data.json():{}}catch(x){d={body:e.data?e.data.text():''}}
  e.waitUntil(self.registration.showNotification(d.title||'أسرة آڤا مينا',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',dir:'rtl',lang:'ar',tag:'daily',renotify:true,data:{url:d.url||'./index.html'}}));
});
self.addEventListener('notificationclick',function(e){
  e.notification.close();
  var u=new URL((e.notification.data&&e.notification.data.url)||'./index.html',self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(cs){
    for(var i=0;i<cs.length;i++){if('focus' in cs[i])return cs[i].focus()}
    return self.clients.openWindow(u);
  }));
});
