import { reactive, defineComponent } from 'vue'
import { Foo } from '../components/Foo'

export const Home = defineComponent({
  setup: () => {
    const state = reactive({
      count: 0
    })

    return () => (<div>
      <h1>Home</h1>
      <p>
        <img src="../assets/logo.png" alt="logo" />
      </p>
      <button onClick={() => state.count++}>count is: { state.count }</button>
      <Foo/>
    </div>)
  }
})

