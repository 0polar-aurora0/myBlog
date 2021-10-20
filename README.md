# myblog_frontend

- [myblog_frontend](#myblog_frontend)
  - [工程目录结构](#工程目录结构)
  - [安装部署](#安装部署)
  - [启动运行](#启动运行)
  - [版本历史](#版本历史)
  - [信息](#信息)
  - [参与项目](#参与项目)
  
> 一个个人博客项目myblog的前端实现, 项目基于 umi 实现

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

<!-- ![](header.png) -->

---

## 工程目录结构

```
myBlog_frontEnd
├─ .editorconfig
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ .umirc.ts
├─ config
│  ├─ config.ts
│  └─ routes.ts
├─ LICENSE
├─ mock
│  └─ .gitkeep
├─ package.json
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ css
│  │  ├─ images
│  │  │  ├─ box_back.png
│  │  │  ├─ box_back_door.png
│  │  │  ├─ box_left.png
│  │  │  ├─ box_right.png
│  │  │  ├─ box_top.png
│  │  │  ├─ card_front.png
│  │  │  └─ header_1.jpeg
│  │  └─ mackdown
│  │     └─ mackdown_test.md
│  ├─ components
│  │  ├─ Card
│  │  │  ├─ index.less
│  │  │  └─ index.tsx
│  │  ├─ DataLoading
│  │  │  └─ index.tsx
│  │  ├─ HeaderLists
│  │  │  ├─ index.less
│  │  │  └─ index.tsx
│  │  ├─ index.ts
│  │  ├─ MarkDown
│  │  │  └─ index.tsx
│  │  └─ PreLoading
│  │     └─ index.tsx
│  ├─ pages
│  │  ├─ articlePage
│  │  │  ├─ id.less
│  │  │  ├─ id.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ layouts
│  │  │  │  ├─ index.less
│  │  │  │  └─ index.tsx
│  │  │  └─ routes.js
│  │  ├─ index.less
│  │  ├─ index.tsx
│  │  └─ pageContent
│  │     ├─ index.less
│  │     └─ index.tsx
│  └─ utils
│     └─ axios.ts
├─ tsconfig.json
└─ typings.d.ts

```

## 安装部署

OS X & Linux:

```sh
git clonehttps://github.com/0polar-aurora0/myBlog_frontEnd.git
npm install --save
```

Windows:

```sh
git clonehttps://github.com/0polar-aurora0/myBlog_frontEnd.git
npm install --save
```

## 启动运行

```sh
npm run dev
```

## 版本历史

- 0.2.1
  - CHANGE: Update docs (module code remains unchanged)
- 0.2.0
  - CHANGE: Remove `setDefaultXYZ()`
  - ADD: Add `init()`
- 0.1.1
  - FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
- 0.1.0
  - The first proper release
  - CHANGE: Rename `foo()` to `bar()`
- 0.0.1
  - Work in progress

## 信息

0polar-aurora0 – [@github](https://github.com/0polar-aurora0) – 1045612802@qq.com

## 参与项目

1. Fork it (<https://github.com/0polar-aurora0/myBlog_frontEnd/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


