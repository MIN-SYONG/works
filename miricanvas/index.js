$('.menu li a').click(function (e) {
    e.preventDefault()
    let href = $(this).attr('href')
    let secTop = $(href).offset().top
    // offset이란? 어떤 값의 간격?
    $('nav ul li a').removeClass('on')
    $(this).addClass('on')
    $('html').stop().animate({ 'scrollTop': secTop })
})

$('section').mousewheel(function (e, delta) {
    if (delta > 0) {
        // alert('Up')
        let prev = $(this).prev().offset().top
        $('html').stop().animate({ 'scrollTop': prev })

    } else if (delta < 0) {
        // alert('Down')
        let next = $(this).next().offset().top
        $('html').stop().animate({ 'scrollTop': next })
    }
})

$(window).scroll(function () {
    let scrollTop = $(this).scrollTop()
    $('h5').text(scrollTop)

    $('section').each(function (i) {
        let secTop = $(this).offset().top

        if(scrollTop>=secTop){
            $('article.visual').removeClass('on')
            $(this).find('article.visual').addClass('on')
            $('nav ul li a').removeClass('on')
            $('nav ul li').eq(i).find('a').addClass('on')
        }
    })
})