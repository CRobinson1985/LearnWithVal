import { reviews } from './reviews.js';
const loadingBackdrop = document.getElementById('loader-backdrop');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const logoImg = document.getElementById('logo');
const headBtns = document.querySelectorAll('.head-button.li');
const images = document.querySelectorAll('.galleria');
const displayEl = document.getElementById('reviews-display');
const toggleBtn = document.getElementById('toggle');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let menuOpen = false;
const emoji = document.querySelector('.emoji');

emoji.addEventListener('click', () => {
  emoji.classList.remove('hop'); // reset in case it's already added
  void emoji.offsetWidth;        // force reflow to restart animation
  emoji.classList.add('hop');    // add class to trigger animation
});

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
    logoImg.style.display = 'none';
    menuOpen = true;
  } else if (menuOpen == true) {
    navLinks.style.display = 'none';
    logoImg.style.display = 'block';
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

let history = [];
let currentIndex = -1;
let intervalId;
let isPlaying = true;
const REVIEW_COUNT = 3;
const INTERVAL = 5000;

function getRandomReviews(count) {
  const shuffled = reviews.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderReviews(reviewSet) {
  displayEl.innerHTML = '';
  reviewSet.forEach((review) => {
    const div = document.createElement('div');
    div.className = 'review-text';
    div.innerHTML = `${review}<br>--Anonymous Student`;
    displayEl.appendChild(div);
  });
}

function showNext() {
  const nextSet = getRandomReviews(REVIEW_COUNT);
  history.push(nextSet);
  currentIndex = history.length - 1;
  renderReviews(nextSet);
}

function showPrevious() {
  if (currentIndex > 0) {
    currentIndex--;
    renderReviews(history[currentIndex]);
  }
}

function startRotation() {
  intervalId = setInterval(showNext, INTERVAL);
  isPlaying = true;
  updateToggleButton();
}

function stopRotation() {
  clearInterval(intervalId);
  isPlaying = false;
  updateToggleButton();
}

function toggleRotation() {
  if (isPlaying) {
    stopRotation();
  } else {
    startRotation();
  }
}

function updateToggleButton() {
  toggleBtn.textContent = isPlaying ? '⏸ Pause' : '▶ Play';
}

// 🚀 Setup
toggleBtn.addEventListener('click', toggleRotation);
prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);

// Init
showNext();
startRotation();