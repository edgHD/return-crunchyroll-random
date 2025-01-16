// Start logging
console.log("Crunchyroll Random Button script started...");

// Destructure location object for URL parsing
const { hostname, pathname } = window.location;

// Language mapping object with translations for "Random" button
const langMap = {
  ar: "عشوائي",
  de: "Zufällig",
  es: "Aleatorio",
  "es-es": "Aleatorio",
  fr: "Aléatoire",
  it: "Casuale",
  "pt-br": "Aleatório",
  "pt-pt": "Aleatório",
  ru: "Случайная",
  hi: "रैंडम",
};

// Only execute if on Crunchyroll domain
if (hostname.includes("crunchyroll.com")) {
  // Get language and button title based on URL path
  const lang = Object.keys(langMap).find((key) =>
    pathname.startsWith(`/${key}`)
  );
  const titleButton = lang ? langMap[lang] : "Random";
  const langPath = lang ? `/${lang}` : "";

  // SVG dice icon template
  const svgDice = `<svg class="header-svg-icon" xmlns="http://www.w3.org/2000/svg" id="cr_random" width="24" height="24" viewBox="0 0 48 48">
    <title id="random-svg">${titleButton}</title>
    <path d="M40,12.3C40,9.9,38.1,8,35.7,8H12.3C9.9,8,8,9.9,8,12.3v23.5c0,2.4,1.9,4.3,4.3,4.3h23.5c2.4,0,4.3-1.9,4.3-4.3V12.3zM16.3,19.7c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S18.4,19.7,16.3,19.7z M32.2,35.6c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S34.3,35.6,32.2,35.6z" />
  </svg>`;

  // Button templates for different UI versions
  const buttonHtml = (isGames) =>
    `<a ${
      !isGames
        ? 'tabindex="0" class="erc-header-tile state-icon-only erc-random-header-button" data-t="header-tile"'
        : ""
    } href="${langPath}/random/anime?random_ref=topbar"><div class="${
      isGames ? "header-svg" : "erc-header-svg"
    }">${svgDice}</div></a>`;

  // Simplified element waiting function
  const waitForElement = (selectors, callback, attempts = 0) => {
    const element = selectors
      .split(",")
      .map((s) => document.querySelector(s.trim()))
      .find(Boolean);
    if (element) {
      callback(element);
    } else if (attempts < 10) {
      setTimeout(() => waitForElement(selectors, callback, attempts + 1), 500);
    }
  };

  // Insert random button into UI
  waitForElement("ul.erc-user-actions, ul.css-mnxmgs.e1dmmmu80", (ul) => {
    if (!document.querySelector("li.random-wrapper")) {
      const newLi = document.createElement("li");
      const isGames = ul.classList.contains("css-mnxmgs");
      newLi.className = `${isGames ? "" : "user-actions-item "}random-wrapper`;
      newLi.innerHTML = buttonHtml(isGames);
      ul.insertBefore(newLi, ul.lastElementChild);
      console.log("Random button inserted successfully");
    }
  });
}

console.log("Crunchyroll Random Button script loaded ✔");