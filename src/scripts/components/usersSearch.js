import Vue from 'vue'
import { $ } from '../_utils'
import SearchInput from './search-input'

Vue.component('users-search', {
  template: '#users-search',
  data() {
    return {}
  },
  components: {
    SearchInput,
  },
})

const $el = $('#users-search')
if ($el) {
  new Vue({
    el: '#users-search-wrapper',
  })
}
