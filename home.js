document.getElementById("market").addEventListener("click",content);
document.getElementById("communication").addEventListener("click",communication)
document.getElementById("promotion").addEventListener("click",promotion)
document.getElementById("culture").addEventListener("click",culture)
document.getElementById("local").addEventListener("click",local)

// function content(){
    // document.getElementById("card2").innerHTML = "";
    
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src","https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg")
        div.append(image)
        document.getElementById("card2").append(div)    
    }
// }

function communication(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src","https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000")
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}

function promotion(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src","https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/07/image_rec_lib_banner.jpg")
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}

function culture(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src","https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg")
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}

function local(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src","https://ik.imagekit.io/ikmedia/backlit.jpg")
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}

function content(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("img")
        image.setAttribute("src","https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg")
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}





