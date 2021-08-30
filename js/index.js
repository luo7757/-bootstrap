$(function(){
    $('.carousel').carousel({
        interval: 3000
    })
    $('#menu-btn').addClass('active');

    $('#menu-btn').click(function(){
        removeAndAdd();
        shadowMenu();
    })
    $('#close-btn').click(function(){
        removeAndAdd();
    })
    function removeAndAdd(){
        if($('.header-nav').hasClass('active')){
        $('.header-nav').removeClass('active');
        $('.login-nav').removeClass('active');
        $('#header-menu').removeClass('active');
        $('#menu-btn').addClass('active');
        $('#close-btn').removeClass('active');
    }else{
        $('.header-nav').addClass('active');
        $('.login-nav').addClass('active');
        $('#header-menu').addClass('active');
        $('#menu-btn').removeClass('active');
        $('#close-btn').addClass('active');
    }
    }
    $(window).on('resize',function(){
        if(window.innerWidth < 576){
            $('.header-nav').removeClass('active');
            $('.login-nav').removeClass('active');
            $('#header-menu').removeClass('active');
            $('#menu-btn').addClass('active');
            $('#close-btn').removeClass('active');
        }
        shadowMenu();
    })

    function shadowMenu(){
        if(window.innerWidth <= 992 && $('.header-nav').hasClass('active')){
            $('body').css('overflow','hidden');
        }else{
            $('body').css('overflow','auto');
        }
    }
})