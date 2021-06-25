"use strict";

const links = document.querySelectorAll(".tabheader__item");
const tabContents = document.querySelectorAll(".tabcontent");

function updateTab() {
  tabContents.forEach((tab) => {
    tab.style.display = "none";
  });
  links.forEach((link) => link.classList.remove("tabheader__item_active"));
}

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    updateTab();
    link.classList.add("tabheader__item_active");
    tabContents[index].style.display = "block";
  });
});

window.addEventListener("load", () => {
  updateTab();
  tabContents[0].style.display = "block";
  links[0].classList.add("tabheader__item_active");
});
