/**
 * WADIE BELGACEM - PORTFOLIO ENGINE (ULTIMATE STABLE VERSION)
 * 
 * This version is self-contained. All data (Translations & Content) 
 * are embedded to prevent CORS issues and ensure 100% availability.
 */

// 1. THE DATA STORE (Integrated Content & Translations)
const PORTFOLIO_DATA = {
    translations: {
        en: {
       nav: { home: "Home", about: "About", experience: "Experience", education: "Education", conferences: "Conferences", skills: "Skills", contact: "Contact", achievements: "Key Achievements" },
        sections: { about: "About Me", experience: "Professional Experience", education: "Educational Background", conferences: "Scientific Conferences & Seminars", skills: "Expertise & Skills", extra_pubs: "Publications", extra_hobbies: "Interests & Hobbies", contact: "Get In Touch", achievements: "Key Achievements" },
        hero: { name: "Wadie Belgacem", subtitle: "Sports Scientist & Professional Coach" },
        stats: { years: "YEARS EXPERIENCE", conferences: "CONFERENCES", certifications: "CERTIFICATIONS", athletes: "ATHLETES TRAINED" },
        footer: "© {YEAR} Wadie Belgacem. Excellence in Sports Science.",
        lang_btn: "AR"
    },
    ar: {
        nav: { home: "الرئيسية", about: "نبذة عني", experience: "الخبرة المهنية", education: "الخلفية التعليمية", conferences: "المؤتمرات العلمية", skills: "المهارات", contact: "اتصل بنا", achievements: "الإنجازات الرئيسية" },
        sections: { about: "نبذة عني", experience: "الخبرة المهنية", education: "المؤهلات العلمية", conferences: "المؤتمرات والندوات العلمية", skills: "المهارات والخبرات", extra_pubs: "المنشورات العلمية", extra_hobbies: "الاهتمامات والهوايات", contact: "تواصل معي", achievements: "الإنجازات الرئيسية" },
        hero: { name: "وديع بلقاسم", subtitle: "عالم رياضة ومدرب رياضي محترف" },
        stats: { years: "سنوات خبرة", conferences: "المؤتمرات", certifications: "الشهادات", athletes: "رياضيون تم تدريبهم" },
        footer: "© {YEAR} وديع بلقاسم. التميز في علوم الرياضة.",
        lang_btn: "EN"
        }
    },
    content: {
        personal: {
            name: { en: "Wadie Belgacem (وديع بلقاسم)", ar: "Wadie Belgacem (وديع بلقاسم)" },
            title: { en: "Sports Scientist & Professional Coach", ar: "عالم رياضة ومدرب رياضي محترف" },
            details: [
                { icon: "📍", label: { en: "Address", ar: "العنوان" }, value: { en: "Gafsa, Tunisia", ar: "قفصة، تونس" } },
                { icon: "📞", label: { en: "Phone", ar: "الهاتف" }, value: { en: "+216 50 783 359", ar: "+216 50 783 359" } },
                { icon: "📧", label: { en: "Email", ar: "البريد الإلكتروني" }, value: { en: "wadiebelgacem@outlook.fr", ar: "wadiebelgacem@outlook.fr" } },
                { icon: "📅", label: { en: "Birth", ar: "تاريخ الميلاد" }, value: { en: "December 08, 1989", ar: "08 ديسمبر 1989" } },
                { icon: "👤", label: { en: "Nationality", ar: "الجنسية" }, value: { en: "Tunisian", ar: "تونسي" } }
            ]
        },
        about: {
            en: "Expert in Sports Science and Physical Education, specialized in human and social sciences applied to physical and sports activities. A professional coach and researcher with a vast track record in training, teaching, and sports management.",
            ar: "خبير في علوم الرياضة والتربية البدنية، متخصص في العلوم الإنسانية والاجتماعية المطبقة على الأنشطة البدنية والرياضية. مدرب وباحث محترف مع سجل حافل في التدريب والتدريس والإدارة الرياضية."
        },
        experience: [
            { category: { en: "Coaching & Athletics", ar: "التدريب والألعاب" }, items: [
                { period: { en: "2016-2017", ar: "2016-2017" }, role: { en: "Senior Coach", ar: "مدرب أول" }, entity: { en: "Club Sportif Gafsa", ar: "النادي الرياضي القفصي" } },
                { period: { en: "2015-2016", ar: "2015-2016" }, role: { en: "Futsal Coach (Youth)", ar: "مدرب كرة صالات (الشباب)" }, entity: { en: "Futsal Club Gafsa", ar: "نادي كرة الصالات بقفصة" } },
                { period: { en: "2014-2015", ar: "2014-2015" }, role: { en: "Women's Youth Coach", ar: "مدربة الشباب للسيدات" }, entity: { en: "Women's Sports Association Gafsa", ar: "الجمعية الرياضية النسوية بقفصة" } },
                { period: { en: "2011-2012", ar: "2011-2012" }, role: { en: "Physical Trainer", ar: "مدرب بدني" }, entity: { en: "Qawafel Sportive Gafsa", ar: "قوافل الرياضية بقفصة" } },
                { period: { en: "2004-2011", ar: "2004-2011" }, role: { en: "Professional Football Player", ar: "لاعب كرة قدم محترف" }, entity: { en: "CS Gafsa", ar: "النادي الرياضي القفصي" } }
            ]},
            { category: { en: "Academic Teaching", ar: "التدريس الأكاديمي" }, items: [
                { period: { en: "2015-2016", ar: "2015-2016" }, role: { en: "Physical Ed & Psychology Instructor", ar: "مدرس التربية البدنية وعلم النفس" }, entity: { en: "ISSEP Gafsa", ar: "المعهد العالي للرياضة والتربية البدنية بقفصة" } },
                { period: { en: "2013-2014", ar: "2013-2014" }, role: { en: "Football Instructor", ar: "مدرس كرة قدم" }, entity: { en: "ISSEP Gafsa", ar: "المعهد العالي للرياضة والتربية البدنية بقفصة" } },
                { period: { en: "2013-2014", ar: "2013-2014" }, role: { en: "PE Instructor", ar: "مدرس تربية بدنية" }, entity: { en: "Private Engineering School, Gafsa", ar: "مدرسة هندسة خاصة، قفصة" } },
                { period: { en: "2010-2011", ar: "2010-2011" }, role: { en: "Trainee Physical Ed Teacher", ar: "مدرس تربية بدنية متدرب" }, entity: { en: "Ahmed Tlili Secondary School", ar: "ثانوية أحمد تليلي" } }
            ]},
            { category: { en: "Sports Management", ar: "الإدارة الرياضية" }, items: [
                { period: { en: "2016-2017", ar: "2016-2017" }, role: { en: "General Secretary", ar: "أمين عام" }, entity: { en: "Club Sportif Gafsa", ar: "النادي الرياضي القفصي" } },
                { period: { en: "2014-2015", ar: "2014-2015" }, role: { en: "General Secretary", ar: "أمين عام" }, entity: { en: "Futsal Club Gafsa", ar: "نادي كرة الصالات بقفصة" } }
            ]}
        ],
        education: [
            { year: { en: "2012-2014", ar: "2012-2014" }, degree: { en: "Master's in Human and Social Sciences (Sports focus)", ar: "ماجستير في العلوم الإنسانية والاجتماعية (تخصص رياضي)" }, institution: { en: "ISSEP Gafsa", ar: "المعهد العالي للرياضة والتربية البدنية بقفصة" } },
            { year: { en: "2008-2011", ar: "2008-2011" }, degree: { en: "Bachelor in Physical Education", ar: "إجازة في التربية البدنية" }, institution: { en: "ISSEP Gafsa", ar: "المعهد العالي للرياضة والتربية البدنية بقفصة" } },
            { year: { en: "2008-2010", ar: "2008-2010" }, degree: { en: "Second Degree in Football Training", ar: "شهادة ثانية في تدريب كرة القدم" }, institution: { en: "ISSEP Gafsa", ar: "المعهد العالي للرياضة والتربية البدنية بقفصة" } },
            { year: { en: "2007-2008", ar: "2007-2008" }, degree: { en: "Baccalaureate (Arts)", ar: "بكالوريا (آداب)" }, institution: { en: "Ibn Rashid Secondary School", ar: "ثانوية ابن الرشيد" } },
            { year: { en: "2015", ar: "2015" }, degree: { en: "First Aid & Disaster Medicine Cert", ar: "شهادة الإسعافات الأولية وطب الكوارث" }, institution: { en: "National Civil Protection", ar: "الحماية المدنية" } },
            { year: { en: "2015", ar: "2015" }, degree:  { en: "Volunteer Training Certificate", ar: "شهادة تدريب تطوعي" }, institution: { en: "National Civil Protection", ar: "الحماية المدنية" } }
        ],
        conferences: [
            { year: { en: "2016", ar: "2016" }, title: { en: "Entrepreneurship & Initiative Workshop", ar: "ورشة العمل حول ريادة الأعمال والمبادرة" }, org: { en: "ANETI", ar: "الوكالة الوطنية للتشغيل والعمل المستقل" } },
            { year: { en: "2016", ar: "2016" }, title: { en: "2nd International Sports Science Conference", ar: "المؤتمر الدولي الثاني لعلوم الرياضة" }, org: { en: "National Sports Observatory", ar: "المرصد الوطني للرياضة" } },
            { year: { en: "2016", ar: "2016" }, title: { en: "Research: Visual Perception in Football", ar: "بحث: الإدراك البصري في كرة القدم" }, org: { en: "University of Gafsa", ar: "جامعة قفصة" } },
            { year: { en: "2016", ar: "2016" }, title: { en: "Supervisory Member: Obesity, Body & Health Forum", ar: "عضو إشرافي: منتدى السمنة والجسم والصحة" }, org: { en: "ISSEP Gafsa", ar: "المعهد العالي للرياضة والتربية البدنية بقفصة" } },
            { year: { en: "2015", ar: "2015" }, title: { en: "Sociology Researchers Forum", ar: "منتدى الباحثين في علم الاجتماع" }, org: { en: "Tunisian Sociology Assoc.", ar: "الجمعية التونسية لعلم الاجتماع" } },
            { year: { en: "2014", ar: "2014" }, title: { en: "Sports for Development International Forum", ar: "المنتدى الدولي للرياضة من أجل التنمية" }, org: { en: "University of Gafsa", ar: "جامعة قفصة" } },
            { year: { en: "2014", ar: "2014" }, title: { en: "Physical Training: Theory to Practice Day", ar: "التدريب البدني: من النظرية إلى التطبيق" }, org: { en: "ISSEP Gafsa", ar: "المعهد العالي للرياضة والتربية البدنية بقفصة" } },
            { year: { en: "2013", ar: "2013" }, title: { en: "1st Scientific Research Day", ar: "اليوم الأول للبحث العلمي" }, org: { en: "University of Gafsa", ar: "جامعة قفصة" } },
            { year: { en: "2012", ar: "2012" }, title: { en: "Coach Reskilling Workshop", ar: "ورشة عمل إعادة تأهيل المدربين" }, org: { en: "Tunisian Football League", ar: "الجامعة التونسية لكرة القدم" } },
            { year: { en: "2012", ar: "2012" }, title: { en: "Modern Tactical & Physical Training", ar: "التدريب التكتيكي والبدني الحديث" }, org: { en: "South West Football League", ar: "الرابطة الجهوية لكرة القدم بالجنوب الغربي" } }
        ],
        skills: {
            languages: [
                { en: "Arabic (Native)", ar: "العربية (الأم)" },
                { en: "French (Excellent)", ar: "الفرنسية (ممتاز)" },
                { en: "English (Good)", ar: "الإنجليزية (جيد)" }
            ],
            technical: [
                { en: "Advanced Computer Skills", ar: "مهارات متقدمة في الحاسوب" },
                { en: "Internet Research", ar: "البحث عبر الإنترنت" },
                { en: "Physical Training", ar: "التدريب البدني" },
                { en: "Sport Management", ar: "الإدارة الرياضية" },
                { en: "First Aid", ar: "الإسعافات الأولية" }
            ]
        },
        extra: {
            publications: [ { en: "The effect of time of day on visual perception of distance in football players", ar: "تأثير وقت اليوم على الإدراك البصري للمسافة لدى لاعبي كرة القدم" } ],
            hobbies: [
                { en: "Scientific Research", ar: "البحث العلمي" },
                { en: "Chess", ar: "الشطرنج" },
                { en: "Football", ar: "كرة القدم" },
                { en: "Swimming", ar: "السباحة" },
                { en: "Sports Science", ar: "علوم الرياضة" }
            ]
        },
        achievements: [
            { icon: "🏆", title: { en: "National Football Player", ar: "لاعب كرة قدم وطني" }, desc: { en: "10 years professional experience with CS Gafsa", ar: "10 سنوات خبرة احترافية مع النادي الرياضي القفصي" }, level: 95 },
            { icon: "🎓", title: { en: "Master's Degree", ar: "ماجستير في العلوم" }, desc: { en: "Human & Social Sciences with Sports specialization", ar: "العلوم الإنسانية والاجتماعية بتخصص رياضي" }, level: 90 },
            { icon: "📊", title: { en: "10+ Conferences", ar: "أكثر من 10 مؤتمرات" }, desc: { en: "Presented research at national and international levels", ar: "تقديم أبحاث على المستويين الوطني والدولي" }, level: 85 },
            { icon: "🏅", title: { en: "5+ Certifications", ar: "أكثر من 5 شهادات" }, desc: { en: "Coaching, First Aid, Civil Protection & more", ar: "تدريب، إسعافات أولية، حماية مدنية والمزيد" }, level: 88 },
            { icon: "👥", title: { en: "Sports Management", ar: "إدارة رياضية" }, desc: { en: "General Secretary at 2 major sports clubs", ar: "أمين عام في ناديين رياضيين كبار" }, level: 82 },
            { icon: "📚", title: { en: "Published Research", ar: "أبحاث منشورة" }, desc: { en: "Visual perception study published academically", ar: "دراسة الإدراك البصري منشورة أكاديمياً" }, level: 75 }
        ]
    }
};

