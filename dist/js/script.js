const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skills__rating-percent'),
    lines = document.querySelectorAll('.skills__rating-line span');

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Smooth scroll and pageup
$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
    } else {
    $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

new WOW().init();