document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.getElementById('centralized-div').classList.toggle('light-theme');
    document.getElementById('git-icon').src = "assets/github-dark.png"
});

function changeLanguage(language) {
    fetch(`languages/${language}.json`)
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                document.getElementById(key).textContent = data[key];
            }
        });
}