<script lang="ts">
import { defineComponent, h, PropType } from 'vue'

export default defineComponent({
  props: {
    store: {
      type: Object as PropType<{
        [x: string]: any
      }>
    }
  },
  setup() {
    
    return () => h('div',{},['header'])
  },
})
</script>

<style lang="scss" scoped>

</style>