// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let formLogin = document.getElementsByClassName("main");
// function signIn(e) {
//     // console.log(1111111111);
//          e.preventDefault();
       
      
//         let userLocal = JSON.parse(localStorage.getItem("userLocal")) || [];
      
//         let findUser = userLocal.find(
//           (users) => users.email === email.value && users.passWord === password.value
//         );
      
//         if (!findUser) {

//         } else {
//           window.location.href = "./index.html";
//           localStorage.setItem("signIn", JSON.stringify(findUser));
//         }
// }



let users = JSON.parse(localStorage.getItem("users")) || [];
function signIn(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let check = false;
    let account = {};
    if (email == "") {
        alert("Email trống");
    } else if (password == "") {
        alert("Mật khẩu trống");
    } else {
        for (let i = 0; i < users.length; i++) {
            if (email == users[i].emailAddress) {
                account = users[i];
                check = true;
                break;
            }
        }
        if (check) {
            if (password == account.password) {
                localStorage.setItem("signIn",account.id);
                window.location.href = "../pages/index.html";
            } else {
                alert("Sai mật khẩu");
            }
        } else {
            alert("Email chưa được đăng kí");
        }
    }
}
