"use strict";
const getStoredTheme = () => localStorage.getItem("theme");
const getBrowserTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getTheme = () => {
  return getStoredTheme() || getBrowserTheme();
};

const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
  if (
    theme === "auto" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }

  const currentIcon = document.querySelector(`[data-bs-theme-value=${theme}]`);

  if (currentIcon) {
    const dropdownButton = document.querySelector(`[data-bs-theme-current]`);
    while (dropdownButton.lastElementChild) {
      dropdownButton.removeChild(dropdownButton.lastElementChild);
    }
    dropdownButton.appendChild(currentIcon.firstElementChild.cloneNode(true));
  }

  // document.documentElement.setAttribute("data-bs-theme", getTheme());
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    setTheme(getTheme());
  });

window.addEventListener("DOMContentLoaded", () => {
  setTheme(getTheme());

  document.querySelectorAll("[data-bs-theme-value]").forEach((themeButton) => {
    const theme = themeButton.getAttribute("data-bs-theme-value");
    themeButton.addEventListener("click", (event) => {
      setTheme(theme);

      // const theme = themeButton.getAttribute("data-bs-theme-value");
    });
  });
});
