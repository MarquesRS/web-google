/* DARK */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-id").addEventListener("click", (event) => event.preventDefault());
});

document.getElementById('search-input').addEventListener('click', (e) => {
    e.target.style.backgroundColor = '#303134';
    e.target.style.borderColor = '#303134';
});

document.getElementById('search-input').addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '#202124';
    e.target.style.borderColor = '#5F6368';
});
