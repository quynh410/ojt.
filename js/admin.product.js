
// Lấy phần tử modal
var modal = document.getElementById("myModal");

// Lấy nút mở modal
var btn = document.getElementById("openModal");

// Lấy phần tử đóng modal
var span = document.getElementsByClassName("close")[0];

// Khi người dùng nhấp vào nút, mở modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Khi người dùng nhấp vào nút đóng, đóng modal
span.onclick = function () {
  modal.style.display = "none";
};

// Khi người dùng nhấp vào bất kỳ đâu ngoài modal, đóng modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


function renderProduct() {
    const produtcs = JSON.parse(localStorage.getItem("product")) || [];
    let element = "";
    for (let i = 0; i < produtcs.length; i++) {
        element += `
        <tr>
      <td>${i + 1}</td>
      <td>${produtcs[i].name}</td>
      <td><img
        src="${produtcs[i].image}"
        alt=""
    /></td>
    <td>${produtcs[i].price}</td>
    <td>${produtcs[i].stock}</td>
    <td><i class="fa-solid fa-arrow-up-from-bracket"></i>   <i class="fa-solid fa-xmark"></i></td>
    </tr>
    `      
    }
    document.getElementById("tbody").innerHTML = element;
  }
renderProduct();
  