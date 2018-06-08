<?php
    $name = $_POST['name'];
    $address = $_POST['address'];
    $phoneNumber = $_POST['phoneNumber'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From:';
    $subject = 'New Maintenance Request';

    $body = "From: $email\n\nProperty address: $address\n\nE-Mail: $email\n\nCustomer Phone Number: $phoneNumber\n\nMessage:\n\n $message";

	if ($_POST['submit']) {
        if (mail ('mkaminski69@gmail.com', 'New Submission', $body)) {
            echo "<script type='text/javascript'>alert('Your submission has been received!'); window.history.go(-1);</script>";
	} else {
	    echo '<p>Something went wrong, go back and try again!</p>';
	}
?>
