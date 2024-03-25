// function render() {
//     let users = JSON.parse(localStorage.getItem("users"));
//     let text = "";
//     const cart = users[0].cart;
//     for (let i = 0; i < cart.length; i++) {
//       text += `
//           <tr>
//           <td>${i + 1}</td>
//           <td>
//             <img
//               src="${cart[i].image}"    
//               alt=""
//               style="width: 100px"
//             />
//           </td>
//           <td>
//             ${cart[i].name}
//           </td>
//           <td>
//             <button onclick="increase(${cart[i].id})">+</button>
//             <input type="text" value="${cart[i].quantity}" style="width: 20px" />
//             <button onclick="decrease(${cart[i].id})">-</button>
//           </td>
//           <td>${cart[i].price}</td>
//         </tr>
//           `;
//     }
//     document.getElementById("cartBody").innerHTML = text;
//   }
//   render();

// let listProduct =[

//     {
//         id:1,
//         image: "https://down-vn.img.susercontent.com/file/cn-11134211-7r98o-lqsv2pfjbrq084",
//         name: "🔥 Giá Sốc 🔥 Dép đi trong nhà xixitiao mềm nhẹ giá rẻ dễ đi phong cách dễ thương mẫu mới",
//         // quantity: ,
//         price: "32.000đ"
//     },
//     {
//         id:2,
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0ifurm8s1ub7",
//         name: " Vợt cầu lông Boshika (02 chiếc) tặng kèm 3 quả cầu lông chất lượng cao, bảo hành 12 tháng",
//         // quantity:,
//         price: "70.000đ"
//     },
//     {
//         id:3,
//         image: "https://down-vn.img.susercontent.com/file/75881a6d0b5613a27d5d16963674f37a",
//         name: "Kính Mát Chống Tia Bức Xạ Ánh Sáng Xanh Cho Nữ",
//         // quantity:,
//         price: "18.000đ"
//     },
//     {
//         id:4,
//         image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbkx-lo6mqbgxqfm2f6",
//         name: "【Chính Hãng】Son kem bóng/Son bóng SHAQINUO Siêu lì căng mọng môi không lem",
//         // quantity:,
//         price: "24.800đ"
//     },
//     {
//         id:5,
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln6rl33xfar708",
//         name: "Balo BOO Unisex Large Logo Phối Túi Plastic",
//         // quantity:,
//         price: "100.000đ"
//     },
//     {
//         id:6,
//         image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo91wvlvo22zf6",
//         name: "🔥 Giá Sốc 🔥 Áo khoá nỉ mũ hai lớp LASA SUSO nỉ lót bông form rộng",
//         // quantity:,
//         price: "59.000đ"
//     },
//     {
//         id:7,
//         image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp0k9a622ul86c",
//         name: "🔥Bộ 4 Cây Bút Ký Hiệu Hình Gấu Trúc Cho Học Sinh🔥",
//         // quantity:,
//         price: "12.000đ"
//     },
//     {
//         id:8,
//         image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbn1-lotvbglv7g8u4a",
//         name: "   Panda~búp bê cotton, 20cm, Đồ chơi sang trọng dễ thương, Downsato, phong cách đa dạng, Búp bê",
//         // quantity:,
//         price: "84.000đ"
//     },
// ]
// localStorage.setItem("listProduct", JSON.stringify(listProduct));
// console.log(listProduct);



let checkLogin = JSON.parse(localStorage.getItem("checkLogin")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let text = document.getElementById("text");
console.log(text);

let myCart;
for (let i = 0; i < users.length; i++) {
  if (checkLogin == users[i].id) {
    myCart = users[i].cart;
  }
}

function render() {
  let text = "";
  for(let i = 0 ; i < users.length ; i++){
    if( checkLogin == users[i].id){
      for (let j = 0; j < users[i].cart.length; j++) {
          text += `
              <tr>
                  <td>${j+1}</td>
                  <td>
                      <img width="100px" src=${users[i].cart[j].image} alt="img" />
                  </td>
                  <td>${users[i].cart[j].name}</td>
                  <td>${users[i].cart[j].price} ₫</td>
                  <td>
                      <button onclick="decrease(${users[i].cart[j].id})">-</button>
                      ${users[i].cart[j].quantity}
                      <button onclick="increase(${users[i].cart[j].id})">+</button>
                  </td>
                  <td id='value${users[i].cart[j].id}'>
                    ${(parseFloat(users[i].cart[j].price.replace(/\./g, '').replace(',', '.'))*users[i].cart[j].quantity).toLocaleString('vi-VN')}đ
                  </td>
              </tr>
              `;
          }
  }
 
  }
  document.getElementById("cartBody").innerHTML = text;
}
render();
function total() {
  let count = 0
for(let i = 0 ; i< myCart.length ; i++){
  count += (parseFloat(myCart[i].price.replace(/\./g, '').replace(',', '.'))*myCart[i].quantity);
}

// console.log(count);

text.innerHTML = 
`
  <td colspan="6" id="text" class="text">Total amount : ${count.toLocaleString('vi-VN')}đ</td>
`
}
total();
function increase(itemId) {
  for (let i = 0; i < users.length; i++) {
    let currentUser = users[i];
    if (checkLogin == currentUser.id) {
      // currentUser.cart = myCart;
      for (let i = 0; i < myCart.length; i++) {
        if (itemId == myCart[i].id) {
          myCart[i].quantity++;
          currentUser.cart = myCart;
          localStorage.setItem("users", JSON.stringify(users));
          render();
          total();
        }
      }
    }
  }
}

function decrease(itemId) {
  for (let i = 0; i < users.length; i++) {
    let currentUser = users[i];
    if (checkLogin === currentUser.id) {
      for (let i = 0; i < myCart.length; i++) {
        if (itemId == myCart[i].id) {
          if (myCart[i].quantity == 1) {
            let confirmDelete = confirm("Bạn có muốn bỏ sản phẩm này?");
            if (!confirmDelete) {
              return;
            } else {
              for (let j = 0; j < myCart.length; j++) {
                if (itemId == myCart[j].id) {
                  myCart.splice(j, 1);
                  currentUser.cart = myCart;
                  // console.log(myCart);
                  localStorage.setItem("users", JSON.stringify(users));
                  render();
                  total();
                  window.location.href = "../pages/cart.html";
                  break;
                }
              }
            }
          } else {
            for (let j = 0; j < myCart.length; j++) {
              if (itemId == myCart[j].id) {
                myCart[j].quantity--;
                currentUser.cart = myCart;
                // console.log(myCart);
                localStorage.setItem("users", JSON.stringify(users));
                render();
                total();
              }
            }
          }
        }
      }
    }
  }
}