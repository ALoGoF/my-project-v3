
<template>
  <div class="svg-container">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width='1720' height='600' >
          <rect x="10" y="10" width="40" height="40" rx="10" ry="10" fill="#fff" stroke="#000" stroke-width="5"></rect>
          <circle cx='90' cy='40' r="30" fill="#fff" stroke="#000" stroke-width="5"></circle>
          <ellipse cx="180" cy="40" rx="40" ry="20" fill="#fff" stroke="#000" stroke-width="5"></ellipse>
          <line x1="250" y1="25" x2="300" y2="25" fill="#fff" stroke="#000" stroke-width="5"></line>
          <polyline points="350 10, 380 10, 390 5, 400, 60" fill="#fff" stroke="#000" stroke-width="5"></polyline>
          <polygon points="420 10, 480 10, 490 5, 500, 60" fill="#fff" stroke="#000" stroke-width="5"></polygon>
          <path d="M530 10 h 90 v 90 h -90 Z" stroke="#D44C42" stroke-width="5" fill="#fff"></path>
          <path d="M 650 10, c 0 0, 40 0, 20, 40" stroke="#D44C42" stroke-width="5" fill="#fff"></path>
      </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>


<style lang="scss" scoped>
  .svg-container {
    height: calc(100% - 76px)
  }
</style>