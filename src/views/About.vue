<template>
  <div class="about">
    <list :list='dataList' @handleDataChange='handleChange'>
    </list>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, watch,
} from 'vue';
import mockList from '@/mock/index';
import ListItem from '@/components/ListItem.vue';
import List from '@/components/List.vue';

export default defineComponent({
  components: {
    ListItem,
    List,
  },
  setup() {
    const dataList = reactive(mockList.map((item) => ({
      ...item,
      active: false,
    })));
    function handleChange() {
      console.log('dataList', dataList);
    }
    watch(dataList, () => {
      console.log('111', 111);
    });
    return {
      dataList,
      handleChange,
    };
  },
});
</script>