// Reduced motion helper — returns true if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 2. THE CORE ENGINE (Controller)
let currentLang = 'en';

// Helper to safely get nested values from the object
function getProp(obj, path, lang) {
    try {
        if (!obj) return "";
        if (path === '' || path === undefined || path === null) {
            // For empty path: return the value directly (handle language objects)
            if (typeof obj === 'string') return obj;
            if (typeof obj === 'object' && !Array.isArray(obj) && lang && (lang in obj)) return obj[lang];
            return obj && typeof obj === 'object' ? obj : "";
        }
        if (typeof obj === 'string') return obj;
        
        // If path already starts with 'nav.' or 'sections.', resolve directly
        if (path.startsWith('nav.') || path.startsWith('sections.')) {
            const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
            if (typeof value === 'string') return value;
            if (typeof value === 'object' && !Array.isArray(value) && lang && (lang in value)) return value[lang];
            return value && value[lang] ? value[lang] : (value || "");
        }
        
        // Otherwise try both nav and sections namespaces
        const navValue = obj.nav && obj.nav[path];
        const sectionsValue = obj.sections && obj.sections[path];
        
        // Prefer object values ({en, ar}) over plain strings
        if (sectionsValue && typeof sectionsValue === 'object' && !Array.isArray(sectionsValue)) {
            return sectionsValue[lang] || (sectionsValue.en || "");
        }
        if (navValue && typeof navValue === 'object' && !Array.isArray(navValue)) {
            return navValue[lang] || (navValue.en || "");
        }
        if (sectionsValue && typeof sectionsValue === 'string') return sectionsValue;
        if (navValue && typeof navValue === 'string') return navValue;
        
        // Fallback: check if the path exists directly on obj (for content data like achievements, experience items, etc.)
        const directValue = obj[path];
        if (directValue !== undefined && directValue !== null) {
            if (typeof directValue === 'object' && !Array.isArray(directValue)) {
                return directValue[lang] || (directValue.en || "");
            }
            if (typeof directValue === 'string') return directValue;
        }
        
        return "";
    } catch (e) { return ""; }
}

