<?php

if(isset($_POST['email'])) {
    $email_to = "contact@janhamara.com";
    $email_to_2 = "hamara.jan18@gmail.com";
    $email_subject = "New message from [www.janhamara.com]";
    function died($error) {
        // Even though I validate data at front-end with Javascript, it is generally advised to test data in back end too
        // Therefore I verify correctness of data with PHP too, just to demonstrate how it is possible to be done
        echo "Sorry, but there has been an error in your contact form!";
        echo "These errors show below:<br /><br />";
        echo $error."<br /><br />";
        echo "Please return to the contact form and fix these errors<br /><br />";
        die();
    }
    // if validation expected data exists
    $name = $_POST['fullname'];
    $mail = $_POST['email'];
    $message = $_POST['message'];
    $email_from = "contact@janhamara.com";
    $error_message = "";
    // Email Regex
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    $string_exp = "/^[A-Za-z .'-]+$/";
    $email_message = "New message from [www.janhamara.com]:\n\n";
    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }
    $email_message .= "---------------------------------------------------------\n\n";
    $email_message .= "The message comes from:\n\n";
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($mail)."\n\n";
    $email_message .= "---------------------------------------------------------\n\n";
    $email_message .= "".clean_string($message)."\n\n";
    $email_message .= "---------------------------------------------------------\n";
// create email headers
    $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();


    if (@mail($email_to, $email_subject, $email_message, $headers)) {
        echo "SEND MAIL @ contact@janhamara.com: Success";
    } else {
        echo "SEND MAIL @ contact@janhamara.com: Failed";
    }
    if (@mail($email_to_2, $email_subject, $email_message, $headers)) {
        echo "SEND MAIL @ hamara.jan18@gmail.com: Success";
    } else {
        echo "SEND MAIL @ hamara.jan18@gmail.com: Failed";
    }
}
?>
