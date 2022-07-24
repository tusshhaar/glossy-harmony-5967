let images = [
    // "https://c4.wallpaperflare.com/wallpaper/7/761/254/urban-colorful-night-times-square-wallpaper-preview.jpg" ,

    "https://wallpaperaccess.com/full/472038.jpg" ,

    "https://wallpaperaccess.com/full/2210599.jpg" ,

    "https://free4kwallpapers.com/uploads/originals/2020/05/02/street-wallpaper.jpg",

    // "https://wallpaperaccess.com/full/1212105.jpg" ,
]

let image = document.getElementById("slideImage");

document.getElementById("left").addEventListener("click",leftfunction);

document.getElementById("right").addEventListener("click",rightfunction);

let index = 0;

function rightfunction(){
    index++;
    if(index == images.length){
        index = 0;
    }
    image.src = images[index]
}

function leftfunction(){
    index--;
    if(index<0){
        index = images.length-1;
    }
    image.src = images[index]
}