// New i18n helper: get translated string by data-i18n key
function getI18nText(trans, key, lang) {
    // key is like 'nav.home' or 'sections.about'
    return getProp(trans, key, lang);
}

// =============================================
// DATA VALIDATION ENGINE (T21)
// =============================================
function validateContent() {
    const warnings = [];
    const data = PORTFOLIO_DATA.content;

    // 1. Check top-level sections exist
    const requiredSections = ['personal', 'about', 'experience', 'education', 'conferences', 'skills', 'extra', 'achievements'];
    for (const section of requiredSections) {
        if (!data[section]) {
            warnings.push(`⚠️ Missing required section: "${section}"`);
        }
    }

    // 2. Validate personal info
    if (data.personal) {
        if (!data.personal.name || (!data.personal.name.en && !data.personal.name.ar)) {
            warnings.push('⚠️ personal.name is empty or missing both en/ar');
        }
        if (!data.personal.title || (!data.personal.title.en && !data.personal.title.ar)) {
            warnings.push('⚠️ personal.title is empty or missing both en/ar');
        }
        if (data.personal.details) {
            data.personal.details.forEach((d, i) => {
                const label = getProp(d, 'label', 'en') || `detail[${i}]`;
                const value = getProp(d, 'value', 'en') || '';
                if (!value) {
                    warnings.push(`⚠️ personal.details[${i}] (${label}) has empty value`);
                }
            });
        }
    }

    // 3. Validate about section
    if (data.about) {
        if (!data.about.en || data.about.en.trim() === '') {
            warnings.push('⚠️ about.en is empty');
        }
        if (!data.about.ar || data.about.ar.trim() === '') {
            warnings.push('⚠️ about.ar is empty');
        }
    }

    // 4. Validate experience
    if (data.experience) {
        data.experience.forEach((exp, i) => {
            const catEn = getProp(exp, 'category', 'en') || `category[${i}]`;
            if (!exp.items || exp.items.length === 0) {
                warnings.push(`⚠️ experience[${i}] ("${catEn}") has no items`);
                return;
            }
            exp.items.forEach((item, j) => {
                const role = getProp(item, 'role', 'en') || `role[${j}]`;
                if (!getProp(item, 'period', 'en')) {
                    warnings.push(`⚠️ experience[${i}].items[${j}] ("${role}") missing period`);
                }
                if (!getProp(item, 'entity', 'en')) {
                    warnings.push(`⚠️ experience[${i}].items[${j}] ("${role}") missing entity`);
                }
            });
        });
    }

    // 5. Validate education
    if (data.education) {
        data.education.forEach((edu, i) => {
            const degree = getProp(edu, 'degree', 'en') || `degree[${i}]`;
            if (!getProp(edu, 'year', 'en')) {
                warnings.push(`⚠️ education[${i}] ("${degree}") missing year`);
            }
            if (!getProp(edu, 'institution', 'en')) {
                warnings.push(`⚠️ education[${i}] ("${degree}") missing institution`);
            }
        });
    }

    // 6. Validate conferences
    if (data.conferences) {
        data.conferences.forEach((conf, i) => {
            const title = getProp(conf, 'title', 'en') || `conference[${i}]`;
            if (!getProp(conf, 'year', 'en')) {
                warnings.push(`⚠️ conferences[${i}] ("${title}") missing year`);
            }
            if (!getProp(conf, 'org', 'en')) {
                warnings.push(`⚠️ conferences[${i}] ("${title}") missing organization`);
            }
        });
    }

    // 7. Validate skills
    if (data.skills) {
        ['languages', 'technical'].forEach(cat => {
            if (data.skills[cat]) {
                data.skills[cat].forEach((skill, i) => {
                    const name = getProp(skill, '', cat === 'languages' ? 'en' : 'en') || skill.en || `${cat}[${i}]`;
                    if (skill.level !== undefined) {
                        if (typeof skill.level !== 'number' || skill.level < 0 || skill.level > 100) {
                            warnings.push(`⚠️ skills.${cat}[${i}] ("${name}") has invalid level: ${skill.level} (expected 0-100)`);
                        }
                    }
                });
            }
        });
    }

    // 8. Validate achievements
    if (data.achievements) {
        data.achievements.forEach((ach, i) => {
            const title = getProp(ach, 'title', 'en') || `achievement[${i}]`;
            if (!ach.icon) {
                warnings.push(`⚠️ achievements[${i}] ("${title}") missing icon`);
            }
            if (!getProp(ach, 'desc', 'en')) {
                warnings.push(`⚠️ achievements[${i}] ("${title}") missing description`);
            }
        });
    }

    // 9. Validate social URLs
    if (data.social) {
        Object.entries(data.social).forEach(([platform, info]) => {
            if (info.url) {
                try {
                    new URL(info.url);
                } catch {
                    warnings.push(`⚠️ social.${platform} has invalid URL: "${info.url}"`);
                }
            } else {
                warnings.push(`⚠️ social.${platform} missing URL`);
            }
        });
    }

    // 10. Validate translations
    ['en', 'ar'].forEach(lang => {
        if (!PORTFOLIO_DATA.translations[lang]) {
            warnings.push(`⚠️ Missing translations for language: "${lang}"`);
            return;
        }
        const trans = PORTFOLIO_DATA.translations[lang];
        if (!trans.nav) warnings.push(`⚠️ translations.${lang}.nav is missing`);
        if (!trans.sections) warnings.push(`⚠️ translations.${lang}.sections is missing`);
        if (!trans.hero) warnings.push(`⚠️ translations.${lang}.hero is missing`);
        if (!trans.stats) warnings.push(`⚠️ translations.${lang}.stats is missing`);
    });

    // 11. Validate extra (publications & hobbies)
    if (data.extra) {
        if (!data.extra.publications || data.extra.publications.length === 0) {
            warnings.push('⚠️ extra.publications is empty');
        }
        if (!data.extra.hobbies || data.extra.hobbies.length === 0) {
            warnings.push('⚠️ extra.hobbies is empty');
        }
    }

    // Report results
    if (warnings.length === 0) {
        console.log('✅ Content validation passed — all required fields present.');
    } else {
        console.warn(`📋 Content validation: ${warnings.length} warning(s) found:`);
        warnings.forEach(w => console.warn(w));
    }

    return warnings;
}

