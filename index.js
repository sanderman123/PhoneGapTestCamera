$(document).ready(function(){
	$(document).click(function(event){
		var target = $( event.target );
		if(target.is("div")){
			navigator.notification.vibrate(500);
			if(target.is("#blue")){				
				navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
				function onSuccess(imageURI) {
				   $("#theImg").remove();
				   $("#red").prepend('<img id="theImg" src= ' +imageURI+' width=100% >');
				}

				function onFail(message) {
					alert('Failed because: ' + message);
				}
			} else if(target.is("#yellow")) {
				
				$("#theImg").remove();
			} else {
				target.fadeOut("slow",function(){						
				});				
			}
		} else {
			$("div").fadeIn("slow");	
		}
	})			
});