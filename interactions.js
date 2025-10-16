function gotoAbout() {
    document.getElementById('home').style.display= 'none';
    document.getElementById('about-me').style.display= 'flex';
}

function gotoWorks() {
    document.getElementById('home').style.display= 'none';
    document.getElementById('my-works').style.display= 'flex';
}

function returnAbout() {
    document.getElementById('about-me').style.display = 'none';
    document.getElementById('home').style.display='flex';
}

function returnWorks() {
    document.getElementById('my-works').style.display = 'none';
    document.getElementById('home').style.display='flex';
}

function visitGithub() {
    window.open('https://github.com/TeLeViSiOn161511', '_blank')
}

function visitLinkedin() {
    window.open('https://www.linkedin.com/in/patrickowenkuek/', '_blank');
}
