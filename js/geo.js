//Funzione chiamata in body - onload e con il tasto Ricarica
function geo_and_call() {
	//get_user_data(false);//prelevo parametri dell'utente da database
	//$('#bar_username').html("Benvenuto");
	//set_userdata_function();//setta lo scaricamente della pagina come salvataggio dei dati nel database
	init();//crea la mappa con i parametri globali
	//gotPosition(pos); // Geolocalizzami

	//initialize();//cambia il centro in base alla geolocalizzazione
	//clearMapMarkers();
	//effettua la prima ricerca
	//getEvents(scope, type, subtype, lat, lng, radius, timemin, status, false, false);
	//getEvents("remote", type, subtype, lat, lng, radius, timemin, status, true, false);
}


//Inizializza mappa
function init() {
	var mapOptions = {
	  center: new google.maps.LatLng(44.496138,11.342325),
	  zoom: 14,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', init);

	navigator.geolocation.getCurrentPosition(
		gotPosition,
		errorGettingPosition,
		{'enableHighAccuracy':true,'timeout':10000,'maximumAge':0}
	);

// Rileva mia posizione
		function gotPosition(pos)  {
			var outputStr =
				"latitude: "+ pos.coords.latitude +" | "+
				"longitude: "+ pos.coords.longitude +" | "+
				"accuracy: "+ pos.coords.accuracy +" | "+

				//"altitude: "+ pos.coords.altitude +"<br>\n"+
				//"altitudeAccuracy: "+ pos.coords.altitudeAccuracy +"<br>\n"+
				//"heading: "+ pos.coords.heading +"<br>\n"+
				"speed: "+ pos.coords.speed +"";

			document.getElementById('output').innerHTML = outputStr;

			var yourlocation = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
			map.setCenter(yourlocation);

			marker = new google.maps.Marker({
				map:map,
				draggable:true,
				animation: google.maps.Animation.DROP,
				position: yourlocation
			});

		}

		function errorGettingPosition(err) {
			if(err.code == 1) {
				alert("L'utente non ha autorizzato la geolocalizzazione");
			} else if(err.code == 2) {
				alert("Posizione non disponibile");
			} else if(err.code == 3) {
				alert("Timeout");
			} else {
				alert("ERRORE:" + err.message);
			}
		}
