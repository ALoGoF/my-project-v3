<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" v-drag @click='handleShowDialog'>
    <el-dialog v-model='visible'>
      <div class='content' @click="handlePopupClick">
      </div>
    </el-dialog>
    <comp-1/>
    <comp-2/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, InjectionKey } from 'vue';
import comp1 from './comp1.vue';
import comp2 from './comp2.vue'
import { injectStore,  storeKey } from './store/index'
export default defineComponent({
  name: 'Home',
  components: {
    comp1,
    comp2
  },

  setup() {
    const Istore = injectStore();
    provide(storeKey, Istore);
    const visible = ref<boolean>(false);
    function handleShowDialog() {
      visible.value = true;
    }
    function handlePopupClick() {
      // store.setMessage("message")
    }
    function handleMessageClick () {
    }
    return {
      visible,
      handleShowDialog,
      handlePopupClick,
      handleMessageClick
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  overflow: auto;
  height: 600px;
  position: relative;
  img {
    display: block;
  }
}
</style>
