<?php
header("Access-Control-Allow-Origin: *");
require __DIR__ . '/vendor/autoload.php';
use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

$sender_name = $_ENV["REACT_APP_SENDER_NAME"];
$sender_mail = $_ENV["REACT_APP_SENDER_MAIL"];
$receiver_name = $_ENV["REACT_APP_CONTACT_NAME"];
$receiver_mail = $_ENV["REACT_APP_CONTACT_MAIL"];

    if (isset($_POST['lastname']) && isset($_POST['firstname']) && isset($_POST['mail']) && isset($_POST['message'])) {
        if(!empty($_POST['lastname']) && !empty($_POST['firstname']) && !empty($_POST['mail']) && filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL) && !empty($_POST['message'])) {
            //Variables
            $first_name = htmlspecialchars($_POST['firstname']);
            $last_name = htmlspecialchars($_POST['lastname']);
            $mail_address = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);
            $message_content = htmlspecialchars($_POST['message']);
            
            //Contenu mail
            $sender = $sender_name . ' <' . $sender_mail . '>';
            $header  = 'MIME-Version: 1.0' . "\r\n";
            $header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $header .= 'From: '.$sender . "\r\n";
            $object = 'Contact - J-D25';
            $message = '<p>Message envoyé depuis la page Contact du portfolio de J-D25</p>
            <p><b>Nom et prénom : </b>' . $last_name . ' ' . $first_name . '</p>
            <p><b>Email : </b>' . $mail_address . '</p>
            <p><b>Message : </b>' . $message_content . '</p>';
            $receiver = $receiver_name . ' <' . $receiver_mail . '>';
            $response = mail($receiver, $object, $message, $header);
            if ($response===true){
                echo json_encode(["responseServer"=>true, "responseMailer"=>true]);
            }else{
                echo json_encode(["responseServer"=>true, "responseMailer"=>false]);
            }
        } else {
            echo json_encode(["response"=>false]);
        }
    }
?>
