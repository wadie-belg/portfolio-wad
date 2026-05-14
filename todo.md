# 📋 TODO — Portfolio Wadie Belgacem

> قائمة المهام مرتبة حسب الأولوية. يُقرأ مع `PROJECT_STATE.md`.
> الحالة: ✅ مكتمل | 🔧 قيد التنفيذ | ⏳ في الانتظار

---

## 🔴 CRITICAL — إصلاحات حرجة

### T01 — إصلاح خطأ الترجمة في content.json
**الحالة:** ✅ مكتمل  
**الملفات:** `data/content.json`  
**الوصف:** قيمة خاطئة في حقل البريد: `"برint_email"` بدلاً من `"البريد الإلكتروني"`.  
**الخطوات:**
1. ابحث عن `"برint_email"` في `content.json`
2. استبدله بـ `"البريد الإلكتروني"`
3. تأكد من تطابق النص مع `script.js`

---

### T02 — إضافة favicon
**الحالة:** ✅ مكتمل  
**الملفات:** `index.html`  
**الوصف:** الموقع بدون favicon — يضاف أيقونة صغيرة في تبويب المتصفح.  
**الخطوات:**
1. إنشاء SVG favicon بسيط (حرف "WB" بالألوان الأكسنت)
2. إضافته في `<head>`: `<link rel="icon" href="favicon.svg" type="image/svg+xml">`
3. إضافة fallback PNG: `<link rel="icon" href="favicon.png" type="image/png">`

---

### T03 — تحديث سنة الفوتر
**الحالة:** ✅ مكتمل  
**الملفات:** `script.js`  
**الوصف:** الفوتر يحتوي على `© 2024` ثابت — يجب أن يكون ديناميكيًا.  
**الخطوات:**
1. استبدال `"© 2024"` بـ `© ${new Date().getFullYear()}` في `script.js`
2. أو إضافة `data-i18n="footer"` للفوتر

---

## 🟠 HIGH — تحسينات جوهرية

### T04 — قائمة تنقل متجاوبة (Mobile Hamburger Menu)
**الحالة:** ✅ مكتمل  
**الملفات:** `index.html`, `style.css`, `script.js`  
**الوصف:** لا توجد قائمة هامبرغر للموبايل — الروابط تُكسر على الشاشات الصغيرة.  
**الخطوات:**
1. إضافة زر هامبرغر في `<nav>` مع `aria-label` و `aria-expanded`
2. CSS: إظهار الزر عند `max-width: 1024px` وإخفاء `.nav-links`
3. JS: تبديل class `.active` على `.nav-links` عند الضغط
4. إضافة تأثير slide-in للقائمة
5. دعم RTL: القائمة تنزلق من اليمين
6. دعم إغلاق القائمة عند الضغط على رابط

---

### T05 — Active Nav Link Highlighting
**الحالة:** ⏳ في الانتظار  
**الملفات:** `script.js`  
**الوصف:** الروابط في الـ nav لا تضيء عند التمرير للقسم المناسب.  
**الخطوات:**
1. استخدام IntersectionObserver لمراقبة الأقسام
2. إضافة class `.active` للرابط المطابق للقسم الحالي
3. إزالة class عند خروج القسم من الشاشة

---

### T06 — SEO Meta Tags
**الحالة:** ⏳ في الانتظار  
**الملفات:** `index.html`  
**الوصف:** لا توجد meta tags للـ SEO — يضاف وصف، كلمات مفتاحية، Open Graph، Twitter Cards.  
**الخطوات:**
1. إضافة `<meta name="description" content="...">`
2. إضافة `<meta name="keywords" content="...">`
3. إضافة Open Graph tags (og:title, og:description, og:image, og:url)
4. إضافة Twitter Card tags
5. إضافة `<link rel="canonical" href="...">`

---

### T07 — Structured Data (JSON-LD)
**الحالة:** ⏳ في الانتظار  
**الملفات:** `index.html`  
**الوصف:** لا يوجد Schema.org markup — يضاف Person schema للـ SEO.  
**الخطوات:**
1. إضافة `<script type="application/ld+json">` في `<head>`
2. تعريف Person schema مع الاسم، المهنة، العنوان، الهاتف، البريد
3. إضافة sameAs لروابط التواصل الاجتماعي

