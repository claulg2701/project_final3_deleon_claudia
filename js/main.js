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
            keys: false,
            nav: false,
            autoplay: true
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

        /* Initiate tabulous plugin on Menu page*/
        $( '#tabs' ).tabulous( {
          effect: 'scale'
        } );

        $( window ).resize( function() {
          $( '#tabs' ).tabulous();
        } );

} ); /* end of ready funtcion */
