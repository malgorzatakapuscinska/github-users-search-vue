import Vue from 'vue'

Vue.component('UsersList', {
  template: '#users-list',
  props: { users: Array },
  data() {
    return {}
  },
  // components: {
  //   User,
  // },
  methods: {},
})

/**
 * NOTE:
 * A child component does NOT need to be attached to another instance of
 * vue by using new Vue(...). For this same reason, in main.js, it must be
 * imported before its parent.
 */
