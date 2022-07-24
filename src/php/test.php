<?php
include_once
$json = file_get_contents('php://input');
$obj = json_decode($json, true);


echo $obj;
echo "Text";