import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (props) {
    const count = ref(0)

    return () => (<>
      <h1>{ props.msg }</h1>
      <button onClick={() => count.value++}>count is: { count.value }</button>
      <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    </>)
  }
})
