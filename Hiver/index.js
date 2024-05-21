
$('.slide').eq(0).clone().appendTo('.slide-wrap')
let i = 0

function slide(){
i++
console.log(i)
$('.slide-wrap').animate({'marginLeft':-100*i+'%'},1000)
if(i===3){i=0
    $('.slide-wrap').animate({'marginLeft':0},0)
}


}

setInterval(slide,3000)