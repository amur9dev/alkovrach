


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
  slidesPerView: 3, 
  slidesPerGroup: 1,
  centeredSlides: false,
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








