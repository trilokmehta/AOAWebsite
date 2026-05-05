// --- 1. INJECT FOOTER CSS (DARK GREEN & GOLD) ---
const footerCSS = `
    /* --- FLOATING BUTTONS --- */
    .floating-buttons {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        flex-direction: row;
        gap: 15px;
        z-index: 1000;
    }
    .float-btn {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        background: var(--surface, rgba(255, 255, 255, 0.1));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid var(--surface-border, rgba(255, 255, 255, 0.2));
        color: #fff;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        text-decoration: none;
    }
    .float-btn:hover { 
        transform: scale(1.1) translateY(-5px); 
        background: #c5a059; /* Gold accent hover */
        border-color: #c5a059;
    }
    .scroll-top {
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: #1b4d3e; /* Lighter Green */
        color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        z-index: 1000;
        transition: all 0.3s ease;
    }
    .scroll-top:hover { background: #c5a059; transform: translateY(-3px); }

    /* --- DARK THEME FOOTER --- */
    footer {
        background: #0f2e25; /* Original Dark Green */
        color: #fff;
        padding: 60px 0 20px 0;
        font-family: "Inter", sans-serif;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        margin-top: 40px;
    }
    .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 40px;
        margin-bottom: 50px;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 20px;
    }
    .footer-col h4 {
        color: #c5a059; /* Original Gold */
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 24px;
    }
    .footer-col ul { list-style: none; padding: 0; margin: 0; }
    .footer-col ul li { margin-bottom: 12px; }
    .footer-col ul li a {
        color: rgba(255, 255, 255, 0.7);
        font-size: 15px;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    .footer-col ul li a:hover {
        color: #fff;
        padding-left: 5px;
    }
    .footer-col p { 
        color: rgba(255, 255, 255, 0.7); 
        font-size: 15px; 
        line-height: 1.6; 
        margin: 0 0 10px 0; 
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
        text-decoration: none;
        margin-right: 10px;
        transition: all 0.3s ease;
    }
    .social-links a:hover {
        background: #c5a059;
        transform: translateY(-3px);
    }

    /* --- PURE CSS PAYMENT LOGOS --- */
    .payment-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        max-width: 300px;
    }
    .pay-badge {
        background: #fff; /* White background makes logos pop on dark footer */
        border-radius: 4px;
        padding: 4px 8px;
        height: 32px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 800;
        color: #333;
        gap: 5px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .pay-amex { background: #007bc1; color: white; font-style: italic; }
    .pay-visa { color: #1a1f71; font-style: italic; font-size: 14px; }
    .pay-rupay { color: #f37021; }
    .pay-rupay span { color: #008c3a; }
    .pay-paytm { color: #002e6e; }
    .pay-paytm span { color: #00b9f5; }
    .pay-paypal { color: #003087; font-style: italic; }
    .pay-mobikwik { color: #00568c; }
    .pay-payzapp { color: #eb1c24; font-style: italic; }
    .pay-badge i { font-size: 14px; color: #555; }
    
    .mc-circles { display: flex; }
    .mc-red { width: 16px; height: 16px; background: #eb001b; border-radius: 50%; position: relative; z-index: 2; }
    .mc-yellow { width: 16px; height: 16px; background: #f79e1b; border-radius: 50%; margin-left: -6px; z-index: 1; }

    /* Footer Bottom */
    .footer-bottom-wrapper { 
        border-top: 1px solid rgba(255, 255, 255, 0.1); 
        padding-top: 30px;
    }
    .footer-bottom-content { 
        max-width: 1200px; 
        margin: 0 auto; 
        padding: 0 20px 20px 20px; 
    }
    .copyright-text { 
        color: rgba(255, 255, 255, 0.5); 
        font-size: 14px; 
        margin-bottom: 15px; 
    }
    
    /* Language Selector */
    .language-selector { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
    .language-selector span { color: #c5a059; font-weight: 600; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;}
    .language-selector a { 
        color: rgba(255, 255, 255, 0.7); 
        padding: 0 8px; 
        border-right: 1px solid rgba(255, 255, 255, 0.2); 
        text-decoration: none; 
        transition: color 0.3s ease; 
        cursor: pointer;
    }
    .language-selector a:last-child { border-right: none; }
    .language-selector a:hover { color: #fff; }

    /* Hide Google Default Dropdown */
    #google_translate_element { display: none !important; }
    .skiptranslate iframe, .goog-te-banner-frame { display: none !important; }
    body { top: 0px !important; }
`;

