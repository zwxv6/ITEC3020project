function chkPassword() {
  var password = document.getElementById("Password");

  var pos = password.value.search( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*]).{6,}$/);
  if (pos != 0) {
    alert("Wrong Type of Password");
    return false;
 }else
    alert("Password Tpye Correct");
    return true;
}

function Login(){
name =  document.getElementById("UserName").value;
password = document.getElementById("Password").value;
var validinformation=new Array(2);
validinformation[0] = name;
validinformation[1] = password;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
if(xhr.readyState == 4 && xhr.status == 200){
var result = xhr.responseText;
if(result == "true"){
alert("Login Successfully");
window.location.href="product.html";
}else if(result == "false"){
alert("Invlaid User Name or Password");
}   
}
}
xhr.open("GET", "login.php?name=" + name + "&password=" +password, true);
xhr.send(null);
}
