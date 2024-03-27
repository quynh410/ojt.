
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
  