<?php
ini_set("mail.log", "/tmp/mail.log");
ini_set("mail.add_x_header", TRUE);
//variables
$name = strip_tags(htmlspecialchars($_POST['Name']));
$email_address = strip_tags(htmlspecialchars($_POST['Email']));
$message = strip_tags(htmlspecialchars($_POST['Message']));
// Create the email and send the message
$to = 'perezgantomas@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from example... contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: donoreplytothisemail@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
if(mail($to,$email_subject,$email_body,$headers)){ echo "Mail sent!";} else{ echo "Error, check your logs."; }
return true;
