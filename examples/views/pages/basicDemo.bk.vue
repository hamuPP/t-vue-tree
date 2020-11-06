<template>
    <div class="main-content">
        <h1>t-vue-tree</h1>
        <h3 class="title-mark"> 一个基于vue的同步树 </h3>
        <p>ps:当前版本没有做异步树</p>
        <section class="inner-main-content">
            <h3 class="title-mark">安装与引入方式：</h3>
            <p>1.下载安装： npm install t-vue-tree </p>
            <p>2.引入(即:注册该组件到vue的组件里):</p>
            <ol>
                <li>方式1：在个人的vue项目的主js里注册：
                    import T_tree from 't-vue-tree';
                    Vue.component('Ttree', Ttree);

                    然后在每个单独的vue文件中就可以直接使用而不用再次注册了。
                </li>
                <li>方式2：在各个单独的vue文件引入并注册为一个局部的组件：
                    <pre>
                        <code>
                             &lt;script>
                                 import T_tree from 't-vue-tree';
                                export default {
                                    components: {
                                        T_tree
                                    }
                                }
                            &lt;/script>
                        </code>
                    </pre>
                </li>
            </ol>
            <h3 class="title-mark">例子1_一个基础的例子</h3>
            <div class="example-box" ref="containerNode">
                <div class="top demo1-tree-wrapper">
                    <Ttree ref="demotree"
                           :data="treeData"
                           :treeSelectable="treeSelectable"
                           :treeSelectType="treeSelectType"
                           @onToggle="onToggleHandle"
                           @onCheck="onCheckHandle"
                           @onSelect="onSelectHandle"
                    ></Ttree>
                </div>
                <div class="bottom">
                    <div class="control-part" @click="showHideCode(0)">
                        {{examplesObj[0].bottomShow ? '隐藏代码' : '显示代码'}}
                    </div>
                    <div class="code-part" v-if="examplesObj[0].bottomShow">
                        <pre>
                            <code>
&lt;style>
.demo1-tree-wrapper{
   width: 100%;
   height: 180px;
}
&lt;/style>

&lt;template>
    <span class="high-light-yellow">&lt;div class="demo1-tree-wrapper">//注意：页面上一定要放一个你自己的dom容器，并设置其宽高，里面再放Ttree组件,因为tree组件的高度样式是父容器的高度的100%，内容过多时则出现滚动条。 </span>
     &lt;Ttree ref="demotree"
           :data="treeData"
           @onToggle="onToggleHandle"
           @onCheck="onCheckHandle"
           @onSelect="onSelectHandle"
    > &lt;/Ttree>
    &lt;/div>
&lt;template>

&lt;script>
    import Ttree from 't-vue-tree';

    export default {
        components: {
            Ttree
        },
        data(){
            return {
            }
        }
    }
&lt;/script>

                            </code>
                        </pre>
                    </div>
                </div>

            </div>

            <div class="example-box">
                <p class="example-title">方法示例：</p>
                <button @click="getCheckedNodes('checked')">获取checked节点</button>
                <button @click="getCheckedNodes('indeterminated')">获取 半勾选的节点</button>
                <button @click="getSelectedNodes()">获取所有选中的节点</button>

            </div>
        </section>
    </div>
</template>
<script>
    export default {
//        components: {
//            Ttree
//        },
        data(){
            return {
                examplesObj: [
                    {bottomShow: false},
                    {bottomShow: false},
                    {bottomShow: false},
                    {bottomShow: false}
                ],
                treeSelectable: false,//点击树节点时，是否有选中效果，默认true,
//                treeSelectType: "multiple",//点击树节点时的选中效果是单选还是多选,默认single
                treeData: [
                    {
                        title: 'parent 1',
                        expanded: true,
                        checkbox: true,//是否有勾选框,默认false
                        checked: false,//是否勾选该节点，默认false
                        selected: true,//是否选中该节点，默认false
                        custormKey: 'ccdf',
                        children: [
                            {
                                title: 'parent 1-1',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                                custormKey: 'ccdf',
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: false,//是否勾选该节点，默认false
                                custormKey: 'ccdf',
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                        children: [
                                            {
                                                title: 'leaf 1-2-1-1',
                                                checkbox: true,//是否有勾选框,默认false
                                                checked: false,//是否勾选该节点，默认false
                                                custormKey: 'mmccf',
                                            },
                                            {
                                                title: 'leaf 1-2-1-2',
                                                checkbox: true,//是否有勾选框,默认false
                                                checked: false,//是否勾选该节点，默认false
                                                custormKey: 'mmccf',
                                            },
                                            {
                                                title: 'leaf 1-2-1-3',
                                                checkbox: true,//是否有勾选框,默认false
                                                checked: false,//是否勾选该节点，默认false
                                                custormKey: 'mmccf',
                                            }
                                        ]
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: false,//是否勾选该节点，默认false
                                        custormKey: 'ccdf',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'parent 2',
                        expanded: false,
                        checkbox: true,//是否有勾选框,默认false
                        checked: true,//是否勾选该节点，默认false
                        children: [
                            {
                                title: 'parent 2-1',
                                checkbox: true,//是否有勾选框,默认false
                                checked: true,//是否勾选该节点，默认false
                                expanded: true,//是否展开该节点
                                selected: true,//是否选中该节点，默认false
                                expandOnClickNode: false,//点击节点时也展开节点，需要expand属性同时为真，默认false
                                children: [
                                    {
                                        title: 'leaf 2-1-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    },
                                    {
                                        title: 'leaf 2-1-2',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    }
                                ]
                            },
                            {
                                title: 'parent 2-2',
                                expanded: true,
                                checkbox: true,//是否有勾选框,默认false
                                checked: true,//是否勾选该节点，默认false
                                children: [
                                    {
                                        title: 'leaf 2-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    },
                                    {
                                        title: 'leaf 2-2-1',
                                        checkbox: true,//是否有勾选框,默认false
                                        checked: true,//是否勾选该节点，默认false
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            onToggleHandle(val){
                console.log('onToggleHandle', val);
            },
            onCheckHandle(val){
                console.log('onCheckHandle', val);
            },
            onSelectHandle(val){
                console.log('onSelectHandle', val);
            },
            /**
             *
             * @param {String} type checked|indeterminated 必須、それに、この二つに限り
             */
            getCheckedNodes(type){
                let that = this;
                if (type === 'checked' || type === 'indeterminated') {
                    let result = that.$refs.demotree.getCheckedNodes(type);
                    console.log(result);
                } else {
                    throw "传参值仅为'checked'或者'indeterminated'"
                }
            },

            getSelectedNodes(){
                let that = this;
                let result = that.$refs.demotree.getSelectedNodes();
                console.log(result);
            },

            showHideCode(idx){
                let that = this;

                let oldVal = that.examplesObj[idx].bottomShow;
                that.$set(that.examplesObj[idx], 'bottomShow', !oldVal);
            }
        }
    }
</script>
