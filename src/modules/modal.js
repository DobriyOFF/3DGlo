import {
    animate,
} from "./helper";
const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector(".popup-content");
    const buttons = document.querySelectorAll('.popup-btn');
    let startPosition = -50; // начальное положение модального-окна
    let stopPosition = 10;


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
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
        }
    })
}

export default modal;