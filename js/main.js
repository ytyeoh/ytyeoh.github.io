(function($){'use strict';$('.site-menu-toggle').click(function(){var $this=$(this);if($('body').hasClass('menu-open')){$this.removeClass('open');$('.js-site-navbar').fadeOut(400);$('body').removeClass('menu-open');}else{$this.addClass('open');$('.js-site-navbar').fadeIn(400);$('body').addClass('menu-open');}});$('nav .dropdown').hover(function(){var $this=$(this);$this.addClass('show');$this.find('> a').attr('aria-expanded',true);$this.find('.dropdown-menu').addClass('show');},function(){var $this=$(this);$this.removeClass('show');$this.find('> a').attr('aria-expanded',false);$this.find('.dropdown-menu').removeClass('show');});$('#dropdown04').on('show.bs.dropdown',function(){console.log('show');});AOS.init({duration:1000});$('.home-slider').owlCarousel({loop:true,autoplay:true,margin:10,animateOut:'fadeOut',animateIn:'fadeIn',nav:true,autoplayHoverPause:true,items:1,autoheight:true,navText:["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1,nav:false},600:{items:1,nav:false},1000:{items:1,nav:true}}});var majorCarousel=$('.js-carousel-1');majorCarousel.owlCarousel({loop:true,autoplay:true,stagePadding:7,margin:20,animateOut:'fadeOut',animateIn:'fadeIn',nav:true,autoplayHoverPause:true,items:3,navText:["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1,nav:false},600:{items:2,nav:false},1000:{items:3,nav:true,loop:false}}});var major2Carousel=$('.js-carousel-2');major2Carousel.owlCarousel({loop:true,autoplay:true,stagePadding:7,margin:20,nav:true,autoplayHoverPause:true,autoHeight:true,items:3,navText:["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1,nav:false},600:{items:2,nav:false},1000:{items:3,dots:true,nav:true,loop:false}}});var siteStellar=function(){$(window).stellar({responsive:false,parallaxBackgrounds:true,parallaxElements:true,horizontalScrolling:false,hideDistantElements:false,scrollProperty:'scroll'});}
siteStellar();var smoothScroll=function(){var $root=$('html, body');$('a.smoothscroll[href^="#"]').click(function(){$root.animate({scrollTop:$($.attr(this,'href')).offset().top},500);return false;});}
smoothScroll();var dateAndTime=function(){$('#m_date').datepicker({'format':'m/d/yyyy','autoclose':true});$('#checkin_date, #checkout_date').datepicker({'format':'d MM, yyyy','autoclose':true});$('#m_time').timepicker();};dateAndTime();var windowScroll=function(){$(window).scroll(function(){var $win=$(window);if($win.scrollTop()>200){$('.js-site-header').addClass('scrolled');}else{$('.js-site-header').removeClass('scrolled');}});};windowScroll();var goToTop=function(){$('.js-gotop').on('click',function(event){event.preventDefault();$('html, body').animate({scrollTop:$('html').offset().top},500,'easeInOutExpo');return false;});$(window).scroll(function(){var $win=$(window);if($win.scrollTop()>200){$('.js-top').addClass('active');}else{$('.js-top').removeClass('active');}});};})(jQuery);

$( ".menuLink" ).click(function() {
  $('#site-navbar')[0].style.display= 'none';
  $('.site-menu-toggle').removeClass('open');
  $('.menu-open').removeClass('menu-open');
});


$(document).ready(function() {
    $('#pingForm').validate({
        rules: {
            name: "required",            
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true
            },
            category: "required"
        },
        errorElement: "span" ,                            
        messages: {
            name: "Please enter your sweet name",
            email: "Please enter valid email address",
            phone: "Please enter your mobile number",
            category: "Please choose category"
        },
        submitHandler: function(form) {
            var dataparam = $('#pingForm').serialize();

            $.ajax({
                type: 'POST',
                async: true,
                url: 'https://guarded-forest-36819.herokuapp.com/lists',
                // url: './client/mail.php',
                data: dataparam,
                datatype: 'json',
                cache: true,
                global: false,
                beforeSend: function() { 
                    $('#loader').show();
                    $('#button').hide();
                },
                success: function(data) {
                    if(data == 'success'){
                        console.log(data);
                    } else {
                        $('.no-config').show();
                        console.log(data);
                    }

                },
                complete: function() { 
                    $(".alert").show();
                          setTimeout(function(){
                            $(".alert-top").hide();
                          }, 2000);
                    $('#loader').hide();
                    $("#result").html('Thank For Contact Us');
                    $("#result").show();
                }
            });
        }                
    });
});