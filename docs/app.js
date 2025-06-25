// VALIDATE EMAIL

//elements
const emailInput = document.getElementById("emailInput");
const submitButton = document.getElementById("submitButton");
const errorMessage = document.getElementById("errorMessage");
const emailForm = document.getElementById("emailForm");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (emailRegex.test(email)) {
    errorMessage.classList.add("hidden");
    emailInput.classList.remove("border-bright-red");

    emailForm.submit();
    console.log("Email válido e formulário submetido!");
  } else {
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("border-bright-red");
    console.log("Email inválido!");
  }
});

//CARROUSEL TESTIMONIALS

document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll("#sliderDots span");
  const cards = document.querySelectorAll('article[id^="card-"]');
  let currentSlide = 0;

  function showSlide(slideIndex) {
    cards.forEach((card, index) => {
      if (window.innerWidth < 769) {
        if (index === slideIndex) {
          card.classList.remove("max-md:hidden");
          // card.classList.add("max-md:block");
        } else {
          card.classList.add("max-md:hidden");
          // card.classList.remove('max-md:block');
        }
      }
    });

    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    currentSlide = slideIndex;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  showSlide(0);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      cards.forEach((card) => {
        card.classList.remove("max-md:hidden", "max-md:block");
      });
    } else {
      showSlide(currentSlide);
    }
  });
});

// MENU MOBILE

const menuMobile = document.getElementById("menu_mobile");
const closeMenu = document.getElementById("close");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

menuMobile.addEventListener("click", () => {
  menuMobile.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
  menu.classList.remove("hidden");
});

closeMenu.addEventListener("click", (e) => {
  console.log(e.currentTarget);
  menuMobile.classList.remove("hidden");
  closeMenu.classList.add("hidden");
  overlay.classList.add("hidden");
  menu.classList.add("hidden");
});


