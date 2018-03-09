<?php
  $connect = mysqli_connect('localhost','root','', 'bd_bike');

  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = md5($_POST['password']);
  $query = mysqli_query($connect, "INSERT INTO table_1 VALUES ('$name','$email','$password')");
?>
