const swiper = new Swiper('.about__slider', {
  loop: true,
  slidesPerView: 1, 
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

Fancybox.bind("[data-fancybox]", {});



document.addEventListener("DOMContentLoaded", function () {
  const photoSlider = new Swiper(".personal__photo-slider", {
    slidesPerView: 1, // Отображаем 3 фото
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  });

  const infoSlider = new Swiper(".personal__info-slider", {
    slidesPerView: 1,
    loop: true,
    navigation: false,
  });

  // Синхронизация слайдеров
  photoSlider.controller.control = infoSlider;
  infoSlider.controller.control = photoSlider;
});


