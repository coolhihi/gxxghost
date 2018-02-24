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
5. 其他人现在可以通过扫描您的收款二维码给您打赏
6. 主题样式由COoL本人设计编码，但色彩参考Hexo的icarus主题及w3cplus网站

## 个性化配置

1. 修改头部标题

    编辑文件 `dist/partials/custom/sitetitle.hbs`

2. 修改侧边栏的博主信息

    编辑文件 `dist/partials/custom/owner.hbs`

3. 由于 ghost 没有目录结构，只通过标签分类，所以我定义了 “笔记”、“作品”、“杂货” 三个标签当作目录使用, 在 `partials/sitebar` 文件里也对这三个标签做了过滤操作，若你使用不同的标签结构，请注意修改
    
4. 修改disqus的shortname，google analytics的网站id，侧边栏tag默认显示的数量

    编辑文件 `dist/partials/custom/config.hbs`

5. 替换您的微信收款二维码和支付宝收款二维码，这两张二维码将显示在博文的下方，访客可以通过扫描二维码给您打赏

    * 若您是开发者，请确保处于gulp开启状态，替换`src/img/wepay.png`和`src/img/alipay.png`即可自动完成自动同步变更dist目录中资源
    * 若您并非开发者，请替换`dist/assets/img/wepay.png`和`dist/assets/img/alipay.png`即可

## 布置使用

1. 打包`dist`目录为`zip`压缩包
2. 运行 ghost 后在网页上登录 ghost 后台
3. 在 `Design` 中 `Upload a theme`，选择刚打包好的zip文件
4. 在 `Design` 中新建“笔记”、“作品”、“杂货”的导航并指向它们的地址
5. 在 `Labs` 中打勾 `Public API`**(否则侧边栏中的图文列表和标签列表将无法使用)**

## 主题编辑

1. 请运行`npm run dev`启动`gulp`监控
2. src中文件是调用资源，包括css,js,font,img，将自动完成资源的优化和发布到`dist/assets`中
3. dist中文件为最终主题文件，用于最终打包上传
