/* Load and resize menu */
function loadMenu() {
    var myMenu = document.getElementById( 'nav-links' );
    var openCloseMenu = document.getElementById( 'menu-icon' );
    var logo = document.getElementById( 'logo' );

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

    /* Add functionality to buttons */
    $( '#menuBtn' ).click( function() {
        window.location.href = 'menu.html';
    } );

    $( '#reserveBtn' ).click( function() {
        window.location.href = 'reservations.html';
    } );

    /* Init Unslider plugin */
	$slider = $( '.my-slider' ).unslider(
        {
            arrows: false,
            autoplay: true,
            infinite:true,
            nav: false
        }
    );
    /* pause slider on mouse hover */
    $slider.on( 'mouseover',
        function() {
            $slider.unslider( 'stop' );
        } ).on( 'mouseout',
        function() {
            $slider.unslider( 'start' );
    } );

    /* Call Validation form for Reservation*/
    $validator = $( 'form.mk-reservation' ).validate(
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
            /* override default messages */
            messages: {
                name: 'Name is required',
                phone: 'Phone number required',
                guest: 'Enter total guests'
            }

        } );

        /* enable menu tabs */
        $( 'ul.tabs li' ).click( function() {
            var tabId = $( this ).attr( 'data-tab' );
		    $( 'ul.tabs li' ).removeClass( 'current' );
		    $( ' .tab-content' ).removeClass( 'current' );
		    $( this ).addClass( 'current' );
		    $( '#' + tabId ).addClass( 'current' );
    } );

} ); /* end of ready funtcion */
