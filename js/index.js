var app = new Vue({
  el: '#app',
  data: {
    message: 'Hi!'
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
})
