const sidebar = document.querySelector(".sidebar");
const menuClose = document.querySelector(".menu__close");
const menuBurger = document.querySelector(".menu__burger");

const onBorgerClick = (e) => {
    menuClose.classList.toggle("menu__close_active");
    sidebar.classList.toggle("sidebar_active");
    menuBurger.classList.remove("menu__burger_active");

}
const onCrossClick = () => {
    menuClose.classList.remove("menu__close_active");
    menuBurger.classList.toggle("menu__burger_active");
    sidebar.classList.remove("sidebar_active");
}




   