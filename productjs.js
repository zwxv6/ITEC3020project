var topp = "p1";

function toTop(newTop) {

  domTop = document.getElementById(topp).style;
  domNew = document.getElementById(newTop).style;

  domTop.zIndex = "0";
  domNew.zIndex = "10";
  topp = newTop;
}

function getVersions(data){
colormenu = document.getElementById("colorselect");
selectedColor = colormenu.options[colormenu.selectedIndex].value;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
if(xhr.readyState == 4 && xhr.status == 200){
var result = xhr.responseText;
var version = result.split(",");
currentVersion = version[0];
currentPrice = version[1];
var versionmenu = document.getElementById("versionselect");
versionmenu.options.add(new Option(currentVersion, currentVersion));
var versionmenu = document.getElementById("Price");
versionmenu.options.add(new Option(currentPrice, currentPrice));
}
}
xhr.open("GET", "showVersion.php?selectedColor=" + selectedColor, true);
xhr.send();
}

function viewcart(){
var dom = document.getElementById("cart");
var addOne = document.createElement("div");
dom.appendChild(addOne);
addOne.style.border ="thin  solid  black";
addOne.style.width = 300 + "px";
addOne.style.height = 300 + "px";
addOne.style.position = "Absolute";
addOne.style.backgroundColor = "#00BFFF";
addOne.setAttribute('id','realcart');
addOne.innerHTML = 'Your Cart: ';
}

function addobject(){
Color = document.getElementById("colorselect");
text = Color.options[Color.selectedIndex].value;
var dom = document.getElementById("realcart");
if(text == "White"){
dom.innerHTML = dom.innerText+ '  White, Standard, $1500;';
}else if(text == "Grey"){
dom.innerHTML = dom.innerText+ '  Grey, Economic, $1200;';
}else if(text == "Black"){
dom.innerHTML = dom.innerText+ '  Black, Top-Level, $2500;';
}
}