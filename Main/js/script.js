
$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('#menu').addClass('white');
		$('#logoone').each( function(){ this.src = this.getAttribute('data-full'); } );
	}
	else{
		$('#menu').removeClass('white');
		$('#logoone').each( function(){ this.src = this.getAttribute('data-full2'); } );
	}
})
$(document).ready(function(){
	
	$("a").on('click', function(event) {
	   if (this.hash !== "") {	
		event.preventDefault();
    	var hash = this.hash;	
	$('html, body').animate({
	  scrollTop: $(hash).offset().top
		}, 800, function(){
		  window.location.hash = hash;
		});
	  } 
	});
$('#td1').on('mouseenter', () =>{
 $('#dr').fadeIn(300);
}).on('mouseleave', () =>{
	$('#dr').fadeOut(300);
});
$('#td2').on('mouseenter', () =>{
	$('#dr1').fadeIn(300);
 }).on('mouseleave', () =>{
	 $('#dr1').fadeOut(300);
 });
 $('#td3').on('mouseenter', () =>{
	$('#dr2').fadeIn(600);
 }).on('mouseleave', () =>{
	 $('#dr2').fadeOut(600);
 });
 $('#td4').on('mouseenter', () =>{
	$('#dr3').fadeIn(600);
 }).on('mouseleave', () =>{
	 $('#dr3').fadeOut(600);
 });
 $('#td5').on('mouseenter', () =>{
	$('#dr4').fadeIn(600);
 }).on('mouseleave', () =>{
	 $('#dr4').fadeOut(600);
 });
 $('#td6').on('mouseenter', () =>{
	$('#dr5').fadeIn(600);
 }).on('mouseleave', () =>{
	 $('#dr5').fadeOut(600);
 });
 $('#td7').on('mouseenter', () =>{
	$('#dr6').fadeIn(600);
 }).on('mouseleave', () =>{
	 $('#dr6').fadeOut(600);
 });
 $('#td8').on('mouseenter', () =>{
	$('#dr7').fadeIn(600);
 }).on('mouseleave', () =>{
	 $('#dr7').fadeOut(600);
 });
 $('#td9').on('mouseenter', () =>{
	$('#dr8').fadeIn(600);
 }).on('mouseleave', () =>{
	 $('#dr8').fadeOut(600);
 });
	
});




$(document).ready(function(){
	$(".slide-one").owlCarousel({
		items:1,
		dots:true,
		loop:true,
	});



	$(".slide-two").owlCarousel({
		
		loop:true,
		nav:false,
		dots:false,
		responsive :{
			1366:{
				items:5
			},
			769:{
				items:4,
			},
			480:{
				items:3,
			},
			320:{
				items:2,
			}
		}
	});
	$(".slide-three").owlCarousel({
		
		loop:true,
		dots:true,
		nav:false,
		smartSpeed:600,
		responsive :{
			1366:{
				items:3
			},
			1024:{
				items:3,
			},
			768:{
				items:3,
			},
			640:{
				items:2,
			},
		    480:{
				items:2,
			
			},
			320:{
				items:1,
			}			
		}
	});



	$('.btn').on('mouseenter',() =>{
	$('.btn').css({
		background:'#444444',
	});
	});
	$('.btn').on('mouseleave',() =>{
		$('.btn').css({
			background:'black',
		});
	});


	$('.osc').on('mouseenter', event =>{
    $('.osc').css({
		opacity:"1",
	})
	});
	$('.osc').on('mouseleave', event =>{
		$('.osc').css({
			opacity:"0.5",
		})
	})
	$('.osc1').on('mouseenter', event =>{
		$('.osc1').css({
			opacity:"1",
		})
		});
    $('.osc1').on('mouseleave', event =>{
	    $('.osc1').css({
				opacity:"0.5",
			})
		})
	$('.osc2').on('mouseenter', event =>{
		$('.osc2').css({
			opacity:"1",
		})
	});
	$('.osc2').on('mouseleave', event =>{
		$('.osc2').css({
			opacity:"0.5",
		})
	})
	$('.osc3').on('mouseenter', event =>{
		$('.osc3').css({
			opacity:"1",
    	})
	});
	$('.osc3').on('mouseleave', event =>{
		$('.osc3').css({
			opacity:"0.5",
		})
	})
  
});






