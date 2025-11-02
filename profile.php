<?php 

include "connection.php";

 $username=$_COOKIE["name"];

$sql=$conn->prepare("SELECT * FROM users WHERE username=?");
$sql->bind_param("s",$username);
$sql->execute();

$result=$sql->get_result();

$columns=$result->fetch_assoc();
$id=$columns["id"];
$nme=$columns["fullname"];
$p=$columns["phno"];
$m=$columns["mail"];
echo "
<!DOCTYPE html>
<html >
<head>
  
  <title>Profile</title>
  <link href='profile.css' rel='stylesheet'>
</head>
<body>
 <div id='proff'>
  <h1 class='data'>User ID: $id</h1>
  <h1 class='data'>User Name: $username</h1>
  <h1 class='data'>Email: $m</h1>
 
  
  <h1 class='data'>FullName: $nme</h1>
  
  <h1 class='data'>Contact Number: $p</h1>
  </div>
</body>
</html>
"
?>
