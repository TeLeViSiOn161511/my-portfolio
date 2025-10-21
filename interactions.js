function gotoAbout() {
    document.getElementById('home').style.display= 'none';
    document.getElementById('about-me').style.display= 'flex';
}

function gotoWorks() {
    document.getElementById('home').style.display= 'none';
    document.getElementById('my-works').style.display= 'flex';
}

function visitGithub() {
    window.open('https://github.com/TeLeViSiOn161511', '_blank')
}

function visitLinkedin() {
    window.open('https://www.linkedin.com/in/patrickowenkuek/', '_blank');
}

// returning containers to Home
const closeButton = document.querySelectorAll(".close");

for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener('click', function() {
        const sectionId = this.dataset.section;
        document.querySelector("#" + sectionId).style.display = 'none';
        document.querySelector("#home").style.display = 'flex';
    })
}
