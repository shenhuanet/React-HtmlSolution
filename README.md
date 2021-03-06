# 使用：

### 1. 导出文件为 react，

### 2. 将 React-HtmlSolution 文件包直接拷到 routes 文件夹下。

### 3. 修改 router.js 里的 IndexPage 的路径:

```
import IndexPage from './routes/React-HtmlSolution'
```

### 4. 如果用的是 antd 的脚手 [dva-cli](https://github.com/dvajs/dva-cli)； dva-cli 的具体[教程请查看](https://github.com/sorrycc/blog/issues/18)

> dva-cli ~0.7.0;
>
> 请不要使用 css-modules, 将在下个版本做混用兼容；
> 在 .roadhogrc 文件里加上: `"disableCSSModules": true`,
>
> 如果项目已使用 css-modules, 请在项目根目录建 public 目录，这里的文件会被 copy 到输出目录下，然后在 html 文件里引这个文件。
>
> 或在每个 less 里加上 :global, [详细查看](https://github.com/css-modules/css-modules#usage-with-preprocessors);

### 5. 安装依赖:

```
npm install antd --save;
npm install enquire --save;
npm install rc-queue-anim --save;
npm install rc-scroll-anim --save;
npm install rc-tween-one --save;
npm install rc-banner-anim --save;// 如果用多屏滑动型banner，则加上这条。
```

### 6. 按需加载 antd, 安装 babel-plugin-import:
```
 npm install babel-plugin-import --save-dev;
```
### 7. 运用 "babel-plugin-import" 滤境:

> dva-cli: ~0.7.0， 修改 .roadhogrc，在 "extraBabelPlugins" 里加上： ["import", { "libraryName": "antd", "style": true }]
>  [参考](https://github.com/dvajs/dva-example-user-dashboard/blob/master/.roadhogrc#L20)
```
  "extraBabelPlugins": [
    "transform-runtime",
    ["import", { "libraryName": "antd", "style": true }]
  ],
```
### 8. 配置自定义皮服，[参考](https://ant.design/docs/react/customize-theme-cn) 里面的 package.theme（推荐);

### 9. 在 index.html 里的 head 里添加上
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## About Me
CSDN：http://blog.csdn.net/klxh2009<br>
JianShu：http://www.jianshu.com/u/12a81897d5bc

## License

    Copyright 2017 shenhuanet

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
