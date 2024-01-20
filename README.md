
# Gemini ChatUp

## 关于
本项目为基于 Google GeminiPro API Key 的聊天应用，支持响应式布局。可保留多组对话，每个对话的基础参数可单独设置。

[Demo](https://chatup.moca.one) 
>需使用账号登录，或提供自己的 Gemini Pro API Key。点击查看[如何部署此功能](#user_credential)

|测试账号|密码|
|--|--|
|guest|guest123456|

<img width="400" alt="SCR-20240120-penj" src="https://github.com/loo-y/GeminiChatUp/assets/2792566/664f1f7b-832f-41ab-b817-f0c92deb1fb2">
<br />


## 如何使用
### 获取 Gemini API 密钥

[获取API密钥](https://makersuite.google.com/app/apikey)

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Floo-y%2FGeminiChatUp&env=GOOGLE_GEMINI_API_KEY&envDescription=GeminiPro%20API%20Key&project-name=geminichatup&repository-name=GeminiChatUp&demo-url=https%3A%2F%2Fchatup.moca.one&demo-image=https%3A%2F%2Fgithub.com%2Floo-y%2FGeminiChatUp%2Fassets%2F2792566%2Fa69a57a5-598e-4958-a912-a7cc37dba2aa)

点击按钮部署至 Vercel，根据提示填入 Google GeminiPro API Key  

<a id="user_credential"></a>
### 增加用户验证
此功能需要打开 Vercel 的 Edge config。操作步骤如下：
1. 项目部署之后，切到 Storage Tab，选择新建 Edge Config
<br /><img width="800" alt="SCR-20240120-pofd" src="https://github.com/loo-y/GeminiChatUp/assets/2792566/96ff748d-8d3e-4b67-9a41-58e5d5ad022e">

2. 在 Edge Config 中切换到 Projects，查看是否已和当前项目关联
<br /><img width="800" alt="SCR-20240120-pmob" src="https://github.com/loo-y/GeminiChatUp/assets/2792566/71151560-37d2-4069-a8d9-bc8ec2538b64">

3. 最后切换至 Items，右边底部，可以自行以 json 方式添加用户名和密码
<br /><img width="800" alt="SCR-20240120-pmyd" src="https://github.com/loo-y/GeminiChatUp/assets/2792566/99880c3a-b5dd-482d-a50c-6118921aa4d6">

<br />

### 本地启动
1. 安装依赖包 
```
npm i
```

2. 本地启动
```javascript
npm run dev
```

## Screenshots
<br />
<img width="300" src="https://github.com/loo-y/GeminiChatUp/assets/2792566/6924b5fe-f30a-4f9d-a69f-27a6fe2820a1" />  
<img width="300" src="https://github.com/loo-y/GeminiChatUp/assets/2792566/630b5181-bbdd-4dd0-bac5-9376b3f50d63" />
<br />
<br /><img width="800" alt="SCR-20240104-mgmn" src="https://github.com/loo-y/GeminiChatUp/assets/2792566/cf8c68ed-dded-483e-b69e-f19e022726b6" /><br />

<!-- <br /><img width="800" alt="SCR-20240104-mgju" src="https://github.com/loo-y/GeminiChatUp/assets/2792566/cdfd758f-eb8e-4165-9047-85124188dfce" /><br />
<br /><img width="800" alt="SCR-20240112-bylz" src="https://github.com/loo-y/GeminiChatUp/assets/2792566/a69a57a5-598e-4958-a912-a7cc37dba2aa" /><br /> 
-->

### 待完成

1. 流式问答
2. ~~清除之前的conversation~~ (已完成)
3. ~~计算token并移除超出的conversation~~ (已完成)
4. 全局设置，支持客户端引入 GeminiPro API
5. 支持搜索对话内容
6. ~~引入 GeminiPro Vision API~~ (已完成)
