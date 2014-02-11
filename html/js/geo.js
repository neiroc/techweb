var marker;
var circle;
var latitude;
var longitude;


//Funzione di geolocalizzazione
function geoLocal(){
	//se il browser supporta geolocalizzazione
	if (navigator.geolocation){
		var options={timeout:5000}
    	navigator.geolocation.getCurrentPosition(showPosition, errorGettingPosition);
    }
	else {
		alert("Your browser don't support geolocation");
	}
}

//Trova la mia posizione
function showPosition (pos){
	
	//prendo le coordinate del coordinate di geolocalizzazione
	latitude = pos.coords.latitude;
	longitude = pos.coords.longitude;
	
	myPosition = new google.maps.LatLng(latitude, longitude);
	
	//date le coordinate, restituisce l'indirizzo e lo inserisce nel form del menu notify
	geocodePosition(myPosition);
	
	getMarker(myPosition)
		
	//inserisce il cerchio con centro in myPosition
	var distanceWidget = new DistanceWidget(map, myPosition)
	radiusWidgetCheck = true;
	radiusWidget.set('distance', RADIUS);
	radiusWidget.center_changed();
	$('#searchRange').val(RADIUS + " km ");

}

//Gestione errori
function errorGettingPosition(err) {

	if(err.code == 1) {
		centerLoc();
		alert("L'utente non ha autorizzato la geolocalizzazione");
	}
	else if(err.code == 2) {
		centerLoc();
		alert("Posizione non disponibile");
	}
	else if(err.code == 3) {
		centerLoc();
		alert("Timeout");
	}
	else {
		alert("ERRORE:" + err.message);
	}	
}

//Crea marker
function getMarker(myPosition){
	//se c'è un marker precedente
	if(marker){
		marker.setMap(null);
		map.panTo(myPosition);
	}
	marker = new google.maps.Marker({
		map:map,
		draggable:true,
		animation: google.maps.Animation.DROP,
		position: myPosition
	});
	
	google.maps.event.addListener(marker,'dragend', dragMark)
}

function dragMark(event){
	
	//salva le coordinate della mia nuova posizione
	lastLatitude = event.latLng.lat();
    lastLongitude = event.latLng.lng();

    var markerPosition = new google.maps.LatLng(lastLatitude, lastLongitude)
	// aggiorno l'indirizzo
    geocodePosition(markerPosition);
}

function alternLoc(){
	
	//prende coordinate dai cookie
	var newMarkPos = new google.maps.LatLng(jQuery.cookie('lastLatitude'), jQuery.cookie('lastLongitude'));
	
	getMarker(newMarkPos);
	//range=jQuery.cookie('radius', radius, {expires:30});
	var distanceWidget = new DistanceWidget(map, newMarkPos);
	radiusWidgetCheck = true
	
	map.setCenter(newMarkPos);	
	geocodePosition(newMarkPos);
	
	//radiusWidget.set('distance', range);
	$('#searchRange').val(jQuery.cookie('radius') + " km ")
}
	
function centerLoc() {
		
		//prende posizione default
		var newMarkPos = cityCenter;
		
		getMarker(newMarkPos);
		var distanceWidget = new DistanceWidget(map, newMarkPos);
		radiusWidgetCheck = true;
	
		radiusWidget.set('distance', RADIUS);
		radiusWidget.center_changed();
		
		map.setCenter(cityCenter);
		geocodePosition(cityCenter);
}

/**
* Get address from coordinates
* @param latlng point
* ASYNCHRONOUS
*/
function geocodePosition(position){
	geocoder.geocode({'latLng': position}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) { 
			// SUCCESS: get the first matching address and format it properly
			var address = results && results[1] ? results[0].address_components[1].long_name + ", " + results[0].address_components[0].long_name: position,
			lastAddress = results[0].address_components;
			if(address == position)
				geocodePosition(position); //Retry if Geocoder fails
			else{
				$('#notifyAddress').val(address);
				$('#searchAddress').val(address);
			}
		}
		else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {    
		    setTimeout(function() {
		        geocodePosition(position);
		    }, 200);
        }
		else {
		  console.log('Geocoder failed due to: ' + status);
		}
	});
}

