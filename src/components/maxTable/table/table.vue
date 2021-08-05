<template>
    <div class="test">
      <div class="hidden-cloumn">
        <slot></slot>
      </div>
      <table-header :store="store"/>
      <table-body :store="store"/>
      <table-footer :store="store"/>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, getCurrentInstance, watch } from 'vue'
import { createStore } from '../store/index';
import TableBody from './tableBody.vue'
import tableHeader from './tableHeader.vue';
import TableFooter from './tableFooter.vue';
interface data {
  [x: string]: any
}
export default defineComponent({
  emits: ['handleRowClick'],
  components: {
    TableBody,
    tableHeader,
    TableFooter
  },
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
    const table:any = getCurrentInstance();
    const store = createStore(table, props);
    table.store = store
    return {
      store
    }
  },
})
</script>


<style lang="scss" scoped>
  .test {
    height: 200px;
    width: 200px;
    background-color: red
  }
  .hidden-cloumn {
    position: absolute;
    visibility: hidden;
  }
</style>