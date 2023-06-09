var ad_id=document.querySelector(".advice-id");
var ad_text=document.querySelector("#advice-text q");
var dice=document.getElementById("dice");

window.onload=Showadvice();
dice.addEventListener("click",function(){
    Showadvice();
})
function Showadvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response=>response.json())
    .then((data)=>data.slip)
    .then((data)=>{
      ad_id.textContent=data.id;
      ad_text.textContent=data.advice ; 

    }
    )
}