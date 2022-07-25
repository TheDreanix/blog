<?php
 // CREATE CONNECTION
 $server = "server";
 $user = "user";
 $pass = "pass";
 $db = "db_name";
         
 $conn = mysqli_connect($server, $user, $pass, $db);

// FETCH DATA 
$refer = $_SERVER['HTTP_REFERER'];
 
$id = (int) filter_var($refer, FILTER_SANITIZE_NUMBER_INT);

$sql = mysqli_query($conn, "SELECT * FROM blogs WHERE id= $id");

// STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));
?>