export function clearMessagesStorage() {
  const buttonClear = document.getElementById('clearMessages');
  buttonClear.addEventListener('click', () => {
    console.log('clicked');
  })
}