// Main Initialization
  document.addEventListener('DOMContentLoaded', () => {
    validateContent();
    initAnimations();
    setupLanguage();
    renderAll(currentLang);
    initHeroParallax();
    initHamburgerMenu();
    initActiveNav();
    initSmoothScroll();
    
    // Set initial footer year
    const footerEl = document.getElementById('footer-text');
    if (footerEl) footerEl.textContent = `© ${new Date().getFullYear()} Wadie Belgacem. Excellence in Sports Science.`;
    
    // CRITICAL FIX: Force all critical elements to full opacity after Three.js init
    // This overrides any inline opacity styles left by Three.js animation
    setTimeout(() => {
        const criticalSelectors = [
            '.info-bar', '.info-bar .info-item', '.info-bar .info-item span',
            '.info-bar .info-item label', '.info-bar .info-item > div',
            '.hero-content h1', '.hero-content .subtitle',
            '.section h2', '.section h3', '.section h4', '.section .section-title',
            '.stats-section', '.stats-section .stat-number', '.stats-section .stat-label',
            '.stats-section .stat-value',
            '#extra', '.extra-container h3',
            '#contact', 'footer'
        ];
        criticalSelectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                el.style.opacity = '1';
            });
        });
        // Also refresh ScrollTrigger after forcing opacity
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
    }, 1500);
});

