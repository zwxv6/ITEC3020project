<?php
$accountNameArray = array("1" => "steve");
$accountPasswordArray = array("1" => "Zwx12!");
header("Content-Type: text/plain");
$name = $_GET["name"];
$password = $_GET["password"];
if(in_array($name, $accountNameArray)){
if(in_array($password, $accountPasswordArray)){
echo "true";
}else{
echo "false";
}
}else{
echo "false";
}
?>