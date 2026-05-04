// footer.js
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
                <div id="google_translate_element" style="display:none;"></div>

                <!-- Custom Language Selector -->
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

// 1. Initialize Google Translate
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

// 2. Load the Google Translate Script dynamically
const translateScript = document.createElement("script");
translateScript.type = "text/javascript";
translateScript.src =
  "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(translateScript);

// 3. The function that triggers when you click a custom link
function changeLanguage(langCode) {
  // Find the hidden Google Translate dropdown
  const selectField = document.querySelector(
    "#google_translate_element select",
  );
  if (selectField) {
    // Change its value to the selected language
    selectField.value = langCode;
    // Force the dropdown to trigger the translation
    selectField.dispatchEvent(new Event("change"));
  }
}
