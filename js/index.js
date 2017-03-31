$(function(){
	// 头部导航
	$(window).scroll(function() {
        // 头部
        if($(document).scrollTop() > 50){
            $("#header").removeClass('header-back-action')
        	$("#header").addClass('header-action')
        }else{
        	$("#header").removeClass('header-action')
            $("#header").addClass('header-back-action')
        }
        // 返回顶部
        if($(document).scrollTop() > 200){
            $("#back-top").css({"display":"block"})
            var dis = $(document).height()-$(window).height()-$(document).scrollTop();
            if(dis< $("#footer").height()-$("#back-top").outerHeight()){
                $("#back-top").addClass('top-other');
            }else{
                $("#back-top").removeClass('top-other');
            }
        }else{
           $("#back-top").css({"display":"none"})
        }
    });
    
    $("#back-top").click(function(){
        $("html,body").animate({scrollTop:0},800)
    })

    $(".contact-me").click(function(){
        $(".my-git").addClass('contact-git');
        $(".my-email").addClass('contact-email');
        setTimeout(function(){
            $(".my-git").removeClass('contact-git');
            $(".my-email").removeClass('contact-email');
        },9000)
    })
})