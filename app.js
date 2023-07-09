const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function createTable(data) {
  let tableHTML = '<table>';

 
  tableHTML += '<thead><tr>';
  tableHTML += '<th>ID</th>';
  tableHTML += '<th>Name</th>';
  tableHTML += '<th>City</th>';
  tableHTML += '</tr></thead>';

  
  tableHTML += '<tbody>';
  data.forEach(user => {
    tableHTML += '<tr>';
    tableHTML += `<td>${user.id}</td>`;
    tableHTML += `<td>${user.name}</td>`;
    tableHTML += `<td>${user.address.city}</td>`;
    tableHTML += '</tr>';
  });
  tableHTML += '</tbody>';

  tableHTML += '</table>';

  return tableHTML;
}