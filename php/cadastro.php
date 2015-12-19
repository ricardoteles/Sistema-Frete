<?php

$servername = "localhost";
$username = "root";
$password = "t1o5t1@@";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// $_POST['up']= "";

if($_POST['up']) {
  insereCadastroBD($conn, "ricardo", "23123213", "rico@hotmail.com", "1234");
}

$conn->close();

/*********** funcoes *************/
function insereCadastroBD($conn, $nome, $cpf, $email, $senha) {
  $sql = "INSERT INTO SistemaCurriculum.InfoCandidato (nome, cpf, email, senha) VALUES 
        ('".$_POST['nome']."', '".$_POST['cpf']."', '".$_POST['email']."', '".$_POST['senha']."')";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }     
}

?>