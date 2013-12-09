<?php

require "eventFunctions.php";  


if (!($_SERVER['REQUEST_METHOD'] === 'GET')) {
	echo "Errore 405: metodo non permesso.";
	exit;
}

//esempio chiamata: 
//verifico i parametri della query
if (isset($_GET['scope']) and isset($_GET['type']) and isset($_GET['subtype']) and isset($_GET['lat'])and isset($_GET['lng'])and isset($_GET['radius'])and isset($_GET['timemin'])and isset($_GET['timemax'])and isset($_GET['status'])) {
        $scope = $_GET['scope'];
        $type = $_GET['type'];
        $subtype = $_GET['subtype'];
        $lat = $_GET['lat'];
        $lng = $_GET['lng'];
        $radius = $_GET['radius'];
        $timeMin = $_GET['timemin'];
        $timeMax = $_GET['timemax'];
        $status = $_GET['status'];

/*
if ($scope == "local") {
getLocalEvents($type,$subtype,$lat,$lng,$radius,$timeMin,$timeMax,$status); 
}
else{
//getRemoteEvents();
}*/

}
//chiamiamo la funzione senza parametri
else getLocalEvents();

?>
