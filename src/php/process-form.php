<?php


$json = file_get_contents('php://input');
$obj = json_decode($json, true);


$title = $_POST["title"];
$body = $_POST["body"];
$author = $_POST["author"];

$host = "localhost";
$dbname = "blogs";
$username = "root";
$password = "";
        
$conn = mysqli_connect(hostname: $host,
                       username: $username,
                       password: $password,
                       database: $dbname);
        
if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}           
        
$sql = "INSERT INTO blog (title, body, author)
        VALUES (?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
 
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "sss",
                       $title,
                       $body,
                       $author);

mysqli_stmt_execute($stmt);