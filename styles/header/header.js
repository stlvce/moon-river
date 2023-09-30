const buttonMenu = document.querySelector(".nav-menu");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");

// const menuTab = document.querySelector(".menu-tab");
const menuContainerTabs = document.querySelector(".menu-header");

buttonMenu.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    buttonMenu.classList.remove("close");
    logo.classList.remove("active");
    return menu.classList.remove("show");
  }
  buttonMenu.classList.add("close");
  logo.classList.add("active");
  menu.classList.add("show");
});

menuContainerTabs.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("menu-tab-active") || target.tagName === "UL") {
    return;
  }
  for (let item of menuContainerTabs.children) {
    item.children[0].classList.remove("menu-tab-active");
  }
  target.classList.add("menu-tab-active");
});
