$(document).ready(function() {
	$('#start-button').click(function() {
		var numValue = $('#max-num').val();
		var decCheck = numValue.indexOf(".");
		var maxNum = parseInt(numValue);

		if(!(maxNum) || decCheck != -1){
			alert('Please enter a valid whole number');
		} else {
			fizzBuzz(maxNum);
		};
	});

	function fizzBuzz(maxNum) {
		for(var i = 1; i <= maxNum; i++){
			if(i % 5 === 0 && i % 3 === 0){
				$('.fb-list').append("FizzBuzz<br>");
			} else if (i % 3 === 0){
				$('.fb-list').append("Fizz<br>");
			} else if (i % 5 === 0) {
				$('.fb-list').append("Buzz<br>");
			} else {
				$('.fb-list').append(i + "<br>");
			}
		}
	};
});