<style scoped lang="less">
    @import '../styles/Tree.less';
</style>

<template>
    <div class="Ttree-wrapper"
         :class="computedTreeWrapperCls"
         :style="computedTreeWrapperStyles">
        <TtreeNode v-for="(item, i) in treeAllData" :key="i"
                   :data="item"
                   :treeSelectable="treeSelectable"
                   :treeSelectType="treeSelectType">
        </TtreeNode>
    </div>
</template>

<script>
    import TtreeNode from './TreeNode.vue';

    export default{
        name: 'Ttree',
        components: {
            TtreeNode
        },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            showCheckbox: {
                type: Boolean,
                default: false
            },
            treeSelectable: {//树是否支持选中效果，如果此处为false，那么即使节点数据上有select属性也无效
                type: Boolean,
                default: true
            },
            treeSelectType: {
                type: String,
                default: 'single'
            }
        },
        data(){
            return {
                treeAllData: []
            }
        },
        computed: {
            computedTreeWrapperCls(){
                let that = this;
                let result = '';

                return result;
            },

            computedTreeWrapperStyles(){
                let that = this;
                let result = '';

                return result;
            }
        },

        watch: {
            data(val){
                let that = this;

                //when tree data changed ,rebuild data for displaying in tree
                that.treeAllData = val;
                that.flatTree = that.generateFlatTree();
            }
        },

        methods: {

            getCheckedNodes(type){
                let that = this;
                let ss = that.flatTree.filter(obj => obj.node[type]);
                console.log(ss);
                return that.flatTree.filter(obj => obj.node[type]).map(obj => obj.node);
            },

            getSelectedNodes(){
                let that = this;
                let result = [];
                if(that.treeSelectable){
                    result = that.flatTree.filter(obj => obj.node['selected']).map(obj => obj.node);
                }
                return result;
            },

            _handleCheckbox(params){
                let that = this;

                let currentCheckVal = params.checked;
                let currentNodeKey = params.nodeKey;

                const node = that.flatTree[currentNodeKey].node;

                that.$set(node, 'checked', currentCheckVal);
                that.$set(node, 'indeterminated', false);

                that._propagateUp(currentNodeKey);
                (params.children && params.children.length) && that._propagetaDown(node, {
                    checked: currentCheckVal,
                    indeterminated: false
                });

                //今操作してるのツリーノードを外に通知
                that.$emit('onCheck', params);
            },

            /**
             * 文字をクリックした時
             * @param params
             * @private
             */
            _handleClickText(params){
                let that = this;

                let currentSelectVal = params.selected;
                let currentNodeKey = params.nodeKey;

                const node = that.flatTree[currentNodeKey].node;

                /* 仅当树节点设置了 treeSelectable 且其值为true时，才有相关的select选中效果和onSelect事件 */
                if(that.treeSelectable && (typeof that.treeSelectable === 'boolean')){
                    /* 根据 '单选\多选' 的种类不同，而对其他树节点做取消选中操作(单选) */
                    let _treeSelectType = (that.treeSelectType === 'multiple') ? 'multiple' : 'single';

                    if(_treeSelectType === 'single'){
                        that.flatTree.forEach(it=>{
                            let n = it.node;
                            that.$set(n, 'selected', false);
                        });
                    }
                    that.$set(node, 'selected', currentSelectVal);
                    //今操作してるのツリーノードを外に通知
                    that.$emit('onSelect', params);
                }
            },

            /**
             * 文字をダブルクリックした時,選択状態にしないよ
             * @param params
             * @private
             */
            _handleDblClickText(params){
                let that = this;

                //今操作してるのツリーノードを外に通知
                that.$emit('onDblclickText', params);
            },

            _propagateUp(nodekey){
                let that = this;
                const parentKey = that.flatTree[nodekey].parent;
                if (parentKey === undefined) {
                    return;
                }
                const currentNode = that.flatTree[nodekey].node;
                const parentNode = that.flatTree[parentKey].node;

                if (currentNode.checked == parentNode.checked && currentNode.indeterminated == parentNode.indeterminated) {
                    return;
                }

                if (currentNode.checked) {
                    let isAllChildrenChecked = true;
                    let allChildren = parentNode.children;
                    for (let i = 0, len = allChildren.length; i < len; i++) {
                        let _child = allChildren[i];
                        if (!_child.checked) {
                            isAllChildrenChecked = false;
                            break;
                        }
                    }

                    that.$set(parentNode, 'indeterminated', !isAllChildrenChecked);
                    that.$set(parentNode, 'checked', isAllChildrenChecked);

                } else {
                    let isChildenContainIndeterminated = false;
                    let isAllChildrenChecked = true;

                    let isChildenContainUnchecked = false;

                    let uncheckedCount = 0;

                    let jAllChildren = parentNode.children;
                    for (let j = 0, jlen = jAllChildren.length; j < jlen; j++) {
                        let _jChild = jAllChildren[j];
//                        if(_jChild.indeterminated){
//                            isChildenContainIndeterminated = true;
//                            break;
//                        }
                        if (!_jChild.checked && !_jChild.indeterminated) {
                            uncheckedCount++;
                        }
                    }
                    if (uncheckedCount != jAllChildren.length) {
                        isChildenContainUnchecked = true;
                    }

                    that.$set(parentNode, 'indeterminated', isChildenContainUnchecked);
                    that.$set(parentNode, 'checked', false);
                }

                that._propagateUp(parentKey);

            },

            _propagetaDown(node, params = {}){
                let that = this;

                for (let i in params) {
                    that.$set(node, i, params[i]);
                }

                //TODO 重整这里 that.flatTree[child]
                if (node && node.children && node.children.length) {
                    node.children.forEach(child => {

                        that._propagetaDown(child, params);
                    });
                }
            },

            generateFlatTree () {
                let that = this;
                let keyCounter = 0;
                let selectedNodeCount = 0;//seleted为true的节点的数量计数
                const flatTree = [];

                function flattenChildren(node, parent) {
                    node.nodeKey = keyCounter++;
                    flatTree[node.nodeKey] = {
                        node: node,
                        nodeKey: node.nodeKey
                    };
                    if (typeof parent != 'undefined') {
                        flatTree[node.nodeKey].parent = parent.nodeKey;
                        flatTree[parent.nodeKey].children.push(node.nodeKey);
                    }

                    if (node.children) {
                        flatTree[node.nodeKey].children = [];
                        node.children.forEach(child => flattenChildren(child, node));
                    }
                }

                that.treeAllData.forEach(rootNode => {
                    flattenChildren(rootNode);
                });
                console.log(flatTree);
                return flatTree;
            },
            rebuildTree(){
                let that = this;

                that.treeAllData = [];
            },

            /**
             * 勾选指定节点
             * @param key
             * @param val
             */
            checkNode({key, val}){
                if(!key || !val){throw '需要传入标识字段key和值val'}
                let that = this;
                let idsObj = {};

                val.forEach(it=>{
                    idsObj[it] = true;
                });

                let flatNodes =  that.flatTree;
                // 先找到勾选的节点；
                let checkedNodes = [];

                for(let i = 0,len = flatNodes.length;i < len;i++){
                    let oNode = flatNodes[i];
                    let oNodeCustormKey = oNode.node[key];
                    if(idsObj[oNodeCustormKey]){
                        checkedNodes.push(oNode);

                        that.$set(oNode.node, 'checked', true);
                        that.$set(oNode.node, 'indeterminated', false);
                    }
                }

                // 处理该节点相关的父节点的勾选或者半勾选状态
                checkedNodes.forEach(node =>{
                    that._propagateUp(node.nodeKey);
                    (node.children && node.children.length) && that._propagetaDown(node.node, {
                        checked: true,
                        indeterminated: false
                    });
                });
            },

            /**
             * 展开指定节点
             * @param key
             * @param val
             */
            expandNode({key, val}){
                if(!key || !val){throw '需要传入标识字段key和值val'}
                let that = this;
                let idsObj = {};

                val.forEach(it=>{
                    idsObj[it] = true;
                });
                let flatNodes =  that.flatTree;

                for(let i = 0,len = flatNodes.length;i < len;i++){
                    let oNode = flatNodes[i];
                    let oNodeCustormKey = oNode.node[key];
                    if(idsObj[oNodeCustormKey]){
                        that.$set(oNode.node, 'expanded', true);
                    }
                }
            },

            /**
             * 折叠指定节点
             * @param key
             * @param val
             */
            collapseNode({key, val}){
                if(!key || !val){throw '需要传入标识字段key和值val'}
                let that = this;
                let idsObj = {};

                val.forEach(it=>{
                    idsObj[it] = true;
                });
                let flatNodes =  that.flatTree;

                for(let i = 0,len = flatNodes.length;i < len;i++){
                    let oNode = flatNodes[i];
                    let oNodeCustormKey = oNode.node[key];
                    if(idsObj[oNodeCustormKey]){
                        that.$set(oNode.node, 'expanded', false);
                    }
                }
            }
        },

        created(){
            let that = this;

            that.treeAllData = that.data;
            that.flatTree = that.generateFlatTree();
        },

        mounted(){
            let that = this;

            that.$on('handleToggle', data => that.$emit('onToggle', data));
            that.$on('handleCheckbox', that._handleCheckbox);
            that.$on('handleClickText', that._handleClickText);
            that.$on('handleDblClickText', that._handleDblClickText);

//            this.$on('toggle-expand', node => this.$emit('on-toggle-expand', node));
        }
    }
</script>