function setupLanguage() {
    const btn = document.getElementById('lang-switcher');
    if (btn) {
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            updateLanguageUI(currentLang);
        });
    }
}

function updateLanguageUI(lang) {
    // 1. Update HTML Attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('data-lang', lang);

    // 2. Get language-specific translations
    const langTrans = PORTFOLIO_DATA.translations[lang];

    // 3. Update Switcher Button
    const btn = document.getElementById('lang-switcher');
    if (btn) {
        btn.innerText = langTrans.lang_btn;
        btn.setAttribute('aria-label', lang === 'ar' ? 'Switch language to English' : 'التبديل إلى العربية');
    }

    // 4. Update Footer (dynamic year)
    const footerEl = document.querySelector('footer p');
    if (footerEl) footerEl.textContent = langTrans.footer.replace('{YEAR}', new Date().getFullYear());

    // 5. Update Hero Section (name & subtitle)
    const heroName = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content .subtitle');
    const hero = langTrans.hero;
    if (heroName) heroName.textContent = hero.name;
    if (heroSubtitle) heroSubtitle.textContent = hero.subtitle;

    // 6. Update Stats Section Labels
    const statsLabels = document.querySelectorAll('.stat-label');
    const stats = langTrans.stats;
    if (statsLabels.length) {
        statsLabels[0].textContent = stats.years;
        statsLabels[1].textContent = stats.conferences;
        statsLabels[2].textContent = stats.certifications;
        statsLabels[3].textContent = stats.athletes;
    }

    // 7. Update all elements with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = getI18nText(langTrans, key, lang);
        if (text) el.textContent = text;
    });

    // 8. Re-render dynamic content
    renderAll(lang);
}

