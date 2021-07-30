<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String as PropType<string>,
      default: ''
    },
    prop: {
      type: String as  PropType<string>,
      default: ''
    },
    tooltip: {
      type: Boolean as PropType<boolean>,
      default: false
      },
    align: {
      type: String as PropType<string>,
      default: 'left'
    }
  },
  setup(props, { slots }) {
    
  },
})
</script>


<style lang="scss" scoped>

</style>