document.addEventListener('DOMContentLoaded', () => {

    // Прелоадер
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
    // кнопка к началу
    document.addEventListener("scroll", function () {
        const kidSection = document.querySelector(".kid");
        const upButton = document.querySelector(".up");

        // координаты kid и up
        let kidRect = kidSection.getBoundingClientRect();
        let upRect = upButton.getBoundingClientRect();

        if (
            upRect.bottom >= kidRect.top &&
            upRect.top <= kidRect.bottom &&
            upRect.right >= kidRect.left &&
            upRect.left <= kidRect.right
        ) {
            upButton.classList.add("up-black");
        } else {
            upButton.classList.remove("up-black");
        }
    });

    // header
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }

        lastScrollTop = scrollTop;
    });

    const burgerCheckbox = document.getElementById('burger');
    const overflow = document.querySelector('.overflow');
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.header');
    const menuLinks = document.querySelectorAll('.menu__item__link');

    // Обработчик события изменения состояния чекбокса бургера
    burgerCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Открываем меню и показываем блюр
            menu.classList.add('open');
            overflow.style.display = 'block';
            header.classList.add('burger-opened');
        } else {
            // Закрываем меню и скрываем блюр
            menu.classList.remove('open');
            overflow.style.display = 'none';
            header.classList.remove('burger-opened');
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerCheckbox.checked = false
            menu.classList.remove('open');
            overflow.style.display = 'none';
            header.classList.remove('burger-opened');
        });
    })

    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelector('.header__btn');
    const modalClose = document.querySelector('.modal__close');

    // открытие модалки по кнопке
    modalBtn.addEventListener('click', () => {
        overflow.style.display = 'block';
        modal.classList.add('opened');
        header.style.display = 'none';
    });

    // закрытие по кнопке
    modalClose.addEventListener('click', () => {
        overflow.style.display = 'none';
        modal.classList.remove('opened');
        header.style.display = 'block';
    });

    // закрытие по клику вне модалки
    overflow.addEventListener('click', () => {
        modal.classList.remove('opened');
        overflow.style.display = 'none';
        header.style.display = 'block';
        menu.classList.remove('open');
        header.classList.remove('burger-opened');
        burgerCheckbox.checked = false;
    });
});