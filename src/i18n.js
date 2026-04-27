import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav_website": "Website",
      "nav_webshop": "Webshop",
      "nav_hosting": "Hosting & Support",
      "nav_cases": "Cases",
      "nav_about": "About Us",
      "nav_blog": "Blog",
      "nav_contact": "Contact",
      "hero_title": "Want a new and affordable website or webshop lightning fast?",
      "hero_desc": "SwiftDigit helps you get a new website or webshop lightning fast. For this, we have developed a sophisticated step-by-step plan, which allows us to rightly call ourselves the fastest web builder in the region. We combine cutting-edge technology with stunning design to deliver a platform that not only looks beautiful but also converts visitors into loyal customers. Let our team of experts build your digital future today.",
      "hero_cta": "Request a quote",
      "hero_secondary_cta": "Discover our process",
      "quote_title": "Request a quote now from the fastest builder in the region.",
      "quote_sub": "Do you also want to be online with your new website or webshop in 5 days? Request a quote now and we will contact you super fast! We guarantee exceptional quality, uncompromising speed, and unparalleled ongoing support for your business.",
      "quote_btn_1": "Discover our lightning-fast process",
      "quote_btn_2": "Request a free quote",
      "counter_title": "What makes us SwiftDigit?",
      "counter": [
        { "num": "8.8", "label": "Average rating" },
        { "num": "15+", "label": "Years of experience" },
        { "num": "6,500", "label": "Websites developed" },
        { "num": "5", "label": "Days lead time" },
        { "num": "25", "label": "Expert staff" }
      ],
      "portfolio_title": "Recent case",
      "portfolio_sub": "Below is our most recent case. We take pride in building scalable, high-performance web applications that drive real business results. Want to admire more cases? Go to our clients.",
      "portfolio_btn_main": "Admire more cases",
      "portfolio_case": {
        "title": "Shopfie Global Solutions",
        "image": "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=2000",
        "tags": ["#Business webshop", "#Custom Development", "#E-commerce", "#UI/UX Design"]
      },
      "blog_title": "Our latest blog posts",
      "blog_posts": [
        {
          "id": 1,
          "title": "How do you create an SEO-friendly website?",
          "desc": "An SEO-friendly website is essential to be found easily in search engines. In this comprehensive guide, we explore the best practices for optimizing your technical SEO, content structure, and page speed to rank higher on Google.",
          "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
          "date": "March 2, 2026"
        },
        {
          "id": 2,
          "title": "What is Magento? How the most popular webshop platform works",
          "desc": "What is Magento? Magento is an open-source e-commerce platform that allows companies to build highly customizable and scalable online stores. Discover why enterprises choose Magento over Shopify or WooCommerce.",
          "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
          "date": "January 13, 2026"
        },
        {
          "id": 3,
          "title": "How does Magento work? This is how the e-commerce platform functions.",
          "desc": "Dive deep into the architecture of Magento. We break down how its modular system, robust database handling, and powerful API integrations provide webshops with an unbeatable advantage in the competitive e-commerce landscape.",
          "image": "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=2070",
          "date": "January 13, 2026"
        }
      ],
      "services_title": "Our <accent>Services</accent>",
      "services": [
        {
          "id": "it_consultant",
          "title": "IT Consultant",
          "desc": "As a professional IT Consultant, we deliver reliable IT solutions, system optimization, and expert support to ensure stability and peak performance."
        },
        {
          "id": "web_dev",
          "title": "Web Development",
          "desc": "As a leading website development company, we create scalable websites with cutting-edge technologies that boost performance and perfectly align with your business goals."
        },
        {
          "id": "digital_marketing",
          "title": "Digital Marketing",
          "desc": "As a trusted digital marketing agency in KSA, we execute data-driven marketing strategies that boost visibility, drive engagement, and promote sustainable business growth."
        },
        {
          "id": "graphic_design",
          "title": "Graphic Design",
          "desc": "If you're looking for professional graphic design near me, we create bold, creative designs that bring your brand to life and captivate your audience."
        },
        {
          "id": "video_production",
          "title": "Video Production",
          "desc": "For those searching for professional videography near me, we produce impactful video content with stunning visuals that tell your brand's story and inspire your audience."
        },
        {
          "id": "ui_ux",
          "title": "UI/UX Design",
          "desc": "Our UI/UX design services focus on creating intuitive, user-friendly interfaces that boost usability, functionality, and customer engagement with your brand."
        },
        {
          "id": "mobile_app",
          "title": "Mobile App Solutions",
          "desc": "Developing High-Performance Mobile Apps Focused on Usability, Scalability, and Seamless Compatibility Across All Devices."
        },
        {
          "id": "seo",
          "title": "SEO",
          "desc": "Boosting Search Rankings with Proven SEO Strategies to Drive Targeted Traffic and Maximize Your Online Growth and Visibility."
        },
        {
          "id": "ecommerce",
          "title": "E-Commerce Solutions",
          "desc": "Creating Optimized E-Commerce Platforms Built to Enhance Integration, Elevate Usability, and Accelerate Online Sales."
        }
      ],
      "process_title": "Our <accent>Process</accent>",
      "process_desc": "How we deliver results faster than anyone else.",
      "process_steps": [
        { "title": "Discovery", "desc": "We understand your goals and audience." },
        { "title": "Strategy", "desc": "Planning the fastest route to success." },
        { "title": "Execution", "desc": "Building with cutting-edge tech." },
        { "title": "Launch", "desc": "Going live in record time." }
      ],
      "footer_about": "Leading digital agency providing top-tier IT and marketing solutions.",
      "footer_links_title": "Quick Links",
      "footer_services_title": "Our Services",
      "footer_contact_title": "Contact Info",
      "footer_rights": "All rights reserved.",
      "stats": [
        "Fast delivery of your website",
        "Available until 21:00 in the evening",
        "More than 6500 customers preceded you",
        "Emergency line for our customers"
      ],
      "promise_title": "We are the fastest builder in the region. We prove that every day.",
      "circuit_websites_title": "Websites",
      "circuit_websites_desc": "Our sophisticated website development process is the fastest. Moreover, it only requires limited input and therefore little of your valuable time as an entrepreneur!",
      "circuit_webshops_title": "Webshops",
      "circuit_webshops_desc": "Not only for websites, but also for webshops we can deploy our unique fast development process. You decide if it becomes a business or a custom webshop.",
      "circuit_hosting_title": "Hosting, security & support",
      "banner_title": "A lightning fast website every day",
      "banner_desc": "With our support contract you are assured of a lightning fast website or webshop",
      "banner_cta": "More information about hosting",
      "reasons_title": "9 reasons to choose SwiftDigit",
      "reasons_cols": [
        {
          "title": "Fastest process",
          "desc": "An entrepreneur has no time to be busy for weeks with a new website. That's why we have set up the fastest development process.",
          "checks": ["Fastest development process", "Online within 5 days after delivery", "Websites specifically for entrepreneurs"]
        },
        {
          "title": "Super fast hosting",
          "desc": "SwiftDigit takes care of everything. In addition to the super fast development, we also offer hosting, security & support.",
          "checks": ["Explicit focus on security", "Super service-oriented helpdesk", "Forwarding WordPress hosting"]
        },
        {
          "title": "Unique concept",
          "desc": "Our professionals follow the developments and the latest requirements of search engines daily.",
          "checks": ["Optimal online indexability", "Websites optimized for Google", "In-house online marketing experts"]
        }
      ],
      "cards": [
        { "title": "Have a website made", "desc": "A professional website that really makes your business shine." },
        { "title": "Have a webshop made", "desc": "Start or improve your online sales with a user-friendly webshop." },
        { "title": "Hosting, Security & Support", "desc": "Reliable hosting, optimal security and fast support." },
        { "title": "Custom website", "desc": "A unique, custom website that perfectly matches your wishes." },
        { "title": "Webshop redesign", "desc": "Give your webshop a fresh, modern look and improve conversions." }
      ],

      "portfolio_title": "Recent Cases",
      "portfolio_desc": "Take a look at some of our recent work.",
      "portfolio_btn": "View Case",
      "blog_title": "Latest News",
      "blog_btn": "Read More",
      "cta_team_title": "Want to start your new website or webshop project?",
      "cta_team_btn": "Schedule a meeting",
      "website_zigzag_1_title": "Why create a new website?",
      "website_zigzag_1_desc": "The digital world is experiencing rapid changes. What seems modern today may become outdated within a year. Therefore, continuous updating is necessary. A modern professional website reflects your expectations, meets your visitors' needs, and complies with search engine technical requirements. With SwiftDigit, you can avoid falling behind competitors and maintain your presence among your target audience.",
      "website_zigzag_1_desc2": "Moreover, ease of website use on mobile devices is gaining increasing importance. The number of website visitors browsing via smartphones or tablets is growing. We ensure your website operates with high efficiency and looks elegant across all devices. This way, you leave a strong first impression and increase the chances of turning visitors into actual customers.",
      "website_zigzag_2_title": "What are the benefits of creating a new website?",
      "website_zigzag_2_desc": "A professional website is not just a digital business card, but the core of your online presence. A professionally designed website not only increases your chances of appearing in Google search results, but also enhances your visitors' trust. A modern website reflects credibility, makes it easier for potential customers to contact you or request a quote.",
      "website_zigzag_2_desc2": "Furthermore, the new website will help you measure your success better. Whether it's about visitor numbers, contact requests, or sales: through a well-configured platform, you can view your results immediately online and identify areas that need improvement.",
      "website_process_title": "Our Work Style",
      "website_process_desc": "At SwiftDigit, we believe website design should be clear and straightforward. We don't rely on complex procedures, but rather a structured methodology that lets you know every step of the work process. We operate according to a specific action plan with clear steps, allowing room to express your desires and feedback. This way, together we ensure an ideal end result with all its details.",
      "website_process_steps": [
        { "title": "1. Introduction and strategy", "desc": "We start with a personal introduction where we discuss your goals, target audience, and style. Whether at our office, at your place, or online – the choice is yours. This gives us a clear picture of the image you want to project and what your website needs to achieve. Based on this, we draw up a plan that suits your company." },
        { "title": "2. Design and feedback", "desc": "Our designers translate your wishes into an initial design. You have the opportunity to provide feedback, so that we can fine-tune the design down to the last detail. This way, step by step, we build a website that suits you perfectly." },
        { "title": "3. Development and optimization", "desc": "Once the design is approved, our developers get to work. We build the website in an agreed-upon CMS and ensure everything is technically optimized for Google. The site undergoes comprehensive testing to ensure its speed and ease of use before launch. Based on your feedback, we continue to optimize." },
        { "title": "4. Delivery and support", "desc": "After launching the site, you can rely on our support. We will remain available to answer your questions and provide technical assistance. Thanks to our evening and emergency line availability, we are always ready to help." }
      ],
      "website_types_title": "Types of websites we build",
      "website_types_cards": [
        { "title": "Custom website", "desc": "Do you really want a unique website? This is the ideal choice. We design and develop everything exactly to match your corporate identity and target audience.", "btn": "Request custom website" },
        { "title": "Business website", "desc": "The perfect choice for entrepreneurs who want a professional website at an affordable price. Clear, user-friendly, and reliable.", "btn": "Create a business website" },
        { "title": "WordPress website", "desc": "Many websites are built using WordPress. It is the most used CMS in the world. Easy to use, highly flexible, and scalable.", "btn": "Request WordPress" },
        { "title": "E-commerce webshop", "desc": "You've come to the right place for e-commerce. Whether you are starting selling online or looking for an advanced shop, we build it.", "btn": "Create a webshop" }
      ],
      "website_pricing_title": "Clear and transparent pricing",
      "website_pricing_cards": [
        { "title": "Business Website", "price": "From €799", "features": ["Customized Strategy", "Professional WordPress setup", "Responsive design", "Up to 5 content pages", "Contact forms included", "SEO basic setup", "1 revision round"], "btn": "Request quote" },
        { "title": "Business Website Plus", "price": "From €1299", "features": ["Everything in Business", "Custom UI/UX design", "Up to 10 content pages", "Advanced SEO setup", "Social media integration", "Google Analytics", "Premium support"], "btn": "Request quote", "highlight": true },
        { "title": "Custom Website", "price": "Price on request", "features": ["100% Unique custom design", "Unlimited pages", "Custom integrations (API)", "Advanced performance", "Dedicated project manager", "Priority support"], "btn": "Request quote" }
      ],
      "website_why_title": "Why choose SwiftDigit?",
      "website_why_desc": "There are many web developers, but at SwiftDigit we stand out with our unique approach. We combine deep technical expertise with a focus on customer success. We have over 15 years of experience in knowing exactly what works on the internet.",
      "website_why_list": [
        "Attractive and compatible website with all devices",
        "Fast delivery from the first draft to the final launch",
        "Dedicated team for maintenance and support",
        "Easy-to-use content management system",
        "Full setup of Google Analytics and SEO tools",
        "Custom design options tailored to your brand"
      ],
      "website_features": [
        { "title": "Technically optimized and SEO friendly", "desc": "Every website we design is technically optimized and meets the highest web standards. We focus on speed, security, and usability. In addition, we ensure your site is built to rank high in search engines (SEO).", "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2074" },
        { "title": "Hosting, Security, and Support", "desc": "A good website needs a strong foundation. Besides designing and building, we also provide hosting and security services. This guarantees your website is always fast, secure, and up to date.", "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070", "reverse": true },
        { "title": "Ease of Use and Responsive Design", "desc": "At SwiftDigit, we realize that a website must work perfectly across all devices. Our responsive designs ensure a great user experience whether on mobile, tablet, or desktop.", "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" }
      ],
      "website_cost_title": "How much does it cost to build a website?",
      "website_cost_desc": "At SwiftDigit, you can get an integrated website starting from €799. Our transparent pricing ensures no hidden fees. The final price depends on the specific features and design required. Request a free quote for an exact estimate.",
      "website_clients_title": "Our clients and projects",
      "website_clients_desc": "Over the past years, we are honored to have helped over 6,500 clients build professional websites. We work with local companies and international organizations across various sectors."
    }
  },
  ar: {
    translation: {
      "nav_website": "موقع إلكتروني",
      "nav_webshop": "متجر إلكتروني",
      "nav_hosting": "الاستضافة والدعم",
      "nav_cases": "حالات",
      "nav_about": "معلومات عنا",
      "nav_blog": "مدونة",
      "nav_contact": "اتصال",
      "hero_title": "هل تريد موقعاً أو متجراً إلكترونياً جديداً وبسعر مناسب وبسرعة فائقة؟",
      "hero_desc": "تساعدك سويفت ديجيت SwiftDigit في الحصول على موقع إلكتروني أو متجر جديد بسرعة فائقة وبجودة لا تضاهى. قمنا بتطوير خطة عمل هندسية مدروسة بدقة تتيح لنا تصميم وتطوير وإطلاق مشاريع رقمية ضخمة في وقت قياسي. نحن ندمج أحدث التقنيات البرمجية مع تصاميم واجهات المستخدم الفاخرة لضمان تحويل زوار موقعك إلى عملاء دائمين. دع فريق الخبراء لدينا يبني مستقبلك الرقمي اليوم.",
      "hero_cta": "اطلب عرض سعر",
      "hero_secondary_cta": "اكتشف طريقتنا",
      "quote_title": "اطلب عرض سعر الآن من أسرع وأفضل منشئ مواقع في المنطقة.",
      "quote_sub": "هل تطمح لإطلاق موقعك أو متجرك الإلكتروني الجديد خلال 5 أيام فقط دون المساومة على الجودة؟ اطلب عرض سعر الآن وسنتواصل معك بسرعة فائقة لنبدأ فوراً! نحن نضمن لك جودة استثنائية، سرعة غير مسبوقة، ودعماً فنياً متواصلاً لضمان نمو أعمالك.",
      "quote_btn_1": "اكتشف عمليتنا البرقية",
      "quote_btn_2": "اطلب عرض سعر مجاني",
      "counter_title": "ما الذي يجعلنا الخيار الأول؟ سويفت ديجيت",
      "counter": [
        { "num": "8.8", "label": "متوسط التقييم من عملائنا" },
        { "num": "15+", "label": "سنوات من الخبرة العملية" },
        { "num": "6,500", "label": "موقع ومتجر تم تطويره بنجاح" },
        { "num": "5", "label": "أيام كحد أقصى للتنفيذ" },
        { "num": "25", "label": "مهندس ومطور خبير في فريقنا" }
      ],
      "portfolio_title": "أحدث أعمالنا المميزة",
      "portfolio_sub": "نضع بين يديك أحدث مشاريعنا التي قمنا بإنجازها. نحن نفخر ببناء تطبيقات ويب قابلة للتوسع وعالية الأداء والتي تدفع بنتائج أعمال حقيقية. هل ترغب في رؤية المزيد من قصص النجاح؟ تفضل بزيارة صفحة عملائنا.",
      "portfolio_btn_main": "مشاهدة المزيد من الأعمال الاحترافية",
      "portfolio_case": {
        "title": "حلول شوبفاي العالمية المتقدمة",
        "image": "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=2000",
        "tags": ["#متجر أعمال متكامل", "#تطوير مخصص", "#تجارة إلكترونية", "#تصميم تجربة مستخدم"]
      },
      "blog_title": "آخر المقالات والأخبار التقنية",
      "blog_posts": [
        {
          "id": 1,
          "title": "كيف تنشئ موقعاً صديقاً لمحركات البحث (SEO) في 2026؟",
          "desc": "يعتبر الموقع الصديق لمحركات البحث أمراً بالغ الأهمية ليتم العثور عليك بسهولة في جوجل. في هذا الدليل الشامل والموسع، نستكشف أفضل الممارسات المتقدمة لتحسين الـ SEO التقني الخاص بك، وبنية المحتوى، وسرعة الصفحة لتصدر نتائج البحث.",
          "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
          "date": "2 مارس 2026"
        },
        {
          "id": 2,
          "title": "ما هو منصة ماجنتو (Magento)؟ وكيف تعمل أشهر منصة للمتاجر الإلكترونية",
          "desc": "ما هو ماجنتو؟ ماجنتو هي منصة تجارة إلكترونية مفتوحة المصدر تتيح للشركات بناء متاجر إلكترونية قابلة للتخصيص وقابلة للتطوير بشكل كبير. اكتشف معنا لماذا تختار الشركات الكبرى ماجنتو بدلاً من شوبيفاي أو ووكومرس.",
          "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
          "date": "13 يناير 2026"
        },
        {
          "id": 3,
          "title": "كيف تعمل الهندسة المعمارية لمنصة ماجنتو؟ نظرة عميقة على الوظائف",
          "desc": "تعمق في هندسة ماجنتو المعمارية المعقدة. نقوم هنا بتحليل شامل لكيفية عمل نظامها المعياري، وتعاملها القوي مع قواعد البيانات الضخمة، وتكاملها مع واجهات برمجة التطبيقات (API) القوية لتوفير ميزة لا تقبل المنافسة للمتاجر.",
          "image": "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=2070",
          "date": "13 يناير 2026"
        }
      ],
      "services_title": "<accent>خدماتنا</accent>",
      "services": [
        {
          "id": "it_consultant",
          "title": "استشارات تقنية المعلومات",
          "desc": "بصفتنا مستشار تكنولوجيا معلومات محترف، نقدم حلول تكنولوجيا معلومات موثوقة، وتحسين الأنظمة، ودعم الخبراء لضمان الاستقرار وذروة الأداء."
        },
        {
          "id": "web_dev",
          "title": "تطوير الويب",
          "desc": "بصفتنا شركة رائدة في تطوير مواقع الويب، نقوم بإنشاء مواقع قابلة للتطوير بأحدث التقنيات التي تعزز الأداء وتتوافق تماماً مع أهداف عملك."
        },
        {
          "id": "digital_marketing",
          "title": "التسويق الرقمي",
          "desc": "بصفتنا وكالة تسويق رقمي موثوقة، ننفذ استراتيجيات تسويق تعتمد على البيانات لتعزيز الظهور، ودفع التفاعل، وتعزيز نمو الأعمال المستدام."
        },
        {
          "id": "graphic_design",
          "title": "التصميم الجرافيكي",
          "desc": "إذا كنت تبحث عن تصميم جرافيكي احترافي، فنحن نبتكر تصميمات جريئة وإبداعية تضفي الحيوية على علامتك التجارية وتأسر جمهورك."
        },
        {
          "id": "video_production",
          "title": "إنتاج الفيديو",
          "desc": "للباحثين عن تصوير فيديو احترافي، ننتج محتوى فيديو مؤثر بصور مذهلة تحكي قصة علامتك التجارية وتلهم جمهورك."
        },
        {
          "id": "ui_ux",
          "title": "تصميم UI/UX",
          "desc": "تركز خدمات تصميم واجهة وتجربة المستخدم لدينا على إنشاء واجهات سهلة الاستخدام تعزز قابلية الاستخدام والوظائف ومشاركة العملاء مع علامتك التجارية."
        },
        {
          "id": "mobile_app",
          "title": "تطبيقات الهاتف",
          "desc": "تطوير تطبيقات هواتف محمولة عالية الأداء تركز على سهولة الاستخدام، وقابلية التوسع، والتوافق السلس عبر جميع الأجهزة."
        },
        {
          "id": "seo",
          "title": "تحسين محركات البحث SEO",
          "desc": "تعزيز تصنيفات البحث باستراتيجيات تحسين محركات البحث المثبتة لجلب حركة مرور مستهدفة وزيادة نموك وظهورك عبر الإنترنت."
        },
        {
          "id": "ecommerce",
          "title": "حلول التجارة الإلكترونية",
          "desc": "إنشاء منصات تجارة إلكترونية محسّنة مصممة لتعزيز التكامل والارتقاء بقابلية الاستخدام وتسريع المبيعات عبر الإنترنت."
        }
      ],
      "process_title": "آلية <accent>عملنا</accent>",
      "process_desc": "كيف نحقق النتائج أسرع من أي شخص آخر.",
      "process_steps": [
        { "title": "الاكتشاف", "desc": "نفهم أهدافك وجمهورك المستهدف." },
        { "title": "الاستراتيجية", "desc": "تخطيط أسرع طريق للنجاح." },
        { "title": "التنفيذ", "desc": "البناء بأحدث التقنيات العالمية." },
        { "title": "الإطلاق", "desc": "الانطلاق في وقت قياسي." }
      ],
      "footer_about": "وكالة رقمية رائدة تقدم حلولاً تقنية وتسويقية من الدرجة الأولى.",
      "footer_links_title": "روابط سريعة",
      "footer_services_title": "خدماتنا",
      "footer_contact_title": "معلومات الاتصال",
      "footer_rights": "جميع الحقوق محفوظة.",
      "stats": [
        "تسليم سريع لموقعك الإلكتروني",
        "متوفرون حتى الساعة 9 مساءً",
        "أكثر من 6500 عميل وثقوا بنا",
        "خط طوارئ مخصص لعملائنا"
      ],
      "promise_title": "نحن أسرع منشئ مواقع في المنطقة. نثبت ذلك كل يوم.",
      "circuit_websites_title": "مواقع إلكترونية",
      "circuit_websites_desc": "عملية تطوير المواقع المتطورة لدينا هي الأسرع. علاوة على ذلك، فهي تتطلب مدخلات محدودة وبالتالي القليل من وقتك الثمين كصاحب عمل!",
      "circuit_webshops_title": "متاجر إلكترونية",
      "circuit_webshops_desc": "ليس فقط للمواقع، ولكن أيضاً للمتاجر الإلكترونية يمكننا تطبيق عملية التطوير السريعة والفريدة الخاصة بنا.",
      "circuit_hosting_title": "الاستضافة والأمان والدعم",
      "banner_title": "موقع إلكتروني فائق السرعة كل يوم",
      "banner_desc": "مع عقد الدعم الخاص بنا، أنت تضمن الحصول على موقع أو متجر إلكتروني فائق السرعة",
      "banner_cta": "مزيد من المعلومات عن الاستضافة",
      "reasons_title": "9 أسباب لاختيار سويفت ديجيت",
      "reasons_cols": [
        {
          "title": "أسرع عملية تنفيذ",
          "desc": "ليس لدى رائد الأعمال وقت لينشغل لأسابيع بموقع جديد. لهذا السبب أنشأنا أسرع عملية تطوير.",
          "checks": ["أسرع عملية تطوير", "أونلاين خلال 5 أيام من التسليم", "مواقع مخصصة لرواد الأعمال"]
        },
        {
          "title": "استضافة فائقة السرعة",
          "desc": "سويفت ديجيت تهتم بكل شيء. بالإضافة إلى التطوير السريع، نقدم الاستضافة والأمان والدعم.",
          "checks": ["تركيز صريح على الأمان", "مركز مساعدة موجه للخدمة", "استضافة ووردبريس متطورة"]
        },
        {
          "title": "مفهوم فريد",
          "desc": "يتابع محترفونا التطورات وأحدث متطلبات محركات البحث يومياً.",
          "checks": ["أرشفة مثالية عبر الإنترنت", "مواقع محسنة لجوجل", "خبراء تسويق رقمي داخليون"]
        }
      ],
      "cards": [
        { "title": "إنشاء موقع إلكتروني", "desc": "موقع احترافي يجعل عملك يتألق حقاً." },
        { "title": "إنشاء متجر إلكتروني", "desc": "ابدأ أو حسن مبيعاتك عبر الإنترنت بمتجر سهل الاستخدام." },
        { "title": "الاستضافة والأمان والدعم", "desc": "استضافة موثوقة، أمان مثالي ودعم سريع." },
        { "title": "موقع حسب الطلب", "desc": "موقع فريد ومخصص يطابق رغباتك تماماً." },
        { "title": "إعادة تصميم المتجر", "desc": "امنح متجرك مظهراً حديثاً وحسن التحويلات." }
      ],

      "portfolio_title": "أعمالنا الأخيرة",
      "portfolio_desc": "ألقِ نظرة على بعض مشاريعنا الحديثة.",
      "portfolio_btn": "مشاهدة المشروع",
      "blog_title": "آخر الأخبار",
      "blog_btn": "اقرأ المزيد",
      "cta_team_title": "هل تريد البدء في مشروع موقعك أو متجرك الجديد؟",
      "cta_team_btn": "تحديد موعد",
      "website_zigzag_1_title": "لماذا يتم إنشاء موقع ويب جديد؟",
      "website_zigzag_1_desc": "يشهد العالم الرقمي تطورات متلاحقة وتغيرات جذرية في معايير التصميم وتجربة المستخدم. ما كان يُعد ابتكاراً وعصرياً بالأمس، قد يصبح قديماً وغير فعال اليوم. لذلك، فإن الاستثمار في موقع إلكتروني جديد أو تحديث موقعك الحالي ليس مجرد خيار تجميلي، بل هو ضرورة استراتيجية للنمو. الموقع الإلكتروني المتميز يعكس هوية علامتك التجارية، ويعزز من مصداقيتك في السوق، ويلبي بدقة توقعات الزوار المتزايدة. مع SwiftDigit، نضمن لك موقعاً يواكب أحدث المعايير التقنية ومحسّناً بشكل كامل لتصدر نتائج محركات البحث، مما يضمن لك التفوق على منافسيك والحفاظ على تواصل فعال ومستدام مع جمهورك المستهدف.",
      "website_zigzag_1_desc2": "في عصر الهواتف الذكية، أصبحت سهولة الاستخدام وتجاوب التصميم (Responsive Design) عبر جميع الأجهزة المحمولة معياراً أساسياً للنجاح. الإحصائيات تشير إلى أن النسبة الأكبر من الزوار يتصفحون الإنترنت عبر هواتفهم الذكية. لذا، نحن نصمم مواقع إلكترونية ديناميكية توفر تجربة تصفح سلسة وممتعة، بغض النظر عن حجم الشاشة أو نوع الجهاز. هذا الانتباه الدقيق للتفاصيل يترك انطباعاً أولياً لا يُنسى، ويرفع بشكل ملحوظ من معدلات التحويل (Conversion Rates) ويحول الزوار العابرين إلى عملاء دائمين.",
      "website_zigzag_2_title": "ما هي فوائد إنشاء موقع إلكتروني جديد لشركتك؟",
      "website_zigzag_2_desc": "موقعك الإلكتروني الاحترافي هو واجهة أعمالك الرقمية ومندوب المبيعات الذي لا ينام أبداً. تصميم موقع جديد بأحدث التقنيات يفتح أمامك آفاقاً واسعة للنمو؛ فهو لا يحسن فقط من ترتيبك في نتائج محركات البحث مثل جوجل (SEO)، بل يبني جسراً من الثقة مع عملائك. الموقع العصري، السريع، والآمن يُرسل رسالة قوية بأن شركتك رائدة واحترافية، مما يجعل عملية اتخاذ القرار أسهل على العملاء المحتملين للتواصل معك أو طلب خدماتك.",
      "website_zigzag_2_desc2": "أحد أهم مزايا المواقع الحديثة التي نطورها هو القدرة الفائقة على تتبع الأداء وقياس النتائج بدقة متناهية. بفضل دمج أدوات التحليل المتقدمة مثل Google Analytics، نمنحك رؤية شاملة حول سلوك زوارك، الصفحات الأكثر جذباً للانتباه، ومصادر الزيارات. هذا النهج المبني على البيانات (Data-driven) يسمح لك بتحسين استراتيجياتك التسويقية باستمرار، مما يضمن لك تحقيق أعلى عائد على الاستثمار (ROI) وتحقيق أهدافك التجارية بنجاح مبهر.",
      "website_process_title": "منهجية عملنا المبتكرة",
      "website_process_desc": "في SwiftDigit، نؤمن بأن النجاح الاستثنائي يبدأ بأساس متين. لقد طورنا منهجية عمل شفافة وفعالة تضمن تحويل رؤيتك وأفكارك إلى واقع رقمي ملموس يفوق التوقعات. نبتعد عن التعقيدات التقنية ونركز على التواصل المستمر وإشراكك كشريك حقيقي في كل مرحلة من مراحل المشروع. هذه الاستراتيجية الصارمة تضمن لك الحصول على أقصى جودة ممكنة، مع الالتزام التام بالمواعيد الزمنية المحددة لضمان انطلاقة قوية لأعمالك.",
      "website_process_steps": [
        { "title": "1. مقدمة واستراتيجية", "desc": "نبدأ بجلسة تعريفية شخصية نناقش فيها أهدافك، وجمهورك المستهدف، وأسلوبك. سواء في مكتبنا، أو في مقرك، أو عبر الإنترنت، فالخيار لك. هذا يُعطينا صورة واضحة عن الصورة التي ترغب في إبرازها، وما يجب أن يحققه موقعك الإلكتروني. بناءً على ذلك، نضع خطة تناسب شركتك." },
        { "title": "2. التصميم والتعليقات", "desc": "يقوم مصممونا بتحويل رغباتك إلى تصميم أولي. لديك فرصة لتقديم ملاحظاتك، لنتمكن من تحسين التصميم بدقة متناهية. وبهذه الطريقة، خطوة بخطوة، نبني موقعًا إلكترونيًا يناسبك تمامًا." },
        { "title": "3. التطوير والتحسين", "desc": "بمجرد الموافقة على التصميم، يبدأ فريق المطورين العمل. نقوم ببناء الموقع الإلكتروني باستخدام نظام إدارة محتوى متفق عليه، ونضمن تحسينه تقنيًا لمحركات البحث مثل جوجل. يخضع الموقع لاختبارات شاملة للتأكد من سرعته وسهولة استخدامه وأمانه قبل إطلاقه. وبناءً على ملاحظاتكم، نواصل تطوير الموقع." },
        { "title": "4. التسليم والدعم", "desc": "بعد إطلاق الموقع، يمكنك الاعتماد على دعمنا. سنبقى متاحين للإجابة على استفساراتكم وتقديم المساعدة التقنية. بفضل تواجدنا في المساء وخط الطوارئ، لن نتركك وحدك أبدًا." }
      ],
      "website_types_title": "أنواع المواقع الإلكترونية التي نقوم بإنشائها",
      "website_types_cards": [
        { "title": "موقع ويب مخصص", "desc": "الموقع الإلكتروني المخصص: هل ترغب حقًا في تصميم موقع إلكتروني فريد من نوعه؟ إذن هو الخيار الأمثل. نقوم بتصميم وتطوير كل شيء بما يتناسب تمامًا مع هوية شركتك وجمهورها المستهدف.", "btn": "اطلب موقع ويب مخصص" },
        { "title": "موقع إلكتروني للأعمال", "desc": "الخيار الأمثل لرواد الأعمال الراغبين في إنشاء موقع إلكتروني احترافي بسعر مناسب. تصميم عصري، وهيكل واضح، وسهولة وصول مثالية. مثالي للشركات الناشئة والمتوسطة.", "btn": "قم بإنشاء موقع إلكتروني لشركتك" },
        { "title": "موقع ويب باستخدام ووردبريس", "desc": "تُنشئ العديد من المواقع الإلكترونية باستخدام ووردبريس، نظام إدارة المحتوى الأكثر استخدامًا في العالم. تتميز هذه المنصة بسهولة الاستخدام والمرونة الموثوقية.", "btn": "اطلب ووردبريس" },
        { "title": "قم بإنشاء متجر إلكتروني", "desc": "لقد وصلت إلى المكان الأمثل للتجارة الإلكترونية. سواء كنت تبدأ البيع عبر الإنترنت أو ترغب في متجر إلكتروني متطور ومخصص، نبني لك ما ترغب به.", "btn": "قم بإنشاء متجر إلكتروني" }
      ],
      "website_pricing_title": "أسعار واضحة وشفافة",
      "website_pricing_cards": [
        { "title": "موقع إلكتروني للأعمال", "price": "ابتداءً من 799 يورو", "features": ["استراتيجية مخصصة", "إعداد ووردبريس احترافي", "تصميم متجاوب", "حتى 5 صفحات محتوى", "نماذج اتصال مدمجة", "إعدادات SEO الأساسية", "جولة مراجعة واحدة"], "btn": "اطلب عرض سعر" },
        { "title": "موقع إلكتروني للأعمال بالإضافة إلى", "price": "ابتداءً من 1299 يورو", "features": ["كل ميزات باقة الأعمال", "تصميم UI/UX مخصص", "حتى 10 صفحات محتوى", "إعدادات SEO متقدمة", "ربط مع وسائل التواصل", "تحليلات جوجل مدمجة", "دعم فني متميز"], "btn": "اطلب عرض سعر", "highlight": true },
        { "title": "موقع إلكتروني مخصص (Maatwerk)", "price": "السعر عند الطلب", "features": ["تصميم فريد 100%", "صفحات غير محدودة", "تكامل برمجيات مخصص", "أداء فائق السرعة", "مدير مشروع مخصص", "أولوية في الدعم"], "btn": "اطلب عرض سعر" }
      ],
      "website_why_title": "لماذا تختار SwiftDigit؟",
      "website_why_desc": "يوجد العديد من مطوري المواقع الإلكترونية، لكن في SwiftDigit نتميز بأسلوبنا الفريد. ندمج بين الخبرة والتواصل الشخصي والنهج الذي يركز على العميل. يعمل فريق خبرائنا يوميًا على مواقع إلكترونية لرواد الأعمال في جميع أنحاء هولندا، بخبرة تزيد عن 15 عامًا، نعرف تمامًا ما ينجح على الإنترنت.",
      "website_why_list": [
        "تصميم موقع ويب جذاب ومتوافق مع الأجهزة المحمولة، مصمم بناءً على هوية شركتك",
        "تسليم سريع للغاية من المسودة الأولى إلى النسخة النهائية لموقعك الإلكتروني",
        "فريق دعم خاص بك للصيانة وتحديث موقعك الإلكتروني",
        "نظام إدارة محتوى سهل الاستخدام",
        "تطبيق أدوات Google Analytics و SEO لضمان أعلى التصنيفات",
        "خيار بين موقع ويب مخصص أو موقع ويب تجاري"
      ],
      "website_features": [
        { "title": "مُحسن تقنيًا ومُحسن لمحركات البحث", "desc": "كل موقع إلكتروني نصممه مُحسن تقنيًا ويتوافق مع أحدث معايير الويب. نركز على السرعة والأمان وسهولة الاستخدام لضمان أداء موقعك الأمثل. بالإضافة إلى ذلك، نضمن سهولة العثور على موقعك في محركات البحث من خلال تحسينات تقنية لتحسين محركات البحث (SEO) وبنية منطقية.", "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2074" },
        { "title": "الاستضافة والأمان والدعم", "desc": "يبدأ الموقع الإلكتروني الجيد ببنية تحتية متينة. لذا، بالإضافة إلى تصميم وبناء المواقع، نوفر أيضًا خدمات الاستضافة والأمان والدعم. هذا يضمن بقاء موقعك سريعًا وآمنًا ومحدثًا. نراقب الأداء باستمرار ونقدم تحديثات تلقائية، لضمان من التركيز على أعمالك.", "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070", "reverse": true },
        { "title": "سهولة الاستخدام والتصميم المتجاوب", "desc": "في SwiftDigit، ندرك أهمية أن تعمل المواقع الإلكترونية بكفاءة عالية على مختلف الأجهزة، من أجهزة الكمبيوتر المكتبية إلى الهواتف المحمولة والأجهزة اللوحية. هذا يضمن تجربة مستخدم أفضل ويساعدك على الوصول إلى جمهور أوسع.", "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" }
      ],
      "website_cost_title": "كم تبلغ تكلفة إنشاء موقع إلكتروني؟",
      "website_cost_desc": "في SwiftDigit، يمكنك الحصول على موقع إلكتروني متكامل لشركتك ابتداءً من 799 يورو. نتميز بشفافية أسعارنا ولا توجد تكاليف خفية، ولا مفاجآت لاحقة. يعتمد السعر النهائي على الميزات والتصميم المطلوب. اطلب عرض سعر مجاني للحصول على تسعير دقيق.",
      "website_clients_title": "عملاؤنا ومشاريعنا",
      "website_clients_desc": "على مدار السنوات القليلة الماضية، تشرفنا بمساعدة أكثر من 6500 رائد أعمال في إنشاء موقع إلكتروني احترافي. من الشركات المحلية إلى المنظمات الوطنية، نعمل مع قطاعات متنوعة."
    }
  },
  nl: {
    translation: {
      "nav_website": "Website",
      "nav_webshop": "Webshop",
      "nav_hosting": "Hosting & Support",
      "nav_cases": "Cases",
      "nav_about": "Over ons",
      "nav_blog": "Blog",
      "nav_contact": "Contact",
      "hero_title": "Wil jij razendsnel een nieuwe én voordelige website of webshop?",
      "hero_desc": "SwiftDigit helpt jou razendsnel aan een nieuwe website of webshop. Hiervoor hebben wij een uitgekiend stappenplan ontwikkeld, waarmee wij ons met recht de snelste webbouwer in de regio kunnen noemen. We combineren geavanceerde technologie met een prachtig ontwerp om een platform te leveren dat bezoekers omzet in loyale klanten.",
      "hero_cta": "Offerte aanvragen",
      "hero_secondary_cta": "Ontdek onze werkwijze",
      "quote_title": "Vraag nu een offerte aan bij de snelste bouwer van Nederland.",
      "quote_sub": "Wil jij ook binnen 5 dagen online zijn met je nieuwe website of webshop? Vraag nu een offerte aan en wij nemen razendsnel contact met je op! Wij garanderen uitzonderlijke kwaliteit en ongeëvenaarde snelheid.",
      "quote_btn_1": "Ontdek ons razendsnelle proces",
      "quote_btn_2": "Gratis offerte aanvragen",
      "counter_title": "Wat maakt ons SwiftDigit?",
      "counter": [
        { "num": "8.8", "label": "Gemiddelde score" },
        { "num": "15+", "label": "Jaar ervaring" },
        { "num": "6.500", "label": "Websites / webshops ontwikkeld" },
        { "num": "5", "label": "Dagen doorlooptijd" },
        { "num": "25", "label": "Medewerkers" }
      ],
      "portfolio_title": "Recente case",
      "portfolio_sub": "Hieronder zie je onze meest recente case. We zijn er trots op schaalbare webapplicaties te bouwen die echte resultaten opleveren. Meer cases bewonderen? Ga naar onze klanten.",
      "portfolio_btn_main": "Meer cases bewonderen",
      "portfolio_case": {
        "title": "Shopfie",
        "image": "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=2000",
        "tags": ["#Business webshop", "#Development", "#Webshop"]
      },
      "blog_title": "Onze laatste blogberichten",
      "blog_posts": [
        {
          "id": 1,
          "title": "Hoe maak je een SEO-vriendelijke website?",
          "desc": "Een SEO-vriendelijke website is belangrijk om beter gevonden te worden in zoekmachines. We verkennen best practices voor technische SEO en contentstructuur.",
          "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
          "date": "2 Maart 2026"
        },
        {
          "id": 2,
          "title": "Wat is Magento? Hoe het populairste webshopplatform werkt",
          "desc": "Magento is een open-source e-commerce platform waarmee bedrijven webshops kunnen bouwen. Ontdek waarom ondernemingen voor Magento kiezen.",
          "image": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
          "date": "13 Januari 2026"
        },
        {
          "id": 3,
          "title": "Hoe werkt Magento? Zo functioneert het e-commerce platform",
          "desc": "Duik diep in de architectuur van Magento. We leggen uit hoe het modulaire systeem en de krachtige API-integraties webshops een voordeel bieden.",
          "image": "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=2070",
          "date": "13 Januari 2026"
        }
      ],
      "services_title": "Onze <accent>Diensten</accent>",
      "services": [
        {
          "id": "it_consultant",
          "title": "IT Consultant",
          "desc": "Als professionele IT-consultant leveren wij betrouwbare IT-oplossingen, systeemoptimalisatie en deskundige ondersteuning om stabiliteit en topprestaties te garanderen."
        },
        {
          "id": "web_dev",
          "title": "Webontwikkeling",
          "desc": "Als toonaangevend websiteontwikkelingsbedrijf creëren we schaalbare websites met geavanceerde technologieën die de prestaties verbeteren en perfect aansluiten bij uw zakelijke doelen."
        },
        {
          "id": "digital_marketing",
          "title": "Digitale Marketing",
          "desc": "Als vertrouwd digitaal marketingbureau voeren we datagestuurde marketingstrategieën uit die de zichtbaarheid vergroten, de betrokkenheid vergroten en duurzame bedrijfsgroei bevorderen."
        },
        {
          "id": "graphic_design",
          "title": "Grafisch Ontwerp",
          "desc": "Als u op zoek bent naar professioneel grafisch ontwerp, creëren wij gedurfde, creatieve ontwerpen die uw merk tot leven brengen en uw publiek boeien."
        },
        {
          "id": "video_production",
          "title": "Videoproductie",
          "desc": "Voor wie op zoek is naar professionele videografie, produceren wij impactvolle videocontent met verbluffende beelden die het verhaal van uw merk vertellen en uw publiek inspireren."
        },
        {
          "id": "ui_ux",
          "title": "UI/UX Ontwerp",
          "desc": "Onze UI/UX-ontwerpdiensten richten zich op het creëren van intuïtieve, gebruiksvriendelijke interfaces die de bruikbaarheid, functionaliteit en klantbetrokkenheid bij uw merk vergroten."
        },
        {
          "id": "mobile_app",
          "title": "Mobiele App Oplossingen",
          "desc": "Ontwikkeling van hoogwaardige mobiele apps gericht op bruikbaarheid, schaalbaarheid en naadloze compatibiliteit op alle apparaten."
        },
        {
          "id": "seo",
          "title": "SEO",
          "desc": "Zoekposities verbeteren met bewezen SEO-strategieën om gericht verkeer te genereren en uw online groei en zichtbaarheid te maximaliseren."
        },
        {
          "id": "ecommerce",
          "title": "E-Commerce Oplossingen",
          "desc": "Het creëren van geoptimaliseerde e-commerceplatforms die zijn gebouwd om integratie te verbeteren, de bruikbaarheid te verhogen en de online verkoop te versnellen."
        }
      ],
      "process_title": "Onze <accent>Werkwijze</accent>",
      "process_desc": "Hoe we sneller resultaten leveren dan wie dan ook.",
      "process_steps": [
        { "title": "Ontdekking", "desc": "We begrijpen uw doelen en doelgroep." },
        { "title": "Strategie", "desc": "Planning van de snelste route naar succes." },
        { "title": "Uitvoering", "desc": "Bouwen met de nieuwste technologieën." },
        { "title": "Lancering", "desc": "Live gaan in recordtijd." }
      ],
      "footer_about": "Toonaangevend digitaal bureau dat hoogwaardige IT- en marketingoplossingen biedt.",
      "footer_links_title": "Snelle Links",
      "footer_services_title": "Onze Diensten",
      "footer_contact_title": "Contactinformatie",
      "footer_rights": "Alle rechten voorbehouden.",
      "stats": [
        "Snelle oplevering van jouw website",
        "Bereikbaar tot 21:00 uur 's avonds",
        "Meer dan 6500 klanten gingen je voor",
        "Spoedlijn voor onze klanten"
      ],
      "promise_title": "Wij zijn de snelste bouwer van Nederland. Dat bewijzen wij iedere dag.",
      "circuit_websites_title": "Websites",
      "circuit_websites_desc": "Ons uitgekiende websites ontwikkelproces is het snelste van Nederland. Bovendien vraagt het maar beperkte input en dus kostbare tijd van jou als ondernemer!",
      "circuit_webshops_title": "Webshops",
      "circuit_webshops_desc": "Niet alleen voor websites, maar ook voor webshops kunnen wij ons unieke snelle ontwikkelproces inzetten. Jij bepaalt of het een business of een maatwerk webshop wordt.",
      "circuit_hosting_title": "Hosting, security & support",
      "banner_title": "Elke dag een razendsnelle website",
      "banner_desc": "Met ons support contract ben jij verzekerd van een razendsnelle website of webshop",
      "banner_cta": "Meer informatie over hosting",
      "reasons_title": "9 redenen om voor Best4u te kiezen",
      "reasons_cols": [
        {
          "title": "Het snelste proces van Nederland",
          "desc": "Een ondernemer heeft geen tijd om weken bezig te zijn met zijn nieuwe website. Hiervoor hebben wij het snelste ontwikkelproces van Nederland neergezet.",
          "checks": ["Het snelste ontwikkelproces van Nederland", "Na aanlevering binnen 5 dagen online!", "Websites speciaal voor ondernemers"]
        },
        {
          "title": "Super snelle hosting, security en support",
          "desc": "Best4u ontzorgt jou volledig. Naast het supersnel ontwikkelen van websites en webshops bieden wij ook hosting, security & support.",
          "checks": ["Expliciete focus op veiligheid", "Super servicegerichte helpdesk", "Eersteklas WordPress hosting"]
        },
        {
          "title": "Uniek concept met online marketing",
          "desc": "Onze professionals volgen de ontwikkelingen en de laatste eisen van zoekmachines dagelijks op de voet.",
          "checks": ["Optimale online indexeerbaarheid", "Al onze websites zijn geoptimaliseerd voor Google", "In-house online marketing experts"]
        }
      ],
      "cards": [
        { "title": "Website laten maken", "desc": "Een professionele website die jouw bedrijf écht laat stralen." },
        { "title": "Webshop laten maken", "desc": "Start of verbeter je online verkoop met een gebruiksvriendelijke webshop." },
        { "title": "Hosting, Security & Support", "desc": "Betrouwbare hosting, optimale beveiliging en snelle support." },
        { "title": "Website op maat", "desc": "Een unieke, maatwerk website die perfect aansluit op jouw wensen." },
        { "title": "Webshop redesign", "desc": "Geef je webshop een frisse, moderne look en verbeter je conversies." }
      ],

      "portfolio_title": "Recente cases",
      "portfolio_desc": "Neem een kijkje bij onze recente projecten.",
      "portfolio_btn": "Bekijk case",
      "blog_title": "Laatste Nieuws",
      "blog_btn": "Lees meer",
      "cta_team_title": "Wil jij ook een razendsnelle website of webshop?",
      "cta_team_btn": "Maak een afspraak",
      "website_zigzag_1_title": "Waarom een nieuwe website laten maken?",
      "website_zigzag_1_desc": "De digitale wereld ervaart snelle veranderingen. Wat vandaag modern lijkt, kan over een jaar verouderd zijn. Daarom is continue update noodzakelijk. Een moderne professionele website weerspiegelt uw verwachtingen, voldoet aan de behoeften van uw bezoekers en voldoet aan de technische eisen van zoekmachines. Met SwiftDigit kunt u voorkomen dat u achterop raakt bij concurrenten en uw aanwezigheid bij uw doelgroep behouden.",
      "website_zigzag_1_desc2": "Bovendien wordt het gebruiksgemak van de website op mobiele apparaten steeds belangrijker. Het aantal websitebezoekers dat via smartphones of tablets surft, groeit. Wij zorgen ervoor dat uw website efficiënt werkt en er elegant uitziet op alle apparaten. Zo laat u een sterke eerste indruk achter en vergroot u de kans om bezoekers om te zetten in daadwerkelijke klanten.",
      "website_zigzag_2_title": "Wat zijn de voordelen van het maken van een nieuwe website?",
      "website_zigzag_2_desc": "Een professionele website is niet zomaar een digitaal visitekaartje, maar de kern van uw online aanwezigheid. Met een professioneel ontworpen website vergroot u niet alleen uw kansen om in de zoekresultaten van Google te verschijnen, maar vergroot u ook het vertrouwen van uw bezoekers. Een moderne website weerspiegelt geloofwaardigheid en maakt het gemakkelijker voor potentiële klanten om contact met u op te nemen of een offerte aan te vragen.",
      "website_zigzag_2_desc2": "Bovendien helpt de nieuwe website u om uw succes beter te meten. Of het nu gaat om bezoekersaantallen, contactaanvragen of verkopen: via een goed ingericht platform kunt u direct online uw resultaten bekijken en aandachtsgebieden identificeren.",
      "website_process_title": "Onze werkwijze",
      "website_process_desc": "Bij SwiftDigit geloven we dat het ontwerpen van websites duidelijk en eenvoudig moet zijn. We vertrouwen niet op complexe procedures, maar op een gestructureerde methodologie waarbij u elke stap van het werkproces kent. We werken volgens een specifiek actieplan met duidelijke stappen, waardoor er ruimte is om uw wensen en feedback te uiten. Zo zorgen we samen voor een ideaal eindresultaat met al zijn details.",
      "website_process_steps": [
        { "title": "1. Introductie en strategie", "desc": "We starten met een persoonlijke kennismaking waarin we je doelen, doelgroep en stijl bespreken. Dat kan op ons kantoor, bij jou of online – wat jij wilt. Zo krijgen we een helder beeld van de uitstraling die je wilt en wat je website moet bereiken. Op basis hiervan stellen we een plan op dat bij jouw bedrijf past." },
        { "title": "2. Ontwerp en feedback", "desc": "Onze ontwerpers vertalen jouw wensen naar een eerste ontwerp. Je hebt de mogelijkheid om feedback te geven, zodat we het ontwerp tot in de puntjes kunnen finetunen. Zo bouwen we stap voor stap een website die perfect bij je past." },
        { "title": "3. Ontwikkeling en optimalisatie", "desc": "Zodra het ontwerp is goedgekeurd, gaan onze ontwikkelaars aan de slag. We bouwen de website in een afgesproken CMS en zorgen ervoor dat alles technisch is geoptimaliseerd voor Google. De site ondergaat uitgebreide tests om de snelheid, bruikbaarheid en veiligheid vóór de lancering te garanderen. Op basis van uw feedback optimaliseren we verder." },
        { "title": "4. Oplevering en support", "desc": "Na de lancering van de site kunt u op onze support rekenen. We blijven beschikbaar om uw vragen te beantwoorden en technische assistentie te verlenen. Dankzij onze beschikbaarheid in de avond en bereikbaarheidsdienst staan wij altijd klaar om te helpen." }
      ],
      "website_types_title": "Soorten websites die we bouwen",
      "website_types_cards": [
        { "title": "Maatwerk website", "desc": "Wilt u echt een unieke website? Dan is dit de perfecte keuze. Wij ontwerpen en ontwikkelen alles precies passend bij uw huisstijl en doelgroep.", "btn": "Maatwerk aanvragen" },
        { "title": "Zakelijke website", "desc": "De ideale keuze voor ondernemers die een professionele website willen voor een scherpe prijs. Modern design en zeer gebruiksvriendelijk.", "btn": "Zakelijke website maken" },
        { "title": "WordPress website", "desc": "Veel websites worden gebouwd met WordPress. Het is het meest gebruikte CMS ter wereld. Gebruiksvriendelijk, flexibel en schaalbaar.", "btn": "WordPress aanvragen" },
        { "title": "Webshop maken", "desc": "Voor e-commerce bent u bij ons aan het juiste adres. Of u nu start met online verkopen of een geavanceerde shop zoekt.", "btn": "Webshop maken" }
      ],
      "website_pricing_title": "Heldere en transparante prijzen",
      "website_pricing_cards": [
        { "title": "Zakelijke Website", "price": "Vanaf €799", "features": ["Op maat gemaakte strategie", "Professionele WordPress setup", "Responsive design", "Tot 5 content pagina's", "Inclusief contactformulieren", "Basis SEO instellingen", "1 correctieronde"], "btn": "Offerte aanvragen" },
        { "title": "Zakelijke Website Plus", "price": "Vanaf €1299", "features": ["Alles uit Zakelijk", "Custom UI/UX design", "Tot 10 content pagina's", "Geavanceerde SEO", "Social media koppeling", "Google Analytics", "Premium support"], "btn": "Offerte aanvragen", "highlight": true },
        { "title": "Maatwerk Website", "price": "Prijs op aanvraag", "features": ["100% Uniek design", "Onbeperkt pagina's", "Maatwerk integraties", "Uitmuntende prestaties", "Toegewijde projectmanager", "Priority support"], "btn": "Offerte aanvragen" }
      ],
      "website_why_title": "Waarom kiezen voor SwiftDigit?",
      "website_why_desc": "Er zijn veel webbouwers, maar bij SwiftDigit onderscheiden we ons. We combineren technische expertise met persoonlijke aandacht. Met meer dan 15 jaar ervaring weten we precies wat werkt op het internet.",
      "website_why_list": [
        "Aantrekkelijk en mobielvriendelijk webdesign",
        "Razendsnelle oplevering van uw website",
        "Toegewijd team voor onderhoud en support",
        "Zeer gebruiksvriendelijk CMS systeem",
        "Volledige setup van Google Analytics en SEO",
        "Keuze uit maatwerk of zakelijke templates"
      ],
      "website_features": [
        { "title": "Technisch geoptimaliseerd en SEO-vriendelijk", "desc": "Elke website is technisch geoptimaliseerd voor snelheid en veiligheid. We zorgen ervoor dat uw site hoog scoort in zoekmachines met een solide SEO-basis.", "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=2074" },
        { "title": "Hosting, Security & Support", "desc": "Naast webdesign bieden we robuuste hosting en beveiliging. Dit garandeert dat uw website altijd snel, veilig en up-to-date is met onze 24/7 monitoring.", "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070", "reverse": true },
        { "title": "Gebruiksgemak en Responsive Design", "desc": "Wij realiseren ons dat een website perfect moet werken op alle apparaten. Onze designs bieden een geweldige gebruikerservaring op mobiel, tablet en desktop.", "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" }
      ],
      "website_cost_title": "Wat kost een website laten maken?",
      "website_cost_desc": "Bij SwiftDigit heeft u al een complete zakelijke website vanaf €799. Wij werken met transparante prijzen zonder verborgen kosten. Vraag een gratis offerte aan voor een exacte prijsopgave.",
      "website_clients_title": "Onze klanten en projecten",
      "website_clients_desc": "In de afgelopen jaren hebben we meer dan 6.500 ondernemers geholpen. Van lokale MKB-bedrijven tot internationale organisaties."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
