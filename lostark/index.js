$('li.main_menu').mouseenter(function(){
    $('ul.sub_menu').stop().removeClass('on')
    $(this).find('ul.sub_menu').stop().addClass('on')
})

$('ul.sub_menu').mouseleave(function(){

setTimeout(function(){

    $('ul.sub_menu').removeClass('on');
}, 2000)

})

$('')