//this function is self-executing
$(function() {
	$(document).ready(function(){
		$(".graph-btn").on("click", function(){
			var histogramData = $("#histogramData").val();
			console.log(histogramData);	
		});
	});
}());