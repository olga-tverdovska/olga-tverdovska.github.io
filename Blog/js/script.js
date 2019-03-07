$(document).ready(function(){
    $('#more').on('click', () =>{
    $('#navigation ').slideToggle(400);
    })


    $('#all').on('click',() =>{
        $('.branding').show(),
        $('.design').show(),
        $('.cities').show(),        
        $('.nature').show();
    }),
    $('#nature').on('click',() =>{
        $('.branding').hide(),
        $('.design').hide(),
        $('.cities').hide(),        
        $('.nature').show()

     }),
     $('#branding').on('click',() =>{
        $('.branding').show(),
        $('.design').hide(),
        $('.cities').hide(),        
        $('.nature').hide();
     }),
     $('#cities').on('click',() =>{
        $('.branding').hide(),
        $('.design').hide(),
        $('.cities').show(),        
        $('.nature').hide();
     }),
     $('#design').on('click',() =>{
        $('.branding').hide(),
        $('.design').show(),
        $('.cities').hide(),        
        $('.nature').hide()
     })
})