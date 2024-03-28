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
  document.getElementById("title-form").innerHTML = "Thêm";
  document.getElementById('inp').value = "";

  document.getElementById('btnSubmitUpdate').style.display = "none";
  document.getElementById('btnSubmitAdd').style.display = "inline-block";
};

// Khi người dùng nhấp vào bất kỳ đâu ngoài modal, đóng modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // document.getElementById("inp").value = "";
  }
};


// Lấy trạng thái hiện tại của danh sách từ localStorage
let categoryList = JSON.parse(localStorage.getItem("category")) || [];

// Lấy thẻ input và nút lưu lại từ HTML
let inputName = document.querySelector('.inp');
let saveButton = document.querySelector('.butn');

saveButton.addEventListener('click', function() {
  // Lấy giá trị từ trường input
  let categoryName = inputName.value;

  // Kiểm tra nếu tên danh mục đã được nhập
  if (categoryName.trim() !== '') {
      // Tạo một đối tượng danh mục mới
      let category = {
          categoryId: Math.floor(Math.random() * 10000000),
          name: categoryName
      };

      // Thêm đối tượng danh mục vào danh sách
      categoryList.push(category);
      localStorage.setItem("category", JSON.stringify(categoryList));

      renderCategory();

      alert("Danh mục đã được lưu lại!");
      // Reset giá trị trường input
      inputName.value = '';
  } else {
      alert("Vui lòng nhập tên danh mục!");
  }
});

// fucntion render danh mục sản phẩm
function renderCategory() {
    const category = JSON.parse(localStorage.getItem("category")) || [];
    let html = "";
    for (let i=0; i< category.length; i++){
        html += `
        <tr>  
        
              <td>${i + 1}</td>
              <td>${category[i].categoryId}</td>
              <td>${category[i].name}</td>
              <td>
                <button onclick="editCategory(${i})">Sửa</button>
                <button onclick="deleteCategory(${i})">Xóa</button>
              </td>
          </tr>
        `
    }
    document.getElementById("tbody").innerHTML = html;
}
renderCategory();




// Hàm sửa danh mục
function editCategory(index) {
  // Lấy thông tin danh mục cần sửa
  let category = categoryList[index];

  // Hiển thị modal thông tin danh mục hiện tại
  modal.style.display = "block";
  document.getElementById('btnSubmitUpdate').style.display = "inline-block";
  document.getElementById('btnSubmitAdd').style.display = "none";
  document.getElementById('title-form').innerHTML = "Sửa";
  inputName.value = category.name;

  // Xử lý việc sửa danh mục khi người dùng xác nhận
  document.getElementById('btnSubmitUpdate').onclick = function () {
    let newName = inputName.value.trim();
    if (newName !== '') {
      categoryList[index].name = newName;
      localStorage.setItem("category", JSON.stringify(categoryList));

      renderCategory();

      // alert("Danh mục đã được cập nhật!");
      modal.style.display = "none"; 
    } else {
      alert("Vui lòng nhập tên danh mục!");
    }
  };
}

// Hàm xóa danh mục
function deleteCategory(index) {
  // Xác nhận với người dùng trước khi xóa
  if (confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
    // Xóa danh mục khỏi mảng categoryList
    categoryList.splice(index, 1);
    localStorage.setItem("category", JSON.stringify(categoryList));

    // Render lại danh sách danh mục
    renderCategory();

    alert("Danh mục đã được xóa!");
  }
}


