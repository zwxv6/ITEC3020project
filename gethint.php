<?php
// Array with names
$a[] = "Apple";
$a[] = "Android";
$a[] = "Burberry";
$a[] = "Balenciaga";
$a[] = "Canada Goose";
$a[] = "CK";
$a[] = "Dior";
$a[] = "Dickies";
$a[] = "Ecowin";
$a[] = "FILA";
$a[] = "FENDI";
$a[] = "Gucci";
$a[] = "GIVENCHY";
$a[] = "Hermes";
$a[] = "Hennessy";
$a[] = "Iphone";
$a[] = "Ipad";
$a[] = "JULIUS";
$a[] = "Jordan";
$a[] = "KIA";
$a[] = "Kanebo";
$a[] = "Lexus";
$a[] = "LouisVuitton";
$a[] = "Nike";
$a[] = "New Balance";
$a[] = "Olympic";
$a[] = "PIAGET";
$a[] = "Panerai";
$a[] = "Adidas";
$a[] = "RESHAKE";
$a[] = "Nintendo";
$a[] = "Sony";
$a[] = "HP";
$a[] = "ASUS";
$a[] = "HuaWei";
$a[] = "Lenovo";
$a[] = "Dell";
$a[] = "Valentino";
$a[] = "Samsonite";
$a[] = "Zegna";
$a[] = "Missoni";
$a[] = "UNIQLO";
$a[] = "Tiffany";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from "" 
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) { //Case-insensitive strstr (Find the first occurrence of a string)
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name"; //Concatenation assignment
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no suggestion" : $hint;
?>