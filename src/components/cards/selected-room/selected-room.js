$(document).ready(function () {
    
    
    $(".datepicker--button").on("click", function() {
        if ( $('#date-start').val().length != 0) {
           
            var start = $('#date-start').val();
            var end = $('#date-end').val();
            var nowStart = new Date(start);
            var nowEnd = new Date(end);
            console.log(nowStart);
            console.log(nowEnd);
            var totlNumber = (nowEnd - nowStart) / (1000 * 60 * 60 * 24);
            console.log(totlNumber);
            $(".totalDays").text(totlNumber);
          } else {
            
            console.log(nowStart);
            console.log(nowEnd);
            var totlNumber = (nowEnd - nowStart) / (1000 * 60 * 60 * 24);
            console.log(totlNumber);
            $(".totalDays").text("0");
          } 
    })

        // if ( $('#date-start').val().length != 0) {
           
        //     console.log("hello")
        //     var start = $('#date-start').val();
        //     var end = $('#date-end').val();
        //     var nowStart = new Date(start);
        //     nowStart.toLocaleDateString()
        //     var nowEnd = new Date(end);
        //     nowEnd.toLocaleDateString()
        //     console.log(nowStart);
        //     console.log(nowEnd);
        //     var totlNumber = (nowEnd - nowStart) / (1000 * 60 * 60 * 24);
        //     console.log(totlNumber);
        //     $(".totalDays").text(totlNumber);
        //   } 

    

        
    
    
    
    
    



});