import Vue from 'vue'

export default Vue.component('Settings', {
  template: '#settings',
  props: ['date'],
  data() {
    return {
      opened: false,
      picked: '',
    }
  },
  methods: {
    handleOpen() {
      return !this.opened ? (this.opened = true) : (this.opened = false)
    },
    onSubmit(e) {
      let options = {}
      console.log('this.picked =>', this.picked)
      switch (this.picked) {
        case 'user-login':
          options.searchType = 'users'
          options.param = 'in:login'
          break
        case 'user-email':
          options.searchType = 'users'
          options.param = 'in:email'
          break
        case 'user-name':
          options.searchType = 'users'
          options.param = 'in:name'
          break
        default:
          return
      }
      console.log('input submitted')
      console.log('options from settings=> ', options)
      this.$eventBus.$emit('settings-changed', options)
      this.opened = false
    },
  },
})

/**
 * NOTE:
 * A child component does NOT need to be attached to another instance of
 * vue by using new Vue(...). For this same reason, in main.js, it must be
 * imported before its parent.
 */
