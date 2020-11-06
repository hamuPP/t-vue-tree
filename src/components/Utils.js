/**
 * Created by ty on 18/2/16.
 */
class Utils{
    constructor(){}

    /**
     * 给指定元素加上指定class类名
     * @param el
     * @param clsName
     * @returns Undefined
     */
    addCls(el, clsName){
        if(!el || !clsName){
            return false;
        }
        let newClsNames = '';
        let oldClsNames = el.getAttribute("class");

        if(oldClsNames){
            newClsNames = `${oldClsNames} ${clsName}`;
        }else{
            newClsNames = `${clsName}`;
        }
        el.setAttribute("class", newClsNames);
        // el.className= newClsNames;
    }

    //todo 未完
    removeCls(el, clsName){
        if(!el || !clsName){ return false; }

        let oldClsNames = el.getAttribute("class");
        if(!oldClsNames){ return false; }

        let newClsNames = oldClsNames.replace(clsName, '');
        el.setAttribute("class", newClsNames);

    }

    /**
     * 获取ie浏览器的版本号，如果不是ie,则返回false
     */
    getIeVersion(){
        let agent = window.navigator.userAgent;
        let isIE = agent.indexOf("MSIE") >-1 &&  agent.indexOf("Trident") >-1;
        if(!isIE){return false;}
        let version = agent.match(/MSIE\s[0-9].?[0-9]/)[0];//6,7,8,9,10,11等等
        return version;
    }
}

export default Utils;