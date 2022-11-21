export function changeOcupation() {
  const text = document.getElementById('ocupation');

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = 'Desenvolvedor Web.'
    }, 0);
    setTimeout(() => {
      text.textContent = 'Pai de catioros.'
    }, 4000);
    setTimeout(() => {
      text.textContent = 'Paladino no D&D.'
    }, 8000);
  }

  textLoad()
  setInterval(textLoad, 12000)
}