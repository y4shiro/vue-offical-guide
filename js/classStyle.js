let vm1 = new Vue({
  el: '#vm1',
  data: {
    isActive: true,
  }
})

let vm2 = new Vue({
  el: '#vm2',
  data: {
    isActive: true,
    hasError: false
  }
})

let vm3 = new Vue({
  el: '#vm3',
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
})

let vm4 = new Vue({
  el: '#vm4',
  data: {
    isActive: true,
    wtf: true,
    error: null
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})

let vm5 = new Vue({
  el: '#vm5',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

let vm6 = new Vue({
  el: '#vm6',
  data: {
    isActive: true,
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

let vm7 = new Vue({
  el: '#vm7',
  data: {
    isActive: true,
    activeClass: 'active',
    errorClass: 'text-danger'
  }
})

let vm8 = Vue.component('my-component', {
  templage: '<p class="foo bar">Hi</p>'
})
