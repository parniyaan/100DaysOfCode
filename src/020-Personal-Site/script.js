const sections = document.querySelectorAll('section');
const sectionNames = document.querySelectorAll('li a');
const mode = document.querySelectorAll('.mode');
const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');
const moon = document.querySelector('.moon');

lightMode.style.display ='flex';

const observeSection = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let sectionId = entry.target.id;

            sectionNames.forEach(sectionName => {
                if (sectionName.textContent === sectionId) {
                    sectionName.classList.add('orange');
                } else {
                    sectionName.classList.remove('orange');
                }
            });

        }
    });

});


function changeMode() {



    if (lightMode.style.display === 'flex') {
        darkMode.style.display = 'flex';
        moon.style.fill = 'black';
        lightMode.style.display = 'none';
        document.body.style.setProperty('--backColor', '#ffff');
        document.body.style.setProperty('--boxColor', '#c0c0c0');
        document.body.style.setProperty('--textColor', '#5a5959');
        document.body.style.setProperty('--shadowBoxColor','#c5c3c3');

    } else{
        lightMode.style.display = 'flex';
        darkMode.style.display = 'none';
        document.body.style.setProperty('--backColor', '#121212');
        document.body.style.setProperty('--boxColor', '#1b1b1b');
        document.body.style.setProperty('--textColor', '#848484');
        document.body.style.setProperty('--shadowBoxColor','black');

    }
}


sections.forEach(section => {
    observeSection.observe(section);
});

mode.forEach(task => {
    task.addEventListener('click', changeMode);
});
