<?php 
include "connection.php";

$title=$_POST["title"];
$dat=$_POST["date"];
$Loc=$_POST["loct"];
$catg=$_POST["catg"];
$pric=$_POST["price"];
$capcty=$_POST["capc"];
$dec=$_POST["dec"];


$sql=$conn->prepare("INSERT INTO events  (title, eventdate, eventlocation, price, category, capacity, descripton) VALUES (?,?,?,?,?,?,?)");
$sql->bind_param("sssisis",$title,$dat,$Loc,$pric,$catg,$capcty,$dec);
$sql->execute();

header("Location:front-page2.php");
?>
