let id = window.location.href.split("?")[1].split("=")[1]
console.log(id);
 
let prd =JSON.parse(localStorage.getItem("product"))||[]; 
console.log(prd);

let a = prd.find(function(e,i){
    return e.id === +id;
})


let price=document.getElementById("price")
price.innerHTML = a.price

let image = document.getElementById("product-image")
image.src = a.image
let nameProduct = document.getElementById("name-product")
nameProduct.innerHTML = a.name
function purchase() {
    console.log("aaaaaaaaaaa");
    addToCart(a.id)
}


function addToCart(productId) {
    console.log("aaaaaaaaaaa");
    // console.log("đã gọi hàm");
    /* 
        khi nào cho user đi mua hàng
        khi đăng nhập thì mới cho mua
     */
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    if (checkLogin == null) {
        console.log("bạn phải đăng nhập để đi mua hàng");
        return // gặp return dừng chương trình luôn
    }
    console.log("đi mua hàng bình thường");
    /* 
        lấy giỏ hàng của user để đi mua hàng
        và lấy giỏ hàng user dựa vào id của user
     */
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == checkLogin) {

            //lấy thông tin sản phẩm để đưa vào giỏ hàng
            // làm sao để lấy thông tin sản phẩm
            // console.log("11111", productId);
            // có id sản phẩm rồi làm sao lấy thông tin sản phẩm
            let product = JSON.parse(localStorage.getItem("product"));
            for (let j = 0; j < product.length; j++) {
                if (productId == product[j].id) {
                    // lấy thông tin sản phẩm
                    console.log("1111", product[j]);
                    console.log("giỏ hàng của user sẽ là ", users[i].cart);
                    // let a={...product[j],quantity:1}
                    /* 
                        trước khi thêm vào phải xem trong giỏ hàng có sản phẩm đó chưa
                        có rồi thì tăng số lượng còn chưa có thì thêm vào bt
                    */
                   // kiểm tra xem trong giỏ hàng có tồn tại sản phẩm đó chưa
                   // duyệt giỏ hàng
                    let index = users[i].cart.findIndex((item,index)=>{
                        return item.id == productId
                    })
                    if(index==-1){
                        
                        users[i].cart.push({ ...product[j], quantity: 1 });
                        console.log("chưa có ");
                        alert("Đã thêm vào giỏ hàng")
                    }else{
                        console.log("có rồi");
                        alert("Hàng đã có trong giỏ")
                    }
                    // for (let index = 0; index < users[i].cart.length; index++) {
                    //         if(users.cart[index].id==productId){

                    //         }

                    // }
                    // sau khi push xong thì lưu trên local
                    localStorage.setItem("users", JSON.stringify(users));

                }
            }

        }

    }
}