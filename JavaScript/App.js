let First_Name = document.getElementById("First_Name");
let Last_Name = document.getElementById("Last_Name");
let email = document.getElementById("email");
let regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
let password = document.getElementById("password");
let Confrim_password = document.getElementById("Confrim_password");
let accept = document.getElementById("accept");
let message = document.getElementById("message");
let userData = [ ];

signUpHandler = () =>{
    if(First_Name.value === ""){
        message.innerHTML = "First Name is required!";
        message.style.color = "red";
        message.style.display = "block";
        First_Name.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    } else if (Last_Name.value === ""){
        message.innerHTML = "Last Name is required!";
        message.style.color = "red";
        message.style.display = "block";
        Last_Name.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    } else if (email.value === ""){
        message.innerHTML = "Email is required!";
        message.style.color = "red";
        message.style.display = "block";
        email.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    } else if (!email.value.match(regex)){
        message.innerHTML = "Please ener valid email adress";
        message.style.color = "red";
        message.style.display = "block";
        email.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if (password.value === ""){
        message.innerHTML = "password is required!";
        message.style.color = "red";
        message.style.display = "block";
        password.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if (password.value.length !== 6){
        message.innerHTML = "Enter password altlest 6 character";
        message.style.color = "red";
        message.style.display = "block";
        password.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if (Confrim_password.value === ""){
        message.innerHTML = "Confrim your password";
        message.style.color = "red";
        message.style.display = "block";
        Confrim_password.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if (!Confrim_password.value.match(password.value)){
        message.innerHTML = "Your password is not match!";
        message.style.color = "red";
        message.style.display = "block";
        Confrim_password.focus();
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    }else if (accept.checked == false){
        message.innerHTML = "Please accept";
        message.style.color = "red";
        message.style.display = "block";
        setTimeout(()=>{
            message.style.display = "none";
        }, 1000)
    } else{
        message.style.display = "block";
        message.style.color = "green";
        message.innerHTML = "Data is submitted succesfully ";
        setTimeout(() =>{
            message.style.display = "none";
            First_Name.value = "";
            Last_Name.value = "";
            email.value = "";
            password.value = "";
            Confrim_password.value = "";
            // accept.checked = false;
        }, 1000);
        obj = {
            First_Name : First_Name.value,
            Last_Name : Last_Name.value,
            email : email.value,
            password : password.value,
            Confrim_password : Confrim_password.value
        }
        userData.push(obj);
        console.log(userData)
        // console.log(userData.push(obj));
        
    }
}