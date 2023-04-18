//  {--------- validation-start -----------}
( function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll( '.needs-validation' )

    // Loop over them and prevent submission
    Array.prototype.slice.call( forms )
        .forEach( function ( form ) {
            form.addEventListener( 'submit', function ( event ) {
                if ( !form.checkValidity() )
                {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add( 'was-validated' )
            }, false )
        } )
} )()
//  {--------- validation-end -------------}
//  {------ owl-Carousel-start ------}
$( '.owl-carousel' ).owlCarousel( {
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 7,
        }
    }
} )
//  {------ owl-Carousel-end ------}
//  {--------- tabs-start ---------}
const tabs = document.querySelector( ".wrapper" );
const tabButton = document.querySelectorAll( ".tab-button" );
const contents = document.querySelectorAll( ".content" );

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if ( id )
    {
        tabButton.forEach( btn => {
            btn.classList.remove( "active" );
        } );
        e.target.classList.add( "active" );

        contents.forEach( content => {
            content.classList.remove( "active" );
        } );
        const element = document.getElementById( id );
        element.classList.add( "active" );
    }
}
//  {--------- tabs-end -----------}
//  {--------- product-tabs-start -----------}
function Tabs () {
    var bindAll = function () {
        var menuElements = document.querySelectorAll( '[data-tab]' );
        for ( var i = 0; i < menuElements.length; i++ )
        {
            menuElements[ i ].addEventListener( 'click', change, false );
        }
    }
    var clear = function () {
        var menuElements = document.querySelectorAll( '[data-tab]' );
        for ( var i = 0; i < menuElements.length; i++ )
        {
            menuElements[ i ].classList.remove( 'active' );
            var id = menuElements[ i ].getAttribute( 'data-tab' );
            document.getElementById( id ).classList.remove( 'active' );
        }
    }
    var change = function ( e ) {
        clear();
        e.target.classList.add( 'active' );
        var id = e.currentTarget.getAttribute( 'data-tab' );
        document.getElementById( id ).classList.add( 'active' );
    }

    bindAll();
}
var connectTabs = new Tabs();
//  {--------- product-tabs-end -----------}