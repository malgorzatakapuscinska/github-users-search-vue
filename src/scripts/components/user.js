import Vue from 'vue'

export default Vue.component('User', {
  template: '#user',
  props: { user: Object },
  data() {
    return {}
  },
  methods: {},
})

/**
 * NOTE:
 * A child component does NOT need to be attached to another instance of
 * vue by using new Vue(...). For this same reason, in main.js, it must be
 * imported before its parent.
 */
