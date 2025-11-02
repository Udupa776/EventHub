<?php 
include "connection.php";
$enteredpass=$_POST["pass"];
$mail=$_POST["mail"];
$sql=$conn->prepare("SELECT * FROM users WHERE mail=?");
$sql->bind_param("s",$mail);
$sql->execute();
$res=$sql->get_result();

if($r=$res->fetch_assoc())
{
    
    if(password_verify($enteredpass,$r['pass']))
    {
        header("Location:front-page2.php");
        setcookie("name",$r['username'],time()+(360*12),"/");
    }
    else
    {
        ?>
        <script>
            alert("Your password is wrong please enter password again");
            window.location.href="login.html";
        </script>
        <?php
    }
}
else{

    ?>
<script>
            alert("You havenot sign up yet please sign up for login ");
        </script>
<html>
    <button onclick="window.location.href='signup.html'">Sign up</button>
</html>   
<?php     
}
?>