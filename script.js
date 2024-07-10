const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["violet","Green","yellow","purple","pink","red","gold","blue"]
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});