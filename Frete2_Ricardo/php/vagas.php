<?php

$servername = "localhost";
$username = "root";
$password = "t1o5t1@@";

// Create connection
$conn = new mysqli($servername, $username, $password);
$var = array();

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

listaVagas();

$conn->close();

echo json_encode($var);

// ********** funcoes ************

function listaVagas() {
	global $conn;
	global $var;

	$sql = "SELECT * FROM SistemaCurriculum.vagas WHERE vagas.nome LIKE '$letra%'";
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
		
    	// output data of each row
	    while($row = $result->fetch_assoc()) {
	    	$vaga = array(
		        "nome"=>$row["nome"],
		        "empresa"=>$row["empresa"],
		        "local"=>$row["local"],
		        "qtdade"=>$row["qtdade"]
		    );

			array_push($var, $vaga);
	    }
	}
}

?>