(function() {
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

    // متغيرات التحكم في الحركة
    let currentIndex = 0;
    let autoScrollInterval = null;
    let isRTL = false;

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
                        </div>
                    </div>
                    
                    <button class="partners-nav partners-nav-next" aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
                
                <div class="partners-dots">
                    ${generateDots()}
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

    // إنشاء النقاط المؤشرة
    function generateDots() {
        return partners.map((_, index) => 
            `<span class="partner-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
        ).join('');
    }

    // إضافة CSS
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .partners-section {
                background: #ffffff;
                padding: 60px 40px;
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
                margin-bottom: 40px;
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
                transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                width: fit-content;
            }

            .partner-card {
                flex-shrink: 0;
                width: 280px;
                height: 140px;
                background: transparent;
                border-radius: 12px;
                padding: 20px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.7;
            }

            .partner-card.active {
                opacity: 1;
                transform: scale(1.05);
                box-shadow: 0 8px 25px rgba(255, 51, 51, 0.15);
            }

            .partner-card:hover {
                transform: translateY(-5px) scale(1.05);
                opacity: 1;
                box-shadow: 0 8px 25px rgba(255, 51, 51, 0.2);
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
                filter: grayscale(0%);
                opacity: 1;
                transition: all 0.3s ease;
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

            /* نقاط المؤشرات */
            .partners-dots {
                display: flex;
                justify-content: center;
                gap: 8px;
                margin-top: 30px;
                flex-wrap: wrap;
            }

            .partner-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #ddd;
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .partner-dot.active {
                background: #FF3333;
                transform: scale(1.3);
            }

            .partner-dot:hover {
                background: #FF6666;
                transform: scale(1.2);
            }

            /* RTL Support - عكس اتجاه الأسهم */
            body[dir="rtl"] .partners-nav-prev svg {
                transform: scaleX(-1);
            }

            body[dir="rtl"] .partners-nav-next svg {
                transform: scaleX(-1);
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
                }

                .partner-card {
                    width: 200px;
                    height: 100px;
                    padding: 15px;
                }

                .partners-nav {
                    width: 38px;
                    height: 38px;
                }

                .partners-nav svg {
                    width: 18px;
                    height: 18px;
                }

                .partners-dots {
                    margin-top: 20px;
                }

                .partner-dot {
                    width: 6px;
                    height: 6px;
                }
            }

            @media (max-width: 480px) {
                .partner-card {
                    width: 160px;
                    height: 80px;
                    padding: 10px;
                }

                .partners-section {
                    padding: 30px 15px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // الانتقال إلى شريحة معينة
    function goToSlide(index) {
        const track = document.querySelector('.partners-track');
        const cards = document.querySelectorAll('.partner-card');
        const dots = document.querySelectorAll('.partner-dot');
        
        if (!track || !cards.length) return;

        // تحديث الفهرس
        currentIndex = index;
        if (currentIndex < 0) currentIndex = partners.length - 1;
        if (currentIndex >= partners.length) currentIndex = 0;

        // حساب المسافة
        const cardWidth = cards[0].offsetWidth;
        const gap = 40;
        const containerWidth = document.querySelector('.partners-track-container').offsetWidth;
        const centerOffset = (containerWidth - cardWidth) / 2;
        
        const moveDistance = isRTL 
            ? (currentIndex * (cardWidth + gap)) - centerOffset
            : -(currentIndex * (cardWidth + gap)) + centerOffset;

        track.style.transform = `translateX(${moveDistance}px)`;

        // تحديث الكروت النشطة
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === currentIndex);
        });

        // تحديث النقاط
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // الانتقال التلقائي
    function startAutoScroll() {
        stopAutoScroll();
        autoScrollInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000); // 5 ثوان لكل شعار
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    // التحكم بالأزرار
    function initializeControls() {
        const prevBtn = document.querySelector('.partners-nav-prev');
        const nextBtn = document.querySelector('.partners-nav-next');
        const dots = document.querySelectorAll('.partner-dot');
        const trackContainer = document.querySelector('.partners-track-container');
        
        if (!prevBtn || !nextBtn) return;

        // زر السابق
        prevBtn.addEventListener('click', () => {
            stopAutoScroll();
            goToSlide(currentIndex - 1);
            setTimeout(startAutoScroll, 3000);
        });

        // زر التالي
        nextBtn.addEventListener('click', () => {
            stopAutoScroll();
            goToSlide(currentIndex + 1);
            setTimeout(startAutoScroll, 3000);
        });

        // النقاط
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                stopAutoScroll();
                goToSlide(parseInt(dot.dataset.index));
                setTimeout(startAutoScroll, 3000);
            });
        });

        // إيقاف عند التمرير
        trackContainer.addEventListener('mouseenter', stopAutoScroll);
        trackContainer.addEventListener('mouseleave', startAutoScroll);

        // بدء الحركة التلقائية
        setTimeout(() => {
            goToSlide(0);
            startAutoScroll();
        }, 100);
    }

    // تحديث النصوص حسب اللغة
    function updateLanguage() {
        isRTL = document.body.getAttribute('dir') === 'rtl';
        const currentLang = isRTL ? 'ar' : 'en';
        const elements = document.querySelectorAll('.partners-section [data-en]');
        
        elements.forEach(el => {
            const text = currentLang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
            if (text) el.textContent = text;
        });

        // إعادة ضبط الموقع عند تغيير الاتجاه
        goToSlide(currentIndex);
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
