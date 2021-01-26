import HelloWorld from './components/HelloWorld'
import { defineComponent } from 'vue'
import img from './assets/logo.png'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    return () => (<>
      <img alt="Vue logo" src={img} />
      <HelloWorld msg="Hello Vue 3.0 + Vite" />
    </>)
  }
})
