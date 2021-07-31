<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g v-html="path"></g>
    <defs v-html="defs"></defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
      const path = ref<string>('');
      const defs = ref<string>('')
      watch(props, () => {
        path.value = 
          `
            <path opacity="0.5"  d="M${ props.x} ${ props.y}C${ props.x} ${2.3080 + props.y} ${-4.9120 + props.x} ${4.1790 + props.y} ${-10.9720 + props.x} ${4.1790 + props.y}C${-17.0310 + props.x} ${4.1790 + props.y} ${-21.9430 + props.x} ${2.3080 + props.y} ${-21.9430 + props.x} ${ props.y}C${-21.9430 + props.x} ${-2.3090 + props.y} ${-17.0310 + props.x} ${-4.1800 + props.y} ${-10.9720 + props.x} ${-4.1800 + props.y}C${-4.9120 + props.x} ${-4.1800 + props.y} ${ props.x} ${-2.3090 + props.y} ${ props.x} ${ props.y}ZM${-19.7490 + props.x} ${ props.y}C${-19.7490 + props.x} ${1.8460 + props.y} ${-15.8190 + props.x} ${3.3430 + props.y} ${-10.9720 + props.x} ${3.3430 + props.y}C${-6.1240 + props.x} ${3.3430 + props.y} ${-2.1940 + props.x} ${1.8460 + props.y} ${-2.1940 + props.x} ${ props.y}C${-2.1940 + props.x} ${-1.8470 + props.y} ${-6.1240 + props.x} ${-3.3440 + props.y} ${-10.9720 + props.x} ${-3.3440 + props.y}C${-15.8190 + props.x} ${-3.3440 + props.y} ${-19.7490 + props.x} ${-1.8470 + props.y} ${-19.7490 + props.x} ${ props.y}Z" fill="#E3EDFF"/>
            <ellipse cx="${-10.9720 + props.x}" cy="${ props.y}" rx="5.33752" ry="1.9505" fill="#16ECFF" opacity="0.9" />
            <g class="name-bord">
              <path fill="url(#paint51${ props.index }_linear)" fill-opacity="0.4" stroke="url(#paint51${ props.index }_linear)" d="M${-55.1930 + props.x} ${-38.3160 + props.y}C${-55.8990 + props.x} ${-41.7270 + props.y} ${-53.2970 + props.x} ${-44.9260 + props.y} ${-49.8140 + props.x} ${-44.9300 + props.y}L${30.1870 + props.x} ${-45.0290 + props.y}C${33.6150 + props.x} ${-45.0330 + props.y} ${36.2110 + props.x} ${-41.9360 + props.y} ${35.6080 + props.x} ${-38.5610 + props.y}L${31.6990 + props.x} ${-16.6830 + props.y}C${31.2290 + props.x} ${-14.0540 + props.y} ${28.9380 + props.x} ${-12.1420 + props.y} ${26.2670 + props.x} ${-12.1510 + props.y}L${-45.3680 + props.x} ${-12.3790 + props.y}C${-47.9700 + props.x} ${-12.3870 + props.y} ${-50.2100 + props.x} ${-14.2170 + props.y} ${-50.7370 + props.x} ${-16.7650 + props.y}L${-55.1930 + props.x} ${-38.3160 + props.y}Z" "/>
              <path fill="url(#paint52${ props.index }_linear)" fill-opacity="0.6" stroke="url(#paint53${ props.index }_linear)" d="M${-51.1370 + props.x} ${-37.1880 + props.y}C${-51.6300 + props.x} ${-39.3790 + props.y} ${-49.9620 + props.x} ${-41.4610 + props.y} ${-47.7160 + props.x} ${-41.4570 + props.y}L${27.7600 + props.x} ${-41.3260 + props.y}C${29.9340 + props.x} ${-41.3220 + props.y} ${31.5780 + props.x} ${-39.3590 + props.y} ${31.2010 + props.x} ${-37.2190 + props.y}L${27.8360 + props.x} ${-18.1070 + props.y}C${27.5400 + props.x} ${-16.4250 + props.y} ${26.0730 + props.x} ${-15.2020 + props.y} ${24.3660 + props.x} ${-15.2140 + props.y}L${-43.5120 + props.x} ${-15.6610 + props.y}C${-45.1400 + props.x} ${-15.6720 + props.y} ${-46.5460 + props.x} ${-16.8040 + props.y} ${-46.9040 + props.x} ${-18.3920 + props.y}L${-51.1370 + props.x} ${-37.1880 + props.y}Z" "/>
              <text text-anchor="middle" x='${-8.4210 + props.x}' y='${-21.2610 + props.y}' fill="#FFFFFF">
                <tspan>${ props.name }</tspan>
              </text>
            </g>
          `
        defs.value = 
            `   
              <linearGradient id="paint50${ props.index }_linear"  x1="${-9.7340 + 11 + props.x}" y1="${-48.3490 + props.y}" x2="${-9.1450 + 11 + props.x}" y2="${-10.0170 + props.y}" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1AA2E7" stop-opacity="0"/>
              <stop offset="1" stop-color="#1AA2E7"/>
              </linearGradient>
              <linearGradient id="paint51${ props.index }_linear"  x1="${-9.9740 + 11 + props.x}" y1="${-44.3320 + props.y}" x2="${-10.1890 + 11 + props.x}" y2="${-11.8070 + props.y}" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"/>
              <stop offset="1" stop-color="#1AA2E7"/>
              </linearGradient>
              <linearGradient id="paint52${ props.index }_linear" x1="${-49.2490 + 11 + props.x}" y1="${-27.8220 + props.y}" x2="${29.9150 + 11 + props.x}" y2="${-27.0970 + props.y}" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1AA2E7" stop-opacity="0.34"/>
              <stop offset="0.484375"  stop-color="#1AA2E7"/>
              <stop offset="1" stop-color="#1AA2E7" stop-opacity="0.34"/>
              </linearGradient>
              <linearGradient id="paint53${ props.index }_linear" x1="${-10.0950 + 11 + props.x}" y1="${-42.0370 + props.y}" x2="${-10.8600  + props.x}" y2="${-14.4960 + props.y}" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"/>
              <stop offset="0.494279"  stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
            `
      },{
        immediate: true
      });
      return {
        path,
        defs
      }
  },
})
</script>

<style lang="scss" scoped>

</style>