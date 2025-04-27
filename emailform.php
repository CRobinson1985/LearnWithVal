<!-- <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data["name"];
    $email = $data["email"];
    $comment = $data["comment"];

    // Prepare the email
    $to = "zeroskateboarder92828@yahoo.com"; // Replace with your email address
    $subject = "New Form Submission";
    $message = "Name: " . $name . "\nEmail: " . $email . "\nComment" . $comment;
    $headers = "From: " . $email . "\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?> -->