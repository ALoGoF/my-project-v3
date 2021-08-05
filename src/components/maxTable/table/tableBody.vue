<script lang="ts">
import { defineComponent, PropType, h, watch } from 'vue'

export default defineComponent({
  props: {
    store: {
      type: Object as PropType<{
        [x: string]: any,
        state: {
          columns: any,
          tableData: any
        }
      }>
    }
  },
  setup(props) {
    const columns = props.store?.state.columns;
    const tableData = props.store?.state.tableData;
    return () => h('div', {}, columns.value.map((column: any) => {
      return h('div',{}, [column.solt?column.solt.default({a:'aaaaaa'}):column.label])
    }))
  },
})
</script>


<style lang="scss" scoped>

</style>