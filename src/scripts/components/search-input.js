import Vue from 'vue'

export default Vue.component('SearchInput', {
  template: '#search-input',
  props: ['date'],
  data() {
    return {
      searchText: '',
      users: [],
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      console.log('event =>', event)
      console.log('searchText =>', this.searchText)
      console.log('this.users =>', this.users)
      if (this.searchText.length >= 3) {
        let response = await fetch(`https://api.github.com/search/users?q=${this.searchText}`)
        let myResponse = await response.json()
        console.log('myResponse =>', myResponse)
        this.users = myResponse.items
      }
    },
  },
})

/**
 * NOTE:
 * A child component does NOT need to be attached to another instance of
 * vue by using new Vue(...). For this same reason, in main.js, it must be
 * imported before its parent.
 */
