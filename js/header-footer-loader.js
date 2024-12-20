document.addEventListener('DOMContentLoaded', function () {});
function loadNavbarFooter() {
    const navbar = document.getElementById('navbar');

    const footer = document.getElementById('footer');
    const navbarHTML = `
                <nav>
      <div class="logo-head">
        <a href="/index.html">CHRISTIAN</a>
      </div>
      <div class="nav-head">
        <a href="/views/calculadora">CALCULADORA</a>
        <a href="/views/jsonplaceholder">JSONPlaceholder</a>
        <a href="/views/dummyjson">DUMMYJson</a>
      </div>
    </nav>
            `;

    const footerHTML = `
    <footer>
    <p>Copyright© 2024, All Right Reserved <strong>Christian V. L</strong></p>
        
</footer>
    `;

    navbar.innerHTML = navbarHTML;
    footer.innerHTML = footerHTML;
}

// Llamar a la función cuando la página esté cargada
window.onload = loadNavbarFooter;