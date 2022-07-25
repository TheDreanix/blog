<?php

$server = "server";
$user = "user";
$pass = "pass";
$db = "db_name";
        
$conn = mysqli_connect($server, $user, $pass, $db);
        
if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}           

$refer = $_SERVER['HTTP_REFERER'];
 
$id = (int) filter_var($refer, FILTER_SANITIZE_NUMBER_INT);
        
$sql = "DELETE FROM blogs WHERE id= $id";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
 
    die(mysqli_error($conn));
}

mysqli_stmt_execute($stmt);
?>