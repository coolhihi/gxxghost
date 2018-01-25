[English Readme](https://github.com/coolhihi/gxxghost/blob/master/README.md)

# GxxGhost

用于 Ghost 的一款个人博客模板

## 预览

[COoL's Blog](http://blog.gxxsite.com)

![截图](https://github.com/coolhihi/gxxghost/raw/master/_doc/gxxghost-screenshot.png)

## 特点

1. 代码高亮
2. 嵌入Disqus作评论系统
3. 使用pjax实现全站无刷新切换内容
4. 使用百度站内搜索
5. 主题样式由COoL本人设计编码，但色彩参考Hexo的icarus主题及w3cplus网站

## 安装

1. 安装 ghost
2. 克隆本主题到 ghost 的主题文件夹（`content/themes`）

        $ cd ghostfolder/content/themes
        $ git clone https://github.com/coolhihi/gxxghost.git
    

## 配置

1. 修改头部标题

    编辑文件 `partials/custom/sitetitle.hbs`

2. 修改侧边栏的博主信息

    编辑文件 `partials/custom/owner.hbs`
    
3. 修改网站 `<meta>` 信息

    编辑文件 `partials/custom/meta.hbs`

4. 由于 ghost 没有目录结构，只通过标签分类，所以我定义了 “笔记”、“作品”、“杂货” 三个标签当作目录使用, 在 `partials/sitebar` 文件里也对这三个标签做了过滤操作，若你使用不同的标签结构，请注意修改
    
5. 修改disqus的shortname，google analytics的网站id，百度站内搜索的sid

    编辑文件 `partials/custom/config.hbs`
    
## 使用方法

1. 运行 ghost 后在网页上登录 ghost 后台
2. 在 `General` 中选择主题为 `GxxGhost`
3. 在 `Labs` 中打勾 `Public API`**(否则侧边栏中的图文列表和标签列表将无法使用)**
4. 重启 ghost
