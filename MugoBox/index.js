$('.chracter ul li').click(function(){

    $('.chracter ul li a').removeClass('on')
    $(this).find('a').addClass('on')

    let index = $(this).index()

    $('article').removeClass('on')
    $('article').eq(index).addClass('on')
})