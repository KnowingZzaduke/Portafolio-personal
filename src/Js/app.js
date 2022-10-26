const contains = document.getElementById('dark_mode');
const contains2 = document.getElementById('light_mode');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const about = document.querySelector('.content_about-me');
const skill = document.querySelector('.section_skill');
const proyect = document.querySelector('.section_proyects');
const contact = document.querySelector('.section_contact');
const cerrar = document.querySelector('.btn-close-white')
const containsSmall = document.getElementById('dark_mode-small');
const contains2Small = document.getElementById('light_mode-small');
const logoBlack = document.querySelector('.logo_black');
const logoWhite = document.querySelector('.logo_white');

contains.addEventListener('click', function(event){
    if(event){
        contains.style.display = ('none');
        contains2.style.display = ('block');
        header.style.background = ('black');
        navbar.classList.replace('navbar', 'navbar_dark');
        about.classList.replace('content_about-me', 'content_about-me-dark');
        skill.classList.replace('section_skill' , 'section_skill-dark');
        proyect.classList.replace('section_proyects', 'section_proyects-dark');
        contact.classList.replace('section_contact' , 'section_contact-dark');
        cerrar.classList.replace('btn-close-white', 'btn-close-black');
        logoBlack.style.display = ('none');
        logoWhite.style.display = ('block');
}
})

contains2.addEventListener('click', function(event2){
    if(event2){
        contains2.style.display = ('none');
        contains.style.display = ('block');
        header.style.background = ('linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(240,240,247,1) 0%, rgba(227,232,233,1) 100%)');
        navbar.classList.replace('navbar_dark','navbar');
        about.classList.replace('content_about-me-dark', 'content_about-me');
        skill.classList.replace('section_skill-dark', 'section_skill');
        proyect.classList.replace('section_proyects-dark', 'section_proyects',);
        contact.classList.replace('section_contact-dark', 'section_contact');
        cerrar.classList.replace('btn-close-black', 'btn-close-white');
        logoWhite.style.display = ('none');
        logoBlack.style.display = ('block');
    }
})

containsSmall.addEventListener('click', function(events){
    if(events){
        containsSmall.style.display = ('none');
        contains2Small.style.display = ('block');
        header.style.background = ('black');
        navbar.classList.replace('navbar', 'navbar_dark');
        about.classList.replace('content_about-me', 'content_about-me-dark');
        skill.classList.replace('section_skill' , 'section_skill-dark');
        proyect.classList.replace('section_proyects', 'section_proyects-dark');
        contact.classList.replace('section_contact' , 'section_contact-dark');
        cerrar.classList.replace('btn-close-white', 'btn-close-black');
}
})

contains2Small.addEventListener('click', function(event2s){
    if(event2s){
        contains2Small.style.display = ('none');
        containsSmall.style.display = ('block');
        header.style.background = ('linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(240,240,247,1) 0%, rgba(227,232,233,1) 100%)');
        navbar.classList.replace('navbar_dark','navbar');
        about.classList.replace('content_about-me-dark', 'content_about-me');
        skill.classList.replace('section_skill-dark', 'section_skill');
        proyect.classList.replace('section_proyects-dark', 'section_proyects',);
        contact.classList.replace('section_contact-dark', 'section_contact');
        cerrar.classList.replace('btn-close-black', 'btn-close-white');

    }
})



const skill1 = document.querySelector('.skill_1');
const skill2 = document.querySelector('.skill_2');
const skill3 = document.querySelector('.skill_3');
const skill4 = document.querySelector('.skill_4');
const html = document.querySelector('.html', '.css', '.sass', '.javascript');
const css = document.querySelector('.css');
const sass = document.querySelector('.sass');
const javascript = document.querySelector('.javascript');


skill1.addEventListener('click', function(h){
    if(h){
        html.style.display = ('block');
    }
})

skill2.addEventListener('click', function(c){
    if(c){
        css.style.display = ('block');
    }
})

skill3.addEventListener('click', function(s){
    if(s){
        sass.style.display = ('block');
    }
})

skill4.addEventListener('click', function(j){
    if(j){
        javascript.style.display = ('block');
    }
})

// Funcion del scrolling

function scrolling(){
    const enlaces = document.querySelectorAll('.navbar a');
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(scroll){
            scroll.preventDefault();
            enlaces.scrollIntoView({ behavior: "smooth"});
        });
    });

}


// Función para mostrar elementos
    window.addEventListener('scroll', function(){
        let videos = document.querySelectorAll('.content_logo video');
        videos.forEach(video => {
            let altura = window.innerHeight;
            let distancia = video.getBoundingClientRect();
            if(distancia.bottom < altura){
                video.setAttribute('autoplay', '');
            }
        });
   
})

