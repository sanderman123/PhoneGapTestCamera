$(document).ready(function(){
	$("#blue").prepend('<h1 id="takePicture">Take a Picture!!</h1>');

	$(document).click(function(event){
		
		var target = $( event.target );
		if(target.is("div")){
			navigator.notification.vibrate(500);

			if(target.is("#blue")){			
				//	
				navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });				
				
				function onSuccess(imageURI) {				   				   
				   if("#red").is(":hidden")){
						$("#red").fadeIn("slow");
					}
				   $("#red").prepend('<img id="theImg" src= ' +imageURI+' height="180" width="100">');
				}

				function onFail(message) {
					//
					alert('Failed because: ' + message);
				}
				
				//$("#red").prepend('<img id="theImg" src="logo.png">');//' height="180" width="100">');

			} else {
				target.fadeOut("slow",function(){						
				});				
			}
		} else {
			//$("#red").remove("#theImg");
			$("div").fadeIn("slow");	
		}
	})			
});