---

### T08 — زر تحميل السيرة الذاتية (CV Download)
**الح状态:** ⏳ في الانتظار  
**الملفات:** `index.html`, `script.js`  
**الوصف:** لا يوجد زر لتحميل PDF — يضاف في Hero section و Contact section.  
**الخطوات:**
1. إضافة زر "Download CV" في Hero CTA group
2. إضافة رابط `<a download>` يشير إلى `assets/cv/wadie-belgacem-cv.pdf`
3. إضافة placeholder PDF في `assets/cv/`
4. دعم RTL: تغيير نص الزر حسب اللغة

---

### T09 — Social Media Links
**الحالة:** ⏳ في الانتظار  
**الملفات:** `index.html`, `data/content.json`, `script.js`  
**الوصف:** لا توجد روابط تواصل اجتماعي — يضاف LinkedIn وغيرها.  
**الخطوات:**
1. إضافة social media fields في `content.json`
2. إضافة social icons في Contact section
3. استخدام SVG icons (LinkedIn, Twitter/X, ResearchGate)
4. دعم RTL: ترتيب الأيقونات

---

## 🟡 MEDIUM — تحسينات تجربة المستخدم

### T10 — Loading Screen / Skeleton
**الحالة:** ⏳ في الانتظار  
**الملفات:** `index.html`, `style.css`, `script.js`  
**الوصف:** لا يوجد loading screen — المحتوى يظهر فجأة.  
**الخطوات:**
1. إضافة overlay loading في `<body>`
2. CSS: animation pulse على skeleton cards
3. JS: إخفاء overlay عند تحميل DOM + Three.js
4. دعم RTL: اتجاه النص

---

### T11 — Scroll Progress Indicator
**الحالة:** ⏳ في الانتظار  
**الملفات:** `style.css`, `script.js`  
**الوصف:** لا يوجد مؤشر تقدم — يضاف شريط رفيع أعلى الصفحة.  
**الخطوات:**
1. إضافة `<div class="scroll-progress">` في `<body>`
2. CSS: position fixed top, height 3px, width animated
3. JS: تحديث width بناءً على scroll percentage

---

### T12 — Timeline View للتجربة والتعليم
**الحالة:** ⏳ في الانتظار  
**الملفات:** `script.js`, `style.css`  
**الوصف:** العرض الحالي للتجربة والتعليم ليس timeline — يمكن تحسينه.  
**الخطوات:**
1. إضافة CSS timeline (خط عمودي مع نقاط)
2. تعديل renderEnhancedExperience لإنتاج timeline HTML
3. تعديل renderEducation لإنتاج timeline
4. دعم RTL: عكس اتجاه الخط

---

### T13 — Skill Proficiency Bars
**الحالة:** ⏳ في الانتظار  
**الملفات:** `data/content.json`, `script.js`, `style.css`  
**الوصف:** المهارات تُعرض كـ tags فقط — يمكن إضافة progress bars.  
**الخطوات:**
1. إضافة `level` field لكل مهارة في `content.json`
2. تعديل renderAll لإنتاج skill bars بدلاً من tags
3. إضافة animation fill على bars
4. دعم RTL: اتجاه التعبئة

---

### T14 — Smooth Scroll for Nav Links
**الحالة:** ⏳ في الانتظار  
**الملفات:** `script.js`  
**الوصف:** `scroll-behavior: smooth` موجود في CSS لكن لا يوجد offset للـ nav bar الثابت.  
**الخطوات:**
1. إضافة event listeners على nav links
2. استخدام `scrollTo` مع offset = nav height
3. منع السلوك الافتراضي

---

### T15 — Contact Form
**الحالة:** ⏳ في الانتظار  
**الملفات:** `index.html`, `style.css`, `script.js`  
**الوصف:** Contact section يعرض معلومات فقط — لا يوجد نموذج مراسلة.  
**الخطوات:**
1. إضافة form مع حقول: الاسم، البريد، الموضوع، الرسالة
2. CSS: glassmorphism cards للمدخلات
3. JS: validation + submit عبر `mailto:` أو Formspree
4. دعم RTL: اتجاه الحقول

