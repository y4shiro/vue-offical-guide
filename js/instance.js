let data = { a: 1 }
var vm = new Vue({
  data: data
})

console.log(vm.a === data.a) // true

vm.a = 2
console.log(data.a)

data.a = 3
console.log(vm.a)

var vm2 = new Vue({
  el: '#example',
  data: data
})

console.log(vm2.$data === data) // true
console.log(vm2.$el === document.getElementById('example')) // true
console.log(vm2.$el)
console.log(document.getElementById('example')) // true

vm.$watch('a', function (newVal, oldVal) {
  console.log('vm.aの値が ' + vm.a + ' に変わりました')
})

vm.a = 4

var vm3 = new Vue({
  data: {
    a: 1
  },
  created: function() {
    console.log('a is: ' + this.a)
  }
})
