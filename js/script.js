//a태그 스크립트 위로 튕기는 속성 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


//scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

//배경색 변경
$(window).on('scroll resize',function(){
    var scrollTop=0;
    scrollTop=$(document).scrollTop();
    bgColor();

    function bgColor(){
        if(scrollTop>1300){
            $('body').addClass('on');
        } else{
            $('body').removeClass('on');
        } if(scrollTop>2700){
            $('body').removeClass('on');
        }
    };
});

//햄버거메뉴
$(function(){
    $(".menuOpen button.open").on("click",function(){
        $(".menuOpen .menuWrap").addClass("on");
        $(".menuOpen .menuWrap .close").on("click",function(){
            $(".menuOpen .menuWrap").removeClass("on");
        });
    });
});

// span.bar
$(function(){
    $(".gnb li a").on("mouseenter focus", function(){
        var bar=$(this).position().left;
        var width=$(this).width();
        $("span.bar").css({"left":bar + "px", "width":width + "px", "opacity":1});
    });
    $(".gnb li a").on("mouseleave focus", function(){
        $("span.bar").css({"left":0, "width":0, "opacity":0});
    });
});


// $(function() {
//     $('.svgAni').find('path').each(function( i, path ){  
//     var length = path.getTotalLength();
//     alert(length);
//     });
// });