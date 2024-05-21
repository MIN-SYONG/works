$('.btn.event').click(function(){
    c1_Hide()
    c2_Show()
    danceR_move()
    
})
$('.btn.Character').click(function(){
    c1_Hide()
    c3_Show()
    danceR_move()
})

$('.content.two i').click(function(){
    c1_Show()
    c2_Hide()
    danceR_remove()
})

$('.content.three i').click(function(){
    c1_Show()
    c3_Hide()
    danceR_remove()
})


// content one 나와
function c1_Show() {
    $('.content.one').fadeIn(350)
    $('#main').fadeIn(350)
}
// content one 들어가
function c1_Hide() {
    $('.content.one').fadeOut(350)
    $('#main').fadeOut(350)
}
// content two 나와
function c2_Show() {
    $('.content.two').fadeIn(350)
    $('#event').fadeIn(350)
    line_Show()
}
// content two 들어가
function c2_Hide() {
    $('.content.two').fadeOut(200)
    $('#event').fadeOut(200)
    line_Hide()
}
// content three 나와
function c3_Show() {
    $('.content.three').fadeIn(350)
    $('#character').fadeIn(350)
}
// content three 들어가
function c3_Hide() {
    $('.content.three').fadeOut(200)
    $('#character').fadeOut(200)
}
// 라인 그려
function line_Show() {
    $('.content.two .top').animate({ 'width': '100%' }, 500, function () {
        $('.content.two .right').animate({ 'height': '100%' }, 500, function () {
            $('.content.two .bottom').animate({ 'width': '100%' }, 500, function () {
                $('.content.two .left').animate({ 'height': '100%' }, 500, function () {
                    $('.content.two .swiper').fadeIn(500)
                    $('.content.two .bi-caret-down-square').fadeIn(500)
                })
            })
        })
    })
}

// 라인 지워
function line_Hide() {
    $('.content.two .top').animate({ 'width': '0%' })
    $('.content.two .right').animate({ 'height': '0%' })
    $('.content.two .bottom').animate({ 'width': '0%' })
    $('.content.two .left').animate({ 'height': '0%' })
    $('.content.two .swiper').fadeOut()
    $('.content.two .bi-caret-down-square').fadeOut()
}
// 춤추는 라이언 나오고 움직여
function danceR_move() {
$('.dance_ryan').addClass('dance', function(){
    $('.dance_ryan').toggleClass('dance danceback')
        if($('.dance_ryan').hasClass('dance')){
            $('.dance_ryan').removeClass('danceback')
        } else{$('.dance_ryan').removeClass('dance')}
    })
}

// 춤추는 라이언 다시 나와
function danceR_remove() {
            $('.dance_ryan').addClass('danceback', function(){
        })
        
    
    }


// 하트하는 라이언 작아지고 사라져
function heartR_hide(){

}






