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

//Validate form
$('#contacts-form').validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        text: {
            required: true,
            minlength: 5
        },
        checkbox_policy: {
            required: true
        }
    },
    messages: {
        name: " ",
        email: {
            required: " ",
            email: " "
        },
        text: {
            required: " ",
            minlength: jQuery.validator.format(" ")
        },
        checkbox_policy: " "
    }
});

// Modal
$('.modal__close').on('click', function() {
$('.overlay, #thanks').fadeOut('slow');
});

// Обработка форм
$('form').submit(function(e) {
    // Отмена стандартного поведения браузера
    e.preventDefault();
    //Отправка данных на сервер
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });