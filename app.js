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

function displayUserData(user) {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.textContent = `Name: ${user.name}, Phone: ${user.phone}`;
  }
  
  function getUsersData() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const usersTableDiv = document.getElementById('usersTable');
        usersTableDiv.innerHTML = createTable(data);
  
        const userIdInput = document.getElementById('userIdInput');
        const getUserButton = document.getElementById('getUserButton');

        getUserButton.addEventListener('click', () => {
            const userId = userIdInput.value;
            const user = data.find(user => user.id == userId);
    
            if (user) {
              displayUserData(user);
            } else {
              displayUserData({ name: 'User not found', phone: '' });
            }
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    
    getUsersData();