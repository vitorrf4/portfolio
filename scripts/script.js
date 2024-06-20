document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.getElementById('centralized-div').classList.toggle('light-theme');
    let articles =  document.getElementsByClassName('side-by-side-container');
    
    for (let a of articles) {
        a.classList.toggle('light-theme');
    }
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