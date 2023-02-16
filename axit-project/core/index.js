const sidebar = document.querySelector(".sidebar");
const menuBurger = document.querySelector(".menu__burger");
const sidebarBtn = document.getElementById("sidebar__nav");

const onBorgerClick = (e) => {
    sidebar.classList.toggle("sidebar_active");
    menuBurger.classList.toggle("menu__burger_active");
}

sidebarBtn.addEventListener('click', e => {
    onBorgerClick();
})




