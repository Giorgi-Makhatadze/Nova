/**
 * NOVA ANALYTICS - MODERN RESPONSIVE LANDING PAGE SCRIPT
 * Features:
 * - Full Bilingual Switcher (Georgian / English)
 * - Mobile Navigation Drawer
 * - Sticky Glassmorphic Header
 * - Active Link Highlighting
 * - Interactive Statistics Counter Animation
 * - Contact Form Validation & Toast Message
 * - Demo Video Modal
 * - Interactive 3D Card Hover Effects
 */

// --- Translation Dictionary (KA / EN) ---
const translations = {
  ka: {
    // Nav
    nav_home: "მთავარი",
    nav_about: "ჩვენს შესახებ",
    nav_features: "შესაძლებლობები",
    nav_contact: "კონტაქტი",
    nav_cta: "დაიწყე უფასოდ",

    // Hero
    hero_badge: "✨ ახალი თაობის ხელოვნური ინტელექტის ანალიტიკა",
    hero_title_1: "მართეთ მონაცემები",
    hero_title_gradient: "უპრეცედენტო სისწრაფითა",
    hero_title_2: "და სიზუსტით",
    hero_desc: "NOVA არის თანამედროვე SaaS პლატფორმა, რომელიც აერთიანებს რეალურ დროში მონაცემთა ანალიტიკას, პროგნოზირებად AI მოდელებს და ბიზნესის ზრდის ავტომატიზაციას ერთ სივრცეში.",
    hero_btn_start: "დაიწყე 14 დღიანი უფასო ცდა",
    hero_btn_demo: "დემოს ნახვა",
    hero_stat_1_lbl: "აქტიური შემოსავალი",
    hero_stat_1_val: "+$345.8K თვეში",
    hero_stat_2_lbl: "სისტემის უწყვეტობა",
    hero_stat_2_val: "99.98% სტაბილური",

    // About
    about_badge: "ჩვენს შესახებ",
    about_title_1: "შექმნილია თანამედროვე",
    about_title_gradient: "გუნდებისთვის და სტარტაპებისთვის",
    about_desc: "ჩვენი მისიაა გავამარტივოთ რთული მონაცემთა არქიტექტურა. NOVA გაძლევთ შესაძლებლობას წამებში მიიღოთ გადამწყვეტი ბიზნეს გადაწყვეტილებები ინტუიციური ინტერფეისითა და უსწრაფესი დამუშავების სისტემით.",
    about_feat_1_title: "სწრაფი და ინტუიციური",
    about_feat_1_desc: "მონაცემების ვიზუალიზაცია 10-ჯერ უფრო სწრაფად, ვიდრე ტრადიციული პლატფორმები.",
    about_feat_2_title: "მაქსიმალური უსაფრთხოება",
    about_feat_2_desc: "საბანკო დონის 256-ბიტიანი დაშიფვრა და GDPR/SOC-2 სრული შესაბამისობა.",
    about_feat_3_title: "მარტივი ინტეგრაცია",
    about_feat_3_desc: "დააკავშირეთ თქვენი საყვარელი ხელსაწყოები 100+ მზა API ინტეგრაციით 1 წუთში.",
    about_stat_1_num: "50,000+",
    about_stat_1_lbl: "აქტიური მომხმარებელი",
    about_stat_2_num: "99.9%",
    about_stat_2_lbl: "პროგნოზის სიზუსტე",
    about_stat_3_num: "10x",
    about_stat_3_lbl: "ზრდის სისწრაფე",

    // Features (3 Cards)
    features_badge: "რატომ NOVA?",
    features_title: "სრულყოფილი ფუნქციონალი თქვენი ზრდისთვის",
    features_subtitle: "ყველაფერი, რაც გჭირდებათ ბიზნესის მასშტაბირებისთვის, გაანალიზებისთვის და წარმატებისთვის.",
    
    feat_1_title: "რეალურ დროში ანალიტიკა",
    feat_1_desc: "მყისიერად დააკვირდით მომხმარებელთა ქცევას, ტრაფიკის ნაკადებს და გაყიდვების დინამიკას პირდაპირ ეთერში ყოველგვარი დაყოვნების გარეშე.",
    feat_1_item_1: "მყისიერი მონაცემთა განახლება",
    feat_1_item_2: "ინტერაქტიული დიაგრამები და ფილტრები",
    feat_1_item_3: "ავტომატური ექსპორტი (CSV, PDF, Excel)",

    feat_2_title: "პროგნოზირებადი AI ალგორითმები",
    feat_2_desc: "გამოიყენეთ ხელოვნური ინტელექტი მომავალი ტრენდების აღმოსაჩენად, მომხმარებელთა გადინების თავიდან ასაცილებლად და შემოსავლების მაქსიმიზაციისთვის.",
    feat_2_item_1: "მანქანური სწავლების მოდელები",
    feat_2_item_2: "ჭკვიანი შეტყობინებები და ანომალიების ამოცნობა",
    feat_2_item_3: "ზუსტი რეკომენდაციები გადაწყვეტილებისთვის",

    feat_3_title: "ღრუბლოვანი უსაფრთხოება & API",
    feat_3_desc: "მსოფლიო დონის უსაფრთხოება, ავტომატური სარეზერვო კოპირება და უწყვეტი დაკავშირება თქვენს არსებულ CRM, Slack და მონაცემთა ბაზებთან.",
    feat_3_item_1: "256-ბიტიანი ენდ-თუ-ენდ დაშიფვრა",
    feat_3_item_2: "100+ მზა Webhook და REST API ინტეგრაცია",
    feat_3_item_3: "24/7 სისტემური მონიტორინგი და მხარდაჭერა",

    feat_learn_more: "გაიგე მეტი",

    // Contact
    contact_badge: "კონტაქტი",
    contact_title: "დაგვიკავშირდით დღესვე",
    contact_subtitle: "გაქვთ შეკითხვები ან გსურთ ინდივიდუალური პრეზენტაცია? ჩვენი გუნდი მზადაა დაგეხმაროთ.",
    contact_info_h3: "მოდით ვისაუბროთ თქვენს პროექტზე",
    contact_info_p: "შეავსეთ ფორმა ან დაგვიკავშირდით პირდაპირ ქვემოთ მოცემულ საკონტაქტო არხებზე. ჩვენ გიპასუხებთ 24 საათის განმავლობაში.",
    contact_email_lbl: "ელ-ფოსტა",
    contact_phone_lbl: "ტელეფონი",
    contact_addr_lbl: "ოფისის მისამართი",
    contact_addr_val: "ჭავჭავაძის გამზ. 37, თბილისი, საქართველო",
    
    // Form
    form_name_lbl: "სრული სახელი *",
    form_name_ph: "გიორგი ბერიძე",
    form_email_lbl: "ელ-ფოსტის მისამართი *",
    form_email_ph: "giorgi@company.ge",
    form_subject_lbl: "თემა",
    form_subject_opt_1: "ზოგადი შეკითხვა",
    form_subject_opt_2: "პროდუქტის დემო",
    form_subject_opt_3: "პარტნიორობა / ინვესტიცია",
    form_subject_opt_4: "ტექნიკური მხარდაჭერა",
    form_msg_lbl: "შეტყობინება *",
    form_msg_ph: "გაგვიზიარეთ თქვენი პროექტის ან მოთხოვნის დეტალები...",
    form_btn_send: "შეტყობინების გაგზავნა",
    form_btn_sending: "იგზავნება...",
    form_success_msg: "მადლობა! თქვენი შეტყობინება წარმატებით გაიგზავნა. მალე დაგიკავშირდებით.",
    form_error_empty: "გთხოვთ შეავსოთ ყველა აუცილებელი ველი!",

    // Footer
    footer_desc: "NOVA Analytics - თანამედროვე პლატფორმა თქვენი ბიზნესის მონაცემთა ჭკვიანი ანალიზისა და ავტომატიზაციისთვის.",
    footer_col_1: "პროდუქტი",
    footer_col_2: "კომპანია",
    footer_col_3: "რესურსები",
    footer_link_pricing: "ფასები",
    footer_link_features: "ფუნქციები",
    footer_link_integrations: "ინტეგრაციები",
    footer_link_about: "ჩვენს შესახებ",
    footer_link_careers: "ვაკანსიები",
    footer_link_contact: "კონტაქტი",
    footer_link_docs: "დოკუმენტაცია",
    footer_link_blog: "ბლოგი",
    footer_link_privacy: "კონფიდენციალურობა",
    footer_copy: "© 2026 NOVA Analytics. ყველა უფლება დაცულია.",
    footer_made_with: "შექმნილია ❤️ სიყვარულით საქართველოში",

    // Modal
    modal_title: "NOVA პლატფორმის ინტერაქტიული დემო",
    modal_desc: "გაეცანით თუ როგორ მუშაობს ჩვენი AI ანალიტიკა და მართვის პანელი რეალურ რეჟიმში."
  },

  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About",
    nav_features: "Features",
    nav_contact: "Contact",
    nav_cta: "Get Started Free",

    // Hero
    hero_badge: "✨ Next-Gen AI Powered Analytics",
    hero_title_1: "Master Your Data With",
    hero_title_gradient: "Unrivaled Speed",
    hero_title_2: "& Precision",
    hero_desc: "NOVA is the cutting-edge SaaS platform that unifies real-time analytics, predictive machine learning models, and automated growth insights into a single seamless experience.",
    hero_btn_start: "Start 14-Day Free Trial",
    hero_btn_demo: "Watch Live Demo",
    hero_stat_1_lbl: "Active Revenue",
    hero_stat_1_val: "+$345.8K / month",
    hero_stat_2_lbl: "Platform Reliability",
    hero_stat_2_val: "99.98% Uptime",

    // About
    about_badge: "About Us",
    about_title_1: "Built for Modern",
    about_title_gradient: "High-Growth Teams",
    about_desc: "Our mission is to simplify complex data architectures. NOVA enables founders and developers to make high-impact decisions in seconds through an intuitive interface and blazing-fast processing engine.",
    about_feat_1_title: "Fast & Intuitive",
    about_feat_1_desc: "Visualize deep metrics 10x faster than legacy enterprise solutions.",
    about_feat_2_title: "Enterprise Grade Security",
    about_feat_2_desc: "256-bit bank-grade encryption with complete GDPR & SOC-2 compliance.",
    about_feat_3_title: "Effortless Integration",
    about_feat_3_desc: "Connect your favourite tools with 100+ native integrations in under 60 seconds.",
    about_stat_1_num: "50,000+",
    about_stat_1_lbl: "Active Global Users",
    about_stat_2_num: "99.9%",
    about_stat_2_lbl: "Prediction Accuracy",
    about_stat_3_num: "10x",
    about_stat_3_lbl: "Faster Execution",

    // Features (3 Cards)
    features_badge: "Why Choose NOVA",
    features_title: "Comprehensive Features for Exponential Growth",
    features_subtitle: "Everything your business needs to scale, monitor, and outperform the competition.",

    feat_1_title: "Real-Time Streaming Analytics",
    feat_1_desc: "Monitor live user interactions, traffic funnels, and revenue metrics in real-time with sub-millisecond latency.",
    feat_1_item_1: "Instant live data telemetry",
    feat_1_item_2: "Interactive drill-down charts & filters",
    feat_1_item_3: "One-click automated export (CSV, PDF, Excel)",

    feat_2_title: "Predictive AI Intelligence",
    feat_2_desc: "Leverage state-of-the-art neural models to forecast market trends, prevent customer churn, and optimize conversions.",
    feat_2_item_1: "Adaptive machine learning models",
    feat_2_item_2: "Smart anomaly alerts & early signals",
    feat_2_item_3: "Actionable AI business recommendations",

    feat_3_title: "Cloud Infrastructure & APIs",
    feat_3_desc: "World-class infrastructure, automatic geo-replicated backups, and frictionless connection to CRM, Slack, and SQL databases.",
    feat_3_item_1: "End-to-end 256-bit AES encryption",
    feat_3_item_2: "100+ plug-and-play REST & Webhook APIs",
    feat_3_item_3: "24/7 dedicated engineering support",

    feat_learn_more: "Learn More",

    // Contact
    contact_badge: "Contact Us",
    contact_title: "Let's Build Something Great",
    contact_subtitle: "Have questions or need a personalized demo for your enterprise? Our team is here to assist you.",
    contact_info_h3: "Talk to Our Product Specialists",
    contact_info_p: "Fill in the form or reach out directly through any of our channels. We typically respond within 24 hours.",
    contact_email_lbl: "Email",
    contact_phone_lbl: "Phone",
    contact_addr_lbl: "Headquarters",
    contact_addr_val: "37 Chavchavadze Ave, Tbilisi, Georgia",

    // Form
    form_name_lbl: "Full Name *",
    form_name_ph: "John Doe",
    form_email_lbl: "Email Address *",
    form_email_ph: "john@company.com",
    form_subject_lbl: "Subject",
    form_subject_opt_1: "General Inquiry",
    form_subject_opt_2: "Request Product Demo",
    form_subject_opt_3: "Partnership / Investment",
    form_subject_opt_4: "Technical Support",
    form_msg_lbl: "Message *",
    form_msg_ph: "Tell us about your project, goals, or timeline...",
    form_btn_send: "Send Message",
    form_btn_sending: "Sending...",
    form_success_msg: "Thank you! Your message has been sent successfully. We'll be in touch soon.",
    form_error_empty: "Please fill out all required fields!",

    // Footer
    footer_desc: "NOVA Analytics - The next-generation intelligence platform designed for fast-growing modern businesses.",
    footer_col_1: "Product",
    footer_col_2: "Company",
    footer_col_3: "Resources",
    footer_link_pricing: "Pricing",
    footer_link_features: "Features",
    footer_link_integrations: "Integrations",
    footer_link_about: "About Us",
    footer_link_careers: "Careers",
    footer_link_contact: "Contact",
    footer_link_docs: "Documentation",
    footer_link_blog: "Blog",
    footer_link_privacy: "Privacy Policy",
    footer_copy: "© 2026 NOVA Analytics. All rights reserved.",
    footer_made_with: "Crafted with ❤️ in Georgia",

    // Modal
    modal_title: "NOVA Analytics Live Platform Preview",
    modal_desc: "Experience how our AI analytics and dashboard streamline decision-making in real-time."
  }
};

