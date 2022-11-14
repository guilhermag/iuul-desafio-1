// Funcao principal de transicao das secoes
function pageTransition() {
  // Botao clicado coloca a classe .active-btn
  buttonActiveClass();

  // Secao ativa classe .active
  sectionActiveClass()
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
  // const sectionButtons = document.querySelectorAll('.list-icons');
  const allsections = document.querySelector('.main-content');
  const sections = document.querySelectorAll('.section');

  allsections.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    if (id) {
      removeActiveClass(sections);
      addActiveClass(id);
    }
  })
}


//Helpers
function removeActiveClass(sections) {
  sections.forEach((section) => {
    section.classList.remove('active');
  });
}

function addActiveClass(id) {
  const element = document.getElementById(id);
  element.classList.add('active');
}


pageTransition();