///////маска 

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99', {
  showMaskOnHover: false
});
im.mask(inputs);

// меню появление

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu__btn");
  const menu = document.querySelector(".menu");

  menuBtn.addEventListener("click", (event) => {
    // Переключаем класс active на кнопке и в меню
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active"); // Убираем активный класс с кнопки
    }
  });
});




/////??///////////?//?//?/?//////?///////
function openModal(modalId, { titleText = null, buttonText = null, content = {} } = {}) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const title = modal.querySelector(".form-base__title");
  const submitButton = modal.querySelector(".form-base__btn");

  if (title && titleText) title.textContent = titleText;
  if (submitButton && buttonText) submitButton.textContent = buttonText;

  Object.entries(content).forEach(([selector, value]) => {
    const element = modal.querySelector(selector);
    if (element) element.textContent = value;
  });

  modal.classList.add("open");
  document.addEventListener("keydown", closeOnEscape);
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
  }

  if (!document.querySelector(".modal.open") && !document.getElementById("reviews-popup").classList.contains("open")) {
    document.removeEventListener("keydown", closeOnEscape);
  }
}

function closeOnEscape(event) {
  if (event.key === "Escape") {
    const openModal = document.querySelector(".modal.open") || document.getElementById("reviews-popup");
    if (openModal && openModal.classList.contains("open")) {
      closeModal(openModal.id);
    }
  }
}

document.body.addEventListener("click", (event) => {
  const button = event.target.closest(".button--help, .button--call, .service__btn, .reviews__btn");
  if (!button) return;

  if (button.classList.contains("button--help")) {
    openModal("modal", { titleText: "Получить помощь", buttonText: "Отправить" });
  } else if (button.classList.contains("button--call")) {
    openModal("modal", { titleText: "Заказать звонок", buttonText: "Получить консультацию" });
  } else if (button.classList.contains("service__btn")) {
    openModal("service-modal", { titleText: button.getAttribute("data-service") });
  } else if (button.classList.contains("reviews__btn")) {
    const item = button.closest(".reviews-item");
    openModal("reviews-popup", {
      content: {
        "#reviews-popup-title": item.querySelector(".reviews__name").textContent,
        "#reviews-popup-text": item.querySelector(".reviews__text").textContent.trim(),
        "#reviews-popup-date": item.querySelector(".reviews__date").textContent
      }
    });
  }
});

document.body.addEventListener("click", (event) => {
  if (event.target.closest(".modal__close-btn") || event.target.closest(".reviews-popup__close-btn")) {
    closeModal(event.target.closest(".modal, .reviews-popup").id);
  }
});

document.body.addEventListener("click", (event) => {
  const modal = event.target.closest(".modal, .reviews-popup");
  if (modal && !event.target.closest(".modal__box, .reviews-popup__box")) {
    closeModal(modal.id);
  }
});

document.querySelectorAll(".reviews-item").forEach(item => {
  const textContainer = item.querySelector(".reviews__text");
  const fullText = textContainer.textContent.trim();
  const readMoreBtn = item.querySelector(".reviews__btn");
  const maxHeight = 150;

  if (textContainer.scrollHeight > maxHeight) {
    readMoreBtn.style.visibility = "visible";
    textContainer.style.maxHeight = `${maxHeight}px`;

    readMoreBtn.addEventListener("click", () => {
      openModal("reviews-popup", {
        content: {
          "#reviews-popup-title": item.querySelector(".reviews__name").textContent,
          "#reviews-popup-text": fullText,
          "#reviews-popup-date": item.querySelector(".reviews__date").textContent
        }
      });
    });
  }
});

document.getElementById("reviews-popup").addEventListener("click", (event) => {
  if (!event.target.closest(".reviews-popup__box") || event.target.closest(".reviews-popup__close-btn")) {
    closeModal("reviews-popup");
  }
});









///////////////////////////////////////////////////////////////////////////////////////////////////

//маска на телефон









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








