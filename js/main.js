const body = document.querySelector("body");
const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  console.log("clicked");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  menuBtn.querySelector("img").src = menu.classList.contains("hidden")
    ? "./img/icon-hamburger.svg"
    : "./img/icon-close.svg";
    body.classList.toggle("fixed");
});
