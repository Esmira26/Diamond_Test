let array = [
    {sekil:"./img/img16.jpg"},
    {sekil:"./img/img17.jpg"},
    {sekil:"./img/img15.jpg"}
]
                
var sira = 0;
function append() {
    $(".sekil").html(`<img src="${array[sira].sekil}">`);
}

$(".fa-greater-than").click(function () {
    append()
    greater()
})
$(".fa-less-than").click(function () {
    append()
    less()
})
function greater() {
    if (sira==array.length-1) {
        sira=0
    }
    else{
        sira++
    }
}
function less() {
    if (sira==0) {
        sira=array.length-1
    }
    else{
        sira--
    }
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 var swiper = new Swiper(".swipper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

document.querySelectorAll(".fa-heart").forEach(x => {
    x.addEventListener("click",function () {
        x.classList.toggle("active").TransitionEvent(2000)
    })
});

$(".div1 i").click(function () {
    $(".yeni").css("opacity","1")
    $(".yeni").css("height","580px")
});

window.addEventListener("scroll",function () {
    if (window.scrollY>=2200) {
        document.querySelector(".cont1").style.animationName='cont1'
        document.querySelector(".cont2").style.animationName='cont2'
        document.querySelector(".container p").style.animationName='contp'
    }
    else{
        document.querySelector(".cont1").style.animationName=''
        document.querySelector(".cont2").style.animationName=''
        document.querySelector(".container p").style.animationName=''
    }
    console.log(window.scrollY)
})

window.addEventListener("scroll",function () {
    if (window.scrollY>=4213){
        document.querySelector(".hover1").style.animationName='yuxari'
        document.querySelector(".hover2").style.animationName='asagi'
    }
    else{
        document.querySelector(".hover1").style.animationName=''
        document.querySelector(".hover2").style.animationName=''
    }
    console.log(window.scrollY);
})


