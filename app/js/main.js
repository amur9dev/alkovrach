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


const photoSlider = new Swiper('.personal__photo', {
  slidesPerView: 3, 
  loop: true, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const infoSlider = new Swiper('.personal__info', {
  slidesPerView: 1, 
  loop: true, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

photoSlider.controller.control = infoSlider;
infoSlider.controller.control = photoSlider;




const questionItems = document.querySelectorAll('.question-item');

// Добавляем обработчик события для каждого элемента
questionItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('question-item--active'); // Переключаем класс 'active'
  });
});


