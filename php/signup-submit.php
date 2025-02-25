<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database connection variables
    $host = 'localhost';
    $db = 'fixit_db'; // Database name
    $user = 'root'; // The default XAMPP username
    $pwd = ''; // Default password for XAMPP is usually empty

    // Creating the connection
    $conn = new mysqli($host, $user, $pwd, $db);

    // Validation check for connection
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }

    // Capturing data from the form
    $fullName = $_POST['flname']; 
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
    $tel = $_POST['tel']; // Corrected from $_Post to $_POST
    $is_businessAcct = isset($_POST['check_business']) ? 1 : 0;//it's a checkbox

    // Split the full name into parts
    $nameParts = explode(" ", $fullName);
    $name = $nameParts[0]; // First name
    $surname = end($nameParts); // Last name

    // Prepare and bind the SQL statement
    $stmnt = $conn->prepare("INSERT INTO registerdata_tb (name, surname, email, pwd, tel, is_businessAcct) VALUES (?, ?, ?, ?, ?, ?)");
    $stmnt->bind_param("ssssis", $name, $surname, $email, $pwd, $tel, $is_businessAcct); // Corrected the binding types

    // Executing the statement
    if ($stmnt->execute()) {
        echo "<script>alert('Data Added Successfully')</script>";
    } else {
        echo "<script>alert('Error: " . $stmnt->error . "');</script>";
    }

    // Closing the statement and connection
    $stmnt->close();
    $conn->close();
} else {
    echo "<script>alert('Invalid request method.');</script>";
}