const footerStyleTag = document.createElement("style");
footerStyleTag.innerHTML = footerCSS;
document.head.appendChild(footerStyleTag);

// --- 2. INJECT FOOTER HTML ---
const footerHTML = `
    <a href="#" class="scroll-top" title="Back to Top"><i class="fa-solid fa-chevron-up"></i></a>
    <div class="floating-buttons">
        <a href="tel:+919811823818" class="float-btn" title="Call Us"><i class="fa-solid fa-headset"></i></a>
        <a href="https://wa.me/919811823818" target="_blank" class="float-btn" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
    </div>

    <footer>
        <div class="footer-grid">
            <div class="footer-col">
                <h4>Useful Links</h4>
                <ul>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Quik Abacus Classes</a></li>
                    <li><a href="#">Original Abacus Olympiad</a></li>
                    <li><a href="#" style="color: #c5a059;"><i class="fa-solid fa-chevron-down"></i> More</a></li>
                    
                </ul>
            </div>
            
            <div class="footer-col" style="flex: 1.5;">
                <h4>Contact</h4>
                <p>#44, Second Floor, Pearls Omaxe,<br>Wazirpur, Delhi, 110034, Delhi</p>
                <p style="margin-top: 15px;">+91-9811823818</p>
                <p>chiefmentor@AbacusOlympicAssociation.COM</p>
            </div>
            
            <div class="footer-col">
                <h4>Connect</h4>
                <div class="social-links">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#" style="font-weight: bold; font-family: Arial;">Jd</a>
                </div>
            </div>
            
            <div class="footer-col">
                <h4>Payments</h4>
                <div class="payment-grid">
                    <!-- Pure CSS Logos optimized for dark mode -->
                    <div class="pay-badge pay-amex">AMEX</div>
                    <div class="pay-badge"><div class="mc-circles"><div class="mc-red"></div><div class="mc-yellow"></div></div></div>
                    <div class="pay-badge pay-visa">VISA</div>
                    <div class="pay-badge pay-rupay">Ru<span>Pay</span></div>
                    
                    <div class="pay-badge"><i class="fa-solid fa-mouse"></i> Net Banking</div>
                    <div class="pay-badge"><i class="fa-regular fa-calendar-days"></i> Easy EMI</div>
                    <div class="pay-badge"><i class="fa-solid fa-money-bill-wave"></i> COD</div>
                    
                    <div class="pay-badge pay-paytm">Pay<span>tm</span></div>
                    <div class="pay-badge pay-paypal">PayPal</div>
                    <div class="pay-badge pay-mobikwik">MobiKwik</div>
                    <div class="pay-badge pay-payzapp">PayZapp</div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom-wrapper">
            <div class="footer-bottom-content">
                <div class="copyright-text">© Copyrights 2026 - 2027. Abacus Olympic Association. All Rights Reserved.</div>
                
                <div id="google_translate_element"></div>

                <div class="language-selector">
                    <span>Change Language:</span>
                    <a onclick="changeLanguage('en')">English</a>
                    <a onclick="changeLanguage('hi')">हिंदी</a>
                    <a onclick="changeLanguage('mr')">मराठी</a>
                    <a onclick="changeLanguage('bn')">বাংলা</a>
                    <a onclick="changeLanguage('ta')">தமிழ்</a>
                    <a onclick="changeLanguage('gu')">ગુજરાતી</a>
                    <a onclick="changeLanguage('kn')">ಕನ್ನಡ</a>
                    <a onclick="changeLanguage('ml')">മലയാളം</a>
                    <a onclick="changeLanguage('te')">తెలుగు</a>
                    <a onclick="changeLanguage('pa')">ਪੰਜਾਬੀ</a>
                </div>
            </div>
        </div>
    </footer>
`;

document.getElementById("footer-placeholder").innerHTML = footerHTML;

// --- 3. BULLETPROOF TRANSLATE LOGIC ---
window.googleTranslateElementInit = function () {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,hi,mr,bn,ta,gu,kn,ml,te,pa",
      autoDisplay: false,
    },
    "google_translate_element",
  );
};

const translateScript = document.createElement("script");
translateScript.type = "text/javascript";
translateScript.src =
  "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(translateScript);

// The Cookie Method: Forces Google Translate to switch and reloads the page
window.changeLanguage = function (langCode) {
  // Set the cookie for the current domain
  document.cookie = "googtrans=/en/" + langCode + "; path=/;";
  document.cookie =
    "googtrans=/en/" +
    langCode +
    "; path=/; domain=" +
    window.location.hostname +
    ";";

  // Reload the page to apply the translation immediately
  window.location.reload();
};
