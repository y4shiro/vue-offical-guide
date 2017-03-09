let vm1 = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    reverseMessage: function() {
      return this.message.split('').reverse().join('')
    }
  }
})

let vm2 = new Vue({
  el: '#watch',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function() {
      return this.fullName = this.firstName + ' ' + this.lastName
    }
  }
})
