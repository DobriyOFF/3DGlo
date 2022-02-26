const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = modal.querySelector(".popup-content");
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    const modalAnimation = function () {
        let num = -50; // начальное положение модального-окна

        const step = function () {
            num += 5;
            if (num <= 30) {
                requestAnimationFrame(step); // плавная анимация
                modalContent.style.left = `${num}%`;
            } else {
                modalContent.style.left = "";
            }
        };
        step();
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (window.outerWidth > 768) {
                modalAnimation();
            }
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })
}

export default modal;