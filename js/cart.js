
let user = JSON.parse(localStorage.getItem("users"))||[];
let checkLogin = JSON.parse(localStorage.getItem("checkLogin"))||[];  
function render(){
  let element =``
  for(let i=0;i<user.length;i++){
    if(user[i].id==  checkLogin ) {
      console.log(user[i]);
      for(let j=0;j<user[i].cart.length;j++){
        element+=`
        <tr>
        <td>${j+1}</td>
        <td>
          <img
            src="${user[i].cart[j].image}"
            alt=""
            style="width: 100px"
          />
        </td>
        <td>
          ${user[i].cart[j].name}
        </td>
        <td>
          <button onclick="increase(${user[i].cart[j].id})">+</button>
          <input type="text" value="${user[i].cart[j].quantity}" style="width: 20px" />
          <button onclick="decrease(${user[i].cart[j].id}) ">-</button>
          <button style="margin-left:20px">Xóa</button>
        </td>
        <td>${user[i].cart[j].price}đ</td>
        
      </tr>
        `
  
      }
    }
    document.getElementById("tbody").innerHTML = element
    
  }
  localStorage.setItem("users",JSON.stringify(user))
}
render()

function increase(prdId) {
  console.log(prdId);
  for(let i = 0; i < user.length;i++){
    if(user[i].id ==  checkLogin ) {
      for(let j=0;j<user[i].cart.length;j++){

        if(user[i].cart[j].id == prdId){
          

          for(let j=0;j<user[i].cart.length;j++){
            user[i].cart[j].quantity++;
            break
          }
        }
      }
    }
  }
  render()
}

function decrease(prdID) {
  for(let i = 0; i < user.length;i++){
    if(user[i].id ==  checkLogin ) {
      for(let j=0;j<user[i].cart.length;j++){

        if(user[i].cart[j].id == prdID){
          

          for(let j=0;j<user[i].cart.length;j++){
            user[i].cart[j].quantity--;
            break
          }
        }
      }
    }
  }
  render()
}
function total() {
  let count = 0;
  for(let i = 0; i < cart.length;i++){
    count += (parseFloat(cart[i].price.replace(/\./g,'').replace(',','.'))*cart[i].quantity)
  }
 text.innerHTML =
  `
  <td colspan="3" align="right">Total:${count.toLocaleString('vi-VN')}đ</td>

   `
}
total()
// console.log(count);







