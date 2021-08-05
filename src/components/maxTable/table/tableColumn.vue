<script lang="ts">
import { defineComponent, getCurrentInstance, PropType, h, watch } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String as PropType<string>,
      default: ''
    },
    prop: {
      type: String as  PropType<string>,
      default: ''
    }
  },
  setup(props, { slots }) {
    const instance: any = getCurrentInstance();
    const parent = instance.parent;
    watch(props, newValue => {
      parent.store.setColumn(props, slots)
    }, {
      // immediate: true
    })
    return () => h('div', {}, ['col'])
  },
})
</script>


<style lang="scss" scoped>

</style>