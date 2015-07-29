$(document).ready(function() {
	$('#start-button').click(function() {
		fizzBuzz();
	});

	function fizzBuzz() {
		for(var i = 1; i <= 100; i++){
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