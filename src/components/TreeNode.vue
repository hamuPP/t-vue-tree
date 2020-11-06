<!--
    Created by 879372858@qq.com 2018/01/19/10:47:19
-->
<style scoped lang="less">
    @import '../styles/TreeNode.less';
</style>

<template>
    <compoTransition>
        <ul class="TtreeNode-wrapper"
            :class="computedNodeWrapperCls">
            <li>
           <span class="icon-wrapper">
               <span v-if="data.children && data.children.length" @click="handleExpand"></span>
           </span>
                <span class="checkbox-wrapper" v-if="data.checkbox" :class="computedCheckBoxCls">
                <span class="checkbox-inner"></span>
                <input type="checkbox"
                       :checked="data.checked"
                       class="checkbox-checkbox"
                       @change="checkboxChange">
           </span>
                <span class="text-wrapper"
                      :title="data.title"
                      :class="computedTextCls"
                      @click="handleClick"
                      @dblclick="handleDblclick">
               {{data.title}}
           </span>

                <TtreeNode v-if="data.expanded" v-for="(child, i) in data.children" :key="i"
                           :data="child"
                           :treeSelectable="treeSelectable"
                           :treeSelectType="treeSelectType">
                </TtreeNode>
            </li>
        </ul>
    </compoTransition>
</template>

<script>
    import compoTransition from './Transition';

    export default{
        name: 'TtreeNode',
        components: {
            compoTransition
        },
        props: {
            data: {
                type: Object,
                default () {
                    return {};
                }
            },
            checkbox: {
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
                timer: null,
//                treeAllData:[]
                nodeSelectable: true,
                nodeSelectType: 'single'
            }
        },
        computed: {
            computedNodeWrapperCls(){
                let that = this;
                let result = '';

                let hasChildren = that.data.children && that.data.children.length;
                let isExpanded = that.data.expanded && hasChildren;
                let isCollapsed = !that.data.expanded && hasChildren;

                if (isExpanded) {
                    result += 'expanded';
                } else if (isCollapsed) {
                    result += 'collapsed';
                }
                return result;
            },

            computedNodeWrapperStyles(){
                let that = this;
                // 例如可以写如下的样式
                //let result = 'height:auto !important;overflow:auto !important;background:green;';

                let result = '';
                return result;
            },
            computedCheckBoxCls(){
                let that = this;
                let result = '';

                if (that.data.checked) {
                    result += 'checked';
                } else if (that.data.indeterminated) {
                    result += 'indeterminated';
                }

                return result;
            },

            computedTextCls(){
                let that = this;
                let result = '';

                if (that.nodeSelectable && that.data.selected) {
                    result += 'text-selected';
                }
                return result;
            }
        },

        watch: {},

        methods: {

            handleClick(){
                let that = this;
//                let item = that.data;
                clearTimeout(that.timer);
                that.timer = setTimeout(function() {
                    let parent = that._getParent();

                    /* このノードのselected状態を変え */
                    if(that.nodeSelectable){
                        that.$set(that.data, 'selected', !that.data.selected);
                    }
                    parent.$emit.apply(parent, ['handleClickText'].concat(that.data));
                }, 200);
            },

            /**
             * 双击文字节点
             */
            handleDblclick() {
                let that = this;
                clearTimeout(that.timer);
                let parent = that._getParent();

                parent.$emit.apply(parent, ['handleDblClickText'].concat(that.data));
            },

            handleExpand(){
                let that = this;
                let item = that.data;
                let parent = that._getParent();

                if (item.children && item.children.length) {
                    that.$set(that.data, 'expanded', !that.data.expanded);
                    parent.$emit.apply(parent, ['handleToggle'].concat(that.data));

                }
            },

            _getParent(){
                let that = this;
                let parent = that.$parent || that.$root;
                let name = parent.$options.name;

                while (parent && name !== 'Ttree') {
                    parent = parent.$parent;
                    parent && (name = parent.$options.name);
                }

                return parent;

            },

            checkboxChange(e){
                let that = this;

                const checkedVal = e.target.checked;
                that.$set(that.data, 'checked', checkedVal);

                let item = that.data;
                let parent = that._getParent();
                parent.$emit.apply(parent, ['handleCheckbox'].concat(that.data));

            }
        },

        created(){
            let that = this;

            /* 设置所有节点的选中配置 --start-- */
            if(typeof that.treeSelectable === 'boolean'){
                that.nodeSelectable = that.treeSelectable;
                if(that.treeSelectType !== 'multiple'){
                    that.nodeSelectType = 'single';
                }
            }
            /* 设置所有节点的选中配置 --end-- */

        }
    }
</script>