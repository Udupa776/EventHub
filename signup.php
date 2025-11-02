<?php
$fname=$_POST["fname"];
$lname=$_POST["lname"];
$mail=trim($_POST["mail"]);
$pass=$_POST["pass"];
$phno=$_POST["phno"];
$hashpass=password_hash($pass,PASSWORD_DEFAULT);

include "connection.php";

$n=random_int(100,1000);
$fullname=$fname." ".$lname;
$uname=$fname.$n;
$sql=$conn->prepare("INSERT INTO users (fullname,username,mail,phno,pass) VALUES (?,?,?,?,?)");
$sql->bind_param("sssis",$fullname,$uname,$mail,$phno,$hashpass);
if($sql->execute()){
setcookie("name",$uname,time()+(360*12),"/");
header("Location:front-page2.php");
}
else
    echo "<h1 please enter valid credentails";

?>