"use strict";
const addEventOnElements = function (e, t, n) {
    for (let o = 0, l = e.length; o < l; o++) e[o].addEventListener(t, n);
  },
  navbar = document.querySelector("[data-navbar]"),
  navToggler = document.querySelector("[data-nav-toggler]"),
  navLinks = document.querySelectorAll("[data-nav-link]"),
  toggleNav = function () {
    navbar.classList.toggle("active"), this.classList.toggle("active");
  };
navToggler.addEventListener("click", toggleNav);
const navClose = () => {
  navbar.classList.remove("active"), navToggler.classList.remove("active");
};
addEventOnElements(navLinks, "click", navClose);
const header = document.querySelector("[data-header]"),
  backTopBtn = document.querySelector("[data-back-top-btn]"),
  activeEl = function () {
    window.scrollY > 100
      ? (header.classList.add("active"), backTopBtn.classList.add("active"))
      : (header.classList.remove("active"),
        backTopBtn.classList.remove("active"));
  };
window.addEventListener("scroll", activeEl);
const buttons = document.querySelectorAll("[data-btn]"),
  buttonHoverRipple = function (e) {
    this.style.setProperty("--top", `${e.offsetY}px`),
      this.style.setProperty("--left", `${e.offsetX}px`);
  };
addEventOnElements(buttons, "mousemove", buttonHoverRipple);
const revealElements = document.querySelectorAll("[data-reveal]"),
  revealElementOnScroll = function () {
    for (let e = 0, t = revealElements.length; e < t; e++) {
      revealElements[e].getBoundingClientRect().top <
        window.innerHeight / 1.1 && revealElements[e].classList.add("revealed");
    }
  };
window.addEventListener("scroll", revealElementOnScroll),
  window.addEventListener("load", revealElementOnScroll);
const cursor = document.querySelector("[data-cursor]"),
  hoverElements = [
    ...document.querySelectorAll("a"),
    ...document.querySelectorAll("button"),
  ],
  cursorMove = function (e) {
    (cursor.style.top = `${e.clientY}px`),
      (cursor.style.left = `${e.clientX}px`);
  };
window.addEventListener("mousemove", cursorMove),
  addEventOnElements(hoverElements, "mouseover", function () {
    cursor.classList.add("hovered");
  }),
  addEventOnElements(hoverElements, "mouseout", function () {
    cursor.classList.remove("hovered");
  });
