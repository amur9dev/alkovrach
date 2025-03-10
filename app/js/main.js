// Получаем все кнопки, которые открывают модальное окно
document.querySelectorAll(".button--help, .button--call").forEach(button => {
  button.addEventListener("click", function () {
    const modal = document.getElementById("modal");
    const title = modal.querySelector(".form-base__title");
    const submitButton = modal.querySelector(".form-base__btn");

    // Меняем заголовок и текст кнопки в зависимости от нажатой кнопки
    if (this.classList.contains("button--help")) {
      title.textContent = "Получить помощь";
      submitButton.textContent = "Отправить";
    } else {
      title.textContent = "Заказать звонок";
      submitButton.textContent = "Получить консультацию";
    }

    modal.classList.add("open");
  });
});

// Функция закрытия модального окна
function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

// Закрытие по кнопке
document.getElementById("modal__close-btn").addEventListener("click", closeModal);

// Закрытие по нажатию на Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Закрытие при клике вне модального окна
document.querySelector("#modal .modal__box").addEventListener("click", (event) => {
  event._isClickWithInModal = true;
});
document.getElementById("modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  closeModal();
});








///////////////////////////////////////////////////////////////////////////////////////////////////










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






/////////////////////////////////////////////////////////////////////////////////////////////////////







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








///////////////////////////////////////////////////////////////////////////////////////////////////









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








//////////////////////////////////////////////////////////////////////////////////////////////////////









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








