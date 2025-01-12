let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}


let sections  = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window,onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.screenY>100);
}

ScrollReveal({
    reset: true,
    distance: '12px',
    duration: 2000,
    delay: 150
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container , .portafolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text',{
    strings: ['DESARROLLADOR DE SOFTWARE','ANALISTA DE SOFTWARE' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
} )



document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const imagesCount = images.children.length;
    let index = 0;

    const updateCarousel = () => {
        images.style.transform = `translateX(-${index * 100}%)`;
    };

    carousel.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + imagesCount) % imagesCount;
        updateCarousel();
    });

    carousel.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % imagesCount;
        updateCarousel();
    });
});
