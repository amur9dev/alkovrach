// Функция открытия модального окна
function openModal(modalId, titleText, buttonText) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const title = modal.querySelector(".form-base__title");
    const submitButton = modal.querySelector(".form-base__btn");

    if (title && titleText) title.textContent = titleText;
    if (submitButton && buttonText) submitButton.textContent = buttonText;

    modal.classList.add("open");
}

// Обработчики открытия для кнопок
document.querySelectorAll(".button--help, .button--call").forEach(button => {
    button.addEventListener("click", function () {
        openModal(
            "modal",
            this.classList.contains("button--help") ? "Получить помощь" : "Заказать звонок",
            this.classList.contains("button--help") ? "Отправить" : "Получить консультацию"
        );
    });
});

// Функция закрытия модального окна
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("open");
}

// Закрытие по кнопке
document.getElementById("modal__close-btn")?.addEventListener("click", () => closeModal("modal"));
document.getElementById("service-modal-close")?.addEventListener("click", () => closeModal("service-modal"));

// Закрытие по нажатию на Esc
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal("modal");
        closeModal("service-modal");
    }
});

// Закрытие при клике вне модального окна
document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", function (event) {
        if (!event.target.closest(".modal__box")) {
            closeModal(this.id);
        }
    });
});

// Обработчики для кнопок услуг
document.querySelectorAll(".service__btn").forEach(button => {
    button.addEventListener("click", function () {
        const serviceName = this.getAttribute("data-service");
        openModal("service-modal", serviceName, null);
    });
});







///////////////////////////////////////////////////////////////////////////////////////////////////




document.addEventListener("DOMContentLoaded", () => {
  // Функция для открытия попапа с полным отзывом
  function openReviewPopup(name, fullText, date) {
    const modal = document.getElementById("reviews-popup");
    const title = modal.querySelector("#reviews-popup-title");
    const text = modal.querySelector("#reviews-popup-text");
    const dateElement = modal.querySelector("#reviews-popup-date");

    title.textContent = name;
    text.textContent = fullText;
    dateElement.textContent = date;

    modal.classList.add("open");
  }

  // Закрытие попапа
  document.querySelector(".reviews-popup__close-btn").addEventListener("click", () => {
    document.getElementById("reviews-popup").classList.remove("open");
  });

  // Проверка длины текста и отображение кнопки "Читать полностью"
  document.querySelectorAll('.reviews-item').forEach(item => {
    const textContainer = item.querySelector('.reviews__text');
    const fullText = textContainer.textContent.trim();
    const readMoreBtn = item.querySelector('.reviews__btn');
    const maxHeight = 150; // Высота, после которой нужно показывать кнопку

    // Если текст больше, чем maxHeight, показываем кнопку "Читать полностью"
    if (textContainer.scrollHeight > maxHeight) {
      readMoreBtn.style.display = 'block';
      textContainer.style.maxHeight = `${maxHeight}px`; // Обрезаем текст
    }

    // Открытие попапа при клике на "Читать полностью"
    readMoreBtn.addEventListener("click", () => {
      const name = item.querySelector('.reviews__name').textContent;
      const date = item.querySelector('.reviews__date').textContent;
      openReviewPopup(name, fullText, date);
    });
  });
});







////////////////////////////////////////









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








