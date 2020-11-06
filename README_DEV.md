# 一个vue tree（同步树，没有异步树）的npm组件包开发项目


## 目录

```
├── build/           (webpack打包配置文件 )
├── dist/           (编译后的、发布用的 )
├── examples/        (使用示例)
├── node_modules/   (运行包)
├── src/            (开发用的目录 )
├── test/            (单元测试)
├── package.json  (项目描述)
└── webpack.config.js （webpack配置）
```

##使用方法：

1.下载npm包:

    npm install t-vue-tree

2.并在个人的vue项目中使用：

你的


```

## 打包指令

1. npm run build 打包组件js，打包后的压缩js即为上传到Npm上的，也是其他vue项目引入的npm包；
2. npm run examplesDev 本地示例项目开发环境。主要是我自己测tree组件的使用情况。
2. npm run examplesBuild 打包本地示例项目，运行后该指令后，可以直接用打开file的方式打开examples/dist/index.html，亦可以看到正常效果