function renderAll(lang) {
    const data = PORTFOLIO_DATA.content;
    const trans = PORTFOLIO_DATA.translations[lang];

    // Personal Info
    const infoContainer = document.getElementById('personal-info-container');
    if (infoContainer) {
        infoContainer.innerHTML = data.personal.details.map(d => `
            <div class="info-item">
                <span>${d.icon}</span>
                <label>${getProp(d, 'label', lang)}</label>
                <div>${getProp(d, 'value', lang)}</div>
            </div>
        `).join('');
    }

    // About Me
    const aboutEl = document.getElementById('about-text');
    if (aboutEl) {
        aboutEl.textContent = data.about[lang];
    }

    // Experience (Enhanced with categories)
    renderEnhancedExperience(lang);

    // Education (Timeline)
    const eduContainer = document.getElementById('education-container');
    if (eduContainer) {
        eduContainer.innerHTML = `
            <div class="edu-timeline">
                ${data.education.map((edu, idx) => {
                    const year = getProp(edu, 'year', lang);
                    const degree = getProp(edu, 'degree', lang);
                    const institution = getProp(edu, 'institution', lang);
                    return `
                        <div class="edu-item timeline-item" data-index="${idx}">
                            <div class="timeline-dot"></div>
                            <div class="timeline-card">
                                <span class="timeline-year-badge">${year}</span>
                                <h3 class="timeline-title">${degree}</h3>
                                <p class="timeline-subtitle">${institution}</p>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // Conferences (with badges)
    const confEl = document.getElementById('conferences-container');
    if (confEl) {
        confEl.innerHTML = data.conferences.map(conf => {
            const title = getProp(conf, 'title', lang);
            let badge = 'conf';
            if (title.includes('workshop') || title.includes('ورشة')) badge = 'workshop';
            if (title.includes('Forum') || title.includes('منتدى')) badge = 'forum';
            if (title.includes('Research') || title.includes('بحث')) badge = 'research';
            return `
                <div class="conf-item">
                    <span class="conf-badge ${badge}">● ${badge.toUpperCase()}</span>
                    <span class="conf-year">${getProp(conf, 'year', lang)}</span>
                    <span class="conf-title">${getProp(conf, 'title', lang)}</span>
                    <span class="conf-org">${getProp(conf, 'org', lang)}</span>
                </div>
            `;
        }).join('');
    }

    // Skills — categorized progress bars
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        const langLabels = lang === 'ar' 
            ? { languages: 'اللغات', technical: 'المهارات التقنية' }
            : { languages: 'Languages', technical: 'Technical Skills' };
        
        skillsContainer.innerHTML = `
            <div class="skills-categorized">
                <div class="skill-category" role="group" aria-label="${langLabels.languages}">
                    <h3>🌐 ${langLabels.languages}</h3>
                    ${data.skills.languages.map(s => {
                        const name = getProp(s, '', lang) || s[lang];
                        return `
                        <div class="skill-item" role="progressbar" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${name}">
                            <div class="skill-item-header">
                                <span class="skill-item-name">${name}</span>
                                <span class="skill-item-level">${s.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="--level: ${s.level}%"></div>
                            </div>
                        </div>
                    `;
                    }).join('')}
                </div>
                <div class="skill-category" role="group" aria-label="${langLabels.technical}">
                    <h3>⚡ ${langLabels.technical}</h3>
                    ${data.skills.technical.map(s => {
                        const name = getProp(s, '', lang) || s[lang];
                        return `
                        <div class="skill-item" role="progressbar" aria-valuenow="${s.level}" aria-valuemin="0" aria-valuemax="100" aria-label="${name}">
                            <div class="skill-item-header">
                                <span class="skill-item-name">${name}</span>
                                <span class="skill-item-level">${s.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" style="--level: ${s.level}%"></div>
                            </div>
                        </div>
                    `;
                    }).join('')}
                </div>
            </div>
        `;
        
        // Trigger animation after render (skip if reduced motion preferred)
        if (prefersReducedMotion) {
            // Instant fill — no animation
            document.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.classList.add('animated');
            });
        } else {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
                        bar.classList.add('animated');
                    });
                });
            });
        }
    }

    // Extra (Pubs & Hobbies)
    const pubContainer = document.getElementById('publications-container');
    if (pubContainer) {
        pubContainer.innerHTML = data.extra.publications.map(p => `<p>📖 ${p[lang]}</p>`).join('');
    }

    const hobbyContainer = document.getElementById('hobbies-container');
    if (hobbyContainer) {
        hobbyContainer.innerHTML = data.extra.hobbies.map(h => 
            `<span class="skill-tag">${h[lang]}</span>`
        ).join('');
    }

    // Contact
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo) {
        contactInfo.innerHTML = data.personal.details.map(d => `
            <p>${d.icon} <span>${getProp(d, 'value', lang)}</span></p>
        `).join('');
    }

    // Social Links
    const socialLinks = document.getElementById('social-links');
    if (socialLinks && data.social) {
        const svgIcons = {
            linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
            twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>',
            researchgate: '<path d="M9 16a7 7 0 1 1 7-7"/><path d="M12 13a3 3 0 1 0 0 6"/><path d="M22 22l-5-10-5 10"/><path d="M14 9h-8" />'
        };
        
        const platforms = Object.entries(data.social).map(([key, val]) => ({
            key,
            url: val.url,
            label: val.label[lang],
            icon: svgIcons[key] || ''
        }));

        socialLinks.innerHTML = `
            <div class="social-label" data-i18n="social.connect">Connect With Me</div>
            <div class="social-grid" role="list" aria-label="Social media links">
                ${platforms.map(p => `
                    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="social-card" role="listitem" aria-label="Follow on ${p.label}">
                        <svg class="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            ${p.icon}
                        </svg>
                        <span class="social-label-text">${p.label}</span>
                    </a>
                `).join('')}
            </div>
        `;
    }

    // Achievements
    const achContainer = document.getElementById('achievements-container');
    if (achContainer) {
        achContainer.innerHTML = data.achievements.map(a => `
            <div class="achievement-card" role="article" aria-label="${getProp(a, 'title', lang)}">
                <span class="achievement-icon" aria-hidden="true">${a.icon}</span>
                <div class="achievement-title">${getProp(a, 'title', lang)}</div>
                <div class="achievement-desc">${getProp(a, 'desc', lang)}</div>
            </div>
        `).join('');
    }

    // Translate all data-i18n elements using lang-specific translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = getI18nText(trans, key, lang);
        if (text) el.textContent = text;
    });

    // Re-trigger ScrollTrigger refresh for updated content
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
    }
    initScrollTop();
    initStatsCounter();
}

