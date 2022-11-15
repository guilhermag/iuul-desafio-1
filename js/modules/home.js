export function changeOcupation() {
  const text = document.getElementById('ocupation');

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = 'Desenvolvedor Web.'
    }, 0);
    setTimeout(() => {
      text.textContent = 'Gamer Oldschool.'
    }, 4000);
    setTimeout(() => {
      text.textContent = 'Pai de cachorro.'
    }, 8000);
  }

  textLoad()
  setInterval(textLoad, 12000)
}