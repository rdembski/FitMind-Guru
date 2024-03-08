document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Dokument został załadowany. Witaj w FitMind Guru!');
});
fetch('URL_DO_TWOJEGO_API', {
    method: 'POST', // lub 'GET', w zależności od konfiguracji Twojego API
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({/* dane wysyłane do GPT */}),
})
.then(response => response.json())
.then(data => {
    console.log('Odpowiedź od GPT:', data);
    // Tutaj możesz przetworzyć i wyświetlić odpowiedź
})
.catch((error) => {
    console.error('Błąd:', error);
});
