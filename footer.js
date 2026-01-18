// footer.js - Professional Footer Component for EGO Express
// النسخة المحدثة - تصحيح الألوان والمسافات

(function() {
    'use strict';

    // Footer data
    const footerData = {
        company: {
            nameEn: 'EGO Express',
            nameAr: 'إيجو إكسبريس',
            logoUrl: 'https://i.postimg.cc/k5RM67Nt/logo-(2).png',
            sloganEn: 'Simplifying Global Trade',
            sloganAr: 'تبسيط التجارة العالمية'
        },
        contact: {
            phone: '+965 22280742',
            email: 'info@sailshipping.net',
            whatsapp: '+201200066625',
            address: {
                en: '2nd Floor, Al Jawhara Tower, Al Qibla, Kuwait City',
                ar: 'الطابق الثاني، برج الجوهرة، القبلة، مدينة الكويت'
            }
        },
        social: {
            facebook: 'https://www.facebook.com/p/EGO-Express-61578856421772/',
            twitter: 'https://twitter.com',
            instagram: 'https://www.instagram.com/egoexpresskw/',
            linkedin: 'https://linkedin.com/company/',
            youtube: 'https://youtube.com'
        },
        quickLinks: [
            { nameEn: 'Home', nameAr: 'الرئيسية', url: 'index.html' },
            { nameEn: 'Why Us', nameAr: 'لماذا نحن', url: 'why-us.html' },
            { nameEn: 'FAQ', nameAr: 'الأسئلة الشائعة', url: 'faq.html' },
            { nameEn: 'Visit Us', nameAr: 'زورنا', url: 'visit-us.html' },
            { nameEn: 'Book Shipment', nameAr: 'احجز شحنة', url: 'booking.html' }
        ],
        services: [
            { nameEn: 'Ocean Freight', nameAr: 'الشحن البحري', url: 'booking.html?scrollTo=booking-form&service=Ocean Freight' },
            { nameEn: 'Air Freight', nameAr: 'الشحن الجوي', url: 'booking.html?scrollTo=booking-form&service=Air Freight' },
            { nameEn: 'Land Transport', nameAr: 'النقل البري', url: 'booking.html?scrollTo=booking-form&service=Land Transport' },
            { nameEn: 'Customs Clearance', nameAr: 'التخليص الجمركي', url: 'booking.html?scrollTo=booking-form&service=Customs Clearance' },
            { nameEn: 'Warehousing', nameAr: 'التخزين', url: 'booking.html?scrollTo=booking-form&service=Warehousing' }
        ],
        copyright: {
            year: new Date().getFullYear(),
            textEn: 'All Rights Reserved',
            textAr: 'جميع الحقوق محفوظة',
            poweredByEn: 'Powered by',
            poweredByAr: 'مدعوم من',
            developer: 'Mr. Marwan Taterli',
            developerUrl: 'https://samar-93.github.io/ego-express/index.html'
        }
    };

    // Footer CSS - تم تصحيح الألوان والمسافات
    const footerStyles = `
        <style>
.ego-footer {
    position: relative;
    z-index: 9999;
    pointer-events: auto;
    background: #1a1a1a !important;
    padding: 80px 0 0;
}
            
.ego-footer * {
    color: inherit;
}

.footer-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 90px;
}

.footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 50px;
    margin-bottom: 50px;
}

.footer-column h3 {
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 30px;
    margin-top: 8px;
    color: #FF3333 !important;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.footer-logo-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer-logo {
    width: 180px;
    height: auto;
    margin-bottom: 10px;
    cursor: pointer;
    transition: transform 0.3s;
    filter: brightness(1.2);
}

.footer-logo:hover {
    transform: scale(1.05);
}

.footer-slogan {
    font-size: 16px;
    color: #ffffff !important;
    margin-bottom: 20px;
    font-weight: 600;
}

.footer-contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
    color: #ffffff !important;
    font-size: 15px;
    transition: all 0.3s;
    cursor: pointer;
}

.footer-contact-item:hover {
    color: #FF3333 !important;
    transform: translateX(5px);
}

body[dir="rtl"] .footer-contact-item:hover {
    transform: translateX(-5px);
}

.footer-contact-item svg {
    width: 20px;
    height: 20px;
    fill: #FF3333 !important;
    flex-shrink: 0;
}

.footer-contact-item a {
    color: inherit;
    text-decoration: none;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    color: #ffffff !important;
    text-decoration: none;
    font-size: 15px;
    transition: all 0.3s;
    display: inline-block;
    font-weight: 500;
}

.footer-links a:hover {
    color: #FF3333 !important;
    transform: translateX(10px);
}

body[dir="rtl"] .footer-links a:hover {
    transform: translateX(-10px);
}

.footer-social {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.social-icon {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s;
    text-decoration: none;
    cursor: pointer;
}

.social-icon:hover {
    transform: translateY(-8px) scale(1.15);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.social-icon.facebook {
    background: #1877F2;
}

.social-icon.twitter {
    background: #1DA1F2;
}

.social-icon.instagram {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.social-icon.linkedin {
    background: #0A66C2;
}

.social-icon.youtube {
    background: #FF0000;
}

.social-icon svg {
    width: 22px;
    height: 22px;
    fill: white;
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 25px 0;
    text-align: center;
    background: #1a1a1a !important;
}

.footer-copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    font-size: 14px;
    color: #ffffff !important;
}

.footer-copyright a {
    color: #FF3333 !important;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s;
}

.footer-copyright a:hover {
    color: #ff6666 !important;
    text-decoration: underline;
}

.footer-divider {
    color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 1024px) {
    .footer-container {
        padding: 0 30px;
    }

    .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
}

@media (max-width: 768px) {
    .ego-footer {
        padding: 40px 0 0;
    }

    .footer-container {
        padding: 0 20px;
    }

    .footer-content {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .footer-column h3 {
        font-size: 18px;
        margin-top: 0;
    }

    .footer-logo {
        width: 150px;
    }

    .footer-copyright {
        flex-direction: column;
        gap: 8px;
    }
}

.ego-footer,
.ego-footer::before,
.ego-footer::after,
.ego-footer *::before,
.ego-footer *::after {
    background-image: none !important;
    opacity: 1 !important;
}
        </style>
    `;

    // Get current language
    function getCurrentLang() {
        const savedLang = localStorage.getItem('preferred-lang');
        return savedLang === 'ar' ? 'ar' : 'en';
    }

    // Generate Footer HTML
    function generateFooterHTML() {
        const lang = getCurrentLang();
        const isArabic = lang === 'ar';

        return `
            ${footerStyles}
            <footer class="ego-footer">
                <div class="footer-container">
                    <div class="footer-content">
                        <!-- Company Info -->
                        <div class="footer-column footer-logo-section">
                            <a href="index.html">
                                <img src="${footerData.company.logoUrl}" 
                                     alt="${isArabic ? footerData.company.nameAr : footerData.company.nameEn}" 
                                     class="footer-logo">
                            </a>
                            <p class="footer-slogan" data-en="${footerData.company.sloganEn}" data-ar="${footerData.company.sloganAr}">
                                ${isArabic ? footerData.company.sloganAr : footerData.company.sloganEn}
                            </p>
                            
                            <a href="tel:${footerData.contact.phone}" class="footer-contact-item">
                                <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span dir="ltr">${footerData.contact.phone}</span>
                            </a>

                            <a href="mailto:${footerData.contact.email}" class="footer-contact-item">
                                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span dir="ltr">${footerData.contact.email}</span>
                            </a>

                            <div class="footer-contact-item">
                                <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span data-en="${footerData.contact.address.en}" data-ar="${footerData.contact.address.ar}">
                                    ${isArabic ? footerData.contact.address.ar : footerData.contact.address.en}
                                </span>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div class="footer-column">
                            <h3 data-en="QUICK LINKS" data-ar="روابط سريعة">${isArabic ? 'روابط سريعة' : 'QUICK LINKS'}</h3>
                            <ul class="footer-links">
                                ${footerData.quickLinks.map(link => `
                                    <li>
                                        <a href="${link.url}" data-en="${link.nameEn}" data-ar="${link.nameAr}">
                                            ${isArabic ? link.nameAr : link.nameEn}
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Services -->
                        <div class="footer-column">
                            <h3 data-en="SERVICES" data-ar="الخدمات">${isArabic ? 'الخدمات' : 'SERVICES'}</h3>
                            <ul class="footer-links">
                                ${footerData.services.map(service => `
                                    <li>
                                        <a href="${service.url}" data-en="${service.nameEn}" data-ar="${service.nameAr}">
                                            ${isArabic ? service.nameAr : service.nameEn}
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Social Media -->
                        <div class="footer-column">
                            <h3 data-en="FOLLOW US" data-ar="تابعنا">${isArabic ? 'تابعنا' : 'FOLLOW US'}</h3>
                            <div class="footer-social">
                                <a href="${footerData.social.facebook}" class="social-icon facebook" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                </a>
                                <a href="${footerData.social.twitter}" class="social-icon twitter" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                                </a>
                                <a href="${footerData.social.instagram}" class="social-icon instagram" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="${footerData.social.linkedin}" class="social-icon linkedin" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="${footerData.social.youtube}" class="social-icon youtube" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Copyright -->
                    <div class="footer-bottom">
                        <div class="footer-copyright">
                            <span data-en="© ${footerData.copyright.year} ${footerData.company.nameEn}. ${footerData.copyright.textEn}." 
                                  data-ar="© ${footerData.copyright.year} ${footerData.company.nameAr}. ${footerData.copyright.textAr}.">
                                © ${footerData.copyright.year} ${isArabic ? footerData.company.nameAr : footerData.company.nameEn}. ${isArabic ? footerData.copyright.textAr : footerData.copyright.textEn}.
                            </span>
                            <span class="footer-divider">|</span>
                            <span>
                                <span data-en="${footerData.copyright.poweredByEn}" data-ar="${footerData.copyright.poweredByAr}">
                                    ${isArabic ? footerData.copyright.poweredByAr : footerData.copyright.poweredByEn}
                                </span>
                                <a href="${footerData.copyright.developerUrl}" target="_blank" rel="noopener">${footerData.copyright.developer}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    // Update footer language
    function updateFooterLanguage() {
        const lang = getCurrentLang();
        const footer = document.querySelector('.ego-footer');
        
        if (!footer) return;

        footer.querySelectorAll('[data-' + lang + ']').forEach(element => {
            const text = element.getAttribute('data-' + lang);
            if (text) {
                element.textContent = text;
            }
        });
    }

    // Initialize footer
    function initFooter() {
        const footerHTML = generateFooterHTML();
        document.body.insertAdjacentHTML('beforeend', footerHTML);

        window.addEventListener('storage', function(e) {
            if (e.key === 'preferred-lang') {
                updateFooterLanguage();
            }
        });

        document.addEventListener('languageChanged', updateFooterLanguage);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }

    window.updateFooterLanguage = updateFooterLanguage;

})();
