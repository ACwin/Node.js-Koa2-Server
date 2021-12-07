# Node.js Koa2 website Server



### Introduction

--------------------

Developed blog project website:

Node.js + Koa2 + MySQL ==> A complete set of APIs developed



Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Useful Tools and Resources](#useful-tools-and-resources)
- [Recommended Design Resources](#recommended-design-resources)
- [Recommended Node.js Libraries](#recommended-nodejs-libraries)
- [Recommended Client-side Libraries](#recommended-client-side-libraries)
- [FQA](#FQA)



### Features 

[![koa](https://img.shields.io/badge/koa-%5E2.7.0-brightgreen.svg)](https://www.npmjs.com/package/koa)[![koa-router](https://img.shields.io/badge/koa--router-%5E7.4.0-brightgreen.svg)](https://www.npmjs.com/package/koa-router)[![sequelize](https://img.shields.io/badge/sequelize-%5E5.6.1-brightgreen.svg)](https://www.npmjs.com/package/sequelize)[![mysql2](https://img.shields.io/badge/mysql2-%5E1.6.5-brightgreen.svg)](https://www.npmjs.com/package/mysql2)

----------------------------

- **Account Management**
- 관리자 관리
- 문장 관리
- 분류관리
- 평론 관리
- 회신 관리
 - Gravatar
 - Profile Details
 - Change Password
 - Forgot Password
 - Reset Password
 - Delete Account
- **API Examples**: [API.md](https://github.com/ACwin/Node.js-Koa2-Server/blob/master/API.md)

### Prerequisites

--------------------

-  [MySql](https://dev.mysql.com/downloads/workbench/)
- [Node.js 10+](http://nodejs.org)
- Command Line Tools
 - [<img src="https://camo.githubusercontent.com/299cd53046608ab7c7095893199ffd0759c149851fce53b6d7c13f26279f637b/687474703a2f2f64656c7567652d746f7272656e742e6f72672f696d616765732f6170706c652d6c6f676f2e676966" alt="img" style="zoom: 50%;" />](https://camo.githubusercontent.com/299cd53046608ab7c7095893199ffd0759c149851fce53b6d7c13f26279f637b/687474703a2f2f64656c7567652d746f7272656e742e6f72672f696d616765732f6170706c652d6c6f676f2e676966) **Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs) OR [Visual Studio Code](https://code.visualstudio.com) + [Windows Subsystem for Linux - Ubuntu](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
- [<img src="https://camo.githubusercontent.com/e47ca7b9ffe7e785d52464e61260f9e1941c8853b5053d76f1cda878978d2daa/68747470733a2f2f656e2e6f70656e737573652e6f72672f696d616765732f622f62652f4c6f676f2d6765656b6f5f686561642e706e67" alt="img" style="zoom: 50%;" />](https://camo.githubusercontent.com/e47ca7b9ffe7e785d52464e61260f9e1941c8853b5053d76f1cda878978d2daa/68747470733a2f2f656e2e6f70656e737573652e6f72672f696d616765732f622f62652f4c6f676f2d6765656b6f5f686561642e706e67) **OpenSUSE:** `sudo zypper install --type pattern devel_basis`



## Getting Started

The easiest way to get started is to clone the repository:

**1. Cloning Project**

```bash
# Clone Item Code
$ git clone https://github.com/ACwin/Node.js-Koa2-Server.git 
```

**2. Database**

```bash
# Logging In to the Database
$ mysql -uroot -p password

# Create the myblog database
$ CREATE DATABASE IF NOT EXISTS myblog DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**3. Modify Koa2 Project Database Settings**

루트 디렉터리 | - config/ config.js 파일 아래에 있는 Database 이름（`myblog`）과 Database 암호( `password` )를 수정하십시오.

```bash
# Enter project root directory
$ cd xxx

# Install dependency package
$ npm install or yarn install ornpm install express --save

# Start Node.js Koa2 Project
$ npm run dev or yarn dev
```

Open your browser and enter Return: http://localhost:3000 You can see the front-end site that is rendered by the service side, of course it may be an empty data site. Specifically, you can see the article on the [API.md](https://github.com/ACwin/Node.js-Koa2-Server/blob/master/API.md) interface.



다음은 백그라운드 관리 시스템을 시작하기 위한 명령입니다.

```bash
# 백그라운드 관리 시스템 시작
1.루트 디렉터리에서 admin로 진입한다,항목: cd admin
2.패키지 설치, 실행: npm install or yarn install 명령하다
3.서비스 시작: npmrun dev or yarndev; 
4.브라우저 열기: http://localhost:3000/  즉시 접근 가능합니다.
```

Project Structure
-----------------


| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **bin**/www.js                     | Module dependencies.                                         |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controller**/blog.js             | 준비 작업, 코드 재사용, koa형태 미들웨어로 수정                 |
| **controller**/login.js            | 초기화 경로, 인터페이스 개발                                   |
| **db**/mysql.js                    | 연결 데이터베이스                                              |
| **model**/resModel.js              | Mongoose schema and model for User.                          |
| **public**/style.css               | Static assets                                                |
| **lib**/like-koa.js                | 조립 중간재                                                   |
| **lib**test-koa.js                 | test koa                                                     |
| **lib**/test-like-koa.js           | 구성 요소 바꾸기                                              |
| **logs**/access.log                | 로그 기록                                                     |
| **middleware**/loginCheckSession.js| 인터페이스 개발                                               |
|**routes**/blog.js                  |블로그의 상세 기능                                             |
|**routes**/index.js                 |koa 소개, 설치, 사용                                           |
|**routes**/users.js                 |koa 소개, 설치, 사용                                           |                                        
|**routes**/login.js                 |로그인 알림                                                    |
| **utils**/crypto.js                | Encryption function                                          |
| **views**/error.pug                | Error, info and success flash notifications.                 |
| **views**/header.pug               |Navbar partial template.                                      |
| **views**/layout.pug               | Base template.                                               |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |


Useful Tools and Resources
--------------------------
- [JavaScripting](http://www.javascripting.com/) - The Database of JavaScript Libraries
- [JS Recipes](http://sahatyalkabov.com/jsrecipes/) - JavaScript tutorials for backend and frontend development.
- [HTML to Pug converter](https://html-to-pug.com/) - HTML to PUG is a free online converter helping you to convert HTML files to pug syntax in real-time.
- [JavascriptOO](http://www.javascriptoo.com/) - A directory of JavaScript libraries with examples, CDN links, statistics, and videos.
- [Favicon Generator](http://realfavicongenerator.net/) - Generate favicons for PC, Android, iOS, Windows 8.

Recommended Design Resources
----------------------------
- [Code Guide](http://codeguide.co/) - Standards for developing flexible, durable, and sustainable HTML and CSS.
- [Bootsnipp](http://bootsnipp.com/) - Code snippets for Bootstrap.
- [Bootstrap Zero](https://www.bootstrapzero.com) - Free Bootstrap templates themes.
- [Google Bootstrap](http://todc.github.io/todc-bootstrap/) - Google-styled theme for Bootstrap.
- [Font Awesome Icons](http://fortawesome.github.io/Font-Awesome/icons/) - It's already part of the Hackathon Starter, so use this page as a reference.
- [Colors](http://clrs.cc) - A nicer color palette for the web.
- [Creative Button Styles](http://tympanus.net/Development/CreativeButtons/) - awesome button styles.
- [Creative Link Effects](http://tympanus.net/Development/CreativeLinkEffects/) - Beautiful link effects in CSS.
- [Medium Scroll Effect](http://codepen.io/andreasstorm/pen/pyjEh) - Fade in/out header background image as you scroll.
- [GeoPattern](https://github.com/btmills/geopattern) - SVG background pattern generator.
- [Trianglify](https://github.com/qrohlf/trianglify) - SVG low-poly background pattern generator.


Recommended Node.js Libraries
-----------------------------

- [Nodemon](https://github.com/remy/nodemon) - Automatically restart Node.js server on code changes.
- [geoip-lite](https://github.com/bluesmoon/node-geoip) - Geolocation coordinates from IP address.
- [Filesize.js](http://filesizejs.com/) - Pretty file sizes, e.g. `filesize(265318); // "265.32 kB"`.
- [Numeral.js](http://numeraljs.com) - Library for formatting and manipulating numbers.
- [Node Inspector](https://github.com/node-inspector/node-inspector) - Node.js debugger based on Chrome Developer Tools.
- [node-taglib](https://github.com/nikhilm/node-taglib) - Library for reading the meta-data of several popular audio formats.
- [sharp](https://github.com/lovell/sharp) - Node.js module for resizing JPEG, PNG, WebP and TIFF images.

Recommended Client-side Libraries
---------------------------------

- [Framework7](http://www.idangero.us/framework7/) - Full Featured HTML Framework For Building iOS7 Apps.
- [InstantClick](http://instantclick.io) - Makes your pages load instantly by pre-loading them on mouse hover.
- [NProgress.js](https://github.com/rstacruz/nprogress) - Slim progress bars like on YouTube and Medium.
- [Hover](https://github.com/IanLunn/Hover) - Awesome CSS3 animations on mouse hover.
- [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) - Responsive jQuery Lightbox Plugin.
- [jQuery Raty](http://wbotelhos.com/raty/) - Star Rating Plugin.
- [Headroom.js](http://wicky.nillia.ms/headroom.js/) - Hide your header until you need it.
- [X-editable](http://vitalets.github.io/x-editable/) - Edit form elements inline.
- [Offline.js](http://github.hubspot.com/offline/docs/welcome/) - Detect when user's internet connection goes offline.
- [Alertify.js](http://fabien-d.github.io/alertify.js/) - Sweet looking alerts and browser dialogs.
- [selectize.js](http://selectize.github.io/selectize.js) - Styleable select elements and input tags.
- [drop.js](http://github.hubspot.com/drop/docs/welcome/) -  Powerful Javascript and CSS library for creating dropdowns and other floating displays.
- [scrollReveal.js](https://github.com/jlmakes/scrollReveal.js) - Declarative on-scroll reveal animations.



### FAQ
------------------


```bash
Error: listen EADDRINUSE: address already in use :::8080
```

This is a port occupied solution:

```
netstat  -ano  // Enter your item's occupied port number on the terminal, or command line.
```


```
tskill xxx // The process of killing this port number
```

