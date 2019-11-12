import Vue from 'vue'
import { $ } from '../_utils'

Vue.component('vue-parent', {
  template: '#vue-parent-template',
  data() {
    return {}
  },
})

const $el = $('#vue-parent-wrapper')
if ($el) {
  new Vue({
    el: '#vue-parent-wrapper',
  })
}
