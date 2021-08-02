<template>
  <div @click='handleClick'>
    {{ Istore.state.message }}
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
// import store from './store/index';
import { injectStore, storeKey } from './store/index'
export default defineComponent({
  setup() {
    let Istore = inject(storeKey);
    function handleClick() {
      Istore?.setMessage('message Change!')
    }
    return {
      Istore,
      handleClick
    }
  },
})
</script>


<style lang="scss" scoped>

</style>