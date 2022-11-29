function generateTable() {
  const localStorageData = window.localStorage.getItem('formList');
  const formList = localStorageData ? JSON.parse(localStorageData) : [];
  const list = document.getElementById('messageList');

  list.innerHTML =
    `<table>
      <tr>
        <th>Autor</th>
        <th>Email</th>
        <th>Assunto</th>
        <th>Mensagem</th>   
        <tr>
      ${generateTableLines(formList)}
    </table > `
}

function generateTableLines(formList) {
  return formList.map((message) => {
    return `
    </tr>
      <td>${message.name}</td>
      <td>${message.email}</td>
      <td>${message.subject}</td>
      <td>${message.message}</td>
    </tr>
    `;
  }).join('')
}


generateTable()