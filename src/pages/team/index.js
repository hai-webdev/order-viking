// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";
import {WOW} from "wowjs";
new WOW().init();
// 引入页面公共部分的js
import "../common/header";
import "../common/footer";
import "font-awesome/css/font-awesome.min.css";
const video = $("video");
$(".video-play").on("click", function(){
    var status = video.data("status");
    console.log(status);
    if(!status){
        video.prop("controls", true)
        $(this).find(".play-btn").removeClass("show");
        $(this).find(".pause-btn").addClass("show");
        video.get(0).play();
        video.data("status", "1");
    } else{
        $(this).find(".pause-btn").removeClass("show");
        $(this).find(".play-btn").addClass("show");
        video.get(0).pause();
        video.data("status", "");
    }
})