var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

new Vue({
  el: '#example-3',
  data: {
    say: function (message) {
      alert(message)
    }
  }
})

new Vue({
  el: '#example-4',
  data: {
  },
  methods: {
    warn: function (message, event) {
      if (event) event.preventDefault()
        alert(message)
    }
  }
})

new Vue({
  el: '#example-5',
  data: {
    up: 0
  },
  methods: {
    submit: function () {
      this.up += 1
    }
  }
})
