import Utils from './Utils'


const UTILS = new Utils();
const TransitionObj = {
    beforeEnter(el) {
        UTILS.addCls(el, 'transition');
        el.style.height = '0';
    },

    enter(el) {
        /* 如果是ie9,调换enter和afterenter的顺序，*/
        let ieVersion = UTILS.getIeVersion();//false-非ie,否则则是 MSIE 9.0
        if(ieVersion == 'MSIE 9.0'){

            UTILS.removeCls(el, 'transition');
            el.style.height = '';
        }else{
            el.style.height = (el.scrollHeight !== 0) ? el.scrollHeight + 'px' : '';
            el.style.overflow = 'hidden';
        }


    },

    afterEnter(el) {
        /* 如果是ie9,调换enter和afterenter的顺序，*/
        let ieVersion = UTILS.getIeVersion();//false-非ie,否则则是 MSIE 9.0
        if(ieVersion == 'MSIE 9.0'){
            el.style.height = (el.scrollHeight !== 0) ? el.scrollHeight + 'px' : '';
            el.style.overflow = 'hidden';
        }else{
            UTILS.removeCls(el, 'transition');
            el.style.height = '';
        }

    },

    beforeLeave(el) {
        UTILS.addCls(el, 'transition');
        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    },

    leave(el) {
        if (el.scrollHeight !== 0) {
            el.style.height = '';
        }
    },

    afterLeave(el) {
        UTILS.removeCls(el, 'transition');
        el.style.height = '';
    }
};

export default {
    name: 'compoTransition',
    functional: true,
    render(h, {children}) {
        const data = {
            on: TransitionObj
        };
        return h('transition', data, children);
    }
};
