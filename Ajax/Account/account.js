function create() {
    let username = document.getElementById("usernameCreate").value;
    let password = document.getElementById("passwordCreate").value;
    let fullName = document.getElementById("fullNameCreate").value;
    let phone = document.getElementById("phoneCreate").value;
    let address = document.getElementById("addressCreate").value;
    let img = document.getElementById("imgCreate").value;

    let account = {
        username: username,
        password: password,
        fullName: fullName,
        phone: phone,
        address: address,
        img: img,
    }

    $.ajax({
        type: "Post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")

        },
        url: "http://localhost:8080/register",
        data: JSON.stringify(account),
        //xử lý khi thành công
        success: function (data) {
           document.getElementById("usernameCreate").value = "";
           document.getElementById("passwordCreate").value= "";
           document.getElementById("fullNameCreate").value= "";
           document.getElementById("phoneCreate").value= "";
           document.getElementById("addressCreate").value= "";
           document.getElementById("imgCreate").value= "";
            alert("Thành công");
            show();
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function checkUsername(username) {
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")

        },
        url: "http://localhost:8080/checkUsername/" +username,
        //xử lý khi thành công
        success: function (data) {
            console.log(data)
        },
        error: function (err) {
            alert("Tài khoản đã tồn tại!")
            console.log(err)
        }
    })
}

function login() {
    let username = $("#username").val()
    let password = $("#password").val()
    let account = {
        username: username,
        password: password,
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8080/login",
        data: JSON.stringify(account),
        success: function (data) {
            console.log(data)
            localStorage.setItem("token", data.token);
            localStorage.setItem("userToken", JSON.stringify(data));
            window.location.href = "../index.html"
            hienthiten();
        },
        error: function () {
            let n
            let username = $("#username").val()
            let password = $("#password").val()
            if (username === "") {
                n = '<p style="color: red">**Please enter username!</p>'
                document.getElementById("usernameNotification").innerHTML = n
                document.getElementById("passwordNotification").innerHTML = ""
            } else if (password === "") {
                n = '<p style="color: red">**Please enter password!</p>'
                document.getElementById("usernameNotification").innerHTML = ""
                document.getElementById("passwordNotification").innerHTML = n
            } else {
                let n = '<p style="color: red">**Wrong account or password!</p>'
                document.getElementById("usernameNotification").innerHTML = n
                document.getElementById("passwordNotification").innerHTML = ""
            }
        }
    })
    event.preventDefault();
}

function hienthiten() {
    if (localStorage.getItem("token") != null) {
         let account = JSON.parse(localStorage.getItem("userToken"));
        document.getElementById("fullname").innerText = "Hello   " +account.fullname ;
    }
}
hienthiten();

