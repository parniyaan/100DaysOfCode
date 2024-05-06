const sections = document.querySelectorAll('section');
const sectionNames = document.querySelectorAll('li a');


const observeSection = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let sectionId =   entry.target.id;

            sectionNames.forEach( sectionName => {
                if(sectionName.textContent === sectionId){
                    sectionName.classList.add('orange');
                }else {
                    sectionName.classList.remove('orange');
                }
            });

        }
    });

});


sections.forEach(section => {
    observeSection.observe(section);
});

