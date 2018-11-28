$(document).ready(nav_menu);

var status = 1;

function nav_menu() {

    $(".nav-bar__navigation").click(function() {

        if(status == 1 ){
        
            $(".nav-bar__nav-phone").animate({
                opacity: '0'
            });

            $(".nav-bar__nav-phone-crossed").animate({
                opacity: '1'
            });

            $(".nav-bar__nav-phone-crossed").css(
                "background-color", "transparent"
            );

            $(".navigation-phone").animate({
                left: '0'    
            });


            
            $('body').addClass('lock-scroll');
            


            status = 0;
        }
        else {
            
            $(".nav-bar__nav-phone").animate({
                opacity: '1'
            });

            $(".nav-bar__nav-phone-crossed").animate({
                opacity: '0'
                
            });

            $(".nav-bar__nav-phone-crossed").css(
                "background-color", "transparent"
            );

            $(".navigation-phone").animate({
                left: '-100%'    
            });


            $('body').removeClass('lock-scroll');

            status = 1;
        }
    
    });

};
