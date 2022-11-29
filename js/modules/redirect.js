const buttonRedirect = document.getElementById('buttonRedirect');
const section = buttonRedirect.dataset.section;
buttonRedirect.addEventListener('click', () => {
  window.localStorage.setItem('redirect', 'true');
  window.localStorage.setItem('section', `${section}`);
})