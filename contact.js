/**
 * OVERAH CORE — CONTACT PAGE CONFIGURATION & INTERACTIONS
 * Vanilla JavaScript | Sticky Header, Mobile Navigation, Conditional Fields, Form Validation & WhatsApp Inquiry Builder
 */

// ==========================================
// 1. CONFIGURATION SECTION (EDIT PLACEHOLDERS HERE)
// ==========================================
const CONTACT_CONFIG = {
    whatsappNumber: "[+2349162874012]", // e.g. "+2348000000000"
    facebookUrl: "[INSERT_OFFICIAL_FACEBOOK_URL]",
    tiktokUrl: "[INSERT_OFFICIAL_TIKTOK_URL]",
    xUrl: "[INSERT_OFFICIAL_X_URL]",
    defaultWhatsAppMessage: "Hello OVERAH CORE, I would like to discuss a digital project."
};

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 2. STICKY HEADER SCROLL EFFECT
    // ==========================================
    const header = document.getElementById('header');
    const handleScroll = () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ==========================================
    // 3. MOBILE NAVIGATION TOGGLE
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'translateY(8px) rotate(45deg)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ==========================================
    // 4. SOCIAL & DIRECT LINK INITIALIZATION
    // ==========================================
    const cleanNumber = CONTACT_CONFIG.whatsappNumber.replace(/[^0-9+]/g, '');
    const whatsappDirectUrl = CONTACT_CONFIG.whatsappNumber.includes("INSERT") 
        ? "#" 
        : `https://wa.me/${cleanNumber}?text=${encodeURIComponent(CONTACT_CONFIG.defaultWhatsAppMessage)}`;

    // Assign to WhatsApp buttons and links
    ['whatsappCardBtn', 'finalWhatsappBtn', 'footerWhatsappLink'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (!CONTACT_CONFIG.whatsappNumber.includes("INSERT")) {
                el.href = whatsappDirectUrl;
            } else {
                el.href = "#";
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert("Official WhatsApp number has not been configured yet.");
                });
            }
        }
    });

    // Assign Facebook, TikTok, X links
    const setSocialLink = (id, url) => {
        const el = document.getElementById(id);
        if (el) {
            el.href = url.includes("INSERT") ? "#" : url;
            if (url.includes("INSERT")) {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert("Official social channel link has not been configured yet.");
                });
            }
        }
    };

    setSocialLink('facebookCardBtn', CONTACT_CONFIG.facebookUrl);
    setSocialLink('tiktokCardBtn', CONTACT_CONFIG.tiktokUrl);
    setSocialLink('xCardBtn', CONTACT_CONFIG.xUrl);
    setSocialLink('footerFacebookLink', CONTACT_CONFIG.facebookUrl);
    setSocialLink('footerTiktokLink', CONTACT_CONFIG.tiktokUrl);
    setSocialLink('footerXLink', CONTACT_CONFIG.xUrl);

    // ==========================================
    // 5. CONDITIONAL WEBSITE URL FIELD BEHAVIOR
    // ==========================================
    const hasWebsiteYes = document.getElementById('hasWebsiteYes');
    const hasWebsiteNo = document.getElementById('hasWebsiteNo');
    const websiteUrlRow = document.getElementById('websiteUrlRow');

    if (hasWebsiteYes && hasWebsiteNo && websiteUrlRow) {
        hasWebsiteYes.addEventListener('change', () => {
            if (hasWebsiteYes.checked) {
                websiteUrlRow.classList.remove('hidden');
            }
        });
        hasWebsiteNo.addEventListener('change', () => {
            if (hasWebsiteNo.checked) {
                websiteUrlRow.classList.add('hidden');
                document.getElementById('existingWebsiteUrl').value = '';
                document.getElementById('existingWebsiteUrl').classList.remove('error');
            }
        });
    }

    // ==========================================
    // 6. FORM VALIDATION & WHATSAPP MESSAGE BUILDER
    // ==========================================
    const inquiryForm = document.getElementById('projectInquiryForm');
    
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;

            // Fields
            const fullName = document.getElementById('fullName');
            const whatsappNumber = document.getElementById('whatsappNumber');
            const emailAddress = document.getElementById('emailAddress');
            const serviceRequired = document.getElementById('serviceRequired');
            const projectBudget = document.getElementById('projectBudget');
            const projectTimeline = document.getElementById('projectTimeline');
            const existingWebsiteUrl = document.getElementById('existingWebsiteUrl');
            const projectDescription = document.getElementById('projectDescription');
            const referralSource = document.getElementById('referralSource');

            // Reset errors
            [fullName, whatsappNumber, emailAddress, serviceRequired, existingWebsiteUrl, projectDescription].forEach(field => {
                if (field) field.classList.remove('error');
            });

            // Validate Full Name
            if (!fullName.value.trim()) {
                fullName.classList.add('error');
                isValid = false;
            }

            // Validate WhatsApp Number
            const phoneVal = whatsappNumber.value.trim();
            if (!phoneVal || phoneVal.length < 7) {
                whatsappNumber.classList.add('error');
                isValid = false;
            }

            // Validate Email if supplied
            const emailVal = emailAddress.value.trim();
            if (emailVal) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailVal)) {
                    emailAddress.classList.add('error');
                    isValid = false;
                }
            }

            // Validate Service Required
            if (!serviceRequired.value) {
                serviceRequired.classList.add('error');
                isValid = false;
            }

            // Validate Website URL if "Yes" selected and URL supplied
            if (hasWebsiteYes && hasWebsiteYes.checked && existingWebsiteUrl.value.trim()) {
                try {
                    new URL(existingWebsiteUrl.value.trim());
                } catch (_) {
                    existingWebsiteUrl.classList.add('error');
                    isValid = false;
                }
            }

            // Validate Project Description
            if (!projectDescription.value.trim() || projectDescription.value.trim().length < 10) {
                projectDescription.classList.add('error');
                isValid = false;
            }

            if (!isValid) {
                // Scroll to first error
                const firstError = inquiryForm.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }

            // Build WhatsApp formatted message
            const hasWebText = hasWebsiteYes && hasWebsiteYes.checked ? (existingWebsiteUrl.value.trim() || 'Yes') : 'No';
            
            const messageParts = [
                `*NEW PROJECT INQUIRY — OVERAH CORE*`,
                `-----------------------------------`,
                `*Full Name:* ${fullName.value.trim()}`,
                `*Business/Org:* ${document.getElementById('businessName').value.trim() || 'N/A'}`,
                `*WhatsApp Contact:* ${phoneVal}`,
                `*Email:* ${emailVal || 'N/A'}`,
                `*Service Required:* ${serviceRequired.value}`,
                `*Budget Range:* ${projectBudget.value || 'Not Specified'}`,
                `*Preferred Timeline:* ${projectTimeline.value || 'Not Specified'}`,
                `*Existing Website:* ${hasWebText}`,
                `*Referral Source:* ${referralSource.value.trim() || 'N/A'}`,
                `-----------------------------------`,
                `*Project Description:*`,
                projectDescription.value.trim()
            ];

            const constructedMessage = messageParts.join('\n');

            if (CONTACT_CONFIG.whatsappNumber.includes("INSERT")) {
                alert("Please configure the official WhatsApp number in contact.js before submitting inquiries.");
                return;
            }

            const targetWhatsAppUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(constructedMessage)}`;
            
            // Open WhatsApp with pre-filled inquiry
            window.open(targetWhatsAppUrl, '_blank', 'noopener,noreferrer');
        });
    }

});