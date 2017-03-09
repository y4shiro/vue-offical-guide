let vm1 = new Vue({
  el: '#exam',
  data: {
    msg: '変えられるよ！'
  }
})

let vm2 = new Vue({
  el: '#never',
  data: {
    msg: '変わらないよ！'
  }
})

let vm3 = new Vue({
  el: '#raw',
  data: {
    msg: '<h1>h1</h1>'
  }
})

let vm4 = new Vue({
  el: '#bind',
  data: {
    t: 'binded'
  }
})

let vm5 = new Vue({
  el: '#bool',
  data: {
    t: true,
    f: false
  }
})

let vm6 = new Vue({
  el: '#ref',
  data: {
    url: 'google.com'
  }
})

let vm7 = new Vue({
  el: '#click',
  data: {
    msg: 'まだクリックしてない'
  },
  methods: {
    isClick: function () {
      this.msg = 'くりっくした'
    }
  }
})
