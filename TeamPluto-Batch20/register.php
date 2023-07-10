<?php
echo "started";
// Retrieve form data
$teamname = $_POST['teamname'];
$teamleadname = $_POST['teamleadname'];
$teamleademail = $_POST['teamleademail'];
$teamleadno = $_POST['teamleadno'];
$options = $_POST['options'];
$team1name = $_POST['team1name'];
$team1email = $_POST['team1email'];
$team2name = $_POST['team2name'];
$team2email = $_POST['team2email'];
$team3name = $_POST['team3name'];
$team3email = $_POST['team3email'];
$optradio = $_POST['optradio'];

// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "web_kode";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL statement to insert form data into the database
$stmt = $conn->prepare("INSERT INTO registeration (teamname, teamleadname, teamleademail, teamleadno, options, team1name, team1email, team2name, team2email, team3name, team3email, optradio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssdssssssss", $teamname, $teamleadname, $teamleademail, $teamleadno, $options, $team1name, $team1email, $team2name, $team2email, $team3name, $team3email, $optradio);
$stmt->execute();

$stmt->close();
$conn->close();
?>
