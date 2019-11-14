import Vue from 'vue'

Vue.component('SearchInput', {
  template: '#search-input',
  props: ['date'],
  data() {
    return {
      searchText: '',
      users: [],
      baseUrl: 'https://api.github.com/search/',
      searchType: 'users',
      param: 'in:name',
      submitTimeout: null,
    }
  },
  created() {
    this.$eventBus.$on('settings-changed', options => {
      this.handleSettingsChange(options)
    })
  },
  methods: {
    async onSubmit() {
      if (this.searchText.length >= 3) {
        let response = await fetch(
          `${this.baseUrl}${this.searchType}?q=${this.searchText}+${this.param}`
        )
        let myResponse = await response.json()
        this.users = myResponse.items
        this.$eventBus.$emit('submited', this.users)
      } else {
        this.users = []
      }
    },
    handleChange(e) {
      this.handleClearInput()
      if (this.submitTimeout) clearTimeout(this.submitTimeout)
      this.submitTimeout = window.setTimeout(() => this.onSubmit(e), 2000)
    },
    handleSettingsChange(options) {
      this.searchType = options.searchType
      this.param = options.param
    },
    handleClearInput() {
      if (!this.searchText) this.$eventBus.$emit('input-cleared')
    },
  },
})

/**
 * NOTE:
 * A child component does NOT need to be attached to another instance of
 * vue by using new Vue(...). For this same reason, in main.js, it must be
 * imported before its parent.
 */
