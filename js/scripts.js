$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 1000,
    loop:true,
    nav: true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1100:{
            items:4
        }
    }
});
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 39,
        max: 1230,
        values: [ 39, 1230 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
} );
$( function() {
    $( "#accordion" ).accordion();
} );

