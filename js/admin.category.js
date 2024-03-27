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
