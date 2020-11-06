<template>
    <div class="main-content">
        <h1>t-vue-tree</h1>
        <h3 class="title-mark"> 利用节点的checked属性，做出初始时即有勾选状态和半勾选状态的树 </h3>
        <p>常见业务场景：后端返回的树数据，需要在前台页面首次加载时，就显示出部分有勾选状态的节点。
            </p>
        <section class="inner-main-content">
            <h3 class="title-mark">例子</h3>
            <br>
            <button type="button" class="btn" @click="checkedParentNodeTree">设置第一个节点的checked属性为true</button>
            <p>注意：这种写法，只会勾选上该节点的前面的勾选框，不会有相关父子节点的级联勾选效果。这是正常的，组件设计如此。如果你需要勾上内部的子节点，我推荐使用方法：checkNode()</p>
            <button type="button" class="btn" @click="checkNodes">调用checkNode()方法勾选节点</button>
            <button type="button" class="btn" @click="expandNodes">调用expandNode()方法展开节点</button>
            <button type="button" class="btn" @click="checkedLeafNodeTree">初始勾选第一个子节点的树</button>
            <div class="example-box" ref="containerNode">
                <div class="top demo1-tree-wrapper">
                    <Ttree ref="demotree"
                           :data="treeData"
                    ></Ttree>
                </div>
                <div class="bottom">
                    <div class="control-part" @click="showHideCode(0)">
                        {{examplesObj[0].bottomShow ? '隐藏代码' : '显示代码'}}
                    </div>
                    <div class="code-part" v-if="examplesObj[0].bottomShow">

                    </div>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
    import json from '../../mockData/treeDataAllUnChecked.json';
    export default {
        data(){
            return {
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
                treeData: [],
            }
        },
        watch: {
            treeDataRaw: (val) => {
                console.log(this)
                console.log(val)
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
            },

            checkedParentNodeTree(){
                let that = this;

                let treeDataRaw = json.data;
                debugger;
//                treeDataRaw.push();
                //默认勾选上第一个父节点；
                that.treeData = treeDataRaw.map(it => {
                    return it;
                });
                that.treeData[0].checked = true;
                // 注意：这种写法，只会勾选上第一个父节点，不会勾上子节点。这是正常的，组件设计如此
            },

            checkedLeafNodeTree(){
                let that = this;

            },

            checkNodes(){
                let that = this;
                let tree = that.$refs.demotree;

                tree.checkNode({
                    key: 'id',
                    val: [1, 1234556]
                });
            },

            expandNodes(){
                let that = this;
                let tree = that.$refs.demotree;

                tree.expandNode({
                    key: 'id',
                    val: [11]
                });
            }
        },

        created(){
            let that = this;

            // 初始加载默认的全量树，无任何勾选和选中状态的全量树
            that.treeData = json.data.map(it => {
                return it;
            });
        }
    }
</script>
