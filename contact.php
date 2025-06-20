<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'mailuhemmanu@gmail.com';
    $subject = "Portfolio Contact Form Message from $name";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo '<div style="color:green;">Thank you! Your message has been sent.</div>';
    } else {
        echo '<div style="color:red;">Sorry, there was a problem sending your message. Please try again later.</div>';
    }
}
?>

