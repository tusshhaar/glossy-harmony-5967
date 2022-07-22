document.querySelector("form").addEventListener("submit",data)

let signupData = JSON.parse(localStorage.getItem("objDetails"))||[];

function data(e){
    e.preventDefault();
    
    let obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pass: document.getElementById("pass").value
    }
    if(obj.name == "" || obj.email == "" || obj.pass == ""){
        return alert("Something went wrong")
    }
    signupData.push(obj);
    localStorage.setItem("objDetails",JSON.stringify(signupData))
}