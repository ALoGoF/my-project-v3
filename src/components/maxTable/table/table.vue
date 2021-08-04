<template>
    <div class="test">
      {{ tableData }}
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, getCurrentInstance, watch } from 'vue'
import { createStore } from '../store/index'
interface data {
  [x: string]: any
}
export default defineComponent({
  emits: ['handleRowClick'],
  props: {
    height: {
      type: [String , Number],
      default: null
    },
    tableData: {
      type: Object as PropType<data[]>,
      default: []
    },
    stripe: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    width: {
      type: Number as PropType<number>,
      default: 1040
    },
    infScroll: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup(props, {emit, slots}) {
    console.log('props :>> ', props);
    watch(() => props.tableData, newValue => {
      console.log(`newValue`, newValue)
    })
    const table = getCurrentInstance();
    const store = createStore(table, props);
  },
})
</script>


<style lang="scss" scoped>
  .test {
    height: 200px;
    width: 200px;
    background-color: red
  }
</style>