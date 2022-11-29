export function pageTransition() {
  // Botao clicado coloca a classe .active-btn
  buttonActiveClass();

  // Secao ativa classe .active
  sectionActiveClass();

  checkRedirect();
};

function buttonActiveClass() {
  const sectionButton = document.querySelectorAll('.list-icons__icon');
  sectionButton.forEach((button) => {
    button.addEventListener('click', function () {
      let currentButton = document.querySelectorAll('.active-btn');
      currentButton[0].className = currentButton[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  })
}

function sectionActiveClass() {
  const allsections = document.querySelector('.main-content');
  const sections = document.querySelectorAll('.section');

  allsections.addEventListener('click', (event) => {
    const id = event.target.dataset.id;

    if (id) {
      const footer = document.getElementById('footer');
      if (id === 'contact') {
        footer.classList.add('remove-footer');
      } else {
        footer.classList.remove('remove-footer');
      }
      removeActiveClass(sections);
      addActiveClass(id);
    }
  })
}

function checkRedirect() {
  const redirect = window.localStorage.getItem('redirect');
  const buttonHome = document.getElementById('button-home');

  if (redirect === 'true') {
    window.localStorage.removeItem('redirect');
    const sections = document.querySelectorAll('.section');
    removeActiveClass(sections);
    addActiveClass('portfolio')

    const buttonPortfolio = document.getElementById('button-portfolio');
    buttonHome.className.replace('active-btn', '');
    buttonPortfolio.className += ' active-btn';
  } else {
    buttonHome.className += ' active-btn';
  }
}

// Funcoes auxiliares para deixar o codigo mais limpo

function removeActiveClass(sections) {
  sections.forEach((section) => {
    section.classList.remove('active');
  });
}

function addActiveClass(id) {
  const element = document.getElementById(id);
  element.classList.add('active');
}