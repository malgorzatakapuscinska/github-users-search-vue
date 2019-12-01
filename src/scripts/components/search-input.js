import Vue from 'vue'

Vue.component('SearchInput', {
  template: '#search-input',
  props: ['date'],
  data() {
    return {
      searchText: '',
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
    // handle form submit

    async onSubmit() {
      // make api call if searchText is longer than 3 signs

      if (this.searchText.length >= 3) {
        // make async github api call using fetch method

        const response = await fetch(
          `${this.baseUrl}${this.searchType}?q=${this.searchText}+${this.param}`
        )
        const myResponse = await response.json()
        const users = myResponse.items

        // emit custom 'submitted' evant and send found users into search-users component

        this.$eventBus.$emit('submited', users)
      }
    },
    handleChange(e) {
      // emit  'input-cleared' event if input is empty

      this.handleClearInput()

      // wait until user stops typing

      if (this.submitTimeout) clearTimeout(this.submitTimeout)

      // the onSubmit runs after 2000ms - if this.submitTimeout exists it is cleared and onSubmit function doeasn't run

      this.submitTimeout = window.setTimeout(() => this.onSubmit(e), 2000)
    },

    // save options in component's state (data property)

    handleSettingsChange(options) {
      this.searchType = options.searchType
      this.param = options.param
    },

    // emit 'input-cleared' event

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
