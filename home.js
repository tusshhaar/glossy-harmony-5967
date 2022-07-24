document.getElementById("market").addEventListener("click",content);
document.getElementById("communication").addEventListener("click",communication)
document.getElementById("promotion").addEventListener("click",promotion)
document.getElementById("culture").addEventListener("click",culture)
document.getElementById("local").addEventListener("click",local)


// function content(){
    // document.getElementById("card2").innerHTML = "";
    
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("video")
        image.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4")
        image.controls = "autoplay"
        div.append(image)
        document.getElementById("card2").append(div)    
    }
// }

function communication(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("video")
        image.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Coral%20Reef%20Protection.mp4")
        image.controls = "autoplay"
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}

function promotion(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("video")
        image.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Remote%20Auditing.mp4")
        image.controls = "autoplay"
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}

function culture(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("video")
        image.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future.mp4")
        image.controls = "autoplay"
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}

function local(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("video")
        image.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/homepage/Localization/DNV%20GL.mp4")
        image.controls = "autoplay"
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}

function content(){
    document.getElementById("card2").innerHTML = "";
    for(let i=0; i<6; i++){
        let div = document.createElement("div")
        let image = document.createElement("video")
        image.setAttribute("src","https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4")
        image.controls = "autoplay"
        div.append(image)
        document.getElementById("card2").append(div)    
    }
}





