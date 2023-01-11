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
const toggleAbrir = document.querySelector('.menu_hamburguesa');
const toggleCerrar = document.querySelector('.cerrar');
const navbarSmall = document.querySelector('.content_menu-desplegable');
const sections = document.querySelectorAll('section');

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
        logoWhite.style.display = ('none');
        logoBlack.style.display = ('block');
    }
})

toggleAbrir.addEventListener('click', function abrir(){
    if(abrir){
        navbarSmall.style.display = ('block');
    }
})

toggleCerrar.addEventListener('click', function(cerrar){
    if(cerrar){
        navbarSmall.style.display = ('none');
    }
})


function section(){
    navbarSmall.style.display = ('none');
}
sections.forEach(item =>item.addEventListener('click', section));



// Función para agregar autoplay a los videos
    window.addEventListener('scroll', function(){
        let videos = document.querySelectorAll('.content_logo video');
        videos.forEach(video => {
            let altura = window.innerHeight - 24;
            let distancia = video.getBoundingClientRect();
            if(altura > distancia.top){
                video.play();
            }
        });
})
