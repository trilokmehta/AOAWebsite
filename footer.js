// --- 1. INJECT FOOTER CSS ---
const footerCSS = `
    /* --- NEXT-GEN FLOATING BUTTONS --- */
    .floating-buttons {
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        z-index: 1000;
    }
    .float-btn {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        background: var(--surface, rgba(255, 255, 255, 0.7));
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--surface-border, rgba(255, 255, 255, 0.4));
        box-shadow: 0 20px 40px -10px rgba(27, 77, 62, 0.08);
        color: var(--primary, #1b4d3e);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        text-decoration: none;
    }
    .float-btn:hover {
        transform: scale(1.1) translateY(-5px);
        background: var(--primary, #1b4d3e);
        color: white;
        border-color: var(--primary, #1b4d3e);
        box-shadow: 0 15px 25px rgba(27, 77, 62, 0.3);
    }

    /* --- NEXT-GEN DARK FOOTER --- */
    footer {
        background: var(--primary-dark, #0f2e25);
        color: #fff;
        padding: 80px 0 40px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        margin-top: 40px;
    }
    .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 40px;
        margin-bottom: 60px;
    }
    .footer-col h4 {
        font-family: "Inter", sans-serif;
        color: var(--accent, #c5a059);
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 24px;
    }
    .footer-col ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .footer-col ul li {
        margin-bottom: 12px;
    }
    .footer-col ul li a,
    .footer-col p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 15px;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    .footer-col ul li a:hover {
        color: #fff;
        padding-left: 5px;
    }
    .social-links a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        margin-right: 10px;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    .social-links a:hover {
        background: var(--accent, #c5a059);
        transform: translateY(-3px);
    }
    .payment-icons i {
        font-size: 32px;
        color: rgba(255, 255, 255, 0.5);
        margin-right: 12px;
    }
    .footer-bottom {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.5);
    }
    .language-selector {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    .language-selector span {
        color: var(--accent, #c5a059);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
    }
    .language-selector a {
        color: rgba(255, 255, 255, 0.7);
        padding: 0 8px;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .language-selector a:last-child {
        border-right: none;
    }
    .language-selector a:hover {
        color: #fff;
    }

    /* --- GOOGLE TRANSLATE OVERRIDES --- */
    #google_translate_element { display: none !important; }
    .skiptranslate iframe, .goog-te-banner-frame { display: none !important; }
    body { top: 0px !important; }
    .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }

    @media (max-width: 768px) {
        .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
        }
        .language-selector {
            justify-content: center;
        }
    }
`;

// Create a style tag and append it to the head
const footerStyleTag = document.createElement("style");
footerStyleTag.innerHTML = footerCSS;
document.head.appendChild(footerStyleTag);

// --- 2. INJECT FOOTER HTML ---
const footerHTML = `
    <!-- Floating Action Buttons -->
    <div class="floating-buttons">
        <a href="#" class="float-btn" title="Back to Top"><i class="fa-solid fa-chevron-up"></i></a>
        <a href="tel:+919811823818" class="float-btn" title="Call Us"><i class="fa-solid fa-headset"></i></a>
        <a href="https://wa.me/919811823818" target="_blank" class="float-btn" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
    </div>

    <!-- Dark Theme Modern Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                
                <div class="footer-col">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Quik Abacus Classes</a></li>
                        <li><a href="#">Original Abacus Olympiad</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>Contact</h4>
                    <p style="margin-bottom: 12px;">#44, Second Floor, Pearls Omaxe,<br>Wazirpur, Delhi, 110034, Delhi</p>
                    <p style="margin-bottom: 12px;">+91-9811823818</p>
                    <p>chiefmentor@AbacusOlympicAssociation.COM</p>
                </div>
                
                <div class="footer-col">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                
                <div class="footer-col">
                    <h4>Payments</h4>
                    <div class="payment-icons">
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-mastercard"></i>
                        <i class="fa-brands fa-paypal"></i>
                    </div>
                </div>
                
            </div>
            
            <div class="footer-bottom">
                <div>
                    © Copyrights 2026 - 2027. Abacus Olympic Association. All Rights Reserved.
                </div>
                
                <!-- Hidden Google Translate Element -->
                <div id="google_translate_element"></div>

                <div class="language-selector">
                    <span>Change Language:</span>
                    <a href="javascript:void(0)" onclick="changeLanguage('en')">English</a>
                    <a href="javascript:void(0)" onclick="changeLanguage('hi')">हिंदी</a>
                    <a href="javascript:void(0)" onclick="changeLanguage('mr')">मराठी</a>
                    <a href="javascript:void(0)" onclick="changeLanguage('bn')">বাংলা</a>
                    <a href="javascript:void(0)" onclick="changeLanguage('ta')">தமிழ்</a>
                    <a href="javascript:void(0)" onclick="changeLanguage('gu')">ગુજરાતી</a>
                    <a href="javascript:void(0)" onclick="changeLanguage('kn')">ಕನ್ನಡ</a>
                    <a href="javascript:void(0)" onclick="changeLanguage('ml')">മലയാളം</a>
                    <a href="javascript:void(0)" onclick="changeLanguage('te')">తెలుగు</a>
                    <a href="javascript:void(0)" onclick="changeLanguage('pa')">ਪੰਜਾਬੀ</a>
                </div>
            </div>
        </div>
    </footer>
`;

document.getElementById("footer-placeholder").innerHTML = footerHTML;

// --- 3. GOOGLE TRANSLATE LOGIC ---
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,hi,mr,bn,ta,gu,kn,ml,te,pa",
      autoDisplay: false,
    },
    "google_translate_element",
  );
}

// Load the Google Translate Script dynamically
const translateScript = document.createElement("script");
translateScript.type = "text/javascript";
translateScript.src =
  "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(translateScript);

// Trigger Translation
window.changeLanguage = function (langCode) {
  const selectField = document.querySelector(
    "#google_translate_element select",
  );
  if (selectField) {
    selectField.value = langCode;
    selectField.dispatchEvent(new Event("change"));
  }
};
