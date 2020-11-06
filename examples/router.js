import basicDemoAndApi from './views/pages/basicDemoAndApi.vue'
import basicDemo from './views/pages/basicDemo.vue'
import reloadTreeData from './views/pages/reloadTreeData.vue'
import defaultCheckedNodes from './views/pages/defaultCheckedNodes.vue'

const routers = [
    {path: "/", redirect: '/basicDemoAndApi'},
    {path: "/basicDemoAndApi", component: basicDemoAndApi},
    {path: "/basicDemo", component: basicDemo},
    {path: "/reloadTreeData", component: reloadTreeData},
    {path: "/defaultCheckedNodes", component: defaultCheckedNodes},
];

export default routers;