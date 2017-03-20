$(function(){
	// 头部导航
	$(window).scroll(function() {
        // if ($("#header").offset().top > 50) {
        //    $("#header").css({"color":"red"})
        // } else {
        //    $(this).show();
        // }
        if($(document).scrollTop() > 50){
        	$("#header").addClass('header-action')
        }else{
        	$("#header").removeClass('header-action')

        }
    });
})