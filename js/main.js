
let bars = document.querySelector(".fa-bars");
let navCollapse = document.querySelector(".nav-collapse");

let toggle = false;
bars.addEventListener("click",()=>{
    if(toggle == false){
        toggle = true;
        navCollapse.style.display ="flex";
    }
    else{
        toggle = false;
        navCollapse.style.display ="none";
    }
});

let texts = document.querySelectorAll(".text");

texts.forEach((el)=>{
    el.addEventListener("change",(e)=>{
        let obj = e.target;
    
        if(obj.classList.contains("select")){
            let val = parseInt(obj.value);  
            let pret = obj.parentNode.children[3].children[0];
            pret.innerText = `${val * 10}$`;
        }
    });
})


let addContainer = document.querySelector(".add-section");
let closeBtn = document.querySelector(".fa-times");
let addBtn = document.querySelector(".fa-plus-square");
let toggle2 = false;

addBtn.addEventListener("click",()=>{
    if(toggle2 == false){
        addContainer.style.display = "flex";
        toggle2 = true;
    }
});

closeBtn.addEventListener("click",()=>{
    if(toggle2 == true){
        addContainer.style.display = "none";
        toggle2 = false;
    }
});