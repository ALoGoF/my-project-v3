<template>
    <m-table :height="height" :tableData="data" @click="handleClick"></m-table>
    <input type="text" v-model="data[0].name">
    <input type="text" v-model="height">
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import MTable from '@/components/maxTable//table/table.vue'
export default defineComponent({
  components: {
    MTable
  },

  setup() {
    const data = ref([
      {
        name: '张三',
        age: '20'
      },
      {
        name: '李四',
        age: '16'
      }
    ])
    function handleClick() {
      data.value[0].name = '王五';
    }
    const height = ref(200)
    return {
      data,
      handleClick,
      height
    }
  },
})
</script>


<style lang="scss" scoped>

</style>