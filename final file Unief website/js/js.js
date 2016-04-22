var $win, $w, $h; 
$(function(){
	////******* ALL Variables BELOW ***********////////
	var html ='';
	var $win = $(window);
	$w = $win.width();
	$h = $win.height();
	var vil_pos = $('.village').position();
	////******* ALL Variables ABOVE ***********////////
	
	
	
	////******* ALL FUNCTIONS BELOW ***********////////
	function restoreDefault(){
		$('#initiatives').css({'display':'none'});
		$('#real_stories1').css({'background-position':'-140px 0px'});
		$('#real_stories').css({'background-position':'0px 0px'});
		$('.small_village_edu, .small_village_preg, .small_village_water').animate({bottom:'-93px'}, 'slow');		
		$('.small_village_edu, .small_village_preg, .small_village_water').fadeOut();
		$('.village').fadeOut();
		$('#stories').fadeOut();
	}
	
	function reSizeEverything(){		
		$w = $win.width();
		$h = $win.height();
		
		$w1 = ($w/2)-407;
		$h1 = ($h/2)-225;
		var vil_pos = $('.village').position();
		$('#intro').css({'left': $w1+'px', 'top': $h1+'px'});
		//$('#swampholder').css({'top': (vil_pos.top+270)+'px'}); //I have to implement this code only after page loads.  So, that swamp and  village can  move togther. Other thing we have to take  care of current level of water
		
	}/// Resize Everthing Ends
	
	function increase_water(){	
		/*if($('#name').val() == ''){
			$('#swampholder').animate({'top': '210px'},15000);
		}else{
			$('#swampholder').animate({'top': '150px'},15000);
		}*/		
	}
	
	function decrease_water(){		
		$('#swampholder').animate({'top': (vil_pos.top+280)},15000, function(){
			$('#footer_left, #footer_right').fadeIn('slow');//.css({'display':'block'});
		});		
	}
	////******* ALL FUNCTIONS ABOVE ***********////////
	
	$("#matter_text, .initiatives_copy").mCustomScrollbar({
		scrollButtons:{
			enable:true
		}
	});
	
	
	
	$('#swampholder').css({'top': '2700px'});
	$('#swampholder').animate({top:'-21px'}, 7000);
	$('#intro').animate({top:'0px'}, 7500,function(){
		reSizeEverything();
		$('#intro h1').fadeIn('slow', function(){
			$('#intro_text').delay(4000).fadeIn('slow', function(){
				$('#intro img').delay(15000).fadeIn('slow', function(){	
					var image_height = $('#intro h1').outerHeight(true);
					$('#intro h1').delay(1000).fadeOut('fast', function(){
						$('#intro_text').css({'margin-top':image_height+'px' });
						image_height = $('#intro_text').outerHeight(true);
						$('#intro_text').delay(1000).fadeOut('fast',function(){
							$('#uad').css({'margin-top':image_height+'px' });
							$('#intro img').delay(1000).fadeOut('slow', function(){
								decrease_water();
								$('#swampholder').css({'background-image':'none'});
								$('.logo, .village a').fadeIn('slow');
								$('#right_div ').animate({right: '10px'}, 2000);
								$('#intro').css({'z-index': '-10', 'height':'1px', 'width':'1px'});
								
								html = '<div class="heading">Help UNICEF prepare people for floods before it\'s too late.</div>';
								$('.tooltip1').html(html).fadeIn();								
								$('.tooltip1').delay(4000).fadeOut();
							});	
						});
					});
				});
			});
		});
	});
	
	
	
	$('.handpump').click(function(){
		html = '<a href="#" class="close">Close</a><div class="heading">Safe drinking water<br /><div class="black">35-year old Rajkumaridevi Mandal Kumar Chopal leads the team of women working towards reducing risk and suffering during floods. ';
		html +='</br>Know more</div>';
		html +='<div id="more" ><a href="#tab1"><strong>Read More ></strong></a> </div></div>';
		$('.tooltip').html(html).fadeIn();
	});
	
	$('.girl1').click(function(){
		html = '<a href="#" class="close">Close</a><div class="heading">Safe deliveries<br /><div class="black">Sita Devi became the first woman at the Bargamaghachi camp in Samastipur district of Bihar to give birth at a maternity hut set up by UNICEF during floods. ';
		html +='</div>';
		html +='<div id="more" ><a href="#tab2"><strong>Read More ></strong></a> </div></div>';
		$('.tooltip').html(html).fadeIn();
	});
	
	
	$('.girl2').click(function(){
		html = '<a href="#" class="close">Close</a><div class="heading">Education for children<br /><div class="black">In spite of being displaced by floods, 13 year old Rinky did not lose her spirit to learn.';
		html +='The Life Skills Training programme supported by UNICEF trained her on essential life skills and many other young children.</div>';
		html +='<div id="more" ><a href="#tab3"><strong>Read More ></strong></a> </div></div>';
		$('.tooltip').html(html).fadeIn();
	});
	
	
	$('.tower').click(function(){
		html = '<a href="#" class="close">Close</a><div class="heading">Shelters for the homeless<br /><div class="black">Dummy  Text, Dummy  Text, Dummy  Text, Dummy  Text';
		html +='Dummy  Text, Dummy  Text, Dummy  Text, Dummy  Text</div>';
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
		
		/*$('.small_village').animate({
			bottom:'93px'
		}, 'slow');*/
		$('.small_village').fadeIn();
		$('#stories').fadeIn();
		$('#real_stories').css({'background-position':'0px -41px'});
		return false;
	});
	
	
	$('#menu li a').click(function(){
		$rel = $(this).attr('rel');
		
		if($rel == 'edu' ){
			$sml_vill = '.small_village_edu';
		}else if($rel == 'preg' ){
			$sml_vill = '.small_village_preg';
		}else if($rel == 'water' ){
			$sml_vill = '.small_village_water';
		}else{
			$sml_vill = '.small_village_edu';
		}
				
		$('.small_village_edu, .small_village_preg, .small_village_water').fadeOut();
		
		$($sml_vill).animate({bottom:'93px'}, 'slow');
		$($sml_vill).fadeIn();
		
		$('#menu li').removeClass('active');
		$(this).parent().addClass('active');
		var $id = $(this).attr('href');
		$('#stories span').fadeOut('fast');
		$($id).fadeIn('slow');
		return false;
	});
	
	
	
	$('#more a').live("click", function(){
		restoreDefault();
		$('.small_village').animate({bottom:'93px'}, 'slow');
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
	
	
	refreshIntervalId = setInterval(increase_water,15000);
	$win.resize(function(){reSizeEverything();});
});



