$(document).ready(function(e) {
		var solan = 0;
		var vongtronnayne= '.styled-button-hd, .dangonline'
        setInterval(function(){animateVongtron()},1000)
		function animateVongtron(){
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			if(solan == 0){
			$(vongtronnayne).css({'background-color':'#'+randomColor});
			solan = 1;
			} else {
				$(vongtronnayne).css({'background-color':'#'+randomColor});
				solan = 0;
				}
		}
		
		var thangchonayne = '.icon-phone, .icon-envelope'
		setInterval(function(){animateText()},500)
		function animateText(){
			var randomColor = Math.floor(Math.random()*16777215).toString(16);
			var fontsizene = Math.floor((Math.random()*10)+1)+31;
			if(solan == 0){
			$(thangchonayne).css({'color':'#'+randomColor, 'font-size':fontsizene});
			solan = 1;
			} else {
				$(thangchonayne).css({'color':'#'+randomColor, 'font-size':fontsizene});
				solan = 0;
				}
		}
    })