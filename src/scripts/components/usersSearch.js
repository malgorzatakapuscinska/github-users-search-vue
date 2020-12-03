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
      users: [], // store users
      submitted: false, // needed for show proper alert - nothing found or show users list
      showSettings: true, // shows and hides settings panel
    }
  },
  created() {
    // save users then form was submitted

    this.$eventBus.$on('submited', users => {
      this.onSearch(users)
      this.submitted = true
    })

    // clear users list then input is empty

    this.$eventBus.$on('input-cleared', () => {
      this.submitted = false
      this.users = []
    })
  },
  methods: {
    // saves users list

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
