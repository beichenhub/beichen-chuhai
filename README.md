# 北辰出海网站演示版

这是一个可直接打开和免费部署的静态商城前端。

## 已实现

- 仿参考图的左侧分类、顶部导航、宣传区、公告区与商品列表
- 商品搜索与分类筛选
- 下单弹窗
- USDT TRC20 支付页面
- 本地订单记录
- 深色模式
- 手机端适配

## 重要说明

本项目只适用于合法数字服务、咨询与技术支持。不要用于账号交易、冒用身份、规避平台风控、欺诈或其他违反平台规则的活动。

## 本地打开

直接双击 index.html 即可。

## 免费部署到 Vercel

1. 登录 GitHub
2. 新建一个仓库
3. 上传 index.html、styles.css、app.js
4. 登录 Vercel
5. 选择 Add New Project
6. 导入刚才的 GitHub 仓库
7. Framework Preset 选择 Other
8. 点击 Deploy

## 免费部署到 Netlify

1. 登录 Netlify
2. 进入 Sites
3. 把整个文件夹拖入页面
4. 等待部署完成

## 上线前必须修改

在 app.js 中搜索以下内容并替换：

- 请在 app.js 中替换为你的 TRC20 收款地址
- @your_support
- support@example.com

## 当前限制

这是前端演示版，没有真实用户系统、后台管理、数据库和自动链上确认。订单保存在当前浏览器的 localStorage 中。后续可升级为 Supabase 数据库版本。


## 本次更新

- 增加 40 余项细分服务
- 按平台、年龄段、资料类型、安全设置和订阅咨询进行分类
- 定制服务改为联系客服
- 增加满额提示逻辑


## 支付页面更新

- 已绑定 TRC20 地址：TBrXpCm2bmo4SXrTgPVSWNAmE3KxmQTr3n
- 已生成本地二维码图片 trc20-qr.png
- 增加 15 分钟倒计时
- 增加复制地址和我已付款按钮
- 当前仍为人工核验模式
