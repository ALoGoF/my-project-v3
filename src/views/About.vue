<template>
  <div class="about">
    <list>
      <list-item v-for="{name, email, address} in dataList" :key='name' :name='name' :email='email' :address='address'></list-item>
    </list>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import mockList from '@/mock/index';
import ListItem from '@/components/ListItem.vue';
import List from '@/components/List.vue';

export default defineComponent({
  components: {
    ListItem,
    List,
  },
  setup() {
    const state = ({
      dataList: mockList.map((item) => ({
        ...item,
        active: false,
      })),
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
