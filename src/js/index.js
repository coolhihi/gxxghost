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
        
        //more tag button listener - start
        if($('#GxxSidebarTags a').length>gxxconf.showtag){
            $('#GxxSidebarTags a:gt(9)').addClass('gxx_sidebar_tag_hidden');
            $('.gxx_sidebar_more').show().click(function(){
                var $btn=$(this);
                if($btn.hasClass('gxx_sidebar_more_active')){
                    $btn.removeClass('gxx_sidebar_more_active');
                    $('#GxxSidebarTags a:gt('+(gxxconf.showtag-1)+')').addClass('gxx_sidebar_tag_hidden');
                }
                else{
                    $btn.addClass('gxx_sidebar_more_active');
                    $('#GxxSidebarTags a:gt('+(gxxconf.showtag-1)+')').removeClass('gxx_sidebar_tag_hidden');
                }
            });
        }
        //more tag button listener - end

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
        
        //baidu zhannei search - start
        /*
        document.getElementById('bdcs-search-form-sid').value=gxxconf.bdznsid;
        var bdcs = document.createElement('script');
        bdcs.type = 'text/javascript';bdcs.async = true;
        bdcs.src = 'http://znsv.baidu.com/customer_search/api/js?sid=' + gxxconf.bdznsid + '&plate_url=' + encodeURIComponent(window.location.href) + '&t=' + Math.ceil(new Date()/3600000);
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(bdcs);
        */
        //baidu zhannei search - end

        //google analytics init - start
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', gxxconf.googleanalyticsid, 'auto');
        //google analytics init - end

        //disqus count init - start
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.id="dsq-count-scr";
        dsq.async = true;
        dsq.src = '//' + gxxconf.disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        //disqus count init - end
        
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

            //刷新评论数
            window.DISQUSWIDGETS = undefined;
            $.getScript("http://" + gxxconf.disqus_shortname + ".disqus.com/count.js");

            //发送更新通知到google analytics
            ga("send", "pageview", {"page": location.pathname, "title": document.title});

            //推送网址给百度
            var bpurl = '';
            if (window.location.protocol.split(':')[0] === 'https') {
                bpurl = 'https://zz.bdstatic.com/linksubmit/push.js';        
            }
            else {
                bpurl = 'http://push.zhanzhang.baidu.com/push.js';
            }
            $.getScript(bpurl);
        }
        gxxPostInit();
        //Init when onload or pjax success - end

        //Pjax - start
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
