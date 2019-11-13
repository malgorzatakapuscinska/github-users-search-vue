import Vue from 'vue'

export default Vue.component('SearchInput', {
  template: '#search-input',
  props: ['date'],
  data() {
    return {
      searchText: '',
      users: [],
      baseUrl: 'https://api.github.com/search/',
      searchType: 'users',
      param: 'in:name',
      param2: 'language',
    }
  },
  created() {
    this.$eventBus.$on('settings-changed', options => {
      console.log('options =>', options)
      this.handleSettingsChange(options)
    })
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      if (this.searchText.length >= 3) {
        let response = await fetch(
          `${this.baseUrl}${this.searchType}?q=${param2}:${this.searchText}+${this.param}`
        )
        let myResponse = await response.json()
        this.users = myResponse.items
        this.$eventBus.$emit('submited', this.users)
      } else {
        this.users = []
        this.$eventBus.$emit('submited')
      }
    },
    handleChange(e) {
      this.onSubmit(e)
    },
    handleSettingsChange(options) {
      console.log('hello from handleSettingsChange')
      console.log(options)
    },
  },
})

/**
 * NOTE:
 * A child component does NOT need to be attached to another instance of
 * vue by using new Vue(...). For this same reason, in main.js, it must be
 * imported before its parent.
 */
