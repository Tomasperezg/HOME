
<?php
    //Pulling values that were entered into the form.

var url = $form.attr("action");
$name = $_POST['visitorName'];
$email = $_POST['visitorEmail'];
$message = $_POST['visitorMsg'];

//Structure of email that I will receive with the form info
$email_from = "donoreplytothisemail@gmail.com";
$email_subject = 'New Contact Form Message';
$email_body = "You have received a new message from $name. \n";
                "Here is the message: \n $message";

//Sending to my email address and using the mail function
    $to = "perezgantomas@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email \r\n";
mail($to,$email_subject,$email_body,$headers);

//Validating the form
function IsInjected($str)
{
    $injections = array('(\n+)',
                        '(\r+)',
                        '(\t+)',
                        '(\%0A+)',
                        '(\%0D+)',
                        '(\%08+)',
                        '(\%09+)',
                        );
    $inject = join('|', $injections);
    $inject = "/$inject/i";

    if(preg_match($inject,$str))
    {
        return true;
    }
    else
    {
        return false;
    }

}

if(IsInjected($email))
{
    echo "Bad email value!";
    exit;
}





?>

//HTML confirmation that message was sent.
    <html lang='en'>
    <h1>Your email has been sent. Thank-you!</h1>



    </html>
