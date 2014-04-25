$(document).ready(function(){
	$(document).click(function(event){
		//$("#red").css("background","img/logo.png");
		//$("#red").prepend('<img id="theImg" src="img/logo.png" />');


		var target = $( event.target );
		if(target.is("div")){
			if(target.is("#blue")){
				navigator.notification.vibrate(500);
				console.log("aaaa");
				navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
				console.log("bbbb");
				function onSuccess(imageURI) {
				   // var image = document.getElementById('myImage');
				   // image.src = imageURI;
				   //target.css("background-image", imageURI);
				   console.log("cccc");
				   //$("body").css("background-image", imageURI);
				   $("#red").prepend('<img id="theImg" src= ' +imageURI+' width=100% >');
				}

				function onFail(message) {
					console.log("dddd");
					alert('Failed because: ' + message);
				}
			} else {
				//$("body").prepend('<img id="theImg" src="img/logo.png" />');
				//$("body").css("background-image", url("img/logo.png"));
				navigator.notification.vibrate(500);
				target.fadeOut("slow",function(){						
				});				
			}
		} else {
			//$("#red").css('background-image', 'none');
			$("div").fadeIn("slow");	
		}
	})			
});