// =============================================
// OLD Three.js code moved to three-init.js
// No duplicate initialization needed
// =============================================

function initAnimations() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Skip all GSAP animations if user prefers reduced motion
        if (prefersReducedMotion) {
            // Make all sections immediately visible
            document.querySelectorAll(".reveal-on-scroll").forEach(el => {
                el.classList.add('visible');
            });
            // Ensure all content cards, conf items, etc. are visible
            document.querySelectorAll(".content-card, .conf-item, .pub-box, .hobby-box, .edu-item, .skill-item, .achievement-card").forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            return; // Exit early — no GSAP animations
        }
        
        // Initial Hero Reveal
        gsap.from(".reveal-text", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out" });
        gsap.from(".subtitle", { opacity: 0, duration: 1.5, delay: 0.5 });

        // Scroll Reveal for all sections (fixed: no reverse to keep content visible)
        const sections = document.querySelectorAll(".section, .info-bar, .extra-container");
        sections.forEach(sec => {
            gsap.from(sec.children, {
                scrollTrigger: {
                    trigger: sec,
                    start: "top 85%",
                    toggleActions: "play none none none"  // FIX: never reverse/hide content
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.15
            });
        });
        
        // Stats counter animation (skip if reduced motion)
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length) {
            ScrollTrigger.create({
                trigger: '.stats-section',
                start: 'top 80%',
                onEnter: () => {
                    if (prefersReducedMotion) {
                        // Show final values immediately
                        statNumbers.forEach(stat => {
                            const target = parseInt(stat.getAttribute('data-target'));
                            stat.textContent = target + '+';
                        });
                        return;
                    }
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-target'));
                        let current = 0;
                        const increment = target / 60;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                stat.textContent = target + '+';
                                clearInterval(timer);
                            } else {
                                stat.textContent = Math.floor(current);
                            }
                        }, 30);
                    });
                },
                once: true
            });
        }
    }
}

