// Script Data AOS Animation
AOS.init({disable: 'mobile'});

// Preloader Function
const overlay = document.querySelector('.overlay-preloader');
const loader = document.querySelector('.overlay-loader');
const overlayTL = new TimelineMax();
const loaderTL = new TimelineMax();
var animateOut = function() {
  overlayTL.to( overlay, .6, { bottom: '100%', ease: Power4.easeInOut, delay: .30 } );
  loaderTL.to( loader, .5, { y: '-40', opacity: 0 });
};
var animateOut_2 = function() {
  overlayTL.to( overlay, .7, { top: '100%', ease: Power4.easeInOut, delay: .30 } );
  loaderTL.to( loader, .6, { y: '40', opacity: 0 });
}
var animateIn = function() {
  overlayTL.fromTo( overlay, .7, { top: '100%', bottom: 0 }, { top: 0, ease: Power4.easeInOut } );
  loaderTL.fromTo( loader, .6, { y: '40', opacity: 0, delay: .30 }, { y: 0, opacity: 1, delay: .7, ease: Power2.easeOut } );
};
animateOut_2();
  
// Script for Mobile Navigation
const slide_mobile_case = new Swiper(".slide-cases-mobile", {
  slidesPerView: 1,
  speed: 600,
  pagination: {
    el: ".s-cases .container .slide-cases-mobile .swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    }, 
  },
  // ...
  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
});

// Button Scroll Top
const btnScrollTop = document.getElementById("js-btn-scroll-top");
const imgBtnScrollTop = document.getElementById("js-img-footer");
if(btnScrollTop){
    btnScrollTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        }),
        imgBtnScrollTop.setAttribute('src', './assets/icons/icon-arrow-up-footer.svg');
    }),
    btnScrollTop.addEventListener('mouseover', () => {
      imgBtnScrollTop.setAttribute('src', './assets/icons/icon-arrow-up-footer-black.svg');
    }),
    btnScrollTop.addEventListener('mouseleave', () => {
      imgBtnScrollTop.setAttribute('src', './assets/icons/icon-arrow-up-footer.svg');
    })
}
// Add class active to menu button
const menuButton = document.getElementById('js-menu-button');
if(menuButton){
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('is-active'); // add the CSS configuration on this button
    document.documentElement.classList.toggle('menu-opened');
  })
}
// Close menu button when clicks to the links
const menuMobileNav = document.querySelectorAll('.js-menu-mobile li a');
menuMobileNav.forEach((item) => {
  item.addEventListener('click', function(){
    document.documentElement.classList.remove('menu-opened');
    menuButton.classList.remove('is-active');
  })
})

// Menu Header Change >20 scroll
const header = document.getElementById("js-header");
function fixedMenu() {
  if (window.pageYOffset > 50) {
    header.classList.add("changeHeight");
  } else {
    header.classList.remove("changeHeight");
  }
}
document.addEventListener("scroll", fixedMenu);

const progressSlide = document.querySelector('.js-progress'); // get progress bar

// Script for Hero Slide
const swiper = new Swiper(".slide-principal", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false // autoplay nao para de funcionar
  },
  effect: 'fade',
  pagination: {
    el: ".slide-principal .swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  on: { // get some elements from swiper slide
      init : function () { // when slide starts
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('animate'); // faz a barra crescer
        progressSlide.classList.add('active'); // da opacidade
      }, 
      slideChangeTransitionStart : function (){ // when the transition start
        progressSlide.classList.remove('animate');
        progressSlide.classList.remove('active');
        progressSlide.classList.add('active');
      }, 
      slideChangeTransitionEnd : function (){ // when the transiction finish
        progressSlide.classList.add('animate'); // um apos o outro - nao pode adicionar junto
      }
    }
});
// Script for Slide Image Cases
const slide_image_cases = new Swiper(".slide-image-cases",{
  slidesPerView: 2.3,
  spaceBetween: 20,
  loop: !0,
  centeredSlides: !0,
  watchSlidesVisibility: !0,
  watchSlidesProgress: !0,
  pagination: {
    el: ".s-cases .ctrl-slide .pagination-box-cases",
  },
  navigation: {
    nextEl: ".s-cases .ctrl-slide .btn-next",
    prevEl: ".s-cases .ctrl-slide .btn-prev"
  },
});
// Script for Slide About Cases
const slide_about_case = new Swiper(".slide-about-case",{
  spaceBetween: 40,
  direction: "vertical",
  loop: false,
  pagination: {
    el: ".s-cases .ctrl-slide .page-fraction",
    type: "fraction",
    clickable: false,
  },
  navigation: {
    nextEl: ".s-cases .ctrl-slide .btn-next",
    prevEl: ".s-cases .ctrl-slide .btn-prev"
  },
  simulateTouch: !1,
  thumbs: {
    swiper: slide_image_cases,
  },
});

// Change active class of header link
function changeActiveNav() {
  // Get all the navigation links
  const navLinks = document.querySelectorAll('.nav-item');

  // Get the sections in the landing page
  const sections = document.querySelectorAll('.section');

  // Add an event listener to the window scroll event
  window.addEventListener('scroll', () => {
    // Get the current scroll position
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // Iterate through each section
    sections.forEach((section, index) => {
      // Calculate the top and bottom positions of the section
      const sectionTop = section.offsetTop - 150; // Offset by 50px to account for padding/margin
      const sectionBottom = sectionTop + section.offsetHeight;

      // Check if the current scroll position is within the section's boundaries
      if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
        // Add the 'active' class to the corresponding navigation link
        navLinks[index].classList.add('active');
      } else {
        // Remove the 'active' class from other navigation links
        navLinks[index].classList.remove('active');
      }
    });
  });
}
// Call the function to start tracking scroll positions and updating the active navigation
changeActiveNav();