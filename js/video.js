// JavaScript Document
$(document).ready(function(e) {
    $("#videob").click(function(){
    	$("#videob").attr("src","videos/Digiúdo.mp4");
		$("#videob").trigger("play");
		$("#videoa").trigger("pause");
	})
});

