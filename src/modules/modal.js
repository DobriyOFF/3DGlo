import {
    animate,
} from "./helper";
const modal = () => {
    const btnScroll = document.getElementById('btn-scroll')
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector(".popup-content");
    const buttons = document.querySelectorAll('.popup-btn');
    let startPosition = -50; // начальное положение модального-окна
    let stopPosition = 10;


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            modal.style.color = 'white'
            if (window.outerWidth > 768) {
                animate({
                    duration: 400,
                    timing: (timeFraction) => timeFraction,
                    draw(progress) {
                        modalContent.style.top = startPosition + Math.round((stopPosition - startPosition) * progress)
                    },
                });
            }
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
            document.body.style.overflow = '' // отмена прокрутки
        }
    })
}

export default modal;