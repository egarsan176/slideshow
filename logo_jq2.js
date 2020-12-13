$(function() {
	
	// related examples and more: http://jquery.malsup.com/cycle/browser.html
	
	for (var i = 1; i <= 2; i++) {
	  $('div').append('<img src="logo1.png"/>');
	}

	$('.up').cycle({
	  fx : 'scrollUp',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});

	$('.down').cycle({
	  fx : 'scrollDown',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});

	$('.left').cycle({
	  fx : 'scrollLeft',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});

	$('.right').cycle({
	  fx : 'scrollRight',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});

	$('.zoom').cycle({
	  fx : 'zoom',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});

	$('.wipe').cycle({
	  fx : 'wipe',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});

	$('.toss').cycle({
	  fx : 'toss',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});

	$('.blindZ').cycle({
	  fx : 'blindZ',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});
				
	$('.slideX').cycle({
	  fx : 'slideX',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});
				
	$('.slideY').cycle({
	  fx : 'slideY',
	  slideY: 2500,
	  slideY: 5000,
	  slideY: 5000
	});
				
	$('body').dblclick(function(){
	  $('.up').cycle('stop');
	  $('.down').cycle('stop');
	  $('.left').cycle('stop');
	  $('.right').cycle('stop');
	  $('.zoom').cycle('stop');
	  $('.wipe').cycle('stop');
	  $('.toss').cycle('stop');
	  $('.blindZ').cycle('stop');
	  $('.slideX').cycle('stop');
	  $('.slideY').cycle('stop');
	});
});
