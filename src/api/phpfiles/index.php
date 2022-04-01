<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
	case "GET":
		$sql = "SELECT * FROM CARRERA";
		$path = explode('/', $_SERVER['REQUEST_URI']);
		if(isset($path[3]) && is_numeric($path[3])) {
			$sql .= " WHERE id = :id";
			$stmt = $conn->prepare($sql);
			$stmt->bindParam(':id', $path[3]);
			$stmt->execute();
			$users = $stmt->fetch(PDO::FETCH_ASSOC);
		} else {
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

		}
		echo json_encode($users);
		break;

	case "PUT":
		$user = json_decode(file_get_contents('php://input'));
		$sql = "UPDATE CARRERA SET CAR_ID = :CAR_ID, CAR_NOMBRE_CARRERA = :CAR_NOMBRE_CARRERA WHERE id = :id";
		$stmt = $conn->prepare($sql);
		$stmt->bindParam(':id', $user->id);
		$stmt->bindParam(':CAR_ID', $user->CAR_ID);
		$stmt->bindParam(':CAR_NOMBRE_CARRERA', $user->CAR_NOMBRE_CARRERA);

		if($stmt->execute()) {
			$response = ['status' => 1, 'message' => 'Record created succesfully.'];
		} else {
			$response = ['status' => 0, 'message' => 'Failed to create record.'];
		}
		echo json_encode($response);
		break;
	
	case "POST":
		$user = json_decode(file_get_contents('php://input'));
		$sql = "INSERT INTO CARRERA(id, CAR_ID, CAR_NOMBRE_CARRERA) VALUES(null, :CAR_ID, :CAR_NOMBRE_CARRERA)";
		$stmt = $conn->prepare($sql);
		$stmt->bindParam(':CAR_ID', $user->CAR_ID);
		$stmt->bindParam(':CAR_NOMBRE_CARRERA', $user->CAR_NOMBRE_CARRERA);

		if($stmt->execute()) {
			$response = ['status' => 1, 'message' => 'Record updated succesfully.'];
		} else {
			$response = ['status' => 0, 'message' => 'Failed to update record.'];
		}
		echo json_encode($response);
		break;
	case "DELETE":
		$sql = "DELETE FROM CARRERA WHERE id = :id";
		$path = explode('/', $_SERVER['REQUEST_URI']);

		$stmt = $conn->prepare($sql);
		$stmt->bindParam(':id', $path[3]);

		if($stmt->execute()) {
			$response = ['status' => 1, 'message' => 'Record deleted succesfully.'];
		} else {
			$response = ['status' => 0, 'message' => 'Failed to delete record.'];
		}
		echo json_encode($response);
		break;
}
