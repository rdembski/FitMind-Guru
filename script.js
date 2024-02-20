document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Zapobiega domyślnej akcji przeglądarki
    const userInput = document.getElementById('user-input').value;
    const responseElement = document.createElement('p'); // Tworzy nowy element <p> dla odpowiedzi
    document.body.appendChild(responseElement); // Dodaje element <p> do strony

    try {
        // Wysyła zapytanie do funkcji serwerless
        const response = await fetch('/api/query', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: userInput })
        });

        const data = await response.json();
        responseElement.textContent = data.answer; // Wyświetla odpowiedź w nowym elemencie <p>
    } catch (error) {
        console.error('Błąd przy zapytaniu do GPT:', error);
        responseElement.textContent = 'Przepraszamy, wystąpił błąd.';
    }
});
