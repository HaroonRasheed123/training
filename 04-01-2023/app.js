const tbody = document.querySelector('#target');
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(result => {
  const users = result.data;
  console.log(typeof result.data);
 users.forEach(user => {
    const row = ` <tr>
        <td>${user.id}</td>
        <td>
            <img src = "${user.avatar}" height="90"></img>
            </td>
            <td>${user.first_name} ${user.last_name}
        </td>
        <td>${user.email}</td>
    </tr>`
    ;
    tbody.innerHTML +=row;
  });
});


