function timeout() {
	var clock = setInterval(function() {
		//time = time * 1 - 1;
		//if(time != 0) {
			$('#count').html(s)
			postMessage(time,data);
//		} else {
//			clearInterval(clock);
//		}
	}, 1000);
}

this.addEventListener("message", function(e) {
	timeout(e.data);
});