$(document).ready(function(){
$('#more').on('click', () =>{
$('#navigation ').slideToggle(400);
})

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

    var w = $(window).width();
        $('#all').on('click' , () =>{
            $('.item').show();
            $('#td7').css({
              top: '0',
              left:'0'
           })
           $('#td6').css({
              top: '0',
              left:'0'
           })
          }),
          $('#branding').on('click' , () =>{
              if(w>=1201){
              $('#td7').css({
                 top: '-367px',
                 left:'367px'
              })}
              else if((w<=992)&&(w>=769)){
                $('#td7').css({
                    top: '-230px',
                    left:'230px'
               })}
              $('.item').hide(),
              $('#td1').show(),
              $('#td7').show()
          }),
          $('#print').on('click' , () =>{
            if(w>=1201){
              $('#td6').css({
                 top: '-367px',
                 left:'367px'
              })}
              else if((w<=992)&&(w>=769)){
                $('#td6').css({
                    top: '-230px',
                    left:'230px'
                 })                  
              }
              $('.item').hide(),
              $('#td2').show(),
              $('#td6').show()
          }),
          $('#photography').on('click' , () =>{
              $('.item').hide(),
              $('#td8').show(),
              $('#td9').show()
          }),
          $('#desing').on('click' , () =>{
              $('.item').hide(),
              $('#td4').show(),
              $('#td5').show()
          }),
          $('#mackup').on('click' , () =>{
              $('.item').hide(),
              $('#td1').show()
          })
})