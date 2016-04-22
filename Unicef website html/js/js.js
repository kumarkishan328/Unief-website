$(function(){
	var html ='';
	
	function restoreDefault(){
		$('#initiatives').fadeOut();
		$('#real_stories1').css({'background-position':'-140px 0px'});
		$('#real_stories').css({'background-position':'0px 0px'});
		$('.small_village').animate({
			bottom:'-93px'
		}, 'slow');		
		$('.village').fadeOut();
		$('#stories').fadeOut();
	}
	
	$('.handpump').click(function(){
		html = '<a href="#" class="close">Close</a><div class="heading">Education for children<br /><div class="black">In spite of being displaced by floods, 13 year old Rinky did not lose her spirit to learn.';
		html +='The Life Skills Training programme supported by UNICEF trained her on essential life skills and many other youngchildren.</div>';
		html +='<div id="more" ><a href="#tab1"><strong>Read More ></strong></a> </div></div>';
		$('.tooltip').html(html).fadeIn();
	});
	
	$('.girl1').click(function(){
		html = '<a href="#" class="close">Close</a><div class="heading">Girl1 for children<br /><div class="black">In spite of being displaced by floods, 13 year old Rinky did not lose her spirit to learn.';
		html +='The Life Skills Training programme supported by UNICEF trained her on essential life skills and many other youngchildren.</div>';
		html +='<div id="more" ><a href="#tab2"><strong>Read More ></strong></a> </div></div>';
		$('.tooltip').html(html).fadeIn();
	});
	
	
	$('.girl2').click(function(){
		html = '<a href="#" class="close">Close</a><div class="heading">Girl 2 for children<br /><div class="black">In spite of being displaced by floods, 13 year old Rinky did not lose her spirit to learn.';
		html +='The Life Skills Training programme supported by UNICEF trained her on essential life skills and many other youngchildren.</div>';
		html +='<div id="more" ><a href="#tab3"><strong>Read More ></strong></a> </div></div>';
		$('.tooltip').html(html).fadeIn();
	});
	
	
	$('.tower').click(function(){
		html = '<a href="#" class="close">Close</a><div class="heading">Tower for children<br /><div class="black">In spite of being displaced by floods, 13 year old Rinky did not lose her spirit to learn.';
		html +='The Life Skills Training programme supported by UNICEF trained her on essential life skills and many other youngchildren.</div>';
		html +='<div id="more" ><a href="#tab4"><strong>Read More ></strong></a> </div></div>';
		$('.tooltip').html(html).fadeIn();
	});


	$('#real_stories1').click(function(){
		restoreDefault();
		
		$('#initiatives').fadeIn();
		$('#real_stories1').css({'background-position':'-140px -41px'});
		return false;
	});
	
	
	$('#real_stories').click(function(){
		restoreDefault();
		
		$('.small_village').animate({
			bottom:'93px'
		}, 'slow');
		
		$('#stories').fadeIn();
		$('#real_stories').css({'background-position':'0px -41px'});
		return false;
	});
	
	
	$('#menu li a').click(function(){
		$('.small_village').animate({
			bottom:'93px'
		}, 'slow');
		
		$('#menu li').removeClass('active');
		$(this).parent().addClass('active');
		var $id = $(this).attr('href');
		$('#stories span').fadeOut('fast');
		$($id).fadeIn('slow');
		return false;
	});
	
	
	
	$('#more a').live("click", function(){
		restoreDefault();
		$('.small_village').animate({
			bottom:'93px'
		}, 'slow');
		$('#stories').fadeIn();
		$('#real_stories').css({'background-position':'0px -41px'});
		
		var $id = $(this).attr('href');
		$('#stories span').fadeOut('fast');
		$($id).fadeIn('slow');
		
		$('#menu li').removeClass('active');
		
		var menu ='fst';
		switch($id){
			case '#tab1':
				menu ='#fst';
				break;
				
			case '#tab2':
				menu ='#sec';
				break;
				
			case '#tab3':
				menu ='#trd';
				break;
				
			case '#tab4':
				menu ='#fth';
				break;
				
		}
		$(menu).addClass('active');	
		return false;
	});	
	
	
	
	$('.close').live("click", function(){
		$('.tooltip').fadeOut();
	});
	
	$('.logo').click(function(){	
		restoreDefault();
		$('.village').fadeIn();
		return false;
	});

});
