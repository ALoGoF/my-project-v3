<template>
  <div class="about">
    <list :list='dataList' @handleDataChange='handleChange' >
      <template v-slot:scoped='row'>
        <div class='item'  @click='handlerRowClick(row)'>
          <span class="name">{{row.name}}</span>
          <span class="emial">{{row.email}}</span>
          <span class="address">{{row.address}}</span>
        </div>
      </template>
    </list>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, watch,
} from 'vue';
import mockList from '@/mock/index'
import List from '@/components/List.vue';
import { emitter } from '@/main';
interface Item {
  id: number,
  name: string,
  email: string,
  address: string
}
export default defineComponent({
  components: {
    List,
  },
  setup() {
    const dataList = reactive(mockList.map((item) => ({
      ...item
    })));
    function handleChange() {
    }
    watch(dataList, () => {
      console.log(`dataList`, dataList)
    });
    // emitter.on('foo',p => {
    //   console.log(`p`, p)
    // })
    function handlerRowClick(row: Item) {
    }
    return {
      dataList,
      handleChange,
      handlerRowClick
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  line-height: 36px;
  padding: 20px;
  border-bottom: 1px dashed #ccc;
  .name {
    font-size: 24px;
    padding: 10px;
  }
  .email {
    font-size: 16px;
    padding: 5px;
  }
  .address {
    font-size: 18px;
    padding: 5px;
  }
}
</style>