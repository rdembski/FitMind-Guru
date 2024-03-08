console.log("Welcome to FitMind Guru");
document.getElementById('food-analysis-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Tutaj możesz dodać logikę przetwarzającą przesłane zdjęcie
    console.log('Analiza zdjęcia produktu...');
});
document.getElementById('food-analysis-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var fileInput = document.getElementById('foodImage');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Proszę przesłać plik w formacie .jpeg/.jpg/.png/.gif.');
        fileInput.value = '';
        return false;
    } else {
        // Przetwarzaj zdjęcie...
        console.log('Analiza zdjęcia produktu...');
    }
});
addFeedback()