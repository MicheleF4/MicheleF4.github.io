"use strict";

const mobileMenu = document.querySelector(".mobile-navigation__nav");
const menuButton = document.querySelector(".mobile-navigation__button");
const outsideMenu = document.querySelector(".mobile-navigation__overlay");

let menuOpened = false;

mobileMenu.addEventListener("click", function () {
  {
    if (menuOpened === false) {
      mobileMenu.classList.add("openMenu-vertical");
      outsideMenu.classList.remove("hidden");
      menuOpened = true;
      console.log(`Menu is Opened`, menuOpened);
    } else if (menuOpened === true) {
      mobileMenu.classList.remove("openMenu-vertical");
      mobileMenu.classList.remove("openMenu-horizontal");
      outsideMenu.classList.add("hidden");
      menuOpened = false;
      console.log(`Menu is Closed`, menuOpened);
    }
  }
});

outsideMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("openMenu-vertical");
  mobileMenu.classList.remove("openMenu-horizontal");

  outsideMenu.classList.add("hidden");
  menuOpened = false;
  console.log(`Menu is Closed`, menuOpened);
});

menuButton.addEventListener("click", function () {
  {
    if (menuOpened === false) {
      mobileMenu.classList.add("openMenu-horizontal");
      outsideMenu.classList.remove("hidden");
      menuOpened = true;
      console.log(`Menu is Opened`, menuOpened);
    } else if (menuOpened === true) {
      mobileMenu.classList.remove("openMenu-horizontal");
      outsideMenu.classList.add("hidden");
      menuOpened = false;
      console.log(`Menu is Closed`, menuOpened);
    }
  }
});
