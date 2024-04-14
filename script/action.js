$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    let winH = $(window).height();
    let docH = $(document).height();
    let garoW = $('.garo').width();
    let per = garoW / (docH - winH);
    let dab = scrT * per;

    $('.garo span').css({width:dab})

    if(scrT >= 900){
        $('.cls-2').animate({height:'100px'},1000)
    }
})

// 브라우저 화면 확대 및 축소를 완전히 막는 스크립트
document.addEventListener('keydown', function (event) {
    // Ctrl 키 (Windows) 또는 Command 키 (Mac)와 + 또는 - 키가 동시에 눌려있는 경우
    if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-')) {
        event.preventDefault(); // 이벤트의 기본 동작을 막음
    }
});

// 마우스 휠로의 화면 조절을 막는 스크립트
document.addEventListener('wheel', function (event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault(); // 이벤트의 기본 동작을 막음
    }
}, { passive: false });