(() => {
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
    console.log(currentIcon);

    if (currentIcon) {
      const dropdownButton = document.querySelector(`[data-bs-theme-current]`);
      while(dropdownButton.lastElementChild) {
        dropdownButton.removeChild(dropdownButton.lastElementChild)
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

    document
      .querySelectorAll("[data-bs-theme-value]")
      .forEach((themeButton) => {
        const theme = themeButton.getAttribute("data-bs-theme-value");
        themeButton.addEventListener("click", (event) => {
          setTheme(theme);

          // const theme = themeButton.getAttribute("data-bs-theme-value");
        });
      });
  });

  // const storedTheme = localStorage.getItem('theme')

  // const getPreferredTheme = () => {
  //   if (storedTheme) {
  //     return storedTheme
  //   }

  //   return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  // }

  // const setTheme = function (theme) {
  //   if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //     document.documentElement.setAttribute('data-bs-theme', 'dark')
  //   } else {
  //     document.documentElement.setAttribute('data-bs-theme', theme)
  //   }
  // }

  // setTheme(getPreferredTheme())

  // const showActiveTheme = theme => {
  //   // const activeThemeIcon = document.querySelector('.theme-icon-active use')
  //   const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
  //   // const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

  //   document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
  //     element.classList.remove('active')
  //   })

  //   btnToActive.classList.add('active')
  //   activeThemeIcon.setAttribute('href', svgOfActiveBtn)
  // }

  // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  //   if (storedTheme !== 'light' || storedTheme !== 'dark') {
  //     setTheme(getPreferredTheme())
  //   }
  // })

  // window.addEventListener('DOMContentLoaded', () => {
  //   showActiveTheme(getPreferredTheme())

  //   document.querySelectorAll('[data-bs-theme-value]')
  //     .forEach(toggle => {
  //       toggle.addEventListener('click', () => {
  //         const theme = toggle.getAttribute('data-bs-theme-value')
  //         localStorage.setItem('theme', theme)
  //         setTheme(theme)
  //         showActiveTheme(theme)
  //       })
  //     })
  // })
})();
