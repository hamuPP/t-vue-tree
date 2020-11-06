<style lang="less" scoped>
    .basic-demo1-tree-wrapper{
        -webkit-box-shadow: 0 0 2px 0 purple;
        -moz-box-shadow: 0 0 2px 0 purple;
        box-shadow: 0 0 2px 0 purple;
        min-height: 100px;
        height: 200px;
        width: 200px;
        margin:0 0 10px;
        padding:0;
    }
</style>
<template>
    <div class="main-content">
        <h1>t-vue-tree</h1>
        <h3 class="title-mark"> 基础应用 </h3>
        <section class="inner-main-content">
            <h3 class="title-mark">例子</h3>
            <div class="top basic-demo1-tree-wrapper">
                <Ttree ref="demotree"
                       :data="treeData"
                ></Ttree>
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

            /**
             * 数据处理成符合前端组件需要的格式
             * @return undefined
             */
            _generateTreeData(){
                let that = this;

                that.treeData = json.data.map(it => {
                    return it;
                });
            }
        },

        created(){
            let that = this;


            /**
             * 数据处理成符合前端组件需要的格式
             * @return undefined
             *
             * 本例中：页面初始时就加载默认的全量树，无任何勾选和选中状态的全量树,
             * 实际项目中，数据来源于后端，可以改为在watch中监听到后端传入数据后，再进行下列操作
             */
            that._generateTreeData();
        }
    }
</script>
