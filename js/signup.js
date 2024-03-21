// let firstName = document.getElementById("first-name");
// let lastName = document.getElementById("last-name");
// let email = document.getElementById("email");
// let passWord = document.getElementById("password");
// let Signup = document.getElementById("signup");

// const userLocal = JSON.parse(localStorage.getItem("")) || [];

// function validateEmail(email) {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// }

// Signup.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (!firstName.value) {
//     alert("Không được để trống");
//   }

//   if (!lastName.value) {
//     alert("Tên không được để trống");
//   }

//   if (!email.value) {
//     alert("Email không được để trống");
//   } else {
//     if (!validateEmail(email.value)) {
//       alert("Email không đúng định dạng");
//     }
//   }

//   const findEmail = userLocal.find((users) => users.email === email.value);

//   if (findEmail) {
//     alert("Email đã tồn tại");
//   }

//   if (!passWord.value) {
//     alert("Mật khẩu không được để trống");
//   }

//   if (
//     firstName.value &&
//     lastName.value &&
//     email.value &&
//     passWord.value &&
//     !findEmail
//   ) {
//     const users = {
//       firstName: firstName.value,
//       lastName: lastName.value,
//       email: email.value,
//       passWord: passWord.value,
//       cart:[],
//       userId: Math.random(Math.floor()*10)
//     };

//     userLocal.push(users);
//     localStorage.setItem("userLocal", JSON.stringify(userLocal));
//   }else {
//     window.location.href = "./signin.html";
//     localStorage.setItem("Signup", JSON.stringify(findUser));
//   }
// });
 


// let users = JSON.parse(localStorage.getItem("users"));
// for(let i = 0;i < users.length;i++) {
//   if(users[i].id==checkLogin){
//     console.log("Giở hàng của users sẽ là", users[i].cart);
//     let product = JSON.parse(localStorage.getItem(products));
//     for(let i = 0;i < product.length;i++){
//       if(product == product[i].id){
//         console.log("111", product[i]);
//         users[i]
//       }
//     }
//   }
//   break;
// } 



let users = JSON.parse(localStorage.getItem("users")) || [];
function signUp(e) {
    e.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let passWord = document.getElementById("password").value;
    // let check = document.getElementById("check-box").checked;
    let obj = {
        id: Math.floor(Math.random() * 10000000),
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        email: `${email}`,
        password: `${passWord}`,  
        cart: []
    }
    // check co dung dinh dang hay ko
    function validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    let flag = true;
    for (let i = 0; i < users.length; i++) {
        if (email == users[i].emailAddress) {
            alert("Email đã được sử dụng");
            flag = false;
            break;
        }
    }
    if (flag == true) {
        users.push(obj);
        alert("Đăng kí thành công!");
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "../pages/signin.html";
    }
}


let passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", function() {
    if (this.value.length > 6) {
        this.value = this.value.slice(0, 6);
        alert("Mật khẩu tối đa 6 ký tự");
    }
});

let Signup = document.getElementById("signup");
let firstName = document.getElementById("first-name").value;
let lastName = document.getElementById("last-name").value;
let email = document.getElementById("email").value;
let passWord = document.getElementById("password").value;
    Signup.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!firstName.value) {
        alert("Không được để trống");
    }

    if (!lastName.value) {
        alert("Tên không được để trống");
    }

    if (!email.value) {
        alert("Email không được để trống");
    } else {
        if (!validateEmail(email.value)) {
        alert("Email không đúng định dạng");
        }
    }

    const findEmail = userLocal.find((users) => users.email === email.value);

    if (findEmail) {
        alert("Email đã tồn tại");
    }

    if (!passWord.value) {
        alert("Mật khẩu không được để trống");
    }
    });
    
