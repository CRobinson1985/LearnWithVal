const loadingBackdrop = document.getElementById('loader-backdrop');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const logoImg = document.getElementById('logo');
const headBtns = document.querySelectorAll('.head-button.li');
const images = document.querySelectorAll('.galleria');
let menuOpen = false;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // entry.target.classList.remove('show');
    }
  });
});

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    if (window.innerWidth <= 850) return;

    const isClicked =
      img.classList.contains('clicked-left') ||
      img.classList.contains('clicked-center') ||
      img.classList.contains('clicked-right');

    // Remove all clicked classes
    images.forEach((i) => {
      i.classList.remove('clicked-left', 'clicked-center', 'clicked-right');
    });

    // Re-add only if it wasn’t already selected
    if (!isClicked) {
      const position = index % 3;
      if (position === 0) img.classList.add('clicked-left');
      else if (position === 1) img.classList.add('clicked-center');
      else img.classList.add('clicked-right');
    }
  });
});

const hiddenImgs = document.querySelectorAll('.hidden');
hiddenImgs.forEach((el) => observer.observe(el));

window.addEventListener('resize', () => {
  navLinks.style.display = 'none';
  logoImg.style.height = '50px';
  menuOpen = false;
});

hamburger.addEventListener('click', () => {
  if (menuOpen == false) {
    navLinks.style.display = 'block';
    logoImg.style.height = '180px';
    menuOpen = true;
  } else if (menuOpen == true) {
    navLinks.style.display = 'none';
    logoImg.style.height = '50px';
    menuOpen = false;
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    images.forEach((i) => {
      i.classList.remove('clicked-left', 'clicked-center', 'clicked-right');
    });
  }
});

window.addEventListener('DOMContentLoaded', function () {
  this.setTimeout(function () {
    loadingBackdrop.style.display = 'none';
  }, 2000);
});
headBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (menuOpen) {
      navLinks.style.display = 'none';
      logoImg.style.height = '50px';
      menuOpen = false;
    }
  });
});
