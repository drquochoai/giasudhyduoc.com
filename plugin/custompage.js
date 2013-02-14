$(document).ready(function(e) {
	$("#twentytwelve-style-css").remove();
    
	
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
	
	setInterval(checkYS,5000)
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
		
		$('#lopmoi .tile-content').each(function() {
				$(this).tooltip({
				  track: true,
				  hide: {
					effect: "explode",
					delay: 100
				  },
				  show: {
					effect: "slideDown",
					delay: 100
				  }
				});
				$(this).click(function(){
					var id=$(this).attr('data-id'),
						ten=$(this).attr('data-ten'),
						lop=$(this).attr('data-lop'),
						monhoc=$(this).attr('data-monhoc'),
						diachi=$(this).attr('data-diachi'),
						yeucau=$(this).attr('data-yeucau')
					var addvaodialog = '<h1>Đăng kí lớp dạy</h1>'+'<div class="line"></div>'+'<div id="DialogContent">'
						+'<h2 style="font-weight:bold">ID lớp:</h2>'+id
						+'<br><h2 style="font-weight:bold">Tên lớp:</h2>'+ten
						+'<br><h2 style="font-weight:bold">Môn dạy:</h2>'+monhoc
						+'<br><h2 style="font-weight:bold">Lớp dạy:</h2>'+lop
						+'<br><h2 style="font-weight:bold">Địa chỉ:</h2>'+diachi
						+'<br><h2 style="font-weight:bold">Yêu cầu:</h2>'+yeucau
						+'</div>'
						+'<div class="line"></div>'
						+'<a class="btn-facebook" href="#">NHẬN NGAY LỚP NÀY</a>'
					$("#dialog").html(addvaodialog)
					$("#dialog").bPopup({
						onClose: function() { $("#dialog").html(''); },
						positionStyle: 'fixed'
					});
				}); //close click

        });
		
		

});