document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.getElementById('centralized-div').classList.toggle('light-theme');
    document.getElementsByClassName('theme').classList.toggle('light-theme');
});

var currentLang = 'en';

document.getElementById('lang-toggle').addEventListener('click', function() {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    fetch(`languages/${currentLang}.json`)
        .then(response => response.json())
        .then(data => {
            for (var key in data) {
                document.getElementById(key).textContent = data[key];
            }
        });
});
