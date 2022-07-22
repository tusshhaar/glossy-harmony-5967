
document.querySelector("form").addEventListener("submit", login)

let signupData = JSON.parse(localStorage.getItem("objDetails")) || [];

let arr = [];

function login(e){
    e.preventDefault()
    let res = true;
    let obj = {
        email : document.getElementById("email").value,
        pass : document.getElementById("pass").value
    }
    for(let i=0; i<signupData.length; i++){
        if(obj.email == signupData[i].email  && obj.pass == signupData[i].pass){
            res = true;
            arr.push(obj);
            localStorage.setItem("logged",JSON.stringify(signupData[i]))
            alert ("Login Successful")
            window.location.href = "home.html"
            break;
        }else{
            res = false;
            continue;
        }
    }
    if(res == false){
        alert("Wrong Credentials")
    }
}


