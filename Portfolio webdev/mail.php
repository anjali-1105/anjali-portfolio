<?php


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$mailheader = "From:" . $name . "<" . $email . ">\r\n";

$recepient = "anjali.prajapati7575@gmail.com";

mail($recepient, $subject, $message, $mailheader)
    or die("Error!");

echo '

';    
?>'