const modeToggle = document.querySelector(".mode-toggle");
const menuArrow = document.querySelector(".submenu");
const toggleMobileNav = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".nav-large");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const html = document.querySelector("html");
const blackBG = document.querySelector(".hide-mobile-menu");

// navbar shadow on scorll
window.addEventListener("scroll", () => {
  let width = document.body.clientWidth;
  // header Drop down
  if (window.scrollY > 20) {
    nav.classList.add("nav-drop-shadow");
    // if (width > 768) {
    //   nav.style.paddingTop = "0";
    // }
  } else {
    nav.classList.remove("nav-drop-shadow");
    // if (width > 768) {
    //   nav.style.paddingTop = "0.5rem";
    // }
  }
});

// Toggle Submenu
const submenu = (ele) => {
  const parent = ele.parentElement.parentElement;
  console.log(parent);
  const svg = parent.querySelector(".arrow-svg");
  const submenu = parent.querySelector(".submenu");
  submenu.classList.toggle("toggle-height");
  svg.classList.toggle("rotate-svg");
};

// Change language
let width = document.body.clientWidth;
if (width < 768) {
  const options = [...document.querySelectorAll("option")];
  const lang = ["sw", "de", "en"];
  options.map((option, index) => {
    option.innerText = lang[index];
  });
}
// Toggle Hamburger
const hamburger = () => {
  toggleMobileNav.classList.toggle("toggle-mobile-menu");
  html.classList.toggle("hidden-overflow");
  blackBG.classList.toggle("toggle");
};

// Save darkmode Info
let mode = localStorage.getItem("isDarkMode");

const dark = () => {
  mode = "true";
  document.body.classList.add("dark-mode");
  moon.classList.add("hide");
  sun.classList.remove("hide");
  localStorage.setItem("isDarkMode", mode);
};
const light = () => {
  mode = "false";
  document.body.classList.remove("dark-mode");
  moon.classList.remove("hide");
  sun.classList.add("hide");
  localStorage.setItem("isDarkMode", mode);
};

if (mode === null || mode === "false") {
  mode = "false";
  light();
} else {
  mode = "true";
  dark();
}

// Mode toggle
modeToggle.addEventListener("click", () => {
  if (mode === "false") {
    dark();
  } else if (mode === "true") {
    light();
  }
});
