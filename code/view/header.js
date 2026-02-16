const HEADER = document.querySelector("header");

HEADER.innerHTML = 
`
    <div class="header-parte">
        <img onclick="window.location = 'index.html'" src="">
        <h1>Zombie Clicker</h1>
    </div>
    <div class="header-parte">      
        <button id="alterna-menu">
            <i class="fa-solid fa-bag-shopping"></i>
        </button>
        <button>
            <i class="fa-solid fa-bullseye"></i>
        </button>
        <button>
            <i class="fa-solid fa-star"></i>
        </button>
        <button>
            <i class="fa-solid fa-trophy"></i>
        </button>
    </div>
`;