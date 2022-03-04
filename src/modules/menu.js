import smoothScroll from "./smoothScroll";
const menu = () => {
    const menuContent = document.querySelector('menu');

    const toggleMenu = (e) => {
        if (e.target.closest(".menu") || e.target.closest("menu")) {
            e.preventDefault();
            if (e.target.matches("ul>li>a")) {
                smoothScroll(e.target);
            } else if (!e.target.classList.contains("close-btn") && e.target.closest("menu")) {
                return;
            }
        } else if (!menuContent.classList.contains("active-menu")) {
            return;
        }
        menuContent.classList.toggle("active-menu");
    };
    document.addEventListener("click", (e) => toggleMenu(e));
}

export default menu;