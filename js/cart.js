
// let user = JSON.parse(localStorage.getItem("users"))||[];
// let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))||[];  
// function render(){
//   let element =``
//   for(let i=0;i<user.length;i++){
//     if(user[i].id==  checkLogin ) {
//       console.log(user[i]);
//       for(let j=0;j<user[i].cart.length;j++){
//         element+=`
//         <tr>
//         <td>${j+1}</td>
//         <td>
//           <img
//             src="${user[i].cart[j].image}"
//             alt=""
//             style="width: 100px"
//           />
//         </td>
//         <td>
//           ${user[i].cart[j].name}
//         </td>
//         <td>
//           <button onclick="increase(${user[i].cart[j].id})">+</button>
//           <input type="text" value="${user[i].cart[j].quantity}" style="width: 20px" />
//           <button onclick="decrease(${user[i].cart[j].id}) ">-</button>
//           <button style="margin-left:20px">Xóa</button>
//         </td>
//         <td>${user[i].cart[j].price}đ</td>
        
//       </tr>
//         `
  
//       }
//     }
//     document.getElementById("tbody").innerHTML = element
    
//   }
//   localStorage.setItem("users",JSON.stringify(user))
// }
// render()

// function increase(prdId) {
//   console.log(prdId);
//   for(let i = 0; i < user.length;i++){
//     if(user[i].id ==  checkLogin ) {
//       for(let j=0;j<user[i].cart.length;j++){

//         if(user[i].cart[j].id == prdId){
          

//           for(let j=0;j<user[i].cart.length;j++){
//             user[i].cart[j].quantity++;
//             break
//           }
//         }
//       }
//     }
//   }
//   render()
// }

// function decrease(prdID) {
//   for(let i = 0; i < user.length;i++){
//     if(user[i].id ==  checkLogin ) {
//       for(let j=0;j<user[i].cart.length;j++){

//         if(user[i].cart[j].id == prdID){
          

//           for(let j=0;j<user[i].cart.length;j++){
//             user[i].cart[j].quantity--;
//             break
//           }
//         }
//       }
//     }
//   }
//   render()
// }

// let count = 0;
// for(let i = 0; i<user.length; i++){
//   if(user[i].id == checkLogin){
//     for(let j=0; j< user[i].cart.length; j++){
//       const productPrice = parseFloat(user[i].cart[j].price.replace(/\)./g, "").replace(',','.'));
//       count += productPrice * user[i].cart[j].quantity;
//     }
//   }
// }
// document.getElementById("total").innerHTML = 
// `
// <td colspan="3" align= "right">Total: ${count.toLocaleString('vi-VN')}đ</td>
// `

let user = JSON.parse(localStorage.getItem("users")) || [];
let checkLogin = JSON.parse(localStorage.getItem("checkLogin")) || [];

function render() {
  let element = ``;
  //khởi tạo 
  let totalPrice = 0; 
  for (let i = 0; i < user.length; i++) {
    if (user[i].id == checkLogin) {
      console.log(user[i]);
      for (let j = 0; j < user[i].cart.length; j++) {
        let item = user[i].cart[j];
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
              <button style="margin-left:20px">Xóa</button>
            </td>
            <td>${item.price * item.quantity}đ</td>
          </tr>
        `;
        // tính tổng tiền
        totalPrice += item.price * item.quantity;
      }
    }
    document.getElementById("tbody").innerHTML = element;
    //cập nhật giá trên HTML
    document.getElementById("total").textContent = totalPrice + "đ";
  }
  localStorage.setItem("users", JSON.stringify(user));
}

render();

function increase(prdId) {
  console.log(prdId);
  for (let i = 0; i < user.length; i++) {
    if (user[i].id == checkLogin) {
      for (let j = 0; j < user[i].cart.length; j++) {
        if (user[i].cart[j].id == prdId) {
          user[i].cart[j].quantity++;
          break;
        }
      }
    }
  }
  render();
}

function decrease(prdID) {
  for (let i = 0; i < user.length; i++) {
    if (user[i].id == checkLogin) {
      for (let j = 0; j < user[i].cart.length; j++) {
        if (user[i].cart[j].id == prdID) {
          user[i].cart[j].quantity--;
          if (user[i].cart[j].quantity === 0) {
            user[i].cart.splice(j, 1);
          }
          break;
        }
      }
    }
  }
  render();
}







