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
