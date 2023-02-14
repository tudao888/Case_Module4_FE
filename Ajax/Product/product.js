function showMen() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/products/list",
        //xử lý khi thành công
        success: function (productForMen) {
            console.log(productForMen)
            let str = '';
            for (const men of productForMen) {
                str += `<div class="product-item men">
										<div class="product discount product_filter">
											<div class="product_image">
												<img src="images/product_1.png" alt="">
											</div>
											<div class="favorite favorite_left"></div>
											<div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
											<div class="product_info">
												<h6 class="product_name"><a href="single.html">${men.nameProduct}</a></h6>
												<div class="product_price">$520.00<span>$590.00</span></div>
											</div>
										</div>
										<div class="red_button add_to_cart_button"><a href="#">add to cart</a></div>
									</div>`
            }

            document.getElementById("showP").innerHTML = str;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
showMen();