function initScrollTop() {
    const btn = document.getElementById('scroll-top-btn');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initStatsCounter() {
    // Already handled in initAnimations via ScrollTrigger
}

// =============================================
// HAMBURGER MENU — Mobile Navigation
// =============================================
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive.toString());
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isActive ? 'hidden' : '';
    });
    
    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside (on the backdrop)
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// =============================================
// ACTIVE NAV LINK HIGHLIGHTING — IntersectionObserver
// =============================================
function initActiveNav() {
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!navLinks.length) return;

    // Build list of section IDs that have corresponding nav links
    const sectionIds = [];
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            sectionIds.push(href.slice(1));
        }
    });

    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        // Find the section whose top is closest to the top of the viewport
        let bestEntry = null;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!bestEntry || entry.boundingClientRect.top < bestEntry.boundingClientRect.top) {
                    bestEntry = entry;
                }
            }
        });

        if (bestEntry) {
            const id = bestEntry.target.id;
            navLinks.forEach(link => {
                const isActive = link.getAttribute('href') === `#${id}`;
                link.classList.toggle('active', isActive);
                link.setAttribute('aria-current', isActive ? 'page' : 'false');
            });
        }
    }, observerOptions);

    sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });

    // Fallback: also handle on scroll for edge cases
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollPos = window.scrollY + 120; // offset for fixed nav

                // Get only sections that have nav links, sorted by offset
                const sections = [];
                sectionIds.forEach(id => {
                    const section = document.getElementById(id);
                    if (section) sections.push({ id, offset: section.offsetTop });
                });
                sections.sort((a, b) => a.offset - b.offset);

                // Find the section just above the scroll position
                let currentSection = '';
                for (const sec of sections) {
                    if (sec.offset <= scrollPos) {
                        currentSection = sec.id;
                    }
                }

                if (currentSection) {
                    navLinks.forEach(link => {
                        const isActive = link.getAttribute('href') === `#${currentSection}`;
                        link.classList.toggle('active', isActive);
                        link.setAttribute('aria-current', isActive ? 'page' : 'false');
                    });
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// =============================================
// SMOOTH SCROLL FOR NAV LINKS — T14
// =============================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a, .hero-cta[href^="#"]');
    if (!navLinks.length) return;

    const getNavHeight = () => {
        const nav = document.querySelector('.glass-nav');
        return nav ? nav.offsetHeight : 80;
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            const targetId = href.slice(1);
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            e.preventDefault();

            const navHeight = getNavHeight();
            const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const hamburger = document.getElementById('hamburger');
            const navLinksContainer = document.querySelector('.nav-links');
            if (hamburger && navLinksContainer) {
                hamburger.classList.remove('active');
                navLinksContainer.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }

            // Update URL without jumping
            if (history.pushState) {
                history.pushState(null, '', href);
            }
        });
    });
}

// =============================================
// HERO PARALLAX EFFECT
// =============================================
function initHeroParallax() {
    const heroWrapper = document.getElementById('hero-content-wrapper');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!heroWrapper) return;

    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const heroHeight = heroWrapper.offsetHeight || window.innerHeight;
                const scrollFraction = Math.min(scrollY / heroHeight, 1);
                
                // Scale down and fade out
                const scale = 1 - (scrollFraction * 0.3);
                const translateY = scrollY * 0.4;
                const opacity = 1 - (scrollFraction * 0.8);
                
                heroWrapper.style.transform = `scale(${Math.max(scale, 0.7)}) translateY(${translateY}px)`;
                heroWrapper.style.opacity = Math.max(opacity, 0.2);
                
                // Fade out scroll indicator faster
                if (scrollIndicator) {
                    scrollIndicator.style.opacity = Math.max(1 - (scrollFraction * 3), 0);
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });
}

// =============================================
// ENHANCED EXPERIENCE RENDERING — Alternating Layout
// =============================================
function renderEnhancedExperience(lang) {
    const data = PORTFOLIO_DATA.content;
    const expContainer = document.getElementById('experience-container');
    if (!expContainer || !data.experience) return;

    expContainer.innerHTML = data.experience.map((group, groupIdx) => {
        const categoryTitle = getProp(group, 'category', lang);
        const items = group.items.map((item, idx) => {
            const period = getProp(item, 'period', lang);
            const role = getProp(item, 'role', lang);
            const entity = getProp(item, 'entity', lang);
            // Alternate left/right for visual interest
            const side = (idx % 2 === 0) ? 'timeline-left' : 'timeline-right';

            return `
                <div class="timeline-item ${side}" data-index="${idx}">
                    <div class="timeline-dot"></div>
                    <div class="timeline-connector"></div>
                    <div class="timeline-card">
                        <span class="timeline-period">${period}</span>
                        <h3 class="timeline-title">${role}</h3>
                        <p class="timeline-subtitle">${entity}</p>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="timeline-category">
                <h3 class="timeline-category-title">${categoryTitle}</h3>
                <div class="timeline">
                    ${items}
                </div>
            </div>
        `;
    }).join('');
}

// =============================================
// LOADING SCREEN HIDE LOGIC
// =============================================
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        // Remove from DOM after transition
        setTimeout(() => {
            loadingScreen.remove();
        }, 600);
    }
}

// =============================================
// SCROLL PROGRESS INDICATOR
// =============================================
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Hide loading screen when DOM is ready + libraries loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Three.js + GSAP to initialize
    setTimeout(hideLoadingScreen, 1500);
    // Initialize scroll progress indicator
    initScrollProgress();
});

// Fallback: force hide after 5 seconds max
setTimeout(hideLoadingScreen, 5000);
