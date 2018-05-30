var app4 = new Vue({
    el: '#app',
    data: {
        message: null
    },
    computed: {
        result: function() {
            let ret
            return ret = 2500 - this.message;
        }
    }
})