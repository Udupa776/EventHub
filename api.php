<?php 
include "connection.php";
$n=3;
$sql=$conn->prepare("SELECT * FROM events ");

$sql->execute();
$res=$sql->get_result();
while($r=$res->fetch_assoc()){
  $id[]=$r["id"];
  $date[]=$r["eventdate"];
  $loc[]=$r["eventlocation"];
  $price[]=$r["price"];
  $title[]=$r["title"];
  $capacity[]=$r["capacity"];
  $cat[]=$r["category"];
  $dec[]=$r["descripton"];
}
$a=[
  ["id"=>$id],
  ["date"=>$date],
  ["location"=>$loc],
  ["price"=>$price],
  ["title"=>$title],
  ["capacity"=>$capacity],
  ["catagory"=>$cat],
  ["description"=>$dec],
];
header("Content-Type: application/json");

  echo json_encode($a);
?>
