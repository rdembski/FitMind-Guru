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
    document.getElementById('menuContainer').classList.toggle('active');
}

function switchTab(tabId) {
    // Logika przełączania zakładek
}