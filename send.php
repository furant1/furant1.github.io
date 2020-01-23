<?php
$pwd=file_get_contents("password.txt");
if($_POST['pass']==$pwd){
header("Location: 4rkivv.html");
}
else{
echo("<center><p>Feil passord</p></center>");
}


?></p>