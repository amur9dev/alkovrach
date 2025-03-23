// обработчик событий для меню
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu__link");
  const menuBtn = document.querySelector(".menu__btn");
  const menu = document.querySelector(".menu");
  const header = document.querySelector(".header");
  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay);

  // переход к нужной секции
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 150,
          behavior: "smooth"
        });
      }

      // закрытие меню при переходе к секции
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      header.classList.remove("menu-open");
      document.body.classList.remove("no-scroll");
      overlay.classList.remove("active");
    });
  });

  // открытие/закрытие меню
  menuBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
    header.classList.toggle("menu-open");
    overlay.classList.toggle("active");

    if (menu.classList.contains("active")) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      header.classList.remove("menu-open");
      document.body.classList.remove("no-scroll");
      overlay.classList.remove("active");
    }
  });
});

// маска для ввода номера телефона
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99', {
  showMaskOnHover: false
});
im.mask(inputs);

// модальное окно
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

// about слайдер
document.addEventListener("DOMContentLoaded", function () {
  // основной слайдер
  const aboutSwiper = new Swiper(".about__slider", {
    loop: true,
    loopAdditionalSlides: 3,
    slidesPerView: 1,
    navigation: {
      nextEl: ".about__slider-next",
      prevEl: ".about__slider-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1.5, spaceBetween: 5 },
      768: { slidesPerView: 1.5, spaceBetween: 15 },
      993: { slidesPerView: 1 },
    },
  });

  // слайдер документы
  let swiperDocuments;
  function initDocumentsSwiper() {
    if (!swiperDocuments) {
      swiperDocuments = new Swiper(".about__documents-inner", {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
          nextEl: ".documents-slider-next",
          prevEl: ".documents-slider-prev",
        },
        breakpoints: {
          1200: { slidesPerView: 4, slidesPerGroup: 1, },
          768: { slidesPerView: 3.5, slidesPerGroup: 1, },
          480: { slidesPerView: 2.5, slidesPerGroup: 1, },
          0: { slidesPerView: 1.5, slidesPerGroup: 1, },
        },
      });
    }
  }

  // fancybox документы
  Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: true,
    loop: true,
    zoom: true,
    keyboard: true,
    arrows: true,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
    on: {
      init: () => {
        setTimeout(() => {
          if (swiperDocuments) swiperDocuments.update();
        }, 100);
      },
    },
  });

  initDocumentsSwiper();
});

// слайдер personal
const photoSlider = new Swiper('.personal__photo', {
  slidesPerView: 2.5,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  speed: 500,
  spaceBetween: 20,
  navigation: {
    nextEl: '.personal__next',
    prevEl: '.personal__prev',
  },
  breakpoints: {
    992: { slidesPerView: 2.5, spaceBetween: 20 },
    768: { slidesPerView: 3.5, spaceBetween: 15 },
    450: { slidesPerView: 2.5, spaceBetween: 10 },
    320: { slidesPerView: 1.5, spaceBetween: 10 },
    0: { slidesPerView: 1, spaceBetween: 10 }
  }
});

const infoSlider = new Swiper('.personal__info', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  effect: 'slide',
  fadeEffect: { crossFade: true },
  speed: 500,
  allowTouchMove: false,
});

photoSlider.on('slideChange', () => {
  infoSlider.slideTo(photoSlider.realIndex);
});

// вопросы
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

// отзывы
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".reviews__inner", {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
    breakpoints: {
      992: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    }
  });
});

// контейнер для персонала после 992px
const personalInner = document.querySelector('.personal__inner');
function updateClass() {
  personalInner.classList.toggle('personal-container', window.innerWidth < 992);
}
window.addEventListener('resize', updateClass);
updateClass();
