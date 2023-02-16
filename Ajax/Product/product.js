function show(StringGender) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/products/gender/" + StringGender,
        //xử lý khi thành công
        success: function (productGender) {
            console.log(productGender)
            let str = '';
            for (const p of productGender.content) {
                str += `<div class="product-item men">
                                            <div class="product discount product_filter">
                                                <div class="product_image">
                                                    <img src="${p.img}" alt="">
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                    <span>-$20</span></div>
                                                <div class="product_info">
                                                    <h6 class="product_name"><a onclick="showDetailPage(${p.idProduct})" >${p.nameProduct}</a></h6>
                                                    <div class="product_price">${p.price}</div>
                                                </div>
                                            </div>
                                         
                                            <div class="red_button add_to_cart_button" onclick ="addtocart(${p.idProduct})"> Add to cart </div>
                                                                                    </div>`
            }
            document.getElementById("show").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}


function showCategoryByName(name) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/products/category/" + name,
        //xử lý khi thành công
        success: function (product) {
            let str = '';
            for (const p of product.content) {
                console.log(p)
                str += `<div class="product-item men">
                                            <div class="product discount product_filter">
                                                <div class="product_image">
                                                    <img src="${p.img}" alt="">
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                    <span>-$20</span></div>
                                                <div class="product_info">
                                                    <h6 class="product_name" onclick="showDetailPage(${p.idProduct})" ><a >${p.nameProduct}</a></h6>
                                                    <div class="product_price">${p.price}</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button" onclick ="addtocart(${p.idProduct})"> Add to cart </div>
                                        </div>`
            }
            document.getElementById("show").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function searchByName(stringSearch) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/products/search/" + stringSearch,
        //xử lý khi thành công
        success: function (productSearch) {
            console.log(productSearch)
            let str = '';
            for (const p of productSearch.content) {
                console.log(p)
                str += `<div class="product-item men">
                                            <div class="product discount product_filter">
                                                <div class="product_image">
                                                    <img src="${p.img}" alt="">
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                    <span>-$20</span></div>
                                                <div class="product_info">
                                                    <h6 class="product_name"><a  onclick="showDetailPage('${p.idProduct}')" >${p.nameProduct}</a></h6>
                                                    <div class="product_price">${p.price}</div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button" onclick ="addtocart(${p.idProduct})"> Add to cart </div>
                                        </div>`
            }
            document.getElementById("show").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showDetailPage(id){
    localStorage.setItem("productDetailId", id);
    window.location.href = "../single.html"

}
function showProductById(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/products/" + id,
        //xử lý khi thành công
        success: function (product) {
            console.log(product)
            let str = '';
                console.log(product)
                str += `<div class="col-lg-7">
            <div class="single_product_pics">
 <div class="row">
 <div class="col-lg-3 thumbnails_col order-lg-1 order-2">
 <div class="single_product_thumbnails">
 </div>
 </div>
 <div class="col-lg-9 image_col order-lg-2 order-1">
 <div class="single_product_image">
 <div class="single_product_image_background" style="background-image:url(${product.img})"></div>
 </div>
 </div>
 </div>
</div>
 </div>
<div class="col-lg-5">
 <div class="product_details">
 <div class="product_details_title">
 <h2>${product.nameProduct}</h2>
 </div>
 <div class="free_delivery d-flex flex-row align-items-center justify-content-center">
 <span class="ti-truck"></span><span>free delivery</span>
 </div>
 <div class="product_price">${product.price}</div>
 <div class="quantity d-flex flex-column flex-sm-row align-items-sm-center">
 <span>Quantity:</span>
 <div class="quantity_selector">
 <span class="minus"><i class="fa fa-minus" aria-hidden="true"></i></span>
 <span id="quantity_value">1</span>
 <span class="plus"><i class="fa fa-plus" aria-hidden="true"></i></span>
 </div>
 <div class="red_button add_to_cart_button" onclick ="addtocart(${p.idProduct})"> Add to cart </div>
 <div class="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
 </div>
 </div>
 </div>`

            document.getElementById("showProduct").innerHTML = str;

        },
        error: function (err) {
            console.log(err)
        }
    })
}


function getAllComment(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/products/" + id,
        //xử lý khi thành công
        success: function (product) {
            console.log(product)
            let str = '';
            console.log(product)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function addtocart(idproduct) {
    if (localStorage.getItem("userToken") == null) {
        alert("can dang nhap hoac dang ky")
    } else {
        let amount = +prompt("nhap so luong can mua");
        let account = JSON.parse(localStorage.getItem("userToken"));
        let username = account.username
        console.log(idproduct)
        let cartdetail = {
            'amount': amount,
            'product': {
                'idProduct': idproduct
            },
            'account': {
                'username': username
            }

        }

        $.ajax({
            type: "Post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")

            },
            url: "http://localhost:8080/cart/",
            data: JSON.stringify(cartdetail),
            //xử lý khi thành công
            success: function (data) {
                alert("Thành công");

            },
            error: function (err) {
                console.log(err)
                alert("Can dang nhap hoac dang ky")
            }
        })
    }
}

function showcart() {
    let account = JSON.parse(localStorage.getItem("userToken"));
    let username = account.username;
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")

        },
        url: "http://localhost:8080/cart/" + username,
        //xử lý khi thành công
        success: function (cartdetails) {

            console.log(cartdetails)
            let str = '';
            for (const c of cartdetails)
                str += `
                <tr>
                <td>${c.product.nameProduct}</td>
                <td><img width="300px" src="${c.product.img}"></td>
                <td>${c.product.price}</td>
                <td>${c.amount}</td>
                <td>${c.product.price * c.amount}</td>
               <td>
               <button onclick="deletecart(${c.idCartdetail})">Delete</button>
                </td>
                </tr>
                `

            document.getElementById("showcart").innerHTML = str;
            alert("thanh cong")

        },
        error: function (err) {
            console.log(err)
        }
    })
}

showcart();

function createbill() {
    let account = JSON.parse(localStorage.getItem("userToken"));
    let username = account.username;
    $.ajax({
        type: "Post",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")

        },
        url: "http://localhost:8080/bill/" + username,
        success: function (data) {
            alert("Thành công");

        },
        error: function (err) {
            console.log(err)
            alert("Can dang nhap hoac dang ky")
        }
    })

}
function deletecart(idCartdetails){
    $.ajax({
        type: "Post",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")

        },
        url: "http://localhost:8080/cart/"+idCartdetails,
        success: function (data) {
            alert("Thành công");

        },
        error: function (err) {
            console.log(err)
            alert("Can dang nhap hoac dang ky")
        }
    })

}

