$(document).ready(function () {
    
    
    $(".datepicker--button").on("click", function() {
        if ( $('#date-start').val().length != 0) {
            let start = $('#date-start').val();
            let end = $('#date-end').val();
            let nowStart = new Date(start);
            let nowEnd = new Date(end);
            let totaldays = (nowEnd - nowStart) / (1000 * 60 * 60 * 24);
            $("#totalRoomDays").text(totaldays);
            let totalRoomCost = totaldays*9990;
            $("#totalRoomCost").text(totalRoomCost.toLocaleString('ru'));
            let discount = parseInt($('#discountCost').text());
            let costService = parseInt($('#costService').text());
            let costAddService = parseInt($('#costAddService').text());
            let totalCost = totalRoomCost - discount + costService + costAddService;
            $("#totalCost").text(totalCost.toLocaleString('ru'));
          } else {
            
            $("#totalRoomDays").text("0");
            $("#totalRoomCost").text("0");
            $("#totalCost").text("0");
          } 
    })
});