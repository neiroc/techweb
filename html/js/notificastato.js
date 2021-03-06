/*
* Notifica evento
*/
function notify(id,status,lat,lng,type,subtype){
	
var partsArray = id.split('_');
	if(partsArray[0] =="ltw1324") 
		id = partsArray[1];

	var date = $('#datepickerid').val();
	
	//trasformo data in unixtime
	var unixdata = data_converter(date) + 3600;
	var now = Math.round((new Date()).getTime() / 1000 + 3600);

	var notificaj = {
				
		id_evento : id, 
							 
		status : status,

		lat : lat,

		lng : lng,

		tipo : type,

		sottotipo : subtype,
		
		description : $('#notif').val(),

		id_utente : jQuery.cookie('id_utente')
			
	}

	var host = "http://"+document.location.hostname ;

	var url = host+"/notifica/" ;

	$.ajax({

		url: url, //url a cui fare la chiamata

		async: true, //chiamata asincrona

		type: "POST",// metodo della chiamata
			
		contentType: "application/json; charset=utf-8",

		data: JSON.stringify(notificaj), 

		dataType: 'json',

		success:function(call){	

			if(call.result==="notifica inviata con successo"){	

				rep=call.reputation;
				//successAlert(call.reputation);
				upRep();
				infowindow.close();
				
				if(call.msg){

					successAlert(call.result+" "+call.msg);
				}
				else{
					
					successAlert(call.result);
					
				}
				if (notificaj.status != 'archived'){
					var tipo = notificaj.tipo;
					var subtipo = notificaj.sottotipo;
					var stat = notificaj.status;
					var llat = notificaj.lat;
					var llng = notificaj.lng
					search_local(tipo, subtipo, stat, llat, llng, radius, unixdata, now);
				}
			}
			else {
				
				errorAlert(call.result+": "+call.errore);
			} 		
		},
		error: function(e){
			errorAlert("500 Internal server error: Errore di risposta dal server");
		},
	});
	return false; // avoid to execute the actual submit of the form.*/
}

