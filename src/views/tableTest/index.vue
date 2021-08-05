<template>
    <div>
      <m-table :height="height" :tableData="data" @click="handleClick">
        <m-table-column prop="name"  :label="name">
          <!-- <template #default='scoped'>
            <div>
            {{scoped}}
            </div>
          </template> -->
        </m-table-column>
        <m-table-column prop="age"  label="年龄"/>
      </m-table>
      <input type="text" v-model="data[0].name">
      <input type="text" v-model="name">
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import MTable from '@/components/maxTable//table/table.vue'
import MTableColumn from '@/components/maxTable//table/tableColumn.vue'
export default defineComponent({
  components: {
    MTable,
    MTableColumn
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
    const height = ref(200);
    const name = ref('name')
    return {
      data,
      handleClick,
      height,
      name
    }
  },
})
</script>


<style lang="scss" scoped>

</style>