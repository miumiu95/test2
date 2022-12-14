
var title = document.querySelector("#intro .title");
var section = document.querySelectorAll("section");
window.addEventListener("wheel", go);
document.querySelector(".menu")
.addEventListener("click", goSection);
$(".gnb").click(goSection);
//$(".menu").click(goSection);
var offset = 0;
var sectionCounter = 0;
var count = 0;
function go(e){
    count++;
    var goCount = count%5;
    if(e.wheelDelta < 0){
        if(goCount == 4 && sectionCounter < 5){
            sectionCounter++;
        }
    }else{
        if(goCount == 4 && sectionCounter > 0){
            sectionCounter--;
        }
    }
    offset = innerHeight * sectionCounter; //innerWidth, scrollLeft
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

    setTimeout(activeMenu,300);
}

function activeMenu(){ //휠을 굴렸을때 메뉴이동
    // section.forEach(function(ele){ele.classList.remove("on");});
    for(var i=0; i<section.length; i++){
        section[i].classList.remove("on");
    }
    section[sectionCounter].classList.add("on");

    $(".menu a").removeClass("on");
    $(".menu li").eq(sectionCounter).children("a").addClass("on");
    //$(".menu li:eq(0) a").addClass("on");
    $(".gnb a").removeClass("active");
    $(".gnb li").eq(sectionCounter).children("a").addClass("active");
}

function goSection(e){ //마우스로 클릭했을때 메뉴이동
    sectionCounter = e.target.getAttribute("datanum");
    
    $(".menu a").removeClass("on");
    e.target.classList.add("on");
    $(".gnb a").removeClass("active");
    e.target.classList.add("active");

    offset = innerHeight * sectionCounter; //innerWidth, scrollLeft
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

    setTimeout(activeMenu,300);
}

// 스크롤 막기 시작
$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
event.preventDefault();
event.stopPropagation();
return false;
});
//스크롤 막기 끝

//burger
$(".burger").click(
    function(){
        $(".burger").toggleClass("on");
        $("nav").toggleClass("on");
    }
);
