/**
 * Created by Administrator on 2015-12-19.
 */
$(function(){
    $(".nav-r > ul > li").hover(function(){
       $(this).children(".children-nav").stop().slideDown(400);
    },function(){
        $(this).children(".children-nav").stop().slideUp(400);
    });

    $(".product ul li").mouseenter(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".product ul li").mouseout(function(){
        $(this).attr("class","");
    });

    $(window).scroll(function(){
        $(".product ul").animate({"left":0,"opacity":1},1000)
    })

    $(".kouhao ul li").hover(function () {
        $(this).find(".liimg").stop().animate({"top":"0"},200).parents("li").siblings().find(".liimg").stop().animate({"top":"-152px"},200)
    }, function () {
        $(this).find(".liimg").stop().animate({"top":"-152px"},200)
    })
    


    $(".imgweixin").hover(function(){
        $(this).next().slideDown(400);
    },function(){
        $(this).next().slideUp(400);
    });

    $(".product-tabHead span").mouseenter(function(){
        $(this).addClass("cur").siblings().removeClass("cur").parent(".product-tabHead").siblings(".product-tabCon").children("ul").eq($(this).index()).show().siblings().hide();
    })
    $(".product-tabCon ul li").hover(function () {
        $(this).css("border","1px solid #3698e0").siblings().css("border","1px solid #fff")
    },function(){
        $(this).css("border","1px solid #fff");
    })

    $(".news-con-l ul li ").mouseover(function(){
        $(this).css("background","#e6ebef").siblings().css("background","");
        $(this).find(".li-date-t").css({"background":"#178bcd","color":"#fff"}).parents("li").siblings().find(".li-date-t").css({"background":"#7b7b7b","color":"#fff"});
        $(this).find(".li-date-b").css({"border":"1px solid #178bcd","color":"#178bcd"}).parents("li").siblings().find(".li-date-b").css({"border":"1px solid #7b7b7b","color":"#7b7b7b"});
        $(this).find(".con-title").css("color","#3698e0").parents("li").siblings().find(".con-title").css("color","#000");
    })
    $(".news-con-l ul li ").mouseout(function(){
        $(this).css("background","");
        $(this).find(".li-date-t").css({"background":"#7b7b7b","color":"#fff"});
        $(this).find(".li-date-b").css({"border":"1px solid #7b7b7b","color":"#7b7b7b"})
        $(this).find(".con-title").css("color","#000")
    })

    $(".bottom-r dl").last().css("border-right","1px solid #2b2b2b");
})