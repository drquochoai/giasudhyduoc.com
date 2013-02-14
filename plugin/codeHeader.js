$(document).ready(function(e) {

		// Lam cai niceScroll cho cai body ne
		$("html").niceScroll({
				scrollspeed: 20,
				mousescrollstep : 60,
				bouncescroll: true
			});
	
	
	//May cai thumbnail ben duoi cua CHUYEN MUC SUC KHOE
    $("#caiclassne .mitemImg").each(function(index, element) {
		var mytitle=$(this).attr('mytitle')
		var mypreview=$(this).attr('mypreview')
		var mylink=$(this).attr('mylink')
		$(this).after("<div class='mytitle'>"+mytitle+"</div>")
		$(this).parent().hover(
			function(hoverIn){
				$(this).find(".mytitle").slideUp(0).text(mypreview).slideDown(400);
			},
			function(hoverOut){
				$(this).find(".mytitle").slideUp(0).text(mytitle).slideDown(250)
			})
			.click(function(e) {
                window.location.assign(mylink)
            });
    });//CHUYEN MUC SUC KHOE
	
	$("#slideHTBigImg div").width($("#slideHTBigImg div").width()-5)
	$("#slideHTBigImg div").height($("#slideHTBigImg div").width()*9/16);
	var xemcohoverkhongem = 0;
	$(".slideHTItem").hover(function(){
			$(this).addClass('currentSlide')
			$(this).find('a, h6').css('color','#fff')
			$(this).find("img").css("float","right")
			$("#slideHTBigImg div").attr('style',$("#slideHTBigImg div").attr('style')+'; background-image:url('+$(this).find('img').attr('src')+')');
			xemcohoverkhongem = 1
		},function(){
			$(this).removeClass('currentSlide')
			$(this).find('a').css('color','rgb(72, 109, 207)')
			$(this).find('h6').css('color','#000')
			$(this).find("img").css("float","left")
			xemcohoverkhongem = 0
			})
	
	var startSnumber = 0;
	chaySlideneme = window.setInterval(chaySlidene,2500);
	function chaySlidene(){
		if(xemcohoverkhongem == 0){
			if(startSnumber == 0){
				$(".slideHTItem:eq(3)").trigger('mouseout');xemcohoverkhongem = 1
			}
			$(".slideHTItem:eq("+startSnumber+")").prev().trigger('mouseout');xemcohoverkhongem = 1
			$(".slideHTItem:eq("+startSnumber+")").trigger('mouseover');xemcohoverkhongem = 0
			$("#slideHTBigImg div").attr('style',$("#slideHTBigImg div").attr('style')+'; background-image:url('+$(".slideHTItem:eq("+startSnumber+")").find('img').attr('src')+')');
			if(startSnumber == 3){
				startSnumber = 0;
			}
			else {
				startSnumber = startSnumber+1
				}
		}
	}
	//SET cai width cua thang bottomMenu ne
	var bottomMenuWidth = 0;
	$(".contentMenu span").each(function() {
        bottomMenuWidth = bottomMenuWidth + $(this).width()+40;
    });
	$(".contentMenu").width(bottomMenuWidth)
	
	//Lam cai ham HOVER cho thang bottomMenu ne
	$(".contentMenu ul").hover(function() {
		$(this).find("h6, a").css({'color':'#3b92c6'});
    },function() {
        $(this).find("h6, a").css({'color':'#718090'});
    });
//CHECK ONLINE BEN DUOI NE
	$("#thangYahoo a").each(function(index, element) {
        $(this).append($(this).attr('data-ai'))
		if($(this).attr('data-cainao') == 'skype'){
			$(this).attr('href', 'skype:'+$(this).attr('data-ai')+'?call')
			}
		if($(this).attr('data-cainao') == 'yahoo'){
			$(this).attr('href', 'ymsgr:SendIM?'+$(this).attr('data-ai'))
			}
    });
	var thanglinkcheck = $("#thangYahoo").attr('data-thanglinkcheck')
	
	setInterval(checkYS,10000)
		function checkYS(){
			$("#thangYahoo a").each(function(index, element) {
				var classnaoday ='check'+$(this).attr('data-cainao')+$(this).attr('data-ai')
				 $(this).addClass(classnaoday)
				$.ajax({
					  type: "GET",
					  url: thanglinkcheck+'?ai='+$(this).attr('data-ai')+'&cainao='+$(this).attr('data-cainao'),
					  dataType: "html"
					})
					.done(function(status) { 
					if(status == 'on'){
						$('.'+classnaoday)
						.addClass('dangonline')
						.css({'color':'#fff', 'background-color':'green', 'text-align':'center'})
						.removeClass(classnaoday)
						}
						else {
							$('.'+classnaoday).removeClass('dangonline')
							.css({'color':'#ccc', 'background-color':'transparent', 'text-align':'left'})
							}
					 })
			})
		}
		checkYS();
});
