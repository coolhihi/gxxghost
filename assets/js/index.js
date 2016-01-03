/**
 * Main JS file for GxxGhost
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {
        var $postContent = $(".post-content");
        $postContent.fitVids();

        $('.gxx_gotopbtn').click(function(){
            console.log('xxx');
            $(document).scrollTo(0,250);
        });

        $(document).scroll(function(){
            var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
            if(scrollTop<60){
                $('.gxx_fixheader').removeClass('gxx_fixheader');
                $('.gxx_gotopbtn').hide();
            }
            else{
                $('.gxx_header').attr('class','gxx_header gxx_fixheader');
                $('.gxx_gotopbtn').show();
            }
        });

        $('.gxx_sidebtn').click(function(){
            console.log($(this).hasClass('gxx_sidebtn_on'));
            if($(this).hasClass('gxx_sidebtn_on')){
                console.log('b');
                $(this).removeClass('gxx_sidebtn_on');
                $('.gxx_frame').addClass('gxx_hidesidebar');
            }
            else{
                $(this).addClass('gxx_sidebtn_on');
                $('.gxx_frame').removeClass('gxx_hidesidebar');
            }
        });

        $('.gxx_themeselector>li').click(function(){
            var index = $(this).index();
            $(this).addClass('gxx_theme_selected').siblings().removeClass('gxx_theme_selected');
            $('body').removeClass('gxx_theme_1 gxx_theme_2 gxx_theme_3 gxx_theme_4').addClass('gxx_theme_'+index);
            if(localStorage)
                localStorage.themeindex=index;
        });
    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);
