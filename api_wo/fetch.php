<?php
 // CREATE CONNECTION
 $server = "server";
 $user = "user";
 $pass = "pass";
 $db = "db_name";
         
 $conn = mysqli_connect($server, $user, $pass, $db);

 // FETCH DATA
$sql = mysqli_query($conn, "SELECT * FROM blogs");

// STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

// var_dump($result);

exit(json_encode($result));
?>