document.addEventListener('DOMContentLoaded', function() {
  const themeSwitch = document.querySelector('.theme-switch__checkbox');

  themeSwitch.addEventListener('change', function() {
    if(this.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Tutaj dodaj logikę weryfikacji użytkownika
    console.log('Logowanie użytkownika:', username);
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Tutaj zaimplementuj logikę weryfikacji i rejestracji nowego użytkownika
    console.log('Rejestracja nowego użytkownika');
});

// Przykładowa funkcja do obsługi logowania
function handleLogin(event) {
    event.preventDefault();
    // Logika logowania
}

// Przykładowa funkcja do przełączania zakładek

function toggleMenu() {
    const menuContainer = document.getElementById('menuContainer');
    menuContainer.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger');
    const menuContainer = document.getElementById('menuContainer');
    const closeButton = document.querySelector('.close-btn');

    menuButton.addEventListener('click', function() {
        menuContainer.classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        menuContainer.classList.remove('active');
    });
});

function switchTab(tabId) {
    // Logika przełączania zakładek
}