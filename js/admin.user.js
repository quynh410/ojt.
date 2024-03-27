function renderUser() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    let html ="";
    for(let i =0 ;i <users.length; i++ ){
        html = `
        <tr>
                          <td>${i +1}</td>
                          <td>${users[i].lastName + "&nbsp" + users[i].firstName}</td>
                          <td>${users[i].emailAddress}</td>
                          <td><button>Khóa</button>
                          <button>mở khóa</button></td>
                          <td><button><i class="fa-solid fa-eye"></i> Chi tiết</button></td>
                       </tr>
        `
    }
    document.getElementById("tbody").innerHTML = html
}

renderUser();