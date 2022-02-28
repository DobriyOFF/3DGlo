import smoothScroll from "./smoothScroll";
const menu = () => {
    const menuContent = document.querySelector('menu');

    const toggleMenu = (e) => {
        // console.log(e.target.matches("menu ul>li>a"))
        if (e.target.matches("menu ul>li>a")) {
            e.preventDefault();
            smoothScroll(e.target);
        } else if (e.target.classList.contains("close-btn") || !e.target.closest('.active-menu')) {
            e.preventDefault();
        } else {
            return;
        }
        menuContent.classList.toggle("active-menu");
    }
    document.addEventListener("click", (e) => toggleMenu(e));
}

export default menu;