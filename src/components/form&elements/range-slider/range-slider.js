$(document).ready(function () {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 15000,
        step: 1000,
        values: [ 5000, 10000 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.values[ 0 ] / 1000 + " 000" + "₽" + " - " + ui.values[ 1 ] / 1000 + " 000" + "₽");
        }
      });
      $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) / 1000 + " 000" + "₽" + 
        " - " + $( "#slider-range" ).slider( "values", 1 ) / 1000 + " 000" + "₽");
});
