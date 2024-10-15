// genrate rendom color

const randomColor  = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }    
    return color;
};
let intervel
// console.log(randomColor())
const startChangingColor = function(){
   
   if(!intervel){
    intervel = setInterval(changingColor, 1000)
   }
   function changingColor(){
    document.body.style.background = randomColor()
 }
}

const stopChangingColor = function(){
    clearInterval(intervel)
    intervel = null;
}

document.querySelector("#start").
addEventListener("click",startChangingColor)

document.querySelector("#stop").
addEventListener("click",stopChangingColor)