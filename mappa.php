<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="ico/favicon.png">





    <title>City Notifier - Mappa</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/starter-template.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../docs-assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
  </head>

	<body>

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">City Notifier</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li id="bar_username" class="active"><a href="#">Home</a></li>
            <li><a href="#mappa">Map</a></li>
            <li><a id="table" href="#myModal" role="button" data-toggle="modal">
					Table
				</a>
			</li>
			<li class="dropdown">
				<a id="search" role="button" data-toggle="dropdown" href="#" >Search
					<b class="caret"></b>
				</a>
				<ul class="dropdown-menu">
					<form>
						<fieldset>
							<div class="control-group">
								<select class="selectpicker" id="searchType" autocomplete="off">
                                	<option disabled selected>Select type</option>
									<option>All</option>
                                	<option id="street-problem">Problemi stradali</option>
                                    <option id="emergency">Emergenze sanitarie</option>
                                    <option id="boh">Reati</option>
                                    <option id="mah">Problemi ambientali</option>
                                    <option id="blabla">Eventi pubblici</option>
								</select>
							</div>
							<div class="control-group">
                            	<select class="selectpicker" id="searchSubType" autocomplete="off">
                            	    <option disabled selected>Select subtype</option>
									<option>All</option>
									<option id="street-problem">incidente</option>
									<option id="street-problem">buca</option>
									<option id="street-problem">coda</option>
									<option id="street-problem">lavori in corso</option>
									<option id="street-problem">strada impraticabile</option>
									<option id="emergency">incidente</option>
									<option id="emergency">malore</option>
									<option id="emergency">ferito</option>
									<option id="boh">furto</option>
									<option id="boh">attentato</option>
									<option id="mah">incendio</option>
									<option id="mah">tornado</option>
									<option id="mah">neve</option>
									<option id="mah">alluvione</option>
									<option id="blabla">partita</option>
									<option id="blabla">manifestazione</option>
									<option id="blabla">concerto</option>
                            	</select>
                            </div>
							<div class="control-group">
								<select class="selectpicker" id="searchSubType" autocomplete="off">
									<option selected disabled> Status</option>
									<option>Open</option>
									<option>Closed</option>
									<option>Skeptical</option>
								</select>
							</div>
							<div class="input-append control-group">
                            	<input type="text" id="searchAddress" placeholder="Address"
										autocomplete="off"></input>
                                	<button id="addressButtonSearch" class="btn" type="button">
                                	    <i id="addressMarkerSearch" class="icon-map-marker"></i>
                                    </button>
                            </div>
						</fieldset>
					</form>
            
   				</ul>
			</li>
			<li class="dropdown">
				<a id="notify" role="button" data-toggle="dropdown" href="#">Notify
					<b class="caret"></b>
				</a>
				<ul class="dropdown-menu">
					<form>
						<fieldset>
							<div class="control-group">
								<select class="selectpicker" id="searchType" autocomplete="off">
                                	<option disabled selected>Select type</option>
									<option>All</option>
                                	<option id="street-problem">Problemi stradali</option>
                                    <option id="emergency">Emergenze sanitarie</option>
                                    <option id="boh">Reati</option>
                                    <option id="mah">Problemi ambientali</option>
                                    <option id="blabla">Eventi pubblici</option>
								</select>
							</div>
							<div class="control-group">
                            	<select class="selectpicker" id="searchSubType" autocomplete="off">
                            	    <option disabled selected>Select subtype</option>
									<option>All</option>
									<option id="street-problem">incidente</option>
									<option id="street-problem">buca</option>
									<option id="street-problem">coda</option>
									<option id="street-problem">lavori in corso</option>
									<option id="street-problem">strada impraticabile</option>
									<option id="emergency">incidente</option>
									<option id="emergency">malore</option>
									<option id="emergency">ferito</option>
									<option id="boh">furto</option>
									<option id="boh">attentato</option>
									<option id="mah">incendio</option>
									<option id="mah">tornado</option>
									<option id="mah">neve</option>
									<option id="mah">alluvione</option>
									<option id="blabla">partita</option>
									<option id="blabla">manifestazione</option>
									<option id="blabla">concerto</option>
                            	</select>
                            </div>
						</fieldset>
					</form>
						           
          		</ul>
			</li>
          </ul>
			<ul class="nav navbar-nav navbar-right">
				<li>
					<button type="button" class="btn btn-danger" id="logout">
						<span class="glyphicon glyphicon-off"></span>
						Logout
					</button>
				</li>
			</ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>


      <div class="starter-template">
       <div id="gmap"> </div>
      </div>

	<!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
		<div class="modal-content">
		  <div class="modal-header">
		    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		    <h4 class="modal-title" id="myModalLabel">List of Events</h4>
		  </div>
		  <div class="modal-body">
		  	<table class="table table-striped">
				<thead>
					<tr>
						<th>Type/Subtype</th>
						<th>Date</th>
						<th>Location</th>
						<th>Reliability</th>
						<th>Status</th>
					</tr>
				</thead>
			</table>
		  </div>
		  <div class="modal-footer">
		    <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
		  </div>
		</div><!-- /.modal-content -->
	  </div><!-- /.modal-dialog -->
	</div><!-- /.modal -->

		

  

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
	 <script src="js/jquery-2.0.3.js"></script>
	<script src="js/jquery.cookie.js"></script>
    <script src="js/bootstrap.min.js"></script>
	
	<script src="js/map.js"></script>
  	<script src="js/geo.js"></script>
	<script src="js/logout.js"></script>
	<script type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAzoBwjcMDm7YmdVppL9e3V3aXyY1rYieI&sensor=true">
    </script>
	<script src="js/global.js"></script>
	
  </body>
</html>

