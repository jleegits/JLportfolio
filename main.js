// navbar fade in&out on scroll
const header = document.querySelector(".header");

window.onscroll = function () {
  var top = window.scrollY;
  // console.log(top);
  if (top >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// About Content Toggler

const aboutSkills = document.querySelector(".skills-info");
const aboutHistory = document.querySelector(".history-info");
const aboutLinks = document.querySelector(".links-info");
const aboutStory = document.querySelector(".story-info");

const navSkills = document.querySelector(".about-skill");
const navHistory = document.querySelector(".about-history");
const navLinks = document.querySelector(".about-link");
const navStory = document.querySelector(".about-story");

navSkills.addEventListener("click", (e) => {
  e.preventDefault();
  navSkills.classList.add("about-active");
  navHistory.classList.remove("about-active");
  navLinks.classList.remove("about-active");
  navStory.classList.remove("about-active");

  aboutSkills.classList.remove("about-close");
  aboutHistory.classList.add("about-close");
  aboutLinks.classList.add("about-close");
  aboutStory.classList.add("about-close");
});

navHistory.addEventListener("click", (e) => {
  e.preventDefault();
  navSkills.classList.remove("about-active");
  navHistory.classList.add("about-active");
  navLinks.classList.remove("about-active");
  navStory.classList.remove("about-active");

  aboutHistory.classList.remove("hidden");
  aboutSkills.classList.add("about-close");
  aboutHistory.classList.remove("about-close");
  aboutLinks.classList.add("about-close");
  aboutStory.classList.add("about-close");
});

navLinks.addEventListener("click", (e) => {
  e.preventDefault();
  navSkills.classList.remove("about-active");
  navHistory.classList.remove("about-active");
  navLinks.classList.add("about-active");
  navStory.classList.remove("about-active");

  aboutLinks.classList.remove("hidden");
  aboutSkills.classList.add("about-close");
  aboutHistory.classList.add("about-close");
  aboutLinks.classList.remove("about-close");
  aboutStory.classList.add("about-close");
});

navStory.addEventListener("click", (e) => {
  e.preventDefault();
  navSkills.classList.remove("about-active");
  navHistory.classList.remove("about-active");
  navLinks.classList.remove("about-active");
  navStory.classList.add("about-active");

  aboutStory.classList.remove("hidden");
  aboutSkills.classList.add("about-close");
  aboutHistory.classList.add("about-close");
  aboutLinks.classList.add("about-close");
  aboutStory.classList.remove("about-close");
});

// UI SLIDER ------

let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");
let disableScroll = false;
var scrollAmount = 0;

buttonLeft.onclick = function () {
  slider.scrollTo({
    top: 0,
    left: Math.max((scrollAmount -= 250)),
    behavior: "smooth"
  });
};

buttonRight.onclick = function () {
  slider.scrollTo({
    top: 0,
    left: Math.min((scrollAmount += 250)),
    behavior: "smooth"
  });
};
