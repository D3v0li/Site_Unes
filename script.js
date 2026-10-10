/* ===== SLIDER DO HERO ===== */
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideAtual = 0;
let intervalo;

function mostrarSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    slideAtual = index;
}

function proximoSlide() {
    mostrarSlide((slideAtual + 1) % slides.length);
}

function iniciarSlider() {
    intervalo = setInterval(proximoSlide, 5000);
}

function pararSlider() {
    clearInterval(intervalo);
}

/* Clique nas bolinhas */
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        mostrarSlide(parseInt(dot.dataset.slide));
        pararSlider();
        iniciarSlider();
    });
});

/* Pausa ao passar o mouse */
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mouseenter', pararSlider);
    hero.addEventListener('mouseleave', iniciarSlider);
}

/* Inicia */
if (slides.length > 0) {
    iniciarSlider();
}

/* ===== MENU MOBILE ===== */
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('aberto');
    });

    /* Fecha o menu ao clicar em um link */
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('aberto');
        });
    });
}