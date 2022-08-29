<?php
header("Access-Control-Allow-Origin: *");
    if (isset($_POST['lname']) && isset($_POST['fname']) && isset($_POST['mail']) && isset($_POST['message'])) {
        if(!empty($_POST['lname']) && !empty($_POST['fname']) && !empty($_POST['mail']) && filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL) && !empty($_POST['message'])) {
            //Variables
            $firstName = htmlspecialchars($_POST['fname']);
            $lastName = htmlspecialchars($_POST['lname']);
            $mailAddress = filter_var($_POST['mail'], FILTER_SANITIZE_EMAIL);
            $messageContent = htmlspecialchars($_POST['message']);
            
            //Contenu mail
            $sender=$lastName . ' ' . $firstName . ' <' . $mailAddress.'>';
            $header  = 'MIME-Version: 1.0' . "\r\n";
            $header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $header .= 'From: '.$sender . "\r\n";
            $object = 'Contact - J-D25';
            $message = '<p>Message envoyé depuis la page Contact du portfolio de J-D25</p>
            <p><b>Nom et prénom : </b>' . $lastName . ' ' . $firstName . '</p>
            <p><b>Email : </b>' . $mailAddress . '</p>
            <b>Message : </b>' . $messageContent . '</p>';
            $receiver = 'Jessy-Daniel <j.auzanneau@codeur.online>';
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