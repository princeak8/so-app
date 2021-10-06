import Noty from 'noty';

import Vue from 'vue';

const alert = {
    success: (text) => {
        const noty = new Noty({
            type: 'success',
            layout: 'topRight',
            text
        })
        noty.show
    },
    warning: (text) => {
        const noty = new Noty({
            type: 'warning',
            layout: 'topRight',
            text
        })
        noty.show
    },
    error: (text) => {
        const noty = new Noty({
            type: 'error',
            layout: 'topRight',
            text
        })
        noty.show
    }
}

Object.assign(Vue.prototype, {
    $alert: alert,
});

export default alert

