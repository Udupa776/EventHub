<?php 
$db="railway";
$pass="raiway db pass here";
$host="caboose.proxy.rlwy.net";
$user="root";
$port=26088;

$conn=mysqli_connect($host,$user,$pass,$db,$port);

if(!$conn)
{
   ?>
   <script>
    location.reload();
    </script>
    <?php
   
}
?>