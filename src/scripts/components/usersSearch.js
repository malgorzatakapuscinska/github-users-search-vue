import Vue from 'vue'
import { $ } from '../_utils'
import './user'
import './search-input'
import './users-list'
import './settings'

Vue.prototype.$eventBus = new Vue()

Vue.component('users-search', {
  template: '#users-search',
  data() {
    return {
      users: [],
      submitted: false,
    }
  },
  created() {
    this.$eventBus.$on('submited', users => {
      this.onSearch(users)
      this.submitted = true
    })
    this.$eventBus.$on('input-cleared', () => {
      this.submitted = false
      this.users = []
    })
  },
  methods: {
    onSearch(users) {
      this.users = users
    },
  },
})

const $el = $('#users-search')
if ($el) {
  new Vue({
    el: '#users-search-wrapper',
  })
}
