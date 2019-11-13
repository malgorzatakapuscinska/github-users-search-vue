import Vue from 'vue'
import { $ } from '../_utils'
import SearchInput from './search-input'
import UsersList from './users-list'

Vue.prototype.$eventBus = new Vue()

Vue.component('users-search', {
  template: '#users-search',
  data() {
    return {
      users: [],
      isUsersEmpty: false,
    }
  },
  components: {
    SearchInput,
    UsersList,
  },
  created() {
    this.$eventBus.$on('submited', users => {
      this.onSearch(users)
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
