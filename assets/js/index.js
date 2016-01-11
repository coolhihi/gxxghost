/**
 * Main JS file for GxxGhost
 */

(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        //the top button listener - start
        $('.gxx_gotopbtn').click(function(){
            $(document).scrollTo(0,250);
        });
        //the top button listener - end

        //scroll to change the header style - start
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
        //scroll to change the header style - end
        
        //
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', gxxconf.googleanalyticsid, 'auto');
        ga('send', 'pageview');

        //Init when onload or pjax success - start
        function gxxPostInit() {
            if($('#disqus_thread').length) {
                var disqus_config = function () {
                    this.page.url = $('#GxxPostUrl').val();  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = $('#GxxPostId').val(); // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                }
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

                //代码高亮
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });
            }
        }
        gxxPostInit();
        //Init when onload or pjax success - end

        //Pjax - start
        $(document).on('pjax:end', function() {
            var pathname = document.location.pathname
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
        });
        new Pjax({
            elements: 'a[href]:not([href^="#"])',
            selectors: [
                'title',
                '.gxx_pjax'
            ]
        });
        //Pjax - end
    });
})(jQuery);
