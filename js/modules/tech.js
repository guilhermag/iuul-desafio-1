const buttonRedirect = document.getElementById('button-git');
buttonRedirect.addEventListener('click', () => {
  window.localStorage.setItem('redirect', 'true');
})