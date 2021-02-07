import HelloWorld from './components/HelloWorld'
import { defineComponent } from 'vue'
import img from './assets/logo.png'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    return () => (<>
      <div>
        <img alt="Vue logo" src={img} />
        <HelloWorld msg="Hello Vue 3.0 + Vite" />
        <RouterLink to="/">Home</RouterLink>
        <RouterView />
      </div>
    </>)
  }
})

