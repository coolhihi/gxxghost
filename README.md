# GxxGhost

This is a theme for Ghost.

![](https://github.com/coolhihi/gxxghost/raw/master/_doc/gxxghost-screenshot.png)

##Preview

[COoL's Blog](http://blog.gxxsite.com)

##Installation

1. install ghost
2. checkout this repo to themes folder

        $ cd ghostfolder/content/themes
        $ git clone https://github.com/coolhihi/gxxghost.git
    

##Configuration

1. Blog title

    edit this file `partials/sitetitle.hbs`

2. Owner info in sidebar

    edit this file `partials/owner.hbs`
    
3. add or edit `<meta>`

    edit this file `partials/meta.hbs`

4. because ghost do not have folder, show I make hidden tags to do this, the hidden tags should not show in sidebar. so edit `partials/sitebar` to change the my 3 chinese words
    
5. change the disqus short_name and baidu search sid

    edit this file `partials/config.hbs`
    
6. you can delete the `partials/hm.hbs` or use it.
    
##Use

1. log in your ghost manage platform
2. go to `General` to select this `GxxGhost` theme
3. go to `Labs` to tick `Public API`**(if you want to use the images list and tags list in sidebar, you must do this)**
4. restart your ghost
