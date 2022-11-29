export function formFunction() {
  const form = document.getElementById('submitForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formList = getMessageList();
    const formObject = convertFormToObject(form);
    formList.push(formObject);
    window.localStorage.setItem('formList', JSON.stringify(formList));

    clearFormFields(form);
    showMessage('send');
  })
}

function showMessage(message) {
  switch (message) {
    case 'send':
      sendMessage();
      break;
    case 'delete':
      deleteMessages();
      break;
  }
}

function sendMessage() {
  const message = document.getElementById('sendMessage');
  message.style.visibility = 'visible';
  setTimeout(() => {
    message.style.visibility = 'hidden';
  }, 3000);
}

function deleteMessages() {
  const message = document.getElementById('deleteMessages');
  message.style.visibility = 'visible';
  setTimeout(() => {
    message.style.visibility = 'hidden';
  }, 3000);
}

function getMessageList() {
  let localStorageData = window.localStorage.getItem('formList');
  return localStorageData ? JSON.parse(localStorageData) : [];
}

function convertFormToObject(formValues) {
  const message = {
    name: formValues.elements[0].value,
    email: formValues.elements[1].value,
    subject: formValues.elements[2].value,
    message: formValues.elements[3].value,
  }

  return message;
}

function clearFormFields(form) {
  for (let i = 0; i < 4; i++) {
    form.elements[i].value = '';
  }
}

export function checkClearMessages() {
  const buttonClearMessages = document.getElementById('clearMessages');
  const modal = document.getElementById('modal');


  buttonClearMessages.addEventListener('click', () => {
    modal.showModal()
    cancelButton(modal);
    confirmButton(modal)
  })
}

function confirmButton(modal) {
  const button = document.getElementById('confirmClear');
  button.addEventListener('click', () => {
    clearMessages();
    modal.close();
    showMessage('delete');
  })
}

function cancelButton(modal) {
  const button = document.getElementById('cancelClear');
  button.addEventListener('click', () => modal.close())
}

function clearMessages() {
  window.localStorage.removeItem('formList');
}