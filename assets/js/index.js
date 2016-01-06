/**
 * Main JS file for GxxGhost
 */

(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        //向上箭头
        $('.gxx_gotopbtn').click(function(){
            $(document).scrollTo(0,250);
        });

        //滚屏触发头部变化
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

        //侧栏的收缩
        $('.gxx_sidebtn').click(function(){
            if($(this).hasClass('gxx_sidebtn_on')){
                $(this).removeClass('gxx_sidebtn_on');
                $('.gxx_frame').addClass('gxx_hidesidebar');
            }
            else{
                $(this).addClass('gxx_sidebtn_on');
                $('.gxx_frame').removeClass('gxx_hidesidebar');
            }
        });

        //主题变更
        $('.gxx_themeselector>li').click(function(){
            var index = $(this).index();
            $(this).addClass('gxx_theme_selected').siblings().removeClass('gxx_theme_selected');
            $('body').removeClass('gxx_theme_1 gxx_theme_2 gxx_theme_3 gxx_theme_4').addClass('gxx_theme_'+index);
            if(localStorage)
                localStorage.themeindex=index;
        });
        //本地存储已选主题
        if(localStorage && typeof(localStorage.themeindex)!=='undefined')
            $('body').addClass('gxx_theme_'+localStorage.themeindex);

        //Disqus
        function gxxPostInit() {
            if($('#disqus_thread').length) {
                if(window.DISQUS) {
                    DISQUS.reset({
                        reload: true
                    });
                } else {
                    var dsq = document.createElement('script');
                    dsq.type = 'text/javascript';
                    dsq.async = true;
                    dsq.src = '//' + gxxconf.disqus_shortname + '.disqus.com/embed.js';
                    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                }
            }
        }
        gxxPostInit();

        //代码高亮
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });

        $(document).on('pjax:success', function() {
            var a = document.createElement('a');
            a.href = document.URL;
            var pathname = a.pathname
                .split('/')
                .filter(function(value){return !!value})
                .shift();
            switch(pathname) {
                case 'author':
                case 'tag':
                case 'page':
                case undefined:
                    $('body').removeClass('post-template');
                    $('body').addClass('home-template');
                    break;
                default:
                    $('body').removeClass('home-template');
                    $('body').addClass('post-template');
            }
            gxxPostInit();
        });

        //Pjax
        new Pjax({
            elements: 'a[href]:not([href^="#"])',
            selectors: [
                'title',
                '.gxx_pjax'
            ]
        });
    });
})(jQuery);
