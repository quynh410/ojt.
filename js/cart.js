

let users = JSON.parse(localStorage.getItem("users")) || [];
let checkLogin = JSON.parse(localStorage.getItem("checkLogin")) || '';

function render() {
  let element = ``;
  let totalPrice = 0;
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        let item = users[i].cart[j];
        element += `
          <tr>
            <td>${j + 1}</td>
            <td>
              <img src="${item.image}" alt="" style="width: 100px" />
            </td>
            <td>${item.name}</td>
            <td>
              <button onclick="increase(${item.id})">+</button>
              <input type="text" value="${item.quantity}" style="width: 20px" />
              <button onclick="decrease(${item.id})">-</button>
              <button onclick="removeItem(${item.id})" style="margin-left:20px">Xóa</button>
            </td>
            <td>${item.price * item.quantity}đ</td>
            
          </tr>
                  `;
       // tính tổng tiền
        totalPrice += item.price * item.quantity;
      }
    }
  }
  
  document.getElementById("tbody").innerHTML = element;
  //cập nhật giá trên HTML
  document.getElementById("total").textContent = totalPrice + "đ";  
}

render();

function increase(prdId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id === prdId) {
          users[i].cart[j].quantity++;
          break;
        }
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  render();
}

function decrease(prdId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id === prdId) {
          users[i].cart[j].quantity--;
          if (users[i].cart[j].quantity === 0) {
            users[i].cart.splice(j, 1);
          }
          break;
        }
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  render();
}

function removeItem(prdId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === checkLogin) {
      for (let j = 0; j < users[i].cart.length; j++) {
        if (users[i].cart[j].id === prdId) {
          users[i].cart.splice(j, 1);
          break;
        }
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  render();
}







