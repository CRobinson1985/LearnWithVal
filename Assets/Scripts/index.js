// const blogBtn = document.getElementById('blog-btn');
// const contattiBtn = document.getElementById('contatti-btn');
// const galleriaBtn = document.getElementById('galleria-btn');
// const prenotaBtn = document.getElementById('prenota-btn');
// const recensioniBtn = document.getElementById('recensioni-btn');
// const libroBtn = document.getElementById('libro-btn');
// const headerBtns = document.querySelector('.head-buttons-div');
// const form = document.getElementById('contatti-form');
const loadingBackdrop = document.getElementById('loader-backdrop');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const logoImg = document.getElementById('logo');
const headBtns = document.querySelectorAll('.head-button.li');
let menuOpen = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
      
    }
  });
});

const hiddenImgs = document.querySelectorAll('.hidden');
hiddenImgs.forEach((el) => observer.observe(el));

window.addEventListener('resize', () => {
  navLinks.style.display = "none";
  logoImg.style.height = '50px';
  menuOpen = false;
});

hamburger.addEventListener('click', () => {
  if (menuOpen == false) {
    navLinks.style.display = "block";
    logoImg.style.height = '180px';
    menuOpen = true;
  } else if (menuOpen == true) {
    navLinks.style.display = "none";
    logoImg.style.height = '50px';
    menuOpen = false;
    
  }
});

window.addEventListener('DOMContentLoaded', function() {
  this.setTimeout(function() {
    loadingBackdrop.style.display = 'none';

  }, 2000)

});
headBtns[0].addEventListener('click', () => {
  if (menuOpen == true) {
    navLinks.style.display = "none";
    logoImg.style.height = '50px';
    menuOpen = false;
  }
});
headBtns[1].addEventListener('click', () => {
  if (menuOpen == true) {
    navLinks.style.display = "none";
    logoImg.style.height = '50px';
    menuOpen = false;
  }
});
headBtns[2].addEventListener('click', () => {
  if (menuOpen == true) {
    navLinks.style.display = "none";
    logoImg.style.height = '50px';
    menuOpen = false;
  }
});
headBtns[3].addEventListener('click', () => {
  if (menuOpen == true) {
    navLinks.style.display = "none";
    logoImg.style.height = '50px';
    menuOpen = false;
  }
});
headBtns[4].addEventListener('click', () => {
  if (menuOpen == true) {
    navLinks.style.display = "none";
    logoImg.style.height = '50px';
    menuOpen = false;
  }
});