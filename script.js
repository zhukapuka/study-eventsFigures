document.body.addEventListener("keydown", function (e) {
  console.log(e);
  let myEvent=e.keyCode;
switch (myEvent) {
    case Mycolor.greenMin:
        Mycolor.green=Math.abs(Mycolor.green-Mycolor.step);
        break;
    case Mycolor.redPlus:
        Mycolor.red=(Mycolor.red>=255)?255:Mycolor.red+Mycolor.step;
        break;
    case Mycolor.greenPlus:
        Mycolor.green=(Mycolor.green>=255)?255:Mycolor.green+Mycolor.step;
        break;
    case Mycolor.redMin:
        Mycolor.red=Math.abs(Mycolor.red-Mycolor.step);
        break;
    case Mycolor.bluePlus:
        Mycolor.blue=(Mycolor.blue>=255)?255:Mycolor.blue+Mycolor.step;
        break;
    case Mycolor.blueMin:
        Mycolor.blue=Math.abs(Mycolor.blue-Mycolor.step);
        break;
}
let currentColor="rgb("+Mycolor.red+","+Mycolor.green+","+Mycolor.blue+")";
    document.body.style.backgroundColor=currentColor;

Mycolor.info.innerHTML=currentColor;
let HexCol={
    red:Mycolor.red.toString(16),
  green:Mycolor.green.toString(16),
   blue:Mycolor.blue.toString(16)
};
HexCol.red=(HexCol.red.length==1)?"0"+HexCol.red:HexCol.red;
HexCol.green=(HexCol.green.length==1)?"0"+HexCol.green:HexCol.green;
HexCol.blue=(HexCol.blue.length==1)?"0"+HexCol.blue:HexCol.blue;

let Hexcolor="#"+HexCol.red+HexCol.green+HexCol.blue;


Mycolor.info2.innerHTML=Hexcolor;
});

let Mycolor={
    red:0,
    green:0,
    blue:0,
    step:1,
    greenMin:37,
    greenPlus:39,
    redMin:40,
    redPlus:38,
    blueMin:109,
    bluePlus:107,
    info:document.querySelector(".info"),
    info2:document.querySelector(".info2")
};

