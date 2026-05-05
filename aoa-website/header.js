// --- INJECT HEADER CSS ---
const headerCSS = `
    .nav-container {
        position: fixed;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 30px);
        max-width: 1200px;
        z-index: 1000;
    }
    header {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 100px;
        padding: 10px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 10px 30px rgba(27, 77, 62, 0.1);
    }
    .logo img { height: 40px; width: auto; object-fit: contain; }
    
    .nav-links {
        display: flex;
        gap: 24px;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;
    }
    .nav-links a {
        font-size: 14px;
        font-weight: 600;
        color: #0f172a;
        text-decoration: none;
        transition: color 0.3s;
    }
    .nav-links a:hover { color: #c5a059; }
    
    .search-pill {
        background: rgba(255, 255, 255, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 8px 16px;
        border-radius: 50px;
        display: flex;
        align-items: center;
    }
    .search-pill input { border: none; background: transparent; outline: none; width: 100px; margin-left: 8px;}
    
    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        color: #1b4d3e;
        cursor: pointer;
    }

    /* --- MOBILE RESPONSIVENESS --- */
    @media (max-width: 992px) {
        .mobile-menu-btn { display: block; }
        .nav-links {
            display: none; /* Hidden by default on mobile */
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            border: 1px solid rgba(255,255,255,0.5);
        }
        .nav-links.active { display: flex; }
        .search-pill { width: 100%; justify-content: center; }
        .search-pill input { width: 80%; }
        .nav-divider { display: none; }
    }
`;

const headerStyleTag = document.createElement("style");
headerStyleTag.innerHTML = headerCSS;
document.head.appendChild(headerStyleTag);

// --- INJECT HEADER HTML ---
const headerHTML = `
    <div class="nav-container">
        <header>
            <a href="#" class="logo">
                <img src="https://image1.jdomni.in/storeLogo/23022026/23/0A/4A/6F82981B0A8135832085D87DAE_1771865831290.png?output-format=webp" alt="AOA Logo">
            </a>
            
            <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                <i class="fa-solid fa-bars"></i>
            </button>

            <ul class="nav-links" id="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/quik-classes">Quik Classes</a></li>
                <li><a href="/original-abacus-olympiad">Original Abacus Olympiad</a></li>
                                <li><a href="https://abacusolympicassociation.com">Exercise-N-Play</a></li>

                
            </ul>
        </header>
    </div>
`;

document.getElementById("header-placeholder").innerHTML = headerHTML;

function toggleMobileMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}
