<?php
$list = array(
    1 => "Standard,1500",
    2 => "Economic,1200",
    3 => "Top-Level,2500",
);
header("Content-Type: text/plain");
$selectedColor = $_GET["selectedColor"];
if ($selectedColor == "White"){
echo $list[1];
}
elseif($selectedColor == "Grey"){
echo $list[2];
}
elseif($selectedColor == "Black"){
echo $list[3];
}
else{
echo " ";
}
?>