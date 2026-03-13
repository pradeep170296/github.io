<!DOCTYPE html>
<html>
<head>

<title>Company Remote Login</title>

<style>

body{
    font-family:Arial;
    background:#e6e6e6;
}

.box{

    width:320px;
    margin:120px auto;
    background:white;
    padding:20px;
    border-radius:10px;
    box-shadow:0 0 10px gray;

}

input{

    width:100%;
    padding:10px;
    margin:10px 0;

}

button{

    width:100%;
    padding:10px;
    background:#007bff;
    color:white;
    border:none;

}

</style>

</head>

<body>

<div class="box">

<h3>Company Login</h3>

<input id="user" placeholder="Username">

<input id="pass" type="password" placeholder="Password">

<button onclick="login()">Login</button>

<p id="msg"></p>

</div>


<script src="users.js"></script>

<script>

function login(){

    let u=document.getElementById("user").value;
    let p=document.getElementById("pass").value;

    let ok=false;

    users.forEach(function(x){

        if(x.username==u && x.password==p)
        {
            ok=true;

            localStorage.setItem("user",u);
            localStorage.setItem("role",x.role);

            window.location="dashboard.html";
        }

    });

    if(!ok)
    {
        document.getElementById("msg").innerHTML=
        "Invalid company login";
    }

}

</script>

</body>
</html>
