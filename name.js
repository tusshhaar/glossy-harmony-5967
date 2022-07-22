
let data = JSON.parse(localStorage.getItem("logged"));

// console.log(data);
let div = document.getElementById("login");

display(data)

function display(data){
    // 
    if(data != null){
        document.getElementById("login").innerHTML = "";
        let p = document.createElement("p");
        p.innerText = data.name;
        div.append(p);
    }

}