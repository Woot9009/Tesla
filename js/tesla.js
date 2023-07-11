$(function(){

    //메인 영상 마우스무브 이벤트
    
    $("#main").mousemove(function(e){
        let cursorX=e.pageX;
        let cursorY=e.pageY;
        let posXofMain=$("#main").offset().left;
        let posYofMain=$("#main").offset().top;

        if(cursorX<=posXofMain || cursorX>=posXofMain+1240 || cursorY<=posYofMain || cursorY>=posYofMain+620){
            $(".order").stop().animate({left:1100, top:560});
        }else{
            $(".order").animate({left:e.pageX-posXofMain-60, top:cursorY-65},1);
        }
    });
    $("#main").mouseleave(function(){
            $(".order").stop().animate({left:1100, top:560});
    });

    //햄버거메뉴 슬라이드
    $(".hamburger").click(function(){
        $("#gnb").slideToggle();
        $("#mobileMain div").fadeToggle();
    });
    $(window).resize(function(){
        var menu=$("#gnb");
        var w=$(window).width();
        if(w>767 && menu.is(":hidden")){
            menu.removeAttr("style");
        }
    })
        

    //hover시 자동차 내외관 플립
    $(".card").parent().hover(
        function(){$(this).children(".card").addClass("flip");},
        function(){$(this).children(".card").removeClass("flip");}
    );
    

    //hover시 제품 디테일 이미지쇼&비디오
    $(".fadeInOut").hover(
        function(){
            $(this).children(".topLayer").fadeOut();
            $(this).children(".bottomLayer").fadeIn();
        },
        function(){
            $(this).children(".topLayer").fadeIn();
            $(this).children(".bottomLayer").fadeOut();
        }
    );
    
    let triggerNum=0;
    $("#showTrigger").click(function(){
        $(".bottomLayer img").fadeOut("slow");
        $(".bottomLayer img").eq(triggerNum).fadeIn("slow");
        triggerNum++;
        if(triggerNum>=4){triggerNum=0}
    });
    function showTriggerClick(){
        $("#showTrigger").trigger("click");
    }
    setInterval(showTriggerClick,2000);

    //제품 리스트 사이즈 조절
    $(window).resize(function(){
        let productImgSize=$("#products2 li").width();
        $("#products2 li img").css({width:productImgSize});
    }).resize();

    
    //지도 크기 조절 및 스크롤 맞춤
    $("#map iframe.hover").hover(
        function(){
            $(this).stop().animate({width:"1000px", height:"750px"});
            $("html, body").stop().animate({"scrollTop":$("#map").offset().top},"slow");
        },
        function(){
            $(this).stop().animate({width:"200px", height:"150px"});
        },
    );

    $("html a").click(function(e){
        e.preventDefault();
    });
});
