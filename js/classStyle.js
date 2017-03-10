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

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

let vm8 = new Vue({
  el: '#vm8',
  data: {
    isActive: true
  }
})

let vm9 = new Vue({
  el: '#vm9',
  data: {
    activeColor: 'red',
    fontSize: 30,
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
})

let vm10 = new Vue({
  el: '#vm10',
  data: {
    baseStyles: {
      color: 'red',
      fontSize: '13px'
    },
    overridingStyles: {
      color: 'blue',
      fontSize: '23px'
    }
  }
})
