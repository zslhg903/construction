jQuery(document).ready(function() {
	domready(function(){
		selectnav('nav', {
			label: 'Menu',
			nested: true,
			indent: '-'
		});
	});
});


var $ = jQuery.noConflict();
$(document).ready(function(){
	$(".toggle h1").addClass("acc_active");
	$(".toggle h1").toggle(
	
	function() {
	 $(this).addClass("acc_noactive");
     $(this).next(".ac-content").slideToggle(200);
	},
    function() {
	 $(this).removeClass("acc_noactive").addClass("acc_active");
	 $(this).next(".ac-content").slideToggle(200);
  	})
	$('.pic_hover').fadeTo(200, 0);
	
	$('.pic_hover').hover(
    function() {
        $(this).stop().fadeTo(200, .60);
    },
    function() {
		$(this).stop().fadeTo(200, 0);
    })
	
	$('#social-icons img').fadeTo(200, .30);
	$('#social-icons img').hover(
    function() {
        $(this).stop().fadeTo(200, 100);
    },
    function() {
		$(this).stop().fadeTo(200, .30);
    })


	$('#services .column').hover(
	function(){
		$(this).find('.pic-service').animate({'margin-top':"-10px",'margin-bottom':"20px",width:"150px"},"fast");
		$('#services .column').stop().fadeTo(200, .30);
		$(this).stop().fadeTo(0,1);		
	},
    function() {
		$(this).find('.pic-service').animate({'margin-top':"0px",'margin-bottom':"0px",width:"128px"},"fast");
		$('#services .column').stop().fadeTo(200, 1);
    })
	
	
	$('#team_member .four').hover(
	function(){
		$(this).find('.team_photo').animate({'margin-top':"-10px",'margin-bottom':"20px"},"fast");
		$('#team_member .four').stop().fadeTo(200, .30);
		$(this).stop().fadeTo(0,1);		
	},
    function() {
		$(this).find('.team_photo').animate({'margin-top':"0px",'margin-bottom':"0px"},"fast");
		$('#team_member .four').stop().fadeTo(200, 1);
    })
	
	
	$('.blogsmall li').hover(
	function(){
		$('.blogsmall li').stop().fadeTo(200, .50);
		$(this).stop().fadeTo(0,1);		
	},
    function() {
		$('.blogsmall li').stop().fadeTo(200, 1);
    })
	
	
	$('.gallery-home .columns').hover(
	function(){
		$('.gallery-home .columns').stop().fadeTo(100, .40);
		$(this).stop().fadeTo(0,1);		
	},
    function() {
		$('.gallery-home .columns').stop().fadeTo(50, 1);
    })
	
	
	$('#gallery-wrapper .columns').hover(
	function(){
		$('#gallery-wrapper .columns').stop().fadeTo(100, .40);
		$(this).stop().fadeTo(0,1);		
	},
    function() {
		$('#gallery-wrapper .columns').stop().fadeTo(50, 1);
    })
	
	
	$('#gallery-wrapper .column').hover(
	function(){
		$('#gallery-wrapper .column').stop().fadeTo(100, .40);
		$(this).stop().fadeTo(0,1);		
	},
    function() {
		$('#gallery-wrapper .column').stop().fadeTo(50, 1);
    })
	

	$(function() {
		$("#tab-content").organicTabs({
		"speed": 200
		});
		$("#tab1").show();
	});


	$(document).ready(function(){
	var $container = $('#gallery-wrapper');
	$container.isotope({
		filter: '*',
		animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false,
		   }
		});

		$('#filters a').click(function(){
			var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents();
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
			
		var selector = $(this).attr('data-filter');
			$container.isotope({ 
			filter: selector,
			animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		   }
		  });
		  return false;
		});
		});
});



/* cycle slider settings
=========================================================== */
var $ = jQuery.noConflict();
$(document).ready(function(){
// If javascript disabled */
$("body").removeClass("nojs").addClass("js");
// Homepage slider */
$('#slider-2').cycle({
timeout: 5000,// milliseconds between slide transitions (0 to disable auto advance)
fx:'fade',// choose your transition type, ex: fade, scrollUp, shuffle, etc...            
pager:'#cycle-pager',// selector for element to use as pager container
pause:0,// true to enable "pause on hover"
cleartypeNoBg:true,// set to true to disable extra cleartype fixing (leave false to force background color setting on slides) 
pauseOnPagerHover: 0 // true to pause when hovering over pager link
});
});



/* prettyphoto settings
=========================================================== */
$(document).ready(function(){
	$("area[rel^='prettyPhoto']").prettyPhoto();
	$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',theme:'light_square',slideshow:3000, autoplay_slideshow: false});
	$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
		
	$("#custom_content a[rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
	});
	$("#custom_content a[rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div><div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
		changepicturecallback: function(){ _bsap.exec(); }
	});
});



/* jquery.ui.totop settings
=========================================================== */
$(document).ready(function() {
$().UItoTop({ easingType: 'easeOutQuart' });
});



/* isotop settings
=========================================================== */
$(document).ready(function(){
var $container = $('#gallery-wrapper');
	$container.isotope({
		filter: '*',
		animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false,
	}
});
$('#filters a').click(function(){
	var $this = $(this);
	// don't proceed if already selected
	if ( $this.hasClass('selected') ) {
    	return false;
        }
    var $optionSet = $this.parents();
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');
			
	var selector = $(this).attr('data-filter');
	$container.isotope({ 
	filter: selector,
	animationOptions: {
	duration: 750,
	easing: 'linear',
	queue: false,
			 
	}
});
return false;
});
});
