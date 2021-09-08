<?php

$recepient = "support@ks-i.ru";
$siteName = "ks-i.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["e-mail"]);
$check_type = $_POST["check_type"];
$message = "Имя: $name \nТелефон: $phone \nЭлектронная почта: $email \nТип работ: $check_type";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>