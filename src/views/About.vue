<template>
  <div class="about">
    {{ state.message }}
    <list :list='mockList' @handleDataChange='handleChange' >
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
  defineComponent, onMounted, reactive, toRefs, watch,
} from 'vue';
import dataList from '@/mock/index.js';
import List from '@/components/List/List.vue';
import { emitter } from '@/main';
import { store } from './store'

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
    const state = store.state;
    console.log('state :>> ', state);
    const mockList: Item[] = reactive(dataList);
    function handleChange() {
    }
    watch(mockList, () => {
      console.log('dataList', mockList);
    });
    // emitter.on('foo',p => {
    //   console.log(`p`, p)
    // })
    onMounted(() => {
      const about = document.querySelector('.about');
      const  aboutSibling = about?.previousSibling ;
      console.log('aboutSibling :>> ', aboutSibling);
      const parentNode = about?.parentNode;
      console.log('parentNode :>> ', parentNode);
    })
    function handlerRowClick(row: Item) {
    }
    return {
      mockList,
      handleChange,
      handlerRowClick,
      state
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
