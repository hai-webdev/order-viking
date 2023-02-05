// 头部的js代码
import "./index.less";
import "wowjs/css/libs/animate.css";
const bannerHeight = $("#banner").height();
const navHeight = $("header").height();
$(window).scroll(function(){
    const scrollTop = $(this).scrollTop();
    if(scrollTop > bannerHeight - navHeight){
        $("header").addClass("on")
    } else{
        $("header").removeClass("on")
    }
})