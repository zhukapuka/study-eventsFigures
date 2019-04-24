function CreateFigure(className,e) {
    let div=document.createElement("div");
    let diametr=Math.floor(Math.random()*300+50);
    div.style.width=diametr+"px";
    div.style.height=diametr+"px";
    div.style.top=e.clientY-diametr/2+"px";
    div.style.left=e.clientX-diametr/2+"px";
    div.classList.add(className);
    document.body.appendChild(div);
}
function EventClick(e){
  //create circle
   CreateFigure("circle",e);

    console.log(e);
}
function EventContext(e) {
    //create square
    //random height,width(50-350)
    e.preventDefault();
    CreateFigure("square",e);

}
function CenterClick(e){
   e.which==2?CreateFigure("diamond",e):"";
    console.log(e);
}

document.body.addEventListener("click",EventClick);
document.body.addEventListener("contextmenu",EventContext);
document.body.addEventListener("mousedown",CenterClick);
