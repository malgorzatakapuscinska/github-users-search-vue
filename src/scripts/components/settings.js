import Vue from 'vue'

export default Vue.component('Settings', {
  template: '#settings',
  props: ['date'],
  data() {
    return {
      opened: false,
      picked: '', // stores user pick
    }
  },
  methods: {
    // set up opened property - if equals true settings menu is showed, if equels false settings menu is closed

    handleOpen() {
      !this.opened ? (this.opened = true) : (this.opened = false)
    },

    // emit "settings-changed" event and send piced settings into users-search component

    onSubmit() {
      const options = {}

      // prepare payload for $eventBus - set up options.searchType and param

      switch (this.picked) {
        // search by user login

        case 'user-login':
          options.searchType = 'users'
          options.param = 'in:login'
          break

        // search by user e-mail

        case 'user-email':
          options.searchType = 'users'
          options.param = 'in:email'
          break

        // search by user real name

        case 'user-name':
          options.searchType = 'users'
          options.param = 'in:name'
          break
        default:
          return
      }

      // emit 'settings-changed' event

      this.$eventBus.$emit('settings-changed', options)

      // close settings menu

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
