<template>
  <div class="about">
    <list :list='dataList' @handleDataChange='handleChange' >
      <p>你好</p>
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
export default defineComponent({
  components: {
    List,
  },
  setup() {
    const dataList = reactive(mockList.map((item) => ({
      ...item,
      active: false,
    })));
    function handleChange() {
    }
    watch(dataList, () => {
    });
    emitter.on('foo',p => {
      console.log(`p`, p)
    })
    return {
      dataList,
      handleChange,
    };
  },
});
</script>
