<template>
    <div class="main-content">
        <h1>t-vue-tree</h1>
        <h3 class="title-mark"> 一个基于vue的同步树 </h3>
        <p>ps:当前版本没有做异步树</p>
      <router-link :to="{name: child.menuLink, params:{menuId: child.menuId}}">{{child.menuName}}</router-link>
      <section class="inner-main-content">
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
                           @onDblclickText="onDblclickTextHandle"
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

            <div class="example-box padding">
                <h4 class="example-title">事件示例(现有4个事件)：</h4>
                <strong>1. onToggle</strong><br>
                <strong>2. onCheck</strong><br>
                <strong>3. onSelect</strong><em style="verticalAlign:baseline;paddingLeft:5px;font-size:12px;color: #666;">(这个事件可以看做是单击版的clickTextHandle)</em><br>
                <strong>4. onDblclickTextHandle</strong><br>
                <p>你可以f12打开控制台，然后分别点击选中节点、取消选中节点，勾选和取消勾选框，展开折叠节点，看看控制台打印的结果</p>

                <h4 class="example-title" style="margin:10px 0 0;">方法示例：</h4>
                <p>1.</p>
                <button class="btn btn-block" @click="getCheckedNodes('checked')">获取checked节点 getCheckedNodes('checked')</button>
                <p>2.</p>
                <button class="btn btn-block" @click="getCheckedNodes('indeterminated')">获取 半勾选的节点 getCheckedNodes('indeterminated')</button>
                <p>3.</p>
                <button class="btn btn-block" @click="getSelectedNodes()">获取所有选中的节点 getSelectedNodes()</button>
                <p>4.</p>
                checkNode({key, val}) 勾选树节点，与该节点相关的父子节点会自动勾上勾选或者半勾选状态
                <p><strong>参数说明：</strong></p>
                <p>key: Sring | 节点的键</p>
                <p>val: Array | key键对应的值，是个数组，</p>
                <p><strong>例如：</strong></p>
                <code>tree.checkNode({ key: 'id', val: [1, 1234556]});</code>
                将勾选所有拥有id且id值为1和123456的的节点，并且对其父子节点勾上全勾选or半勾选效果。<router-link target='_blank' to='defaultCheckedNodes'>具体例子可见另例的'调用checkNode()方法勾选节点'按钮</router-link>
                <p>5.</p>
                expandNode({key, val}) 展开树节点，参数说明同上

                <h4 class="example-title">结果展示：</h4>
                <p>F12看控制台，点击每个按钮后得到的结果console.log了的，控制台更清晰</p>
                <!--<div class="example-result-box">-->
                    <!--{{examplesObj.resultStr}}-->
                <!--</div>-->
            </div>
            <div class="example-box padding">
                <h4 class="example-title">树的数据示例，留意注释中各个节点的属性说明：</h4>
                <hr>
                <div class="example-inner-box">
                     <pre>
                         <code>
                             [
                             {
                             "title": "parent 1-new2",
                             "expanded": false,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "selected": false,//是否选中该节点，默认false
                             "custormKey": "ccdf",
                             "children": [
                             {
                             "title": "parent 1-1",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "custormKey": "ccdf",
                             "children": [
                             {
                             "title": "leaf 1-1-1",
                             "expanded":true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "custormKey": "ccdf"
                             },
                             {
                             "title": "leaf 1-1-2",
                             "expanded":true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "selected":true,//是否选中该节点，默认false
                             "custormKey": "ccdf"
                             }
                             ]
                             },
                             {
                             "title": "parent 1-2",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "custormKey": "ccdf",
                             "children": [
                             {
                             "title": "leaf 1-2-1",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "custormKey": "ccdf",
                             "children": [
                             {
                             "title": "leaf 1-2-1-1",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "custormKey": "mmccf",
                             },
                             {
                             "title": "leaf 1-2-1-2",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "custormKey": "mmccf",
                             },
                             {
                             "title": "leaf 1-2-1-3",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "custormKey": "mmccf",
                             }
                             ]
                             },
                             {
                             "title": "leaf 1-2-1",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": false,//是否勾选该节点，默认false
                             "custormKey": "ccdf",
                             }
                             ]
                             }
                             ]
                             },
                             {
                             "title": "parent 2-new",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": true,//是否勾选该节点，默认false
                             "children": [
                             {
                             "title": "parent 2-1",
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": true,//是否勾选该节点，默认false
                             "expanded": true,//是否展开该节点
                             "selected": false,//是否选中该节点，默认false
                             "expandOnClickNode": false,//点击节点时也展开节点，需要expand属性同时为真，默认false
                             "children": [
                             {
                             "title": "leaf 2-1-1",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": true //是否勾选该节点，默认false
                             },
                             {
                             "title": "leaf 2-1-2",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": true //是否勾选该节点，默认false
                             }
                             ]
                             },
                             {
                             "title": "parent 2-2",
                             "expanded": false,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": true,//是否勾选该节点，默认false
                             "children": [
                             {
                             "title": "leaf 2-2-1",
                             "expanded": true,
                             "checkbox": true,//是否有勾选框,默认false
                             "checked": true //是否勾选该节点，默认false
                             }
                             //                                    {
                             //                                        "title": "leaf 2-2-1",
                             //                                        "expanded": true,
                             //                                        "checkbox": true,//是否有勾选框,默认false
                             //                                        "checked": true,//是否勾选该节点，默认false
                             //                                    }
                             ]
                             }
                             ]
                             }
                             ]
                         </code>
                     </pre>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import json from '../../mockData/treeData.json';
    export default {
        data(){
            return {
                child:{
                  menuName:'testUrl',
                  menuId:'testRouterId',
                  menuLink: 'testUrl'
                },
                examplesObj: [
                    {
                        bottomShow: false,
                        resultStr: ''
                    },
                    {
                        bottomShow: false,
                        resultStr: ''
                    },
                    {
                        bottomShow: false,
                        resultStr: ''
                    },
                    {
                        bottomShow: false,
                        resultStr: ''
                    }
                ],
                treeSelectable: true,//点击树节点时，是否有选中效果，默认true,
                treeSelectType: "single",//点击树节点时的选中效果是单选还是多选,默认single
                treeData: [
//                    {
//                        title: 'parent 1-new2',
//                        expanded: false,
//                        checkbox: true,//是否有勾选框,默认false
//                        checked: false,//是否勾选该节点，默认false
//                        selected: false,//是否选中该节点，默认false
//                        custormKey: 'ccdf',
//                        children: [
//                            {
//                                title: 'parent 1-1',
//                                expanded: true,
//                                checkbox: true,//是否有勾选框,默认false
//                                checked: false,//是否勾选该节点，默认false
//                                custormKey: 'ccdf',
//                                children: [
//                                    {
//                                        title: 'leaf 1-1-1',
//                                        expanded:true,
//                                        checkbox: true,//是否有勾选框,默认false
//                                        checked: false,//是否勾选该节点，默认false
//                                        custormKey: 'ccdf',
//                                    },
//                                    {
//                                        title: 'leaf 1-1-2',
//                                        expanded:true,
//                                        checkbox: true,//是否有勾选框,默认false
//                                        checked: false,//是否勾选该节点，默认false
//                                        selected:true,//是否选中该节点，默认false
//                                        custormKey: 'ccdf',
//                                    }
//                                ]
//                            },
//                            {
//                                title: 'parent 1-2',
//                                expanded: true,
//                                checkbox: true,//是否有勾选框,默认false
//                                checked: false,//是否勾选该节点，默认false
//                                custormKey: 'ccdf',
//                                children: [
//                                    {
//                                        title: 'leaf 1-2-1',
//                                        expanded: true,
//                                        checkbox: true,//是否有勾选框,默认false
//                                        checked: false,//是否勾选该节点，默认false
//                                        custormKey: 'ccdf',
//                                        children: [
//                                            {
//                                                title: 'leaf 1-2-1-1',
//                                                expanded: true,
//                                                checkbox: true,//是否有勾选框,默认false
//                                                checked: false,//是否勾选该节点，默认false
//                                                custormKey: 'mmccf',
//                                            },
//                                            {
//                                                title: 'leaf 1-2-1-2',
//                                                expanded: true,
//                                                checkbox: true,//是否有勾选框,默认false
//                                                checked: false,//是否勾选该节点，默认false
//                                                custormKey: 'mmccf',
//                                            },
//                                            {
//                                                title: 'leaf 1-2-1-3',
//                                                expanded: true,
//                                                checkbox: true,//是否有勾选框,默认false
//                                                checked: false,//是否勾选该节点，默认false
//                                                custormKey: 'mmccf',
//                                            }
//                                        ]
//                                    },
//                                    {
//                                        title: 'leaf 1-2-1',
//                                        expanded: true,
//                                        checkbox: true,//是否有勾选框,默认false
//                                        checked: false,//是否勾选该节点，默认false
//                                        custormKey: 'ccdf',
//                                    }
//                                ]
//                            }
//                        ]
//                    },
//                    {
//                        title: 'parent 2-new',
//                        expanded: true,
//                        checkbox: true,//是否有勾选框,默认false
//                        checked: true,//是否勾选该节点，默认false
//                        children: [
//                            {
//                                title: 'parent 2-1',
//                                checkbox: true,//是否有勾选框,默认false
//                                checked: true,//是否勾选该节点，默认false
//                                expanded: true,//是否展开该节点
//                                selected: false,//是否选中该节点，默认false
//                                expandOnClickNode: false,//点击节点时也展开节点，需要expand属性同时为真，默认false
//                                children: [
//                                    {
//                                        title: 'leaf 2-1-1',
//                                        expanded: true,
//                                        checkbox: true,//是否有勾选框,默认false
//                                        checked: true,//是否勾选该节点，默认false
//                                    },
//                                    {
//                                        title: 'leaf 2-1-2',
//                                        expanded: true,
//                                        checkbox: true,//是否有勾选框,默认false
//                                        checked: true,//是否勾选该节点，默认false
//                                    }
//                                ]
//                            },
//                            {
//                                title: 'parent 2-2',
//                                expanded: false,
//                                checkbox: true,//是否有勾选框,默认false
//                                checked: true,//是否勾选该节点，默认false
//                                children: [
//                                    {
//                                        title: 'leaf 2-2-1',
//                                        expanded: true,
//                                        checkbox: true,//是否有勾选框,默认false
//                                        checked: true,//是否勾选该节点，默认false
//                                    }
////                                    {
////                                        title: 'leaf 2-2-1',
////                                        expanded: true,
////                                        checkbox: true,//是否有勾选框,默认false
////                                        checked: true,//是否勾选该节点，默认false
////                                    }
//                                ]
//                            }
//                        ]
//                    }
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
            onDblclickTextHandle(val) {
                console.log('onDblclickTextHandle', val);

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
                    that.$set(that.examplesObj, 'resultStr', result);
                } else {
                    throw "传参值仅为'checked'或者'indeterminated'"
                }
            },

            getSelectedNodes(){
                let that = this;
                let result = that.$refs.demotree.getSelectedNodes();
                console.log(result);
                that.$set(that.examplesObj, 'resultStr', result);
            },

            showHideCode(idx){
                let that = this;

                let oldVal = that.examplesObj[idx].bottomShow;
                that.$set(that.examplesObj[idx], 'bottomShow', !oldVal);
            }
        },

        created() {
            let that = this;

            console.log(json)
            that.treeData = json.data;
        }
    }
</script>
