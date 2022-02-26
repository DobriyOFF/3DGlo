import smoothScroll from "./smoothScroll";

//Плавный скролл
const serviceScroll = () => {
    const serviceBtn = document.querySelector(`a[href="#service-block"]`);
    serviceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(e.target);
    });
};

export default serviceScroll;