[中文介绍](https://github.com/coolhihi/gxxghost/blob/master/README.zh-cn.md)

# GxxGhost

This is a theme for Ghost.

## Preview

[COoL's Blog](http://blog.gxxsite.com)

![screenshot](https://github.com/coolhihi/gxxghost/raw/master/_doc/gxxghost-screenshot.png)

## Feature

1. use highlightjs to highlight code
2. use disqus for comments
3. use pjax
4. use baidu to handle the search
5. design by COoL but somethings refer to the icarus theme of hexo and w3cplus

## Installation

1. install ghost
2. checkout this repo to themes folder

        $ cd ghostfolder/content/themes
        $ git clone https://github.com/coolhihi/gxxghost.git
    

## Configuration

1. Blog title

    edit this file `partials/custom/sitetitle.hbs`

2. Owner info in sidebar

    edit this file `partials/custom/owner.hbs`
    
3. add or edit `<meta>`

    edit this file `partials/custom/meta.hbs`

4. because ghost do not have folder, so I make hidden tags to do this, the hidden tags should not show in sidebar. so edit `partials/sitebar` to change the my 3 chinese words
    
5. change disqus's shortname, baidu search sid, google analytics id

    edit this file `partials/custom/config.hbs`
    
## Use

1. log in your ghost manage platform
2. go to `General` to select this `GxxGhost` theme
3. go to `Labs` to tick `Public API`**(if you want to use the images list and tags list in sidebar, you must do this)**
4. restart your ghost
