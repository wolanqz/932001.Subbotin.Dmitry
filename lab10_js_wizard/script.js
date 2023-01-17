const curtain = document.querySelector(".curtain");
const animal = document.querySelector("#animal");
const magic = document.querySelector(".magic");
const lamp = document.querySelector(".lamp");
const action =  document.querySelector(".action");
const light = document.querySelector(".light");

curtain.addEventListener("click", () => {
    curtain.classList.add("disappear");
    console.log(curtain.classList);
})

magic.addEventListener("click", () =>{
    animal.style.top = "110px";
    if (animal.classList.contains("bunny")){
        setTimeout(() => {animal.classList = "dove"}, 400);
    } else{
        setTimeout(() => {animal.classList = "bunny"}, 400);
    }
    setTimeout(() => {animal.style.top = "0px";}, 400);
})

lamp.addEventListener("click", () =>{
    if (action.style.visibility == "hidden" || action.style.visibility == ""){
        action.style.visibility = "visible";
        light.style.visibility = "visible";
    } else {
        action.style.visibility = "hidden";
        light.style.visibility = "hidden";
    }
})