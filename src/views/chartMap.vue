<template>
  <div class="chart-map">
    <v-chart :option='mapOption' autoresize ></v-chart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

import map from './map.js'
import chinaMap from "./china.json";
import worldMap from "./world.json";
import VChart from 'vue-echarts';
import {
  use,
  registerMap,
 } from 'echarts/core';
 
import {
  MapChart,
} from "echarts/charts";
import {
  GeoComponent,
  TooltipComponent,
  VisualMapComponent,
} from "echarts/components";
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";
use([
  MapChart,
  GeoComponent,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer,
  SVGRenderer
]);

registerMap("china", chinaMap);
registerMap("world", worldMap);
export default defineComponent({
  components: {
    VChart
  },
  setup() {
    const mapOption = ref(map);
    return {
      mapOption
    }
  },
})
</script>


<style lang="scss" scoped>
  .chart-map {
    height: 80vh
  }
</style>