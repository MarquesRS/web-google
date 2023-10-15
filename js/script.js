document.getElementById('btn-search').addEventListener('click', () => {
  window.location.href = "https://www.google.com/search?q=" + document.getElementById('search-input').value.replace(/\s+/g, '+');
});

document.getElementById('btn-luck').addEventListener('click', () => {
  window.location.href = "https://www.google.com/search?q=" + + document.getElementById('search-input').value.replace(/\s+/g, '+'); + "&btnI";
});

function Pesquisar(event) {
  if (event.key === "Enter") {
    window.location.href = "https://www.google.com/search?q=" + document.getElementById('search-input').value.replace(/\s+/g, '+');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-id").addEventListener("click", (event) => event.preventDefault());
});

document.getElementById('search-input').addEventListener('click', (e) => {
  e.target.style.backgroundColor = '#fff';
  e.target.style.borderColor = '#DFE1E5';
});

document.getElementById('search-input').addEventListener('blur', (e) => {
  e.target.style.backgroundColor = '#fff';
  e.target.style.borderColor = '#DFE1E5';
});

/* On button click remove dark.js */
let scriptLoaded = false;
function toggleScript() {
    if (scriptLoaded) {
        const scriptElement = document.getElementById('texteScript');
        if (scriptElement) {
            scriptElement.parentNode.removeChild(scriptElement);
        }
        scriptLoaded = false;
    } else {
        const script = document.createElement('script');
        script.src = 'dark.js';
        script.id = 'texteScript';
        document.getElementById('scriptContainer').appendChild(script);
        scriptLoaded = true;
    }
}
toggleScript(); /* Habilitado por padrão */

document.getElementById('toggleScriptButton').addEventListener('click', toggleScript);

/* On button click disable dark.css */
function disableCSS() {
  const stylesheets = document.styleSheets;
  for (let i = 0; i < stylesheets.length; i++) {
      const stylesheet = stylesheets[i];
      if (stylesheet.href && stylesheet.href.endsWith('dark.css')) {
          for (let j = 0; j < stylesheet.cssRules.length; j++) {
              stylesheet.cssRules[j].disabled = true;
          }
      }
  }
}
