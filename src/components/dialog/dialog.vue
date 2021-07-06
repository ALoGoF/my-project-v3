<template>
  <teleport to='body'>
  <div class="modal" v-if='modelValue' @click='closePopup'></div>
  <div class='dialog' v-if='modelValue'>
    <i class='close-icon' @click='closePopup'></i>
    <slot name='header'></slot>
    <slot name='default'></slot>
    <slot name='footer'></slot>
  </div>
    
  </teleport>  
</template>
<script lang='ts'>
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>
    }
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    function closePopup() {
      emit('update:modelValue', false)
    };
    return {
      closePopup
    }
  },
})
</script>


<style lang="scss" scoped>
 .modal {
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: 999;
 }
  .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
    border-radius: 8px;
    padding: 20px;
    background-color: #fff;
    .close-icon {
      display: block;
      position: absolute;
      right: 5px;
      top: 5px;
      width: 15px;
      height: 15px;
      background: url('~@/assets/guanbi.png') center center no-repeat;
      background-size: cover;
      cursor: pointer;
    }
  }
</style>