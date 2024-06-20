let language = navigator.language;
changeLanguage(language);

let isDarkTheme = true;

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.getElementsByTagName('main')[0].classList.toggle('light-theme');
    
    if (isDarkTheme) {
        document.body.style.backgroundImage = "url('assets/white-background.png')";
        document.getElementById('git-icon').src = "assets/github-dark.png";
    } else {
        document.body.style.backgroundImage = "url('assets/dark-background.png')";
        document.getElementById('git-icon').src = "assets/github-white.png";
    }
    
    isDarkTheme = !isDarkTheme;
});

function changeLanguage(language) {
    switch (language.toUpperCase()) {
        case 'PT-BR':case 'PT': case 'PT-PT': language = 'PT-BR'; break;
        default: language = 'EN-US'; break;
    }
    
    fetch(`languages/${language}.json`)
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                let elements = document.getElementsByClassName(key);
                for (let e of elements) 
                    e.textContent = data[key];
            }
        });
}

// TODO
// Highlight current selected language button
// Responsive design
// Add Kotlin, DSA, and C Web Server projects
// Better design for the tech stack and projects section 