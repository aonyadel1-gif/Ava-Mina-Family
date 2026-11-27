/* ===== مراقبة الأخطاء (Phase 7) =====
   Sentry اختياري: لو حطيت sentryDsn في config.js بيشتغل، ولو فاضي مابيعملش حاجة.
   ملحوظة: Crashlytics مابيشتغلش على المواقع (PWA)، عشان كده Sentry. */
(function(){
  'use strict';
  var dsn = (window.AVA_CONFIG || {}).sentryDsn;
  if (!dsn) return;
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@sentry/browser@8.0.0/build/bundle.min.js';
  s.crossOrigin = 'anonymous';
  s.onload = function(){
    if (!window.Sentry) return;
    window.Sentry.init({
      dsn: dsn,
      environment: location.hostname === 'localhost' ? 'local' : 'production',
      tracesSampleRate: 0,
      sendDefaultPii: false,
      beforeSend: function(ev){
        // امسح أي إيميل أو رقم موبايل ممكن يتلزق في رسالة الخطأ
        var clean = function(t){ return (t || '').replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, '[email]').replace(/01[0-9]{9}/g, '[phone]'); };
        if (ev.message) ev.message = clean(ev.message);
        if (ev.exception && ev.exception.values) ev.exception.values.forEach(function(v){ v.value = clean(v.value); });
        ev.breadcrumbs = []; // ماتبعتش سجل الضغطات
        return ev;
      }
    });
  };
  document.head.appendChild(s);
})();