---

## 🟢 LOW — تحسينات إضافية

### T16 — Service Worker (Offline Support)
**الحالة:** ⏳ في الانتظار  
**الملفات:** `sw.js`, `index.html`  
**الوصف:** لا يوجد offline support — يمكن إضافة service worker.  
**الخطوات:**
1. إنشاء `sw.js` مع cache-first strategy
2. تسجيل SW في `index.html`
3. إضافة assets للـ cache

---

### T17 — Dark/Light Mode Toggle
**الحالة:** ⏳ في الانتظار  
**الملفات:** `style.css`, `script.js`  
**الوصف:** الموقع dark فقط — يمكن إضافة light mode.  
**الخطوات:**
1. إضافة CSS variables للـ light mode
2. إضافة toggle button في nav
3. حفظ الاختيار في localStorage
4. دعم prefers-color-scheme

---

### T18 — Reduced Motion Support
**الحالة:** ⏳ في الانتظار  
**الملفات:** `style.css`, `script.js`, `three-init.js`  
**الوصف:** لا يوجد دعم لـ prefers-reduced-motion.  
**الخطوات:**
1. إضافة `@media (prefers-reduced-motion: reduce)` في CSS
2. إيقاف Three.js animation loop عند التفضيل
3. إيقاف GSAP animations

---

### T19 — ARIA Labels & Accessibility
**الحالة:** ⏳ في الانتظار  
**الملفات:** `index.html`, `script.js`  
**الوصف:** نقص في aria-labels و roles.  
**الخطوات:**
1. إضافة aria-label على الأزرار والروابط
2. إضافة role="navigation" على nav
3. إضافة aria-current="page" للـ active link
4. إضافة skip-to-content link

---

### T20 — README.md
**الحالة:** ⏳ في الانتظار  
**الملفات:** `README.md` (جديد)  
**الوصف:** لا يوجد README — يضاف ملف توثيق للمشروع.  
**الخطوات:**
1. إضافة وصف المشروع
2. إضافة تعليمات التشغيل (فتح index.html)
3. إضافة هيكل الملفات
4. إضافة تعليمات التعديل (تغيير البيانات)
5. إضافة تعليمات النشر (GitHub Pages, Netlify)

---

### T21 — Data Validation
**الحالة:** ⏳ في الانتظار  
**الملفات:** `script.js`  
**الوصف:** لا يوجد validation للبيانات — يمكن إضافة checks.  
**الخطوات:**
1. إضافة validateContent() function
2. التحقق من وجود حقول مطلوبة
3. التحقق من صحة URLs
4. عرض warnings في console

---

### T22 — Duplicate Data Cleanup
**الحالة:** ⏳ في الانتظار  
**الملفات:** `script.js`, `data/content.json`  
**الوصف:** البيانات مكررة بين `content.json` و `PORTFOLIO_DATA` في `script.js`.  
**الخطوات:**
1. تحديد مصدر الحقيقة (content.json أم script.js)
2. إزالة التكرار
3. إضافة function loadContent() لقراءة JSON

---

---

## 📊 ملخص الأولوية

| الأولوية | عدد المهام | الوقت التقديري |
|---------|-----------|----------------|
| 🔴 Critical | 3 | ~30 دقيقة |
| 🟠 High | 6 | ~4 ساعات |
| 🟡 Medium | 6 | ~6 ساعات |
| 🟢 Low | 7 | ~8 ساعات |
| **المجموع** | **22** | **~19 ساعة** |

---

## 🔄 حالة التنفيذ

```
المرحلة 1: Critical (T01-T03)      [✅ مكتملة بالكامل]
المرحلة 2: High (T04-T09)           [🟢 T04 مكتمل | 5 متبقية]
المرحلة 3: Medium (T10-T15)         [⏳ لم تبدأ]
المرحلة 4: Low (T16-T22)            [⏳ لم تبدأ]
```

---

*آخر تحديث: 2026-05-14*
*تم الإنشاء بواسطة: Hermes Agent*
*T04 مكتمل: Mobile Hamburger Menu — ✅*