$(document).ready(function(){
 
	 
	var $currentSeat = {};

	$('.seat').click(function(){
		
		$('.reservationForm').show();
		$(this).toggleClass('seatSelected');
		$currentSeat = $(this);
	});

	$('button').click(function() {
		var seatName = $("#exampleInputName2").val();
		alert ("This seat is reserved for " + seatName);
		$currentSeat.patronName=seatName;
		$currentSeat.hover(function(){
			$currentSeat.children().after("<p class='patron-name'>" +"  "
				+ $currentSeat.patronName+"</p>");
		}, function(){
			$(".patron-name").remove();

		});
	});

}); 