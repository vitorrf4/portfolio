let isDarkTheme = true;

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.getElementById('centralized-div').classList.toggle('light-theme');
    
    if (isDarkTheme) {
        document.body.style.backgroundImage = "url('../assets/white-background.png')";
        document.getElementById('git-icon').src = "assets/github-dark.png";
    } else {
        document.body.style.backgroundImage = "url('../assets/dark-background.png')";
        document.getElementById('git-icon').src = "assets/github-white.png";
    }
    
    isDarkTheme = !isDarkTheme;
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