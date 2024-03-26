let product1 = [
    {
        id: 1,
        name: "🔥 Giá Sốc 🔥 Dép đi trong nhà xixitiao mềm nhẹ giá rẻ dễ đi phong cách dễ thương mẫu mới",
        price: "32.000đ",
        image: "https://down-vn.img.susercontent.com/file/cn-11134211-7r98o-lqsv2pfjbrq084",
        stock: "3,2k",
        
    },
    {
        id: 2,
        name: "Vợt cầu lông Boshika (02 chiếc) tặng kèm 3 quả cầu lông chất lượng cao , bảo hành 12 tháng",
        price: "70.000đ",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lk0ifurm8s1ub7",
        stock:"15k",
    },
    {
        id: 3,
        name:"Kính Mát Chống Tia Bức Xạ Ánh Sáng Xanh Cho Nữ",
        price: "18.000đ",
        image: "https://down-vn.img.susercontent.com/file/75881a6d0b5613a27d5d16963674f37a",
        stock:"2,7k",

    },
    {
        id:4,
        name:"Balo BOO Unisex Large Logo Phối Túi Plastic",
        price:"100.000đ",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ln6rl33xfar708",
        stock:"1,7k",
      },
      {
        id:5,
        name:"Chính Hãng】Son kem bóng/Son bóng SHAQINUO Siêu lì căng mọng môi không lem",
        price:"24.000đ",
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbkx-lo6mqbgxqfm2f6",
        stock:"8k",
    },
    {
        id:6,
        name:"🔥 Giá Sốc 🔥 Áo khoá nỉ mũ hai lớp LASA SUSO nỉ lót bông form rộng",
        price:"59.000đ",
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo91wvlvo22zf6",
        stock:"1,5k",
    },
    {
        id: 7,
        name:"🔥Bộ 4 Cây Bút Ký Hiệu Hình Gấu Trúc Cho Học Sinh🔥",
        price:"12.000đ",
        image: "https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp0k9a622ul86c",
        stock:"5,2k",
    },
    {
        id:8,
        name:"Panda~búp bê cotton, 20cm, Đồ chơi sang trọng dễ thương, Downsato,phong cách đa dạng, Búp bê",
        price:"84.000đ",
        image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbn1-lotvbglv7g8u4a",
        stock:"418",
    },
]
// Lưu data lên trên localStorage
localStorage.setItem("product",JSON.stringify(product1));




//lấy Dữ liệu về đi render
let product = JSON.parse(localStorage.getItem("product")) || [];
console.log(product);

function renderProduct() {
    let element ="";
    for (let i = 0; i < product.length; i++){
        element += 
                    `
              
                <div class="item">
                     <a href="./detail.html?id=${product[i].id}"
                      ><img src="${product[i].image}" onclick="chooseImage(${product[i].id})"
                        alt=""
                    /></a>
                    <br />
                    <span style="color: white"
                      >${product[i].name}</span
                    >
                    <br /><br />
                    <br />
                    <span style="color: #ee4d2d">${product[i].price}đ</span>
                    <span style="margin-left: 250px; color: grey">Đã bán ${product[i].stock}</span>
                </div>
                    `
    }
    document.getElementById("product").innerHTML = element;
    
}
renderProduct();

// function đi mua hàng
function addToCart(productId) {
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  if (checkLogin == null) {
    console.log("Bạn phải đăng nhập để đi mua hàng");
    return;
  }
  console.log("Đi mua hàng bình thường");

  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      let product = storedProducts.find((item) => item.id == productId);
      if (product) {
        console.log(product);
        console.log("Giỏ hàng của user sẽ là ", users[i].cart);

        let index = users[i].cart.findIndex((item) => item.id == productId);
        if (index == -1) {
          console.log("Chưa có");
          users[i].cart.push({ ...product, quantity: 1 });
          localStorage.setItem("users", JSON.stringify(users));
          showQuantityCart();
        } else {
          users[i].cart[index].quantity++;
          localStorage.setItem("users", JSON.stringify(users));
        }
      }
    }
  }
}

function showQuantityCart() {
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      document.getElementsByClassName("itemInCart")[0].innerHTML = users[i].cart.length;
    }
  }
}
showQuantityCart();
let scan = false
function checkLogin(){
  let users = JSON.parse(localStorage.getItem("users"));
  let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == checkLogin) {
      scan =  true
      console.log(scan);

    }
  }
  if(scan == true){
    console.log(scan);
    document.getElementById("login").style.display = "none"
    document.getElementById("register").style.display = "none"
  
  }
  
  
}

checkLogin()

let userName = document.getElementById("user")
let name1 = JSON.parse(localStorage.getItem("lastName"))
console.log(name1);
if (scan == true) {
  userName.innerHTML = name1
  userName.style.display = "block"
}else userName.style.display ="none"

//function chọn từng ảnh
function chooseImage(quynh){
  console.log(111111,quynh);
  localStorage.setItem("idProduct",quynh);

}

function purchase() {
  
}

