import { defineComponent } from 'vue'

export const App = defineComponent({
  setup: () => {
    return () => <div>
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link>
      <router-view/>
    </div>
  }
})

