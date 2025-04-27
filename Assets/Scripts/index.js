const contattiBtn = document.getElementById('contatti-btn');
const galleriaBtn = document.getElementById('galleria-btn');
const prenotaBtn = document.getElementById('prenota-btn');
const blogBtn = document.getElementById('blog-btn');
const libroBtn = document.getElementById('libro-btn');
// const navBtn = document.querySelector('.nav-icon');
// const navBtns = document.querySelectorAll('.btn');
const headerBtns = document.querySelector('.head-buttons-div');
const loadingBackdrop = document.getElementById('loader-backdrop');
const form = document.getElementById('contatti-form');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const logoImg = document.getElementById('logo');
let menuOpen = false;

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
// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent default form submission
//   const name = document.getElementById('contatti-name').value;
//   const email = document.getElementById('contatti-email').value;
//   const comment = document.getElementById('contatti-comment').value;

//   const formData = {
//     name: name,
//     email: email,
//     comment: comment
  
//   };

//   fetch("emailform.php", { 
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(formData)
//   })
//   .then(response => response.text())
//   .then(data => {
//     console.log("Server response:", data); // Log the server's response
//     // You might want to update the page with a success or error message here
//   })
//   .catch(error => {
//     console.error("Error sending data:", error);
//     // Handle any errors
//   });
// });

// console.log(navBtns);

// const navBarToggle = () => {

//   if (headerBtns.classList.contains('shown')) {
//     headerBtns.classList.remove('shown');
    
//   } else {
//     headerBtns.classList.add('shown');
    
//   }
// };

// navBtn.addEventListener('click', navBarToggle);
