console.log("Crunchyroll Random Button script started...");
const hostname = window.location.hostname;
const path = window.location.pathname;

const additionalLang = ['ar', 'de', 'es', 'es-es', 'fr', 'it', 'pt-br', 'pt-pt', 'ru', 'hi'];
let lang;
const titlesButton = ['Random', 'عشوائي', 'Zufällig', 'Aleatorio', 'Aléatoire', 'Aleatório', 'Случайная'];
let titleButton;
let codeButton;

if (hostname.indexOf('crunchyroll.com') !== -1) {
	if ((path.startsWith('/' + additionalLang[0] + '/')) || (path.startsWith('/' + additionalLang[0]))) {
	  lang = '/' + additionalLang[0];
	  titleButton = titlesButton[1];
	} else if ((path.startsWith('/' + additionalLang[1] + '/')) || (path.startsWith('/' + additionalLang[1]))) {
	  lang = '/' + additionalLang[1];
	  titleButton = titlesButton[2];
	} else if ((path.startsWith('/' + additionalLang[2] + '/')) || (path.startsWith('/' + additionalLang[2]))) {
	  lang = '/' + additionalLang[2];
	  titleButton = titlesButton[3];
	} else if ((path.startsWith('/' + additionalLang[3] + '/')) || (path.startsWith('/' + additionalLang[3]))) {
	  lang = '/' + additionalLang[3];
	  titleButton = titlesButton[3];
	} else if ((path.startsWith('/' + additionalLang[4] + '/')) || (path.startsWith('/' + additionalLang[4]))) {
	  lang = '/' + additionalLang[4];
	  titleButton = titlesButton[4];
	} else if ((path.startsWith('/' + additionalLang[5] + '/')) || (path.startsWith('/' + additionalLang[5]))) {
	  lang = '/' + additionalLang[5];
	  titleButton = titlesButton[0];
	} else if ((path.startsWith('/' + additionalLang[6] + '/')) || (path.startsWith('/' + additionalLang[6]))) {
	  lang = '/' + additionalLang[6];
	  titleButton = titlesButton[5];
	} else if ((path.startsWith('/' + additionalLang[7] + '/')) || (path.startsWith('/' + additionalLang[7]))) {
	  lang = '/' + additionalLang[7];
	  titleButton = titlesButton[5];
	} else if ((path.startsWith('/' + additionalLang[8] + '/')) || (path.startsWith('/' + additionalLang[8]))) {
	  lang = '/' + additionalLang[8];
	  titleButton = titlesButton[6];
	} else if ((path.startsWith('/' + additionalLang[9] + '/')) || (path.startsWith('/' + additionalLang[9]))) {
	  lang = '/' + additionalLang[9];
	  titleButton = titlesButton[0];
	} else {
	  lang = '';
	  titleButton = titlesButton[0];
	}

	codeButton = '<a tabindex="0" class="erc-header-tile state-icon-only erc-random-header-button" data-t="header-tile" href="' + lang + '/random/anime?random_ref=topbar"><div class="erc-header-svg"><svg class="header-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="random-svg" aria-labelledby="random-svg" aria-hidden="false" role="img"><title id="random-svg">' + titleButton + '</title><use xlink:href="/i/svg/header.svg#cr_random"></use></svg></div></a>';

	window.addEventListener('load', (event) => {
	  if (!document.querySelector('li.random-wrapper')) {
		const ulBttns = document.querySelector('ul.erc-user-actions');
		const diceButton = document.createElement('li');
		const insertIndex = ulBttns.children.length - 1;
		diceButton.classList.add('user-actions-item', 'random-wrapper');
		diceButton.innerHTML = codeButton;
		ulBttns.insertBefore(diceButton, ulBttns.children[insertIndex]);
	  }
	});
};
console.log("Crunchyroll Random Button script loaded ✔");