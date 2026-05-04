// --- 1. INJECT HEADER CSS ---
const headerCSS = `
    /* --- FLOATING GLASS NAV --- */
    .nav-container {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 48px);
        max-width: 1200px;
        z-index: 1000;
    }
    header {
        background: var(--surface, rgba(255, 255, 255, 0.7));
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--surface-border, rgba(255, 255, 255, 0.4));
        border-radius: 100px;
        padding: 12px 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 20px 40px -10px rgba(27, 77, 62, 0.08);
    }
    .logo {
        display: flex;
        align-items: center;
    }
    .logo img {
        height: 45px;
        width: auto;
        object-fit: contain;
    }
    header nav ul {
        display: flex;
        gap: 32px;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;
    }
    header nav a {
        font-size: 14px;
        font-weight: 500;
        color: var(--text-main, #0f172a);
        text-decoration: none;
        transition: color 0.3s ease;
    }
    header nav a:hover {
        color: var(--accent, #c5a059);
    }
    .search-pill {
        background: rgba(255, 255, 255, 0.5);
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 8px 16px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .search-pill input {
        border: none;
        background: transparent;
        outline: none;
        font-family: "Inter", sans-serif;
        width: 120px;
    }
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            gap: 16px;
            border-radius: 24px;
            padding: 20px;
        }
        header nav ul {
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
        }
    }
`;

// Create a style tag and append it to the head
const headerStyleTag = document.createElement("style");
headerStyleTag.innerHTML = headerCSS;
document.head.appendChild(headerStyleTag);

// --- 2. INJECT HEADER HTML ---
const headerHTML = `
    <div class="nav-container">
        <header>
            <a href="index.html" class="logo">
                <img src="https://image1.jdomni.in/storeLogo/23022026/23/0A/4A/6F82981B0A8135832085D87DAE_1771865831290.png?output-format=webp" alt="Abacus Olympic Association Logo">
            </a>
            <nav>
                <ul>
                    <li><a href="https://abacusolympicassociation.com/">Exercise-N-Play</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/quik-classes">Quik Abacus Classes</a></li>
                    <li><a href="/original-abacus-olympiad">Original Abacus Olympiad</a></li>
                    <li><a href="#">More <i class="fa-solid fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a></li>
                    
                </ul>
            </nav>
        </header>
    </div>
`;

document.getElementById("header-placeholder").innerHTML = headerHTML;
