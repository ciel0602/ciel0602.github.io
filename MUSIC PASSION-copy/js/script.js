$(function(){
    $(window).scroll(function (){
        $('.fadeIn').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
            }
        });
    });

    var Number = 0;
    var Length = $('.fes-items').length-2;
$('.left-btn').click(function(){
    Number--;
    console.log(Number);
    console.log(Length);
    $('#item' + (Number+1)).fadeIn(2000);
    if(Number === 0){
        $('.left-btn').css('display','none');
    }else{
        $('.right-btn').css('display','block');
    }
});
$('.right-btn').click(function(){
    Number++;
    console.log(Number);
    console.log(Length);
    $('#item' + Number).fadeOut(1000);
    if(Number === Length){
        $('.right-btn').css('display','none');
    }else{
        $('.left-btn').css('display','block');
    }
});

function menuOpen (){
    $('header').hide();
    $('main').hide();
    $('section').hide();
    $('form').hide();
    $('footer').hide();
    $('.menu').fadeIn();
}
$('.menu-icon').click(function(){
    menuOpen(1);
});

function menuHide (){
    $('header').show();
    $('main').show();
    $('section').show();
    $('form').show();
    $('footer').show();
    $('.menu').fadeOut();
}
$('.menu-cancel').click(function(){
    menuHide(1);
});

});
