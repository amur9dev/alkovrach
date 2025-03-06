


const aboutSwiper = new Swiper(".about__slider", {
  loop: true,
  loopAdditionalSlides: 3,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".about__slider-next",
    prevEl: ".about__slider-prev",
  },
})

Fancybox.bind("[data-fancybox]", {});


const photoSlider = new Swiper('.personal__photo', {
  slidesPerView: 3, // Оставляем 3 слайда
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  speed: 500, 
   spaceBetween: 20,
   // Добавляем отступ 20px между слайдами
 // Плавная анимадция
  navigation: {
    nextEl: '.personal__next',
    prevEl: '.personal__prev',
  },
});

const infoSlider = new Swiper('.personal__info', {
  slidesPerView: 1, 
  slidesPerGroup: 1,
  effect: 'slide', // Делаем плавное исчезновение
  fadeEffect: {
    crossFade: true, // Убирает резкий переход
  },
  speed: 500, // Плавная анимация
  allowTouchMove: false, // Отключаем свайпы, так как он синхронизируется с фото
});

photoSlider.on('slideChange', () => {
  infoSlider.slideTo(photoSlider.realIndex);
});





const questionList = document.querySelector('.question-list');

questionList.addEventListener('click', (event) => {
  const clickedItem = event.target.closest('.question-item');

  if (!clickedItem) return;

  document.querySelectorAll('.question-item').forEach(item => {
    if (item !== clickedItem) {
      item.classList.remove('question-item--active');
      item.querySelector('.question-item__text').style.maxHeight = null;
    }
  });

  clickedItem.classList.toggle('question-item--active');
  const textBlock = clickedItem.querySelector('.question-item__text');

  if (clickedItem.classList.contains('question-item--active')) {
    textBlock.style.maxHeight = textBlock.scrollHeight + "px";
  } else {
    textBlock.style.maxHeight = null;
  }
});



document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".reviews__inner", {
    slidesPerView: 2, // Отображать два элемента
    slidesPerGroup: 1, // Перелистывать по одному
    spaceBetween: 20, // Отступы между слайдами
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
    loop: true, // Цикличный слайдер
  });
});








