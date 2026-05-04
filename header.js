// header.js
const headerHTML = `
    <div class="nav-container">
        <header>
            <a href="index.html" class="logo">
                <img src="https://image1.jdomni.in/storeLogo/23022026/23/0A/4A/6F82981B0A8135832085D87DAE_1771865831290.png?output-format=webp" alt="Abacus Olympic Association Logo">
            </a>
            <nav>
                <ul>
                    <li><a href="https://abacusolympicassociation.com">Exercise-N-Play</a></li>
                    <li style="width: 1px; height: 15px; background: rgba(0,0,0,0.2); margin: 0 10px;"></li>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Quik Classes</a></li>
                    <li><a href="#">Olympiad</a></li>
                    <li><a href="#">More <i class="fa-solid fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a></li>
                  
                </ul>
            </nav>
        </header>
    </div>
`;

// Inject the header into the page
document.getElementById("header-placeholder").innerHTML = headerHTML;