// Current active language
let currentLang = localStorage.getItem('nova_lang') || 'ka';

// Function to update the page text based on selected language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('nova_lang', lang);

  // Update language buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update document language attribute
  document.documentElement.lang = lang;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

// --- DOM Ready Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Language
  setLanguage(currentLang);

  // Language button click events
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      const isExpanded = mobileToggle.classList.contains('active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking navigation link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Sticky Header on Scroll
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 4. Active Nav Link on Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    threshold: 0.35,
    rootMargin: "-80px 0px -40% 0px"
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // 5. Interactive Number Counters
  const counterElements = document.querySelectorAll('.stat-number');
  let animatedCounters = false;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedCounters) {
        animatedCounters = true;
        // Subtle pulse effect on stats
        counterElements.forEach(el => {
          el.style.transform = 'scale(1.08)';
          setTimeout(() => {
            el.style.transition = 'transform 0.4s ease';
            el.style.transform = 'scale(1)';
          }, 300);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsContainer = document.querySelector('.about-stats');
  if (statsContainer) {
    countObserver.observe(statsContainer);
  }

  // 6. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const toastMsg = document.getElementById('toastMsg');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('nameInput').value.trim();
      const email = document.getElementById('emailInput').value.trim();
      const msg = document.getElementById('messageInput').value.trim();

      if (!name || !email || !msg) {
        alert(translations[currentLang].form_error_empty);
        return;
      }

      // Simulate sending state
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = translations[currentLang].form_btn_sending;
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      setTimeout(() => {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';

        // Show Toast
        if (toastMsg) {
          toastMsg.className = 'toast-msg success';
          toastMsg.textContent = translations[currentLang].form_success_msg;

          // Auto-hide toast after 5 seconds
          setTimeout(() => {
            toastMsg.className = 'toast-msg';
          }, 5000);
        }

        contactForm.reset();
      }, 900);
    });
  }

  // 7. Demo Video Modal
  const demoBtn = document.getElementById('heroDemoBtn');
  const demoModal = document.getElementById('demoModal');
  const modalClose = document.getElementById('modalClose');

  function openModal() {
    if (demoModal) {
      demoModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (demoModal) {
      demoModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (demoBtn) demoBtn.addEventListener('click', openModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && demoModal && demoModal.classList.contains('open')) {
      closeModal();
    }
  });

  // 8. 3D Card Hover Tilt Effect for Features Cards
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
});
