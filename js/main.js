/*
* Custom JavaScript Code
* Load and resize menu depending on viewport size
*/
function loadMenu() {
    var myMenu = document.getElementById( 'nav-links' );
    var openCloseMenu = document.getElementById( 'menu-icon' );
    var logo = document.getElementById( 'logo' );
    /* check the state of the menu, if it's open, close it; otherwise, open it*/
    if ( myMenu.className == 'open' ) {
        myMenu.className = 'close';
        myMenu.style.transform = 'translateY(-350px)';
        myMenu.style.transition = 'transform 0.3s ease';
        openCloseMenu.className = 'fa fa-bars';
        myMenu.style.zIndex = '0';
        logo.style.visibility = 'visible';
    } else {
        myMenu.className = 'open';
        openCloseMenu.className = 'fa fa-times';
        myMenu.style.transform = 'translateY(-100px)';
        myMenu.style.transition = 'transform 0.3s ease';
        myMenu.style.zIndex = '1';
        logo.style.visibility = 'hidden';
    }
}

/* Reset the menu to its initial state (closed) when resizing the page */
window.onresize = function() {
    var mq = window.matchMedia( '(min-width: 1024px)' );
    var myMenu = document.getElementById( 'nav-links' );
    var logo = document.getElementById( 'logo' );
    var openCloseMenu = document.getElementById( 'menu-icon' );

    if ( !mq.matches )
    {
        myMenu.style.zIndex = '0';
        openCloseMenu.className = 'fa fa-bars';
        logo.style.visibility = 'visible';
        if ( myMenu.className === 'open' ) {
            myMenu.style.transform = 'translateY(-351px)';
            myMenu.className = 'close';
        }
        if ( myMenu.className === 'close' ) {
            myMenu.style.transform = 'translateY(-350px)';
        }
    }
    if ( mq.matches ) {
        myMenu.style.transform = 'translateY(0)';
        myMenu.style.transition = 'none';
    }
};

jQuery( document ).ready( function() {

    /* open/close menu items when the hamburger menu icon is clicked */
    $( '#hamburger-menu' ).click( loadMenu );

    /* Custom JQuery Code */
    /* Add functionality to Menu and Reserve buttons */
    $( '#menuBtn' ).click( function() {
        window.location.href = 'menu.html';
    } );

    $( '#reserveBtn' ).click( function() {
        window.location.href = 'reservations.html';
    } );

    /* Init Unslider plugin with some parameters */
	$slider = $( '.my-slider' ).unslider(
        {
            arrows: false,
            autoplay: true,
            infinite:true,
            nav: false
        }
    );
    /* pause Unslider on mouse hover */
    $slider.on( 'mouseover',
        function() {
            $slider.unslider( 'stop' );
        } ).on( 'mouseout',
        function() {
            $slider.unslider( 'start' );
    } );

    /* Call Validation plugin for Reservation form */
    $( 'form.mk-reservation' ).validate(
        {
            rules: {
                phone: {
                    number: true
                },
                guest: {
                    number: true
                },
                date: {
                    date: true
                },
                time: {
                    time: true
                }
            },
            /* override default error messages */
            messages: {
                name: 'Name is required',
                phone: 'Phone number required',
                guest: 'Enter total guests',
                date: 'Accepted format 03/12/2016'
            }

        } );

        /* enable menu tabs on click for Menu page */
        $( 'ul.tabs li' ).click( function() {
            /* remove current class from previously selected items */
            $( '.tab-content' ).removeClass( 'current' );
            $( 'ul.tabs li' ).removeClass( 'current' );
            /* add current to this tab and corresponding content */
		    $( this ).addClass( 'current' );
            $( '#content-' + $( this ).attr( 'id' ) ).addClass( 'current' );
    } );

} ); /* end of ready funtcion */
