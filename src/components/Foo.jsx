import { defineComponent, ref } from 'vue'

// named exports w/ variable declaration: ok
export const Foo = defineComponent({
  name: 'foo',
  setup() {
    const count = ref(0)
    return () => <div class="jsx" onClicK={() => count.value++}>{count.value}</div>
  }
})
