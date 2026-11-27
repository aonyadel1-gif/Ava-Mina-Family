# أسرة آڤا مينا

موقع + تطبيق مثبّت (PWA) للأسرة، مبني بـ HTML/CSS/JS وSupabase.

## هيكل المشروع
```
index.html        الصفحة الرئيسية للموقع والتطبيق
admin.html        لوحة الأمين
privacy.html      سياسة الخصوصية
offline.html      صفحة "مفيش نت"
status.html       فحص الاتصال بقاعدة البيانات
manifest.json     إعدادات التطبيق المثبّت
sw.js             الكاش والعمل بدون نت والإشعارات
css/              الشكل: app.css (الموقع والتطبيق)، auth.css (الحساب)
js/               main.js (الموقع الأساسي)، auth.js (الحساب)، motion.js و extras*.js
img/              الصور
supabase/         قاعدة البيانات (migrations) والدوال (functions)
docs/             أدلة التشغيل والإعداد
tests/            اختبار سريع للموقع
config.js         إعدادات Supabase (ملفك إنت، ماتترفعش على Git)
```

## أول مرة
1. اتبع `docs/GUIDE.md` لإعداد Supabase.
2. شغّل ملفات `supabase/migrations/` بالترتيب.
3. اتبع `docs/SETUP-AUTH.md` لتسجيل دخول الأعضاء، و`docs/SETUP-PUSH.md` للإشعارات.

## الاختبار
```
python3 -m http.server 8000     # في مجلد المشروع
node tests/smoke.js             # في مجلد تاني، مع BASE_URL=http://localhost:8000/index.html
```
