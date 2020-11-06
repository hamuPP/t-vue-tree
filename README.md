# 一个vue tree的npm组件包


## 说明：
1.基于vue的同步树，且当前版本只有同步树，没有异步树。


## 在线demo。基本上我做了几个基础的示例：

[https://hamupp.github.io/t-vue-tree/examples/dist/#/basicDemoAndApi](https://hamupp.github.io/t-vue-tree/examples/dist/#/basicDemoAndApi)

## 使用方法：

1.下载npm包:

你的VUE项目的根目录底下运行：

    npm install t-vue-tree

2.引入本npm包并注册为vue的组件，两种方式选一种即可：

（方式1）在你的vue项目的入口js中注册为全局的vue组件，然后在所有vue文件中都可以直接使用:

> 例如：main.js中：

	<!-- 你的其他代码 --start-- 	-->	
	...
	import Vue from 'vue'
	...
	<!-- 你的其他代码 --end-- -->	
	
	<!-- 引入本tree组件 --start-- -->	
	import Ttree from 't-vue-tree';
	Vue.component('Ttree', Ttree);
	<!-- 引入本tree组件 --end-- 	-->	
	
> 	然后在需要使用的vue页面中：

	<template>
		<!-- 先为tree组件设定一个包裹元素，并设置其宽高-->
    	<div class='your-tree-wrapper'>
    	
    	<!-- 里面写tree组件-->
            <Ttree
                  :data="treeData"
            ></Ttree>
    	</div>
	</template>
	
	<script>
    export default {
        data(){
        	return{
        		treeData:[
        			{
        				title: 'parent 1',//这是显示在页面上的节点名字
                  		expanded: true,//本节点是否展开，
               	   		checkbox: true,//是否有勾选框,默认false
                   		checked: false,//是否勾选该节点，默认false
                   	 	selected: false,//是否选中该节点，默认false
                  	  	children: [
                            {
                                title: 'parent 1-1',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                            },
                            {
                                title: 'parent 1-2',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                            }
                       ]    
        			}
        		]
        	}
        }
    }
    </script>
    
（方式2）在需要使用的vue页面中单独引入并注册为一个局部的组件： 
   
 > 	demo.vue：

	<template>
    	<div class='your-tree-wrapper'>
            <Ttree
                  :data="treeData"
            ></Ttree>
    	</div>
	</template>
	
	<script>
	import Ttree from 't-vue-tree';//引入本组件
	
    export default {
      	components: {//注册本组件
            Ttree
        },
        data(){
        	return{
        		treeData:[
        			{
        				title: 'parent 1',//这是显示在页面上的节点名字
                  		expanded: true,//本节点是否展开，
               	   		checkbox: true,//是否有勾选框,默认false
                   		checked: false,//是否勾选该节点，默认false
                   	 	selected: false,//是否选中该节点，默认false
                  	  	children: [
                            {
                                title: 'parent 1-1',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                            },
                            {
                                title: 'parent 1-2',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                            }
                       ]    
        			}
        		]
        	}
        }
    }
    </script>   
    
**注意：**
不论哪种方式引入，在vue页面中使用时，一定要把本组件放在一个你的包裹dom元素中，例如上例中的.your-tree-wrapper的div。因为本tree的宽高css是100%,所以，如果父容器没有宽高。。。。你懂得撒。。。

## 属性
1.data 类型Object 树的全部数据，格式参考示例中的，其中的各个字段的说明也看示例中的注释。在此基础上你当然可以追加自己的字段

2.treeSelectable 类型Boolean 树节点是否有选中效果。默认true

3.treeSelectType 类型String 仅限两个值single|multiple。默认single。树节点的选中效果是单选还是允许多选，正常来说，树节点的选中效果都是单选，即选中一个节点时，取消之前选中的节点。但就是有些骚包反人类客户想要多选效果


**ps:**

1.treeSelectable为false时，treeSelectType无效，节点本身的selected字段无效。

2.关于勾选框的，没有通用的勾选框属性配置。如果要加勾选框，请将每个节点的内部的checkbox字段设为true，否则该节点没有勾选框

## 事件
1.onToggle 折叠展开一个节点时触发。返回该节点的所有数据

2.onCheck 勾选|取消勾选一个节点时触发。返回该节点的所有数据

3.onSelect 选择|取消选中一个节点时触发。返回该节点的所有数据

## 方法

1.getCheckedNodes 参数：String 仅限两个值：checked indeterminated 获取勾选的节点，实心和非实心。返回：Array，勾选的实心或者半实心的节点的集合

2.getSelectedNodes 参数：无，返回：Array，选中的节点的集合


