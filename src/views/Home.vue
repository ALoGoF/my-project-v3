<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" v-drag @click='handleShowDialog'>
    <el-dialog v-model='visible'>
      <div class='content'>
        弹框内容
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Home',
  setup() {
    const visible = ref<boolean>(false);
    function handleShowDialog() {
      visible.value = true;
    }
    return {
      visible,
      handleShowDialog
    }
  }
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
