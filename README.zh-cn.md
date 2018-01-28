[English Readme](https://github.com/coolhihi/gxxghost/blob/master/README.md)

# GxxGhost

用于 Ghost 的一款个人博客模板

## 支持

当前分支只支持 Ghost 1.x

*Ghost 0.x 请切换到`for0.x`分支*

## 预览

[COoL's Blog](http://blog.gxxsite.com)

![截图](https://github.com/coolhihi/gxxghost/raw/master/_doc/gxxghost-screenshot.png)

## 特点

1. 代码高亮
2. 嵌入Disqus作评论系统
3. 使用pjax实现全站无刷新切换内容
4. 使用谷歌站内搜索
5. 主题样式由COoL本人设计编码，但色彩参考Hexo的icarus主题及w3cplus网站

## 个性化配置

## 配置

1. 修改头部标题

    编辑文件 `partials/custom/sitetitle.hbs`

2. 修改侧边栏的博主信息

    编辑文件 `partials/custom/owner.hbs`

3. 由于 ghost 没有目录结构，只通过标签分类，所以我定义了 “笔记”、“作品”、“杂货” 三个标签当作目录使用, 在 `partials/sitebar` 文件里也对这三个标签做了过滤操作，若你使用不同的标签结构，请注意修改
    
4. 修改disqus的shortname，google analytics的网站id，侧边栏tag默认显示的数量

    编辑文件 `partials/custom/config.hbs`

## 布置使用

1. 打包`gxxghost`目录为`gxxghost.zip`
2. 运行 ghost 后在网页上登录 ghost 后台
3. 在 `Design` 中 `Upload a theme`，选择刚打包好的zip文件
4. 在 `Design` 中新建“笔记”、“作品”、“杂货”的导航并指向它们的地址
5. 在 `Labs` 中打勾 `Public API`**(否则侧边栏中的图文列表和标签列表将无法使用)**

