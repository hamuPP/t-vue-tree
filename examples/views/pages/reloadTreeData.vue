<template>
    <div class="main-content">
        <h1>t-vue-tree</h1>
        <h3 class="title-mark"> 一个基于vue的同步树 </h3>
        <p>ps:当前版本没有做异步树</p>
        <section class="inner-main-content">
            <h3 class="title-mark">reloadTreeData</h3>
            <div class="example-box" ref="containerNode">
                <div class="top demo1-tree-wrapper">
                    <Ttree ref="demotree"
                           :data="treeData2"
                           :treeSelectable="treeSelectable"
                           :treeSelectType="treeSelectType"
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

            <div class="example-box padding">
                <p class="example-title">事件示例：</p>

                <p class="example-title" style="margin:10px 0 0;">方法示例：</p>
                <button class="btn btn-block" @click="updateTreeData">更新树的数据</button>

            </div>
        </section>
    </div>
</template>
<script>
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
                treeData: [
                    {
                        title: 'parent 1',
                        expanded: true,
                        checkbox: true,//是否有勾选框,默认false
                        checked: false,//是否勾选该节点，默认false
                        selected: false,//是否选中该节点，默认false
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
                                        selected:true,//是否选中该节点，默认false
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
                                selected: false,//是否选中该节点，默认false
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
                ],
                treeData2:[]
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

            updateTreeData(){
                let that = this;

                let metaData = {
                    "meta": {
                        "code": 1,
                        "message": "成功"
                    },
                    "data": [
                        {
                            "orgName": "国家能源集团",
                            "orgCode": "rootuqa4u8kuaznt",
                            "curStatus": 1,
                            "orgType": "1",
                            "indexOrder": 1,
                            "children": [
                                {
                                    "orgName": "国电大渡河公司",
                                    "orgCode": "EA03F531E06C6431E040B00A859B6650",
                                    "curStatus": 1,
                                    "orgType": "1",
                                    "indexOrder": 1,
                                    "children": [
                                        {
                                            "orgName": "枕头坝公司",
                                            "orgCode": "EA03F531E12D6431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "运行维护处",
                                                    "orgCode": "EA03F531E1356431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "综合维护值",
                                                            "orgCode": "ff80808157f9e90a0158672db41b0611",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维四值",
                                                            "orgCode": "ff80808157f9e90a0158672d60eb0610",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维三值",
                                                            "orgCode": "ff80808157f9e04401586726c45e039d",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维一值",
                                                            "orgCode": "ff80808157f9e90a0158672b9cc2060e",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维二值",
                                                            "orgCode": "ff80808157f9e90a0158672c665b060f",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "市场营销处/经济运行处",
                                                    "orgCode": "0000000057dcc0780157e157491600ef",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务管理处",
                                                    "orgCode": "EA03F531E12F6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "生产技术处",
                                                    "orgCode": "EA03F531E1346431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "工程项目部",
                                                    "orgCode": "EA03F531E1306431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "工程建设处",
                                                            "orgCode": "ff80808157f9e90a01586750b8bb0613",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "计划合同处",
                                                            "orgCode": "ff80808157f9e0440158674b3bb9039e",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "前期工作处",
                                                            "orgCode": "ff80808157f9e0440158674b90df039f",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "党群办公室",
                                                    "orgCode": "EA03F531E1316431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合管理处",
                                                    "orgCode": "EA03F531E0FA6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全监察处",
                                                    "orgCode": "EA03F531E0FB6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "小车班",
                                                    "orgCode": "8a301b1057dcb4f50157e52c3a820263",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B689CEE29A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EA03F531E12E6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "公司本部",
                                            "orgCode": "EA03F531E06D6431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "董事长",
                                                    "orgCode": "8a301b124eef18fc014ef18873fd000c",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "工程建设部",
                                                    "orgCode": "EA03F531E0776431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "机电设备部",
                                                    "orgCode": "EA03F531E0786431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划合同部",
                                                    "orgCode": "EA03F531E0726431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "移民环保部",
                                                    "orgCode": "EA03F531E0796431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "审计部",
                                                    "orgCode": "EA03F531E07A6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "纪检监察部",
                                                    "orgCode": "8a301b124a054d16014a22a30efa0001",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群工作部",
                                                    "orgCode": "EA03F531E0746431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EA03F531E06E6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B629CEDC9A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总师总助",
                                                    "orgCode": "EA03F531E0756431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总经理工作部",
                                                    "orgCode": "EA03F531E06F6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "企业管理部",
                                                    "orgCode": "8a301b104a054963014a229558040001",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人力资源部",
                                                    "orgCode": "EA03F531E0706431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务产权部",
                                                    "orgCode": "EA03F531E0716431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全生产部",
                                                    "orgCode": "EA03F531E0736431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "市场经营部",
                                                    "orgCode": "EA03F531E0766431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "双江口公司",
                                            "orgCode": "EA03F531E13E6431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EA03F531E0FD6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合管理部",
                                                    "orgCode": "EA03F531E13F6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务部",
                                                    "orgCode": "EA03F531E1406431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划合同部",
                                                    "orgCode": "EA03F531E1416431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "工程管理部",
                                                    "orgCode": "EA03F531E1446431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B669CEDF9A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "大金源公司",
                                            "orgCode": "EA03F531E1056431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "项目部",
                                                    "orgCode": "8a301b104e8f3b87014ed3936db80463",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "乐山分公司",
                                                            "orgCode": "8a301b114eef1756014ef1832cd2000b",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "天泉湖宾馆",
                                                            "orgCode": "8a301b124e8f3d77014ed39eaf40034f",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "总经理工作部",
                                                    "orgCode": "8a301b114eef1756014ef1855dc6000e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总师总助",
                                                    "orgCode": "8a301b114eef1756014ef185aa60000f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全生产部",
                                                    "orgCode": "8a301b104e8f3b87014eddf4172004b6",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群工作部",
                                                    "orgCode": "8a301b114e8f3d91014eddf45b3606a2",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "国电置业公司",
                                                    "orgCode": "8a301b114e8f3d91014eddf4fd6f06a3",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划经营部",
                                                    "orgCode": "8a301b104e8f3b87014eddf88c5c04bb",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "瑞通公司",
                                                    "orgCode": "8a301b114eef1756014ef1811911000a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "天鼎公司",
                                                    "orgCode": "8a301b124eef18fc014ef1829e560007",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "物业管理部",
                                                    "orgCode": "8a301b114eef1756014ef184908c000c",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "小车班",
                                                    "orgCode": "8a301b114eef1756014ef184f0ba000d",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务产权部",
                                                    "orgCode": "EA03F531E16A6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "龙宇贸易公司",
                                                    "orgCode": "EA03F531E16D6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B610CEE59A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EA03F531E1686431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人力资源部",
                                                    "orgCode": "EA03F531E1116431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "金川太阳河流域水电开发有限公司",
                                                    "orgCode": "EA03F531E1126431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "四川能信科技有限公司",
                                                    "orgCode": "EA03F531E1066431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "1",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "律贝生物公司",
                                                    "orgCode": "EA03F531E16E6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "锐达公司",
                                                    "orgCode": "EA03F531E16F6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "物资配送部",
                                                    "orgCode": "EA03F531E1726431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "双创办公室",
                                                    "orgCode": "ff80808157f9e04401582e50e0810211",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "新华公司",
                                                    "orgCode": "ff8080815a2e38dd015b412b3e84010f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "四八四公司",
                                                    "orgCode": "ff8080815a2e38dd015b412ad010010e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "天鼎公司",
                                            "orgCode": "ff80808157f9e90a015a16c2e5700e4e",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "双江口项目部",
                                                    "orgCode": "8a301b114e8f3d91014ed39352300606",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "沙坪项目部",
                                                    "orgCode": "8a301b124e8f3d77014ed39de20e034e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "乐山分公司",
                                                    "orgCode": "8a301b124e8f3d77014ed3e881f903ba",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "枕头坝项目部",
                                                    "orgCode": "8a301b114e8f3d91014ed39cf349060b",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "瀑深项目部",
                                                    "orgCode": "8a301b114f027273014fcfaba2050047",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "金川项目部",
                                                    "orgCode": "8a301b124e8f3d77014ed39998eb034a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "革什扎项目部",
                                                    "orgCode": "8a301b124e8f3d77014ed399e947034b",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "猴子岩项目部",
                                                    "orgCode": "8a301b104e8f3b87014ed39a0faf0464",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "大岗山项目部",
                                                    "orgCode": "8a301b124e8f3d77014ed39aae61034c",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "梯调食堂项目部",
                                                    "orgCode": "8a301b1057f9d7bd01582e57fd8c025b",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "双创办公室",
                                                    "orgCode": "8a301b10596e2065015a16b5e7fe01ce",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人力资源部",
                                                    "orgCode": "ff80808157f9e90a015a16cc6cf40e54",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "梯调食堂部",
                                                    "orgCode": "ff80808157f9e044015a16c7730b0a20",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "天鼎保安公司",
                                                    "orgCode": "ff80808157f9e044015a16c8dfeb0a21",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群工作部",
                                                    "orgCode": "ff80808157f9e90a015a16cb2cef0e53",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务产权部",
                                                    "orgCode": "ff80808157f9e044015a16c6ba040a1e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划经营部",
                                                    "orgCode": "ff80808157f9e90a015a16cae1150e52",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全生产部",
                                                    "orgCode": "ff80808157f9e90a015a16ca8f050e51",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总师总助",
                                                    "orgCode": "ff80808157f9e90a015a16c443ed0e50",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "物业管理部",
                                                    "orgCode": "ff80808157f9e044015a16c6f12c0a1f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "ff80808157f9e90a015a16c3f3640e4f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总经理工作部",
                                                    "orgCode": "8a301b10596e2065015a16b2c8b601cd",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "革什扎公司",
                                            "orgCode": "EA03F531E10C6431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "工程综合处",
                                                    "orgCode": "ff80808157e5620c0157efa9fc950081",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人力资源处",
                                                    "orgCode": "ff80808157e5620c0157efaa6f3e0082",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "市场营销处",
                                                    "orgCode": "ff80808157f44f260157f5cdc7ef006c",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EA03F531E1576431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合办公室",
                                                    "orgCode": "EA03F531E1586431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务管理处",
                                                    "orgCode": "EA03F531E1596431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "发电运行处",
                                                    "orgCode": "EA03F531E15B6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "设备维护处",
                                                    "orgCode": "EA03F531E10D6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总师总助",
                                                    "orgCode": "EA03F531E15C6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "征地移民处",
                                                    "orgCode": "EA03F531E15D6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "机电物资处",
                                                    "orgCode": "EA03F531E10E6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "生产技术处",
                                                    "orgCode": "EA03F531E1036431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "杨柳坪电厂",
                                                    "orgCode": "EA03F531E15F6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全监察处",
                                                    "orgCode": "EA03F531E1026431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "工程建设处",
                                                    "orgCode": "EA03F531E15E6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划合同处",
                                                    "orgCode": "EA03F531E15A6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B613CEE89A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "沙坪公司",
                                            "orgCode": "EA03F531E1366431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "生产筹备处",
                                                    "orgCode": "8a301b104b256d8a014c06f304aa0233",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "工程建设处",
                                                    "orgCode": "EA03F531E13C6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "领导人员",
                                                    "orgCode": "EA03F531E1376431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务处",
                                                    "orgCode": "EA03F531E1396431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划合同处",
                                                    "orgCode": "EA03F531E0FC6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全监察处",
                                                    "orgCode": "EA03F531E13A6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "征地移民处",
                                                    "orgCode": "EA03F531E13B6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "机电物资处",
                                                    "orgCode": "EA03F531E13D6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合办公室",
                                                    "orgCode": "EA03F531E1386431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B614CEE89A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "运行维护处",
                                                    "orgCode": "8a301b1057f9d7bd0158292aa725024f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群办公室",
                                                    "orgCode": "ff80808157f9e04401582934f78c01fb",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "生产技术处",
                                                    "orgCode": "ff80808157f9e90a0158293afe0f0146",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "集控中心",
                                            "orgCode": "EA03F531E0F16431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "中心领导",
                                                    "orgCode": "8a301b104a054963014a23cf17e30007",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合处",
                                                    "orgCode": "EA03F531E0F26431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "技术安全处",
                                                    "orgCode": "EA03F531E0F56431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "调度控制处",
                                                    "orgCode": "EA03F531E0F36431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "经济运行处",
                                                    "orgCode": "8a301b1056e547a60157dbe7107300c7",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "自动化处",
                                                    "orgCode": "EA03F531E0F46431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "工程公司",
                                            "orgCode": "EA03F531E1606431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "8a301b114eef1756014ef19496d80015",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "沙湾片区管理部",
                                                    "orgCode": "8a301b1057dcb4f50157e021d4c9001a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "枕头坝沙坪片区管理部",
                                                    "orgCode": "0000000057dcc0780157e0256bf4001f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "大岗山石棉片区管理部",
                                                    "orgCode": "0000000057dcc0780157e027d6d80021",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "瀑深片区管理部",
                                                    "orgCode": "0000000057dcc0780157e0270b720020",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "猴子岩丹巴片区管理部",
                                                    "orgCode": "0000000057dcc0780157e028e5d70022",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "双江口金川片区管理部",
                                                    "orgCode": "8a301b1057dcb4f50157e0284421001b",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "库区打捞项目管理部",
                                                    "orgCode": "8a301b1057dcb4f50157e0297ae9001c",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "黑马复垦项目部",
                                                    "orgCode": "0000000057dcc0780157e036e19c0025",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "项目公司",
                                                    "orgCode": "EA03F531E1666431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "1",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "新华电力有限公司",
                                                    "orgCode": "EA03F531E1106431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总经理办公室",
                                                    "orgCode": "EA03F531E1626431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "四八四发电有限公司",
                                                    "orgCode": "EA03F531E1676431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "调出人员2",
                                                    "orgCode": "EA03F531E1616431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "科技咨询处",
                                                    "orgCode": "EA03F531E1646431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "市场经营处",
                                                    "orgCode": "EA03F531E1636431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务管理处",
                                                    "orgCode": "EA03F531E10F6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群办公室",
                                                    "orgCode": "EA03F531E1656431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "项目管理与安全处",
                                                    "orgCode": "EA03F531E1046431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "后勤服务处",
                                                    "orgCode": "ECD8B612CEE59A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务数据服务中心",
                                                    "orgCode": "8a301b1057dcb4f50157e169da830136",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "官帽舟项目管理部",
                                                    "orgCode": "ff8080815a2e38dd015adb97ed9700cf",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "龚电总厂",
                                            "orgCode": "EA03F531E0A26431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "龚站运维处",
                                                    "orgCode": "EA03F531E0AA6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "龚站运维处运维二值",
                                                            "orgCode": "8a301b104eef1726014ef14a56a50002",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "龚站运维处运维一值",
                                                            "orgCode": "8a301b114eef1756014ef14a3e990001",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "龚站运维处运维三值",
                                                            "orgCode": "8a301b114eef1756014ef14a930a0002",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "龚站运维处运维四值",
                                                            "orgCode": "8a301b104eef1726014ef14bb4f40003",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "生产综合处",
                                                    "orgCode": "8a301b124eef18fc014ef140ff9b0000",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "坝工班",
                                                            "orgCode": "8a301b124eef18fc014ef142116c0001",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "保管班",
                                                            "orgCode": "8a301b104eef1726014ef14281df0000",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "通讯班",
                                                            "orgCode": "8a301b114eef1756014ef14cd1d90004",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "铜站运维处",
                                                    "orgCode": "EA03F531E0AB6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "铜站运维处运维二值",
                                                            "orgCode": "8a301b124eef18fc014ef14e6f080005",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "铜站运维处运维一值",
                                                            "orgCode": "8a301b104eef1726014ef14f0a260005",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "铜站运维处运维三值",
                                                            "orgCode": "8a301b104eef1726014ef14f78850006",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "铜站运维处运维四值",
                                                            "orgCode": "8a301b124eef18fc014ef14ff6e80006",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "市场营销处",
                                                    "orgCode": "8a301b114eef1756014ef146a9fe0000",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "厂领导",
                                                    "orgCode": "8a301b104eef1726014ef14907060001",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "副总工程师",
                                                    "orgCode": "8a301b124eef18fc014ef149a2ff0003",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "副总经济师",
                                                    "orgCode": "ff80808157f44f260157f57a0e720044",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "厂长办公室",
                                                    "orgCode": "EA03F531E0A46431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人力资源处",
                                                    "orgCode": "EA03F531E0A56431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务管理处",
                                                    "orgCode": "EA03F531E0A66431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "生产技术处",
                                                    "orgCode": "EA03F531E0A76431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全监察处",
                                                    "orgCode": "EA03F531E0A86431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群办公室",
                                                    "orgCode": "EA03F531E0A96431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "退养人员",
                                                    "orgCode": "EA03F531E0AD6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B639CEDC9A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "安宁巴底筹备处",
                                            "orgCode": "EA03F531E0G16431E040B10A859B6655",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "8a301b104a054963014a24052a6a0008",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合处",
                                                    "orgCode": "8a301b105871188e0158d24c137f00ee",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "双江口分公司",
                                            "orgCode": "8a301b1056e547a60157c3d99b1e00b4",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "0000000057dcc0780157e1cfa8d4013f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "工程管理处",
                                                    "orgCode": "0000000057dcc0780157e1da74210141",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "8a301b1057dcb4f50157e4caefcf0217",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "大坝工程建管中心",
                                                    "orgCode": "8a301b1057dcb4f50157e1cf17c00209",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "厂房工程建管中心",
                                                    "orgCode": "8a301b1057dcb4f50157e1cf88d8020a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "泄洪工程建管中心",
                                                    "orgCode": "8a301b1057dcb4f50157e1cff384020b",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "配套工程建管中心",
                                                    "orgCode": "0000000057dcc0780157e1d4689d0140",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "生产筹备管理中心",
                                                    "orgCode": "8a301b1057dcb4f50157e1d62fac020c",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合办公室",
                                                    "orgCode": "0000000057dcc0780157e1cce392013e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划财务处",
                                                    "orgCode": "8a301b1057dcb4f50157e1d6f032020d",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全质量处",
                                                    "orgCode": "8a301b1057dcb4f50157e1d7a12c020e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "小车班",
                                                    "orgCode": "ff80808157f9e044015846b148ef023a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "猴子岩公司",
                                            "orgCode": "EA03F531E1256431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "运行维护处",
                                                    "orgCode": "ff80808157e5620c0157ebdce1f30073",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "运维一值",
                                                            "orgCode": "8a301b1057f9d7bd01580a1da31201f6",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维二值",
                                                            "orgCode": "ff80808157f9e04401580a2740e301ce",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维三值",
                                                            "orgCode": "8a301b1057f9d7bd01580a1e40dd01f7",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维四值",
                                                            "orgCode": "ff80808157f9e90a01580a2d7644010b",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "综合维护值",
                                                            "orgCode": "8a301b1057f9d7bd01580a1eec1f01f8",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "处部",
                                                            "orgCode": "ff80808157f9e044015871691a5c03ef",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "管理员",
                                                    "orgCode": "8a301b1057f9d7bd015804e51e6401b5",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合办公室",
                                                    "orgCode": "EA03F531E1276431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "档案室",
                                                            "orgCode": "ff80808157f9e90a01580a2ecc5a010c",
                                                            "curStatus": 1,
                                                            "orgType": "1",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "小车班",
                                                            "orgCode": "8a301b1057dcb4f50157ebe00e0502f1",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "室部",
                                                            "orgCode": "ff80808157f9e90a01587171cca6062d",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "机电物资处",
                                                    "orgCode": "EA03F531E12C6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "工程建设处",
                                                    "orgCode": "EA03F531E12B6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "生产技术处",
                                                    "orgCode": "ff80808157e5620c0157ebdd106d0074",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B679CEE29A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "2016调整临时部门",
                                                    "orgCode": "8a301b1057dcb4f50157ebd9bb0f02f0",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EA03F531E1266431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司党委",
                                                    "orgCode": "8a301b124e8f3d77014eddf4759b03da",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总师总助",
                                                    "orgCode": "8a301b124e8f3d77014eddf384e003d9",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划合同处",
                                                    "orgCode": "EA03F531E0F96431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "征地移民处",
                                                    "orgCode": "EA03F531E12A6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务劳资处",
                                                    "orgCode": "EA03F531E1286431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "人资",
                                                            "orgCode": "ff80808157f9e04401582cfed2b50203",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "财务",
                                                            "orgCode": "ff80808157f9e04401582cfe9f340202",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "安全监察处",
                                                    "orgCode": "EA03F531E1296431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群办公室",
                                                    "orgCode": "8a301b1057f9d7bd01582cf519150251",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "市场营销处",
                                                    "orgCode": "8a301b10596e2065015a2080124401d0",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "国电置业四川分公司",
                                            "orgCode": "8a301b1057f9d7bd0158005b167c000d",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "财务部",
                                                    "orgCode": "8a301b1057f9d7bd0158047a21ba011e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "接待中心",
                                                    "orgCode": "ff80808157f9e90a01580488e43d009e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "经营部",
                                                    "orgCode": "8a301b1057f9d7bd0158047a918f011f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "客服部",
                                                    "orgCode": "8a301b1057f9d7bd0158047ac9160120",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "物业管理部",
                                                    "orgCode": "ff80808157f9e90a01580489a19d009f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "置业-外委单位",
                                                    "orgCode": "8a301b1057f9d7bd0158047b86670121",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合部",
                                                    "orgCode": "ff80808157f9e04401580484ac8500f7",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "服务电话",
                                                    "orgCode": "ff8080815a2e38dd015ab738477a0067",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "ff8080815a2e3428015ab748d7240046",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "检修公司",
                                            "orgCode": "EA03F531E0BF6431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "枕深检修项目部",
                                                    "orgCode": "8a301b105016afdb015050bf75080002",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "枕深检修项目部本部",
                                                            "orgCode": "0000000057dcc0780157e5025ed10188",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "交通运输班",
                                                            "orgCode": "0000000057dcc0780157e4de9de10162",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "枕深检修项目部机械班",
                                                            "orgCode": "0000000057dcc0780157e50527690189",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "枕深检修项目部电气班",
                                                            "orgCode": "8a301b1057dcb4f50157e502c7540243",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "枕深检修项目部综合班",
                                                            "orgCode": "0000000057dcc0780157e5059379018a",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "瀑站检修项目部",
                                                    "orgCode": "8a301b124f02be95015050bf23a100df",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "瀑站检修项目部本部",
                                                            "orgCode": "0000000057dcc0780157e505cf90018b",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "瀑站检修项目部机械班",
                                                            "orgCode": "8a301b1057dcb4f50157e50392ed0244",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "瀑站检修项目部电气班",
                                                            "orgCode": "8a301b1057dcb4f50157e503c5390245",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "瀑站检修项目部起重班",
                                                            "orgCode": "8a301b1057dcb4f50157e5040e860246",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "瀑站检修项目部综合班",
                                                            "orgCode": "0000000057dcc0780157e506e279018c",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "瀑站检修项目部大坝综合班",
                                                            "orgCode": "8a301b1057dcb4f50157e50488850247",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "瀑站检修项目部交通运输班",
                                                            "orgCode": "8a301b1057dcb4f50157e504cc5e0248",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "大岗山检修项目部",
                                                    "orgCode": "8a301b114f027273015050bd6dcd0083",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "大岗山检修项目部本部",
                                                            "orgCode": "8a301b1057dcb4f50157e5050c8a0249",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "大岗山检修项目部机械班",
                                                            "orgCode": "8a301b1057dcb4f50157e5055134024a",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "大岗山检修项目部电气班",
                                                            "orgCode": "8a301b1057dcb4f50157e505719d024b",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "大岗山检修项目部综合班",
                                                            "orgCode": "8a301b1057dcb4f50157e50593e0024c",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "大岗山检修项目部交通运输班",
                                                            "orgCode": "8a301b1057dcb4f50157e505cb52024d",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "铜站检修项目部",
                                                    "orgCode": "8a301b105016afdb015050be097d0001",
                                                    "curStatus": 1,
                                                    "orgType": "1",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "铜站检修项目部本部",
                                                            "orgCode": "0000000057dcc0780157e4fd8b180180",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "铜站检修项目部机械班",
                                                            "orgCode": "0000000057dcc0780157e4fde83a0181",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "铜站检修项目部起重班",
                                                            "orgCode": "8a301b1057dcb4f50157e4fb9b93023e",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "铜站检修项目部电气班",
                                                            "orgCode": "0000000057dcc0780157e4feab7d0182",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "铜站检修项目部电焊班",
                                                            "orgCode": "0000000057dcc0780157e4ff2fc20183",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "铜站检修项目部油处理班",
                                                            "orgCode": "0000000057dcc0780157e4ff6f740184",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "铜站检修项目部大坝机电班",
                                                            "orgCode": "0000000057dcc0780157e4ffaa310185",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "龚站检修项目部",
                                                    "orgCode": "8a301b124f02be95015050be9fca00de",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "龚站检修项目部本部",
                                                            "orgCode": "0000000057dcc0780157e5005f250186",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "龚站检修项目部机械班",
                                                            "orgCode": "8a301b1057dcb4f50157e4fe0cad023f",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "龚站检修项目部起重班",
                                                            "orgCode": "8a301b1057dcb4f50157e4fe9cb20240",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "龚站检修项目部电气班",
                                                            "orgCode": "8a301b1057dcb4f50157e4fedbaf0241",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "龚站检修项目部综合班",
                                                            "orgCode": "0000000057dcc0780157e501c7690187",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "龚站检修项目部大坝机电班",
                                                            "orgCode": "8a301b1057dcb4f50157e4ff763f0242",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "对外工程项目部",
                                                    "orgCode": "EA03F531E0CB6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "对外工程项目部综合班",
                                                            "orgCode": "8a301b1057dcb4f50157e508a858024f",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "对外工程项目部电气一班（铜头）",
                                                            "orgCode": "EA03F531E0EE6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "对外工程项目部电气二班（小关子）",
                                                            "orgCode": "EA03F531E0EF6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "对外工程项目部本部",
                                                            "orgCode": "EA03F531E0EB6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "对外工程项目部机械一班（铜头）",
                                                            "orgCode": "EA03F531E0EC6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "对外工程项目部机械二班（小关子）",
                                                            "orgCode": "EA03F531E0ED6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "8a301b124e8f3d77014edd0fc88803cc",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "试验中心",
                                                    "orgCode": "EA03F531E0CA6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "交通运输班",
                                                            "orgCode": "0000000057dcc0780157e4ddb83d0160",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "试验中心绝缘监督二班",
                                                            "orgCode": "8a301b1057dcb4f50157e4f8ed4c023d",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "试验中心绝缘监督一班",
                                                            "orgCode": "0000000057dcc0780157e508e311018e",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "试验中心仪表一班",
                                                            "orgCode": "EA03F531E0EA6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "试验中心仪表二班",
                                                            "orgCode": "0000000057dcc0780157e509f03e018f",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "试验中心本部",
                                                            "orgCode": "EA03F531E0E56431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "试验中心机试班",
                                                            "orgCode": "EA03F531E0E96431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "检修准备部",
                                                    "orgCode": "EA03F531E0CC6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "检修准备部本部",
                                                            "orgCode": "EA03F531E0F06431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "无分类班级账号",
                                                    "orgCode": "8a301b1057dcb4f50157e63ac98e02cb",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "专项工作督导办公室",
                                                    "orgCode": "8a301b114e8f3d91014edd0ff4fe0691",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时组织",
                                                    "orgCode": "ff80808157e556280157e60623a20036",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总经理办公室",
                                                    "orgCode": "EA03F531E0C16431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "小车班",
                                                            "orgCode": "EA03F531E0CD6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "生产技术部",
                                                    "orgCode": "EA03F531E0C76431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "市场经营部",
                                                    "orgCode": "EA03F531E0C46431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全监察部",
                                                    "orgCode": "EA03F531E0C56431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人力资源部",
                                                    "orgCode": "EA03F531E0C26431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务管理部",
                                                    "orgCode": "EA03F531E0C36431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群办公室",
                                                    "orgCode": "EA03F531E0C66431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "副总师",
                                                    "orgCode": "ff80808157f9e90a01592482954b0986",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "大岗山电厂",
                                            "orgCode": "EA03F531E11A6431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "运行维护处",
                                                    "orgCode": "EA03F531E11D6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "1",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "处部",
                                                            "orgCode": "8a301b124a054d16014bc537d7ad7df1",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维一值",
                                                            "orgCode": "8a301b124a054d16014bc537d7ad7df2",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维二值",
                                                            "orgCode": "8a301b124a054d16014bc537d7ad7df3",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维三值",
                                                            "orgCode": "8a301b124a054d16014bc537d7ad7df4",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维四值",
                                                            "orgCode": "8a301b124a054d16014bc537d7ad7df5",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "综合维护值",
                                                            "orgCode": "8a301b124a054d16014bc537d7ad7df6",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "厂领导",
                                                    "orgCode": "8a301b114eef1756014ef1907ab70014",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合办公室",
                                                    "orgCode": "EA03F531E0BB6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "生产技术处",
                                                    "orgCode": "EA03F531E11C6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "市场营销处",
                                                    "orgCode": "8a301b1057dcb4f50157e4de72400225",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "经济运行处",
                                                    "orgCode": "8a301b1057dcb4f50157e50888b1024e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人资办公室",
                                                    "orgCode": "8a301b104b256d8a014bc5206a27021c",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务办公室",
                                                    "orgCode": "EA03F531E11B6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全生产监察办公室",
                                                    "orgCode": "8a301b104eef1726014ef190c55a000e",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "大岗山公司",
                                            "orgCode": "EA03F531E1196431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "参建单位",
                                                    "orgCode": "8a301b124eef18fc014ef1940379000f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "征地移民处",
                                                    "orgCode": "EA03F531E0F86431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B659CEDF9A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "库区代建项目管理部",
                                                    "orgCode": "8a301b124eef18fc014ef1946a180010",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合办公室",
                                                    "orgCode": "EA03F531E11F6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "档案室",
                                                            "orgCode": "ff80808157f9e90a01585148ad98056b",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "小车班",
                                                            "orgCode": "ff80808157f9e90a01585148ec48056c",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "计划合同处",
                                                    "orgCode": "EA03F531E1216431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全监察处",
                                                    "orgCode": "EA03F531E1226431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "工程建设处",
                                                    "orgCode": "EA03F531E1236431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "机电物资处",
                                                    "orgCode": "EA03F531E1246431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务劳资处",
                                                    "orgCode": "EA03F531E1206431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EA03F531E11E6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总师总助",
                                                    "orgCode": "8a301b1057f9d7bd0158512efa0e059a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "运行维护处",
                                                    "orgCode": "ff80808157f9e90a0158513d34b80569",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "综合维护值",
                                                            "orgCode": "8a301b1057f9d7bd0158514ec32b059d",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维四值",
                                                            "orgCode": "8a301b1057f9d7bd0158514e9760059c",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维三值",
                                                            "orgCode": "8a301b1057f9d7bd0158514e6ac4059b",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维一值",
                                                            "orgCode": "ff80808157f9e0440158515afda40336",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维二值",
                                                            "orgCode": "ff80808157f9e0440158515b275c0337",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "工程项目部",
                                                    "orgCode": "8a301b1057f9d7bd0158512bf5290597",
                                                    "curStatus": 1,
                                                    "orgType": "1",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "征地移民处",
                                                            "orgCode": "ff80808157f9e0440158513a3aa20335",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "计划合同处",
                                                            "orgCode": "ff80808157f9e04401585139c36b0334",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "工程建设处",
                                                            "orgCode": "ff80808157f9e90a0158513f5d03056a",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "生产技术处",
                                                    "orgCode": "ff80808157f9e0440158513718fd0331",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群办公室",
                                                    "orgCode": "8a301b1057f9d7bd0158512b30e60596",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "市场营销处（经济运行处）",
                                                    "orgCode": "ff80808157f9e04401585137d3ee0333",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人力资源处",
                                                    "orgCode": "8a301b1057f9d7bd015822d047460239",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "金川公司",
                                            "orgCode": "EA03F531E1456431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "综合办公室",
                                                    "orgCode": "EA03F531E1476431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划合同处",
                                                    "orgCode": "EA03F531E1496431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EA03F531E1466431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务处",
                                                    "orgCode": "EA03F531E1486431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "征地移民处",
                                                    "orgCode": "EA03F531E14A6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "工程建设处",
                                                    "orgCode": "EA03F531E0FF6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "新能源公司",
                                            "orgCode": "EA03F531E14B6431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "管理服务中心",
                                                    "orgCode": "EA03F531E1566431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "电力生产中心",
                                                    "orgCode": "EA03F531E1016431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "低碳环保中心",
                                                    "orgCode": "EA03F531E1556431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "ECD8B611CEE59A1EE040B00A859B649B",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EA03F531E14C6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合管理处",
                                                    "orgCode": "EA03F531E14D6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人力资源处",
                                                    "orgCode": "EA03F531E14E6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务经营处",
                                                    "orgCode": "EA03F531E14F6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "投资战略处",
                                                    "orgCode": "EA03F531E1506431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "生产建设处",
                                                    "orgCode": "EA03F531E1006431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "下属单位",
                                                    "orgCode": "ff8080815c1ae42c015ce393da39028a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "巨源公司",
                                                            "orgCode": "EA03F531E1516431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "泽润、热水河公司",
                                                            "orgCode": "EA03F531E1536431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "电能服务中心",
                                                    "orgCode": "EA03F531E1526431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "遗留问题及资产处理中心",
                                                    "orgCode": "EA03F531E10B6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "下属单位",
                                                    "orgCode": "EA03F531E1546431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "碳资产管理中心",
                                                    "orgCode": "ff80808157f9e90a0158becf582b0701",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "售电服务中心",
                                                    "orgCode": "ff80808157f9e0440158becc238f0508",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "遗留问题及资产处置中心",
                                                    "orgCode": "8a301b105c1ae921015ce3938b5302f8",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "电能服务中心",
                                                    "orgCode": "8a301b105c1ae921015ce3930fbf02f7",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "电力生产中心",
                                                    "orgCode": "8a301b105c1ae921015ce390508102f6",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "测试",
                                                    "orgCode": "8a301b105c1ae921015ce258279e02ef",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "低碳环保中心",
                                                    "orgCode": "ff8080815c1ae42c015ce392c78b0289",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "管理服务中心",
                                                    "orgCode": "ff8080815c1ae42c015ce38e1d940288",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "党校培训中心",
                                            "orgCode": "EA03F531E0F16431E040B10A859B6655",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "综合处",
                                                    "orgCode": "EA03F531E1746431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "1",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务处",
                                                    "orgCode": "EA03F531E1766431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "教务处",
                                                    "orgCode": "EA03F531E1756431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "丹巴筹备处",
                                            "orgCode": "EC84550C64863D2FE040B00A859B4156",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "综合办公室",
                                                    "orgCode": "EC84550C64893D2FE040B00A859B4156",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "临时组织",
                                            "orgCode": "ECD8B619CEDC9A1EE040B00A859B649B",
                                            "curStatus": 1,
                                            "orgType": "2",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "水电科技（咨询）中心",
                                                    "orgCode": "8a301b10552a61d10155c96a5ddc0209",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "丹巴筹备处",
                                                    "orgCode": "8a301b124eef18fc014ef1880dee000b",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "老鹰岩筹备处",
                                                    "orgCode": "8a301b114eef1756014ef18848620010",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安宁巴底筹备处",
                                                    "orgCode": "8a301b104eef1726014ef1871212000a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "帕隆藏布筹备处",
                                                    "orgCode": "8a301b104eef1726014ef6a20bca0045",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "基层单位办公室",
                                                    "orgCode": "8a301b104eef1726014ef1889be9000c",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "离退人员",
                                                    "orgCode": "8a301b105871188e0158cdf538b000e9",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "省调度中心人员",
                                                    "orgCode": "ff80808157f9e90a0158d21175c50718",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "老鹰岩筹备处",
                                            "orgCode": "EC84550C64843D2FE040B00A859B4156",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "综合办公室",
                                                    "orgCode": "EC84550C64883D2FE040B00A859B4156",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "领导",
                                                    "orgCode": "ff80808157f9e90a01591fb31900096f",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "库坝中心",
                                            "orgCode": "EA03F531E0F66431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "监测二处",
                                                    "orgCode": "EA03F531E1186431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "监测一处",
                                                    "orgCode": "EA03F531E1166431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "临时部门",
                                                    "orgCode": "8a301b1057f9d7bd0157faf3ea3f0007",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合处",
                                                    "orgCode": "EA03F531E1146431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全技术处",
                                                    "orgCode": "EA03F531E1156431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "坝工处",
                                                    "orgCode": "EA03F531E1176431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "中心领导",
                                                    "orgCode": "EA03F531E0F76431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "副总工",
                                                    "orgCode": "ff80808157f9e0440159821e73c9079a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "瀑电总厂",
                                            "orgCode": "EA03F531E0AE6431E040B00A859B6650",
                                            "curStatus": 1,
                                            "orgType": "6",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "运行维护处",
                                                    "orgCode": "EA03F531E0B56431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1,
                                                    "children": [
                                                        {
                                                            "orgName": "坝工班",
                                                            "orgCode": "8a301b124eef18fc014ef2aefe12002d",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运行维护处处部",
                                                            "orgCode": "EA03F531E0B76431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维三值",
                                                            "orgCode": "EA03F531E10A6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维一值",
                                                            "orgCode": "EA03F531E0B86431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维二值",
                                                            "orgCode": "EA03F531E0B96431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维四值",
                                                            "orgCode": "EA03F531E0BA6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维五值",
                                                            "orgCode": "EA03F531E0BC6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "运维六值",
                                                            "orgCode": "EA03F531E0BD6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        },
                                                        {
                                                            "orgName": "综合维护值",
                                                            "orgCode": "EA03F531E0BE6431E040B00A859B6650",
                                                            "curStatus": 1,
                                                            "orgType": "2",
                                                            "indexOrder": 1
                                                        }
                                                    ]
                                                },
                                                {
                                                    "orgName": "厂领导",
                                                    "orgCode": "8a301b114eef1756014ef17734540007",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划合同处",
                                                    "orgCode": "8a301b114eef1756014ef17812790008",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "黑马营地管理办公室",
                                                    "orgCode": "8a301b104eef1726014ef17a6e7c0007",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合处",
                                                    "orgCode": "8a301b114eef1756014ef17a70ac0009",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "市场营销处",
                                                    "orgCode": "8a301b104eef1726014ef17bd6470008",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "竣工验收管理部综合处",
                                                    "orgCode": "EA03F531E1096431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务管理处",
                                                    "orgCode": "EA03F531E1086431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "厂处级领导",
                                                    "orgCode": "EA03F531E0AF6431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "人力资源处",
                                                    "orgCode": "EA03F531E0B16431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "竣工验收管理部工程处",
                                                    "orgCode": "EA03F531E0B66431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "厂长办公室",
                                                    "orgCode": "EA03F531E0B06431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "党群办公室",
                                                    "orgCode": "EA03F531E0B26431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "生产技术处",
                                                    "orgCode": "EA03F531E0B36431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "安全监察处",
                                                    "orgCode": "EA03F531E0B46431E040B00A859B6650",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总师总助",
                                                    "orgCode": "8a301b105c1ae921015d36c05c0c048a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "物资配送公司",
                                            "orgCode": "EC84550C64853D2FE040B00A859B4156",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "招标采购处",
                                                    "orgCode": "EC84550C648D3D2FE040B00A859B4156",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "公司领导",
                                                    "orgCode": "EC84550C64873D2FE040B00A859B4156",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "财务劳资处",
                                                    "orgCode": "EC84550C648A3D2FE040B00A859B4156",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合处",
                                                    "orgCode": "EC84550C648B3D2FE040B00A859B4156",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "业务处",
                                                    "orgCode": "EC84550C648C3D2FE040B00A859B4156",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "配送服务处",
                                                    "orgCode": "ff80808157f9e0440159160b36fb059c",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总师总助",
                                                    "orgCode": "ff80808157f9e0440159160a4997059b",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "计划经营处",
                                                    "orgCode": "ff80808157f9e04401591609a302059a",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "财务共享中心",
                                            "orgCode": "ff80808157f9e90a01583e4f845a0158",
                                            "curStatus": 1,
                                            "orgType": "2",
                                            "indexOrder": 1,
                                            "children": [
                                                {
                                                    "orgName": "资金收付处",
                                                    "orgCode": "8a301b105871188e015915e190f401bb",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "综合处",
                                                    "orgCode": "ff80808157f9e90a015915e5f62c07ae",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "领导",
                                                    "orgCode": "ff80808157f9e044015915ed7c210599",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "总账报告处",
                                                    "orgCode": "8a301b105871188e015915e2070a01bc",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "费用报销处",
                                                    "orgCode": "ff80808157f9e90a015915e42eeb07ac",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "资产投资处",
                                                    "orgCode": "ff80808157f9e90a015915e4c41b07ad",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                },
                                                {
                                                    "orgName": "派驻人员",
                                                    "orgCode": "ff80808157f9e04401591aa38c690603",
                                                    "curStatus": 1,
                                                    "orgType": "2",
                                                    "indexOrder": 1
                                                }
                                            ]
                                        },
                                        {
                                            "orgName": "帕隆藏布筹备处",
                                            "orgCode": "ff80808157f9e90a01584c22bd66051a",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "测试一个11",
                                            "orgCode": "EA03023523453432",
                                            "curStatus": 1,
                                            "orgType": "6",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "测试一个2",
                                            "orgCode": "EA0FDSAFNDSAKLJFSDL",
                                            "curStatus": 1,
                                            "orgType": "6",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "测试一个3",
                                            "orgCode": "EA0FDSAKFJKLENFF923U4IWJ",
                                            "curStatus": 1,
                                            "orgType": "6",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "测试一个41",
                                            "orgCode": "shifsdafsdfsdahfksdff",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        }
                                    ]
                                },
                                {
                                    "orgName": "西藏公司",
                                    "orgCode": "8a301b1057f9d7bd0157ffb93aaf0009",
                                    "curStatus": 1,
                                    "orgType": "1",
                                    "indexOrder": 2,
                                    "children": [
                                        {
                                            "orgName": "公司领导",
                                            "orgCode": "ff80808157f9e90a01580486cf6f009a",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "总经理工作部(政治工作部)",
                                            "orgCode": "ff80808157f9e0440158048185de00f6",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "规划建设部",
                                            "orgCode": "ff80808157f9e90a0158048773b5009b",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "财务经营部",
                                            "orgCode": "ff80808157f9e90a01580487d4d9009c",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "人力资源部",
                                            "orgCode": "ff80808157f9e90a015804881355009d",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        }
                                    ]
                                },
                                {
                                    "orgName": "四川公司",
                                    "orgCode": "ff80808157f9e90a0157ffc36bcf0010",
                                    "curStatus": 1,
                                    "orgType": "1",
                                    "indexOrder": 3,
                                    "children": [
                                        {
                                            "orgName": "公司本部",
                                            "orgCode": "ff80808157f9e90a0158005a2ccd0011",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "南桠河公司",
                                            "orgCode": "ff80808157f9e90a01580063e9070015",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "西南配送",
                                            "orgCode": "ff80808157f9e044015800615eac000f",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "远光国电四川项目组",
                                            "orgCode": "ff80808157f9e90a01580067becc0017",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "色曲公司",
                                            "orgCode": "ff80808157f9e0440158006100c6000e",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "烟台龙源",
                                            "orgCode": "ff80808157f9e90a0158006758da0016",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "瑞通公司",
                                            "orgCode": "8a301b1057f9d7bd01580055e3e4000c",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "阿水公司",
                                            "orgCode": "ff80808157f9e044015800552f45000b",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "川股公司",
                                            "orgCode": "8a301b1057f9d7bd0158004cdb21000a",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "达州公司",
                                            "orgCode": "ff80808157f9e90a01580060f73b0012",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "东谷河公司",
                                            "orgCode": "ff80808157f9e0440158005bc93e000c",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "华蓥山公司",
                                            "orgCode": "ff80808157f9e90a01580061eda60013",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "金堂公司",
                                            "orgCode": "ff80808157f9e0440158005ca1f8000d",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "毛滩公司",
                                            "orgCode": "8a301b1057f9d7bd0158005489e4000b",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "岷江公司",
                                            "orgCode": "ff80808157f9e90a015800635eeb0014",
                                            "curStatus": 1,
                                            "orgType": "1",
                                            "indexOrder": 1
                                        }
                                    ]
                                },
                                {
                                    "orgName": "大汇物联公司",
                                    "orgCode": "ff8080815c1ae42c015c1f725fce002f",
                                    "curStatus": 1,
                                    "orgType": "1",
                                    "indexOrder": 4,
                                    "children": [
                                        {
                                            "orgName": "行政人事部",
                                            "orgCode": "ff8080815c1ae42c015c1b3124180007",
                                            "curStatus": 1,
                                            "orgType": "2",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "总经部",
                                            "orgCode": "ff8080815c1ae4d3015c1b2cd68c0031",
                                            "curStatus": 1,
                                            "orgType": "2",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "运营中心",
                                            "orgCode": "ff8080815c1ae42c015c1b2ecba30006",
                                            "curStatus": 1,
                                            "orgType": "2",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "市场推广部",
                                            "orgCode": "8a301b105c1ae921015c1b2fd6b7000b",
                                            "curStatus": 1,
                                            "orgType": "2",
                                            "indexOrder": 1
                                        },
                                        {
                                            "orgName": "技术中心",
                                            "orgCode": "ff8080815c1ae4d3015c1b30d1700032",
                                            "curStatus": 1,
                                            "orgType": "2",
                                            "indexOrder": 1
                                        }
                                    ]
                                },
                                {
                                    "orgName": "国电财务",
                                    "orgCode": "ff80808157f9e90a01596270f1380aae",
                                    "curStatus": 1,
                                    "orgType": "1",
                                    "indexOrder": 5
                                }
                            ]
                        }
                    ]
                };
                let arr = metaData.data;

                /**
                 * transform data into target(Tree data) formats
                 * @param arr raw data
                 * @param  code [String] codeにあってるノードを選択状態と展開状態にする
                 * @param  parentsStr [String]
                 * @return []
                 */
                let fn = function(arr, {code, parentsStr}){
                    let resultArr = arr.map(it => {
                        let _children = [];

                        if(it.children && it.children.length){
                            _children = fn(it.children,{code:code, parentsStr:parentsStr});
                        }


                        return Object.assign(it, {
                            title: it.orgName,
                            id: it.orgCode,
                            expanded:true,
//                            expanded: parentsStr ? new RegExp(it.orgCode).test('rootuqa4u8kuaznt') : false,
//                            expanded: parentsStr ? new RegExp(it.orgCode).test(parentsStr) : false,
//                            selected: code ? it.orgCode === code : false,
                            children: _children
                        });

                    });

                    return resultArr;
                };

//                that.treeData2 = fn(arr, {});
                that.treeData2 = fn(metaData.data, {});

                console.log(metaData.data);

            },

            realData(){
                let me = this;

                /**
                 * transform data into target(Tree data) formats
                 * @param arr raw data
                 * @param  code [String] codeにあってるノードを選択状態と展開状態にする
                 * @param  parentsStr [String]
                 * @return []
                 */
                let fn = function(arr, {code, parentsStr}){
                    let resultArr = arr.map(it => {
                        let _children = [];

                        if(it.children && it.children.length){
                            _children = fn(it.children,{code:code, parentsStr:parentsStr});
                        }


                        return Object.assign(it, {
                            title: it.orgName,
                            id: it.orgCode,
                            expanded:true,
//                            expanded: parentsStr ? new RegExp(it.orgCode).test('rootuqa4u8kuaznt') : false,
//                            expanded: parentsStr ? new RegExp(it.orgCode).test(parentsStr) : false,
//                            selected: code ? it.orgCode === code : false,
                            children: _children
                        });

                    });

                    return resultArr;
                };
                let result;

                let flatTreeData = me._getFlatTree(me.enterpriseOrgsTreeDataRaw);
                //找到用户所在组织的所有父级组织的信息

                let orgCode = me.userData.orgCode;

                let userNodeInFlatTree;
                let userParent;
                let userParents = [];
                for(let i =0,len = flatTreeData.length;i<len;i++){
                    let o = flatTreeData[i];

                    if(o.node.orgCode === orgCode){
                        userNodeInFlatTree = o;
                        break;
                    }
                }
                userParent = userNodeInFlatTree.parent;

                while(userParent > -1){
                    userParents.push(flatTreeData[userParent].node.orgCode);
                    userParent--;
                }

                //userParent 若为undefined则表示该组织节点是跟节点
                let userParentsStr = userParents.join();

                console.log('parentsStr', userParentsStr);
                result = fn(me.enterpriseOrgsTreeDataRaw, {
                    code:orgCode,
                    parentsStr:userParentsStr
                });
                me.treeObj = result;
            }
        },

        created(){
            let that = this;

        }
    }
</script>
