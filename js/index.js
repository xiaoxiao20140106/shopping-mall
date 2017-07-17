$(function(){
	//下面是swiper轮播图
	var swiper = new Swiper('.swiper-banner', {
        pagination: '.swiper-pagination-banner',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2000,
        loop: true,
        autoplayDisableOnInteraction: false
})
});
// 获取倒计时
function run(){
            var newDate=new Date("2017-5-1 00:00:00");
            var date=new Date();
            var miliseconds=newDate.getTime()-date.getTime();//毫秒数
            var seconds=miliseconds/1000;
            var day=parseInt(seconds/60/60/24);
            var hour=parseInt(seconds/60/60%24);
            var minute=parseInt(seconds/60%60);
            var sec=parseInt(seconds%60);
            

            if(minute<10){
                minute="0"+minute;
            }
            if(sec<10){
                sec="0"+sec;
            }   
            if(hour<10){
                hour="0"+hour;
            }
             if(day<10){
                day="0"+day;
            }
            document.getElementById("lastDate").innerHTML=day+"天"+hour+"时"+minute+"分"+sec+"秒";
        }
        window.onload=function(){
            setInterval(run,1000);
};
// 控制下拉框的显示隐藏和图片旋转
$(function(){
    $("#pullDown").on("click",function(){
        if($("#pull-select").is(":hidden")){
            $("#pull-select").show();
            $("#pullDown img").css("transform","rotate(180deg)");
        }else{
            $("#pull-select").hide();
            $("#pullDown img").css("transform","rotate(0deg)");
        }
    })
    $("#pull-select").find("li").on("click",function(){
    $("#pull-down-span").html($(this).html());
});
// 实现控制显示隐藏内容
var show=0;
$(".see").on("click",function(){
    if(show==0){
        $(".hide").slideDown();//通过使用滑动效果，显示被隐藏的被选元素
        $(".see").html("关闭显示");
        show=1;
    }else{
         $(".hide").slideUp();
         $(".see").html("查看全部团购");
         show=0;
    }
})
  
});

  

