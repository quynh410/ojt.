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


// Biến global để lưu trữ số lượng danh mục đã thêm
var categoryIdCounter = 0;

// Hàm tạo ID tự động
function generateCategoryId() {
  categoryIdCounter++; // Tăng biến đếm
  return categoryIdCounter; // Trả về ID mới
}

// Hàm thêm danh mục
function addProduct() {
  // Lấy giá trị nhập vào từ input
  var categoryName = document.querySelector("input[type='text']").value;

  // Tạo một hàng mới trong bảng
  var table = document.getElementById("productBoard");
  var row = table.insertRow(-1); // Chèn vào cuối bảng

  // Tạo các ô trong hàng mới
  var cell1 = row.insertCell(0); // Ô STT
  var cell2 = row.insertCell(1); // Ô ID
  var cell3 = row.insertCell(2); // Ô Tên danh mục
  var cell4 = row.insertCell(3); // Ô Tác vụ

  // Đặt nội dung cho các ô
  cell1.innerHTML = table.rows.length - 1; // STT
  cell2.innerHTML = generateCategoryId(); 
  cell3.innerHTML = categoryName; // Tên danh mục nhập từ người dùng
  cell4.innerHTML = "<button>Sửa</button> <button>Xóa</button>"; // Nút Sửa và Xóa
}
