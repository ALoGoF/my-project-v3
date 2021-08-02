<template>
  <div style='margin-top: 20px'>
    {{ Istore.state.message }}
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, watch } from 'vue'
import { injectStore, storeKey } from './store/index'
export default defineComponent({
  setup() {
    const Istore = inject(storeKey);
    const  state = Istore?.state
    const message = computed(() => state?.message)
    watch(message, (newValue, pre) => {
      console.log('newValue :>> ', newValue);
    },{
      deep: true
    })
    return {
      Istore,
      message
    }
  },
})
</script>


<style lang="scss" scoped>

</style>
