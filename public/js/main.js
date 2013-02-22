
var app = {

    slide2: function() {
        
        $('#slide2').css({ 'display' : 'table-cell' });

        $('#continue2').click( function() {
            if( ( $.trim( $('#x1').val() ) === '17' && $.trim( $('#x2').val() ) === '23') ||
                ( $.trim( $('#x1').val() ) === '23' && $.trim( $('#x2').val() ) === '17') ) {

                $('#slide2').css({ 'display' : 'none' });
                app.slide3();
            }
        });

    },

    slide3: function() {
        $('#slide3').css({ 'display' : 'table-cell' });

        
    },

    slide1: function() {
        $('#slide1').css({ 'display' : 'table-cell' });

        $('#continue1').click( function() {
            console.log( $('#code').val() );
            if(  $.trim( $('#code').val() ) === 'agichaaaaan' ) {
                $('#slide1').css({ 'display' : 'none' });
                app.slide2();
            }
        });
    },

	start: function() {

        console.log('tu sam');

        app.slide1();
    }
};


$(document).ready( app.start );


