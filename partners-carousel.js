// partners-carousel.js - شريط شركاء النجاح
// استخدام: أضف <script src="partners-carousel.js"></script> قبل إغلاق </body>

(function() {
    // بيانات الشركاء - استبدل الروابط باللوجوهات الحقيقية
    const partners = [
        { name: 'Aspire Freight Forwarding', logo: 'assets/logos/aspire.png' },
        { name: 'ENKAY EXPRESS', logo: 'assets/logos/enkay.png' },
        { name: 'SWC FSL WORLDWIDE', logo: 'assets/logos/fsl.png' },
        { name: 'DMC UNIVERSAL LOGISTICS', logo: 'assets/logos/dmc.png' },
        { name: 'PHOENIX INTERNATIONAL', logo: 'assets/logos/phoenix.png' },
        { name: 'Al Kazemi Group', logo: 'assets/logos/kazemi.png' },
        { name: 'Horizon Paints', logo: 'assets/logos/horizon.png' },
        { name: 'M A Anderson Logistics', logo: 'assets/logos/anderson.png' },
        { name: 'GRAND KUWAIT', logo: 'assets/logos/grand-kuwait.png' },
        { name: 'Axis Chemicals', logo: 'assets/logos/axis.png' },
        { name: 'SKY OCEAN SHIPPING', logo: 'assets/logos/sky-ocean.png' },
        { name: 'Al Mulla Cargo', logo: 'assets/logos/almulla.png' },
        { name: 'SMART SHIPPING', logo: 'assets/logos/smart-shipping.png' },
        { name: 'DHL Global Forwarding', logo: 'assets/logos/dhl.png' },
        { name: 'AL NISF ELECTRICAL', logo: 'assets/logos/nisf.png' },
        { name: 'GULF TRADING GROUP', logo: 'assets/logos/gulf-trading.png' },
        { name: 'Easa Husain Al Yousifi', logo: 'assets/logos/yousifi.png' },
        { name: 'STAR KUWAIT LOGISTICS', logo: 'assets/logos/star-kuwait.png' },
        { name: 'CAESAR PAC', logo: 'assets/logos/caesar.png' },
        { name: 'Hellmann Worldwide', logo: 'assets/logos/hellmann.png' },
        { name: 'CONSOLIDATED SHIPPING', logo: 'assets/logos/consolidated.png' },
        { name: 'DVF Solutions', logo: 'assets/logos/dvf.png' },
        { name: 'Bell & John Logistics', logo: 'assets/logos/bell-john.png' },
        { name: 'BLUESTAR WORLDWIDE', logo: 'assets/logos/bluestar.png' },
        { name: 'ALGHANIM SAHARA', logo: 'assets/logos/alghanim.png' },
        { name: 'GLOBELINK WEST STAR', logo: 'assets/logos/globelink.png' },
        { name: 'UAGSCO SHIPPING', logo: 'assets/logos/uagsco.png' },
        { name: 'SEALINE LOGISTICS', logo: 'assets/logos/sealine.png' },
        { name: 'SSC CONSOLIDATION', logo: 'assets/logos/ssc.png' },
        { name: 'AL QABANDI & PARTNERS', logo: 'assets/logos/qabandi.png' },
        { name: 'PRIME SHIPPING', logo: 'assets/logos/prime.png' },
        { name: 'UNITED LOGISTICS', logo: 'assets/logos/united.png' },
        { name: 'Apex Global Logistics', logo: 'assets/logos/apex.png' },
        { name: 'FRONTLINE LOGISTICS', logo: 'assets/logos/frontline.png' },
        { name: 'Dolphin Shipping', logo: 'assets/logos/dolphin.png' },
        { name: 'Associated Shipping', logo: 'assets/logos/associated.png' },
        { name: 'GREENWAYS LOGISTICS', logo: 'assets/logos/greenways.png' },
        { name: 'BONTON TRADING', logo: 'assets/logos/bonton.png' },
        { name: 'SENATOR INTERNATIONAL', logo: 'assets/logos/senator.png' }
    ];

    // إنشاء HTML للشريط
    function createPartnersSection() {
        const section = document.createElement('section');
        section.className = 'partners-section';
        section.id = 'partners-carousel';
        
        section.innerHTML = `
            <div class="partners-container">
                <h2 class="partners-title" data-en="Our Success Partners" data-ar="شركاؤنا في النجاح">
                    Our Success Partners
                </h2>
                <p class="partners-subtitle" data-en="Trusted by leading logistics companies across the region" data-ar="موثوق به من قبل كبرى شركات اللوجستيات في المنطقة">
                    Trusted by leading logistics companies across the region
                </p>
                
                <div class="partners-carousel-wrapper">
                    <button class="partners-nav partners-nav-prev" aria-label="Previous">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    
                    <div class="partners-track-container">
                        <div class="partners-track">
                            ${generatePartnerCards()}
                            ${generatePartnerCards()}
                            ${generatePartnerCards()} <!-- نسخة ثالثة لملء الفراغات -->
                        </div>
                    </div>
                    
                    <button class="partners-nav partners-nav-next" aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        
        return section;
    }

    // إنشاء كروت الشركاء
    function generatePartnerCards() {
        return partners.map(partner => `
            <div class="partner-card">
                <div class="partner-logo-wrapper">
                    <img 
                        src="${partner.logo}" 
                        alt="${partner.name}"
                        onerror="this.src='https://via.placeholder.com/200x100/f5f5f5/FF3333?text=${encodeURIComponent(partner.name)}'"
                        loading="lazy"
                    >
                </div>
            </div>
        `).join('');
    }

    // إضافة CSS
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .partners-section {
                background: #ffffff;
                padding: 50px 40px;
                position: relative;
                overflow: hidden;
                z-index: 50;
            }

            .partners-container {
                max-width: 1400px;
                margin: 0 auto;
            }

            .partners-title {
                text-align: center;
                font-size: 38px;
                font-weight: 900;
                color: #FF3333;
                margin-bottom: 10px;
                text-transform: uppercase;
                position: relative;
                z-index: 100;
            }

            .partners-subtitle {
                text-align: center;
                font-size: 16px;
                color: #666;
                margin-bottom: 35px;
                position: relative;
                z-index: 100;
            }

            .partners-carousel-wrapper {
                position: relative;
                display: flex;
                align-items: center;
                gap: 20px;
                z-index: 100;
            }

            .partners-track-container {
                flex: 1;
                overflow: hidden;
                position: relative;
                padding: 15px 0;
            }

            .partners-track {
                display: flex;
                gap: 40px;
                animation: scroll-partners 80s linear infinite;
                width: fit-content;
            }

            .partners-track:hover {
                animation-play-state: paused;
            }

            @keyframes scroll-partners {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(calc(-100% / 3));
                }
            }

            .partner-card {
                flex-shrink: 0;
                width: 280px;
                height: 140px;
                background: transparent;
                border-radius: 0;
                padding: 20px;
                box-shadow: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .partner-card:hover {
                transform: translateY(-5px) scale(1.05);
            }

            .partner-logo-wrapper {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .partner-logo-wrapper img {
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto;
                object-fit: contain;
                filter: none;
                opacity: 1;
                transition: all 0.3s ease;
            }

            .partner-card:hover .partner-logo-wrapper img {
                transform: scale(1.1);
                opacity: 1;
            }

            .partners-nav {
                flex-shrink: 0;
                width: 45px;
                height: 45px;
                background: white;
                border: 2px solid #FF3333;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                color: #FF3333;
                z-index: 200;
                position: relative;
            }

            .partners-nav:hover {
                background: #FF3333;
                color: white;
                transform: scale(1.1);
                box-shadow: 0 4px 15px rgba(255, 51, 51, 0.3);
            }

            .partners-nav:active {
                transform: scale(0.95);
            }

            .partners-nav svg {
                pointer-events: none;
            }

            /* RTL Support */
            body[dir="rtl"] .partners-track {
                animation: scroll-partners-rtl 60s linear infinite;
            }

            @keyframes scroll-partners-rtl {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(calc(100% / 3));
                }
            }

            /* Mobile Responsive */
            @media (max-width: 768px) {
                .partners-section {
                    padding: 40px 20px;
                }

                .partners-title {
                    font-size: 28px;
                    margin-bottom: 8px;
                }

                .partners-subtitle {
                    font-size: 14px;
                    margin-bottom: 25px;
                }

                .partners-carousel-wrapper {
                    gap: 10px;
                }

                .partners-track {
                    gap: 20px;
                    animation-duration: 40s;
                }

                .partner-card {
                    width: 120px;
                    height: 65px;
                    padding: 8px;
                }

                .partners-nav {
                    width: 38px;
                    height: 38px;
                }

                .partners-nav svg {
                    width: 18px;
                    height: 18px;
                }
            }

            @media (max-width: 480px) {
                .partners-nav {
                    display: none;
                }

                .partners-carousel-wrapper {
                    gap: 0;
                }

                .partner-card {
                    width: 110px;
                    height: 60px;
                }

                .partners-section {
                    padding: 30px 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // التحكم بالأزرار
    function initializeControls() {
        const track = document.querySelector('.partners-track');
        const prevBtn = document.querySelector('.partners-nav-prev');
        const nextBtn = document.querySelector('.partners-nav-next');
        
        if (!track || !prevBtn || !nextBtn) return;

        let isAnimating = false;

        prevBtn.addEventListener('click', () => {
            if (isAnimating) return;
            isAnimating = true;

            track.style.animation = 'none';
            const currentTransform = window.getComputedStyle(track).transform;
            const matrix = new DOMMatrix(currentTransform);
            const currentX = matrix.m41;
            
            track.style.transform = `translateX(${currentX + 200}px)`;
            
            setTimeout(() => {
                track.style.animation = '';
                isAnimating = false;
            }, 300);
        });

        nextBtn.addEventListener('click', () => {
            if (isAnimating) return;
            isAnimating = true;

            track.style.animation = 'none';
            const currentTransform = window.getComputedStyle(track).transform;
            const matrix = new DOMMatrix(currentTransform);
            const currentX = matrix.m41;
            
            track.style.transform = `translateX(${currentX - 200}px)`;
            
            setTimeout(() => {
                track.style.animation = '';
                isAnimating = false;
            }, 300);
        });
    }

    // تحديث النصوص حسب اللغة
    function updateLanguage() {
        const currentLang = document.body.getAttribute('dir') === 'rtl' ? 'ar' : 'en';
        const elements = document.querySelectorAll('.partners-section [data-en]');
        
        elements.forEach(el => {
            const text = currentLang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
            if (text) el.textContent = text;
        });
    }

    // تهيئة عند تحميل الصفحة
    function init() {
        // إضافة الأنماط
        injectStyles();
        
        // إضافة القسم قبل الفوتر
        const footer = document.querySelector('footer, .footer, script[src*="footer"]');
        const partnersSection = createPartnersSection();
        
        if (footer) {
            footer.parentNode.insertBefore(partnersSection, footer);
        } else {
            document.body.appendChild(partnersSection);
        }

        // تفعيل التحكم
        setTimeout(initializeControls, 100);
        
        // تحديث اللغة
        updateLanguage();
        
        // الاستماع لتغيير اللغة
        const langObserver = new MutationObserver(updateLanguage);
        langObserver.observe(document.body, { attributes: true, attributeFilter: ['dir'] });
    }

    // تشغيل عند تحميل الصفحة
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();