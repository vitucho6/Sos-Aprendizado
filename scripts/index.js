var open = document.querySelector('div#openmenu')
var close = document.querySelector('div#closemenu')
var nav = document.querySelector('div#navegacao')
var menu = document.querySelector('div#menu')

function abrir(){
    nav.style.display = 'block'
    open.style.display = 'none'
    
    
    
}

function fechar(){
    nav.style.display = 'none'
    open.style.display = 'block'
}

let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

function showSlides(n) {
  // Se chegar no fim, volta pro começo
  if (n >= slides.length) { slideIndex = 0 }
  // Se for menor que zero, vai pro último
  if (n < 0) { slideIndex = slides.length - 1 }

  // Remove a classe 'active' de todos
  slides.forEach(s => s.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  // Adiciona 'active' no slide e ponto atual
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

// Função para quando você clica no ponto
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
  resetTimer(); // Reinicia o tempo se o usuário clicar
}

// Configura o Autoplay (10000ms = 10 segundos)
let timer = setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 10000);

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 10000);
}