function toggleText() {
 let button = document.querySelector('.toggle-text-button');
 let hide = document.getElementById('text');
 button.addEventListener('click', function () { hide.hidden = !hide.hidden; });
 }
