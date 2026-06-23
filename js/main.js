document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth scrolling for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') {
                globalThis.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            // Close mobile menu if open
            const navLinksContainer = document.getElementById('nav-links');
            if (navLinksContainer?.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }
        });
    });

    // Add a subtle scroll effect to the header
    const header = document.querySelector('.header');
    globalThis.addEventListener('scroll', () => {
        if (globalThis.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.8)';
            header.style.boxShadow = 'none';
        }
    });

    // Mouse follow effect for the glow
    const glow1 = document.querySelector('.glow-1');
    const glow2 = document.querySelector('.glow-2');

    document.addEventListener('mousemove', (e) => {
        // Reduced movement for subtlety
        const x = e.clientX / globalThis.innerWidth - 0.5;
        const y = e.clientY / globalThis.innerHeight - 0.5;

        if(glow1) glow1.style.transform = `translate(${x * 60}px, ${y * 60}px)`;
        if(glow2) glow2.style.transform = `translate(${-(x * 60)}px, ${-(y * 60)}px)`;
    });

    // --- Language Switcher ---
    const langSelectBtn = document.getElementById('lang-select-btn');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    
    let currentLang = localStorage.getItem('lang') || 'en';
    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        if (langSelectBtn) {
            if (lang === 'fr') {
                langSelectBtn.innerHTML = '<img src="https://flagcdn.com/fr.svg" width="18" alt="FR"> <span>FR</span>';
            } else {
                langSelectBtn.innerHTML = '<img src="https://flagcdn.com/gb.svg" width="18" alt="EN"> <span>EN</span>';
            }
        }
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (typeof translations !== 'undefined' && translations[lang]?.[key]) {
                el.innerHTML = translations[lang][key]; 
            }
        });
    }

    // Initial language setup
    setLanguage(currentLang);

    if (langSelectBtn && langDropdown) {
        // Toggle dropdown
        langSelectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = langSelectBtn.getAttribute('aria-expanded') === 'true';
            langSelectBtn.setAttribute('aria-expanded', String(!isExpanded));
            langDropdown.classList.toggle('show');
        });

        // Handle option click
        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                setLanguage(option.dataset.lang);
                langDropdown.classList.remove('show');
                langSelectBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langSelectBtn.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('show');
                langSelectBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksContainer = document.getElementById('nav-links');
    
    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }
});
