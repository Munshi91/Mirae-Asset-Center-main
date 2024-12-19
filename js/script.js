$(document).ready(function () {
  // Initialize Owl Carousel
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
  });
});

// JavaScript to toggle accordion content
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

//Slider content

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#splide', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    autoplay: true,
    interval: 8000,
    flickMaxPages: 3,
    updateOnMove: true,
    pagination: true,
    // padding: '10%',
    throttle: 300,
    breakpoints: {
      600: {
        perPage: 1,
        padding: '30%',
      },
    },
  }).mount();
});
