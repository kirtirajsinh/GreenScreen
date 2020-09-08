var fgImage = null, bgImage=null , canvas1  ,canvas2;
function uploadFore(){
  var foreImg = document.getElementById("foreImg");
  fgImage = new SimpleImage(foreImg);
  canvas1 = document.getElementById("c1");
  fgImage.drawTo(canvas1);
}
function uploadBack(){
  var backImg = document.getElementById("backImg");
  bgImage = new SimpleImage(backImg);
   canvas2 = document.getElementById("c2");
  
  bgImage.drawTo(canvas2);
  
}
function createCom(){
  var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
  if(fgImage == null || !fgImage.complete()){
    alert("fgImage not uploaded or null");
    return;
  }

if(bgImage == null || !bgImage.complete()){
  alert("BgImage is null or not uploaded");
  return;
}
 setSize1();
for(var pixel of fgImage.values()){
  var x =pixel.getX();
  var y = pixel.getY();
  if(pixel.getGreen() > (pixel.getRed()+pixel.getBlue())){
    var bgPixel = bgImage.getPixel(x,y);
    output.setPixel(x,y,bgPixel);
  }else{
    output.setPixel(x,y,pixel);
  }
}
  output.drawTo(canvas1);
  var context2 = canvas2.getContext("2d");
  context2.clearRect(0,0,canvas2.width,canvas2.height);
}
function clearCanvas(){
 var context1 = canvas1.getContext("2d");
 var context2 = canvas2.getContext("2d");
 context1.clearRect(0,0,canvas1.width,canvas1.height);
context2.clearRect(0,0,canvas2.width,canvas2.height);
document.getElementById("foreImg").value = "";
document.getElementById("backImg").value = "";
}

function setSize1(){
  bgImage.setSize(fgImage.getWidth(),fgImage.getHeight());
  return;
  
}