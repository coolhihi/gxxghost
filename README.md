[中文介绍](https://github.com/coolhihi/gxxghost/blob/master/README.zh-cn.md)

# GxxGhost

This is a theme for Ghost.

## Support

This branch only support Ghost 1.x

*the branch `for0.x` is for Ghost 0.x*

## Preview

[COoL's Blog](http://blog.gxxsite.com)

![screenshot](https://github.com/coolhihi/gxxghost/raw/master/_doc/gxxghost-screenshot.png)

## Feature

1. use highlightjs to highlight code
2. use disqus for comments
3. use pjax
4. use google to handle the search
5. others can give you a reward by scan qrcode
6. design by COoL but somethings refer to the icarus theme of hexo and w3cplus

## Custom setting

1. Blog title

    edit this file `dist/partials/custom/sitetitle.hbs`

2. Owner info in sidebar

    edit this file `dist/partials/custom/owner.hbs`

3. because ghost do not have folder, so I make hidden tags to do this, the hidden tags should not show in sidebar. so edit `partials/sitebar` to change the my 3 chinese words
    
4. change disqus's shortname, google analytics id, tag default size

    edit this file `dist/partials/custom/config.hbs`

5. update the qrcode for pay

    * if you are developer, make sure `gulp` is running, then replace `src/img/wepay.png` and `src/img/alipay.png`
    * if you are just a user, please replace `dist/assets/img/wepay.png` and `dist/assets/img/alipay.png`
    
## Use

1. zip the `dist` folder
2. login your ghost manage panel
3. go to `Design` then `Upload a theme`, select the file you just zip
4. go to `Design` then add navigations
5. go to `Labs` to tick `Public API`**(if you want to use the images list and tags list in sidebar, you must do this)**

## Develop

1. `npm run dev` or `gulp`
2. `src` folder is the asset sources, including css,js,font,img. they will be minify and copy to `dist/assets`
3. `dist` folder is the final theme folder