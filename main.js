var app4 = new Vue({
    el: '#app',
    data: {
        message: null,
        sum: 2500,
        waters: []
    },
    methods: {
        post: function() {
            this.$http.post('https://drinking-water-a2c7f.firebaseio.com/posts.json', this.message).then(function(data) {
                console.log(data);
                this.submitted = true;
                location.reload()
            });
        }
    },
    computed: {
        result: function() {
            let res = this.sum;
            res = res - this.message;
            return res;
        }
    },
    created() {
        let date = new Date();
        if (date.getHours() == 0 && date.getMinutes() == 0) {
            this.$http.delete('https://drinking-water-a2c7f.firebaseio.com/posts.json', water);
        }

        let ret = 2500;
        this.$http.get('https://drinking-water-a2c7f.firebaseio.com/posts.json').then(function(data) {
            return data.json()
        }).then(function(data) {
            var watersArray = [];
            for (let key in data) {
                data[key].id = key;
                watersArray.push(data[key]);
            }
            this.waters = watersArray;
            console.log(this.waters);
            for (i = 0; i < watersArray.length; i++) {
                ret -= watersArray[i];
                console.log(ret);
            }
            console.log(ret);
            this.sum = ret;
        });
    }
})