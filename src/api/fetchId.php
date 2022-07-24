<?php
 // CREATE CONNECTION
$conn = mysqli_connect("sql208.your-server.de", "blogs_admin", "S1QR7Y4DXbmdi36u", "blogs_db");

 // FETCH DATA
// $id = "";

$sql = mysqli_query($conn, "SELECT * FROM blogs WHERE id= 2");

// STORE DATA IN result VARIABLE
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

// var_dump($result);

exit(json_encode($result));
?>