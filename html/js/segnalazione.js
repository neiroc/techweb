$(document).ready(function() {
	$('#notifybutton').on('click', function() {
		if(($('#notifyType').val()=="all") ||($('#notifySubType').val() == "all") ){
			errorAlert("type e subtype non sono stati inseriti correttamente");
		}
		else{

			var date = $('#datepickerid').val();
	
			//trasformo data in unixtime
			var unixdata = data_converter(date) + 3600;
			var now = Math.round((new Date()).getTime() / 1000 + 3600);
			
			var segnalazionej = {

				type : {

					type : $('#notifyType').val(),
					subtype : $('#notifySubType').val() 
				},

				lat : lastLatitude,

				lng : lastLongitude,

				description : $('#notifyDescription').val(),

				id_utente : jQuery.cookie('id_utente')

			}

//console.log(segnalazionej);

			var host = "http://"+document.location.hostname ;

			var url = host+"/segnalazione/"; 

			$.ajax({

				url: url, //url a cui fare la chiamata

				async: true, //chiamata asincrona

				type: "POST",// metodo della chiamata
				
				contentType: "application/json; charset=utf-8",

				data: JSON.stringify(segnalazionej), 

				dataType: 'json',

				success:function(call){	
					
					if(call.result==="nuova segnalazione aperta con successo / segnalazione di un evento già in memoria avvenuta con successo"){	
						

						rep=call.reputation;
						upRep();


						if(call.msg){

							successAlert(call.result+" "+call.msg);
						
						}
						else{
						
							successAlert(call.result);
						
						}
						var tipo = segnalazionej.type.type;
						var sottotipo = segnalazionej.type.subtype;
						var llat = segnalazionej.lat;
						var llng = segnalazionej.lng;
						search_local(tipo, sottotipo, 'all', llat, llng, radius, unixdata, now);
					}
					else {
					
						errorAlert(call.result+": "+call.errore);

					} 	

				},
				error: function(e){
					errorAlert("500 Internal server error: Errore di risposta dal server");
				},
			});
	}
		return false; // avoid to execute the actual submit of the form.
	});				
});
