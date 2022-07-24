<?php

    
$data = json_decode(file_get_contents('php://input'), true);

foreach( $data as $key => $value ){
    ${$key . $i} = $value;
    ${$i . '_' . $key} = $value;
}

$server = "sql208.your-server.de";
$user = "blogs_admin";
$pass = "S1QR7Y4DXbmdi36u";
$db = "blogs_db";
        
$conn = mysqli_connect($server, $user, $pass, $db);
        
if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error());
}           
        
$sql = "INSERT INTO blogs (title, body, author)
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
?>