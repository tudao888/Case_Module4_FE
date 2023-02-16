function create(img) {
    let username = document.getElementById("usernameCreate").value;
    let password = document.getElementById("passwordCreate").value;
    let fullName = document.getElementById("fullNameCreate").value;
    let phone = document.getElementById("phoneCreate").value;
    let address = document.getElementById("addressCreate").value;
    var img = img;

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

let imgInp = document.getElementById("imgCreate");
let blah = document.getElementById("blah");
function showImg() {
    let file = imgInp.files;
    blah.src = URL.createObjectURL(file[0])
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
        document.getElementById("username").innerText = account.username ;
        document.getElementById("idAccount").innerText = account.id ;
    }
}
hienthiten();

function upImg() {
    let fileImg = document.getElementById("imgCreate").files;
    var formData = new FormData();
    formData.append("fileImg", fileImg[0]);

    $.ajax({
        contentType: false,
        processData: false,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        type: "POST",
        data: formData,
        url: "http://localhost:8080/user/upImg",
        success: function (img) {
            create(img)
        }
    });
}

function showAccountDetails(username) {
    console.log(username)
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/user/" + username,
        //xử lý khi thành công
        success: function (account) {
            console.log(account)
            localStorage.setItem("fullNameDetails", account.fullName)
            localStorage.setItem("addressDetails", account.address)
            localStorage.setItem("phoneDetails", account.phone)
            localStorage.setItem("imgDetails", account.img)
            window.location.href = "../AccountDetail.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function showEditProfile(username){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        },
        url: "http://localhost:8080/edit/" + username,
        //xử lý khi thành công
        success: function (account) {
            localStorage.setItem("accountEdit", account);
            document.getElementById("idEdit").value = account.idAccount;
            document.getElementById("usernameEdit").value = account.username;
            document.getElementById("passwordEdit").value = account.password;
            document.getElementById("fullNameUdate").value  = account.fullName;
            document.getElementById("addressUpdate").value = account.address;
            document.getElementById("phoneUpdate").value = account.phone;
            document.getElementById("imgUpdate").src = account.img;
            console.log(account)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function updateAccount() {
    let account = {
        "idAccount": document.getElementById("idEdit").value,
        "username": document.getElementById("usernameEdit").value,
        "password": document.getElementById("passwordEdit").value,
        "fullName": document.getElementById("fullNameUdate").value,
        "address": document.getElementById("addressUpdate").value,
        "phone": document.getElementById("phoneUpdate").value,
        "img": document.getElementById("imgUpdate").src,
    }

    $.ajax({
        type: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/update",
        data: JSON.stringify(account),
        //xử lý khi thành công
        success: function (data) {
            alert("Thành công");
            showAccountDetails()
        },
        error: function (err) {
            console.log(err)
        }
    })
}
