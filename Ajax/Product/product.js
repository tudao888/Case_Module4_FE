function showMen() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/products/gender/men",
        //xử lý khi thành công
        success: function (productForMen) {
            console.log(productForMen)
            let str = '';
            for (const men of productForMen.content) {
                str += `<div class="product-item men">
                                            <div class="product discount product_filter">
                                                <div class="product_image">
                                                    <img src="images/product_1.png" alt="">
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                    <span>-$20</span></div>
                                                <div class="product_info">
                                                    <h6 class="product_name"><a href="single.html">${men.nameProduct}</a></h6>
                                                    <div class="product_price">$520.00<span>$590.00</span></div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                        </div>`
            }
            document.getElementById("show").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
showMen();

function showWomen() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/products/gender/women",
        //xử lý khi thành công
        success: function (productForWomen) {
            console.log(productForWomen)
            let str = '';
            for (const women of productForWomen.content) {
                str += `<div class="product-item men">
                                            <div class="product discount product_filter">
                                                <div class="product_image">
                                                    <img src="images/product_1.png" alt="">
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                    <span>-$20</span></div>
                                                <div class="product_info">
                                                    <h6 class="product_name"><a href="single.html">${women.nameProduct}</a></h6>
                                                    <div class="product_price">$520.00<span>$590.00</span></div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                        </div>`
            }
            document.getElementById("show").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
showWomen();

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
                                                    <img src="images/product_1.png" alt="">
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                    <span>-$20</span></div>
                                                <div class="product_info">
                                                    <h6 class="product_name"><a href="single.html">${p.nameProduct}</a></h6>
                                                    <div class="product_price">$520.00<span>$590.00</span></div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
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
                                                    <img src="images/product_1.png" alt="">
                                                </div>
                                                <div class="favorite favorite_left"></div>
                                                <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                    <span>-$20</span></div>
                                                <div class="product_info">
                                                    <h6 class="product_name"><a href="single.html">${p.nameProduct}</a></h6>
                                                    <div class="product_price">${p.price}<span>$590.00</span></div>
                                                </div>
                                            </div>
                                            <div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                        </div>`
            }
            document.getElementById("show").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}