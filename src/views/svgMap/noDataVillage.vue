<template>
  <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g v-html="path"></g>
    <defs v-html="defs"></defs>
  </svg>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref, watch,
} from 'vue';

export default defineComponent({
  props: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    // const x = 266.236;
    // const y = 505.628;
    // let t = 0;
    // let resText = defs.replace(/(x\d+|y\d+|d)\=\"(C|M)?(\d+\.?\d+)+\"/g, (str, strsub1, strsub2, index) => {
    //   console.log(`strsub1, strsub2`, strsub1, strsub2)
    //   let res = strsub2;
    //   if(t%2 === 0) {
    //     res = "${" + (Number(strsub2) - x).toFixed(4) + " + props.x}" ;
    //   } else {
    //     res = "${" + (Number(strsub2) - y).toFixed(4) + " + props.y}" ;
    //   }
    //   t += 1;
    //   return res
    // })
    const path = ref<string>('');
    const defs = ref<string>('');
    watch(props, () => {
      path.value = `
            <path opacity="0.5" stroke="#E3EDFF" stroke-width="3" stroke-linejoin="round" stroke-dasharray="0.8 0.8"  d="M${props.x} ${props.y}C${0.1610 + props.x} ${0.2270 + props.y} ${0.2720 + props.x} ${0.4620 + props.y} ${0.3300 + props.x} ${0.7030 + props.y}L${-1.1280 + props.x} ${1.0550 + props.y}C${-1.1240 + props.x} ${1.0700 + props.y} ${-1.1230 + props.x} ${1.0810 + props.y} ${-1.1230 + props.x} ${1.0900 + props.y}C${-1.1230 + props.x} ${1.0990 + props.y} ${-1.1240 + props.x} ${1.1100 + props.y} ${-1.1280 + props.x} ${1.1260 + props.y}L${0.3300 + props.x} ${1.4770 + props.y}C${0.2720 + props.x} ${1.7180 + props.y} ${0.1610 + props.x} ${1.9530 + props.y} ${props.x} ${2.1800 + props.y}L${-1.2250 + props.x} ${1.3140 + props.y}C${-1.2850 + props.x} ${1.4000 + props.y} ${-1.3780 + props.x} ${1.5050 + props.y} ${-1.5160 + props.x} ${1.6270 + props.y}L${-0.5270 + props.x} ${2.7550 + props.y}C${-0.7110 + props.x} ${2.9160 + props.y} ${-0.9200 + props.x} ${3.0710 + props.y} ${-1.1540 + props.x} ${3.2210 + props.y}L${-1.9640 + props.x} ${1.9580 + props.y}C${-2.1240 + props.x} ${2.0610 + props.y} ${-2.3060 + props.x} ${2.1650 + props.y} ${-2.5090 + props.x} ${2.2670 + props.y}L${-1.8340 + props.x} ${3.6070 + props.y}C${-2.0570 + props.x} ${3.7190 + props.y} ${-2.2940 + props.x} ${3.8270 + props.y} ${-2.5450 + props.x} ${3.9300 + props.y}L${-3.1150 + props.x} ${2.5430 + props.y}C${-3.3180 + props.x} ${2.6260 + props.y} ${-3.5330 + props.x} ${2.7070 + props.y} ${-3.7610 + props.x} ${2.7850 + props.y}L${-3.2770 + props.x} ${4.2040 + props.y}C${-3.5170 + props.x} ${4.2860 + props.y} ${-3.7660 + props.x} ${4.3640 + props.y} ${-4.0240 + props.x} ${4.4380 + props.y}L${-4.4350 + props.x} ${2.9950 + props.y}C${-4.6570 + props.x} ${3.0590 + props.y} ${-4.8880 + props.x} ${3.1190 + props.y} ${-5.1270 + props.x} ${3.1760 + props.y}L${-4.7790 + props.x} ${4.6350 + props.y}C${-5.0270 + props.x} ${4.6940 + props.y} ${-5.2810 + props.x} ${4.7500 + props.y} ${-5.5420 + props.x} ${4.8010 + props.y}L${-5.8340 + props.x} ${3.3300 + props.y}C${-6.0670 + props.x} ${3.3760 + props.y} ${-6.3070 + props.x} ${3.4190 + props.y} ${-6.5520 + props.x} ${3.4590 + props.y}L${-6.3130 + props.x} ${4.9400 + props.y}C${-6.5660 + props.x} ${4.9800 + props.y} ${-6.8230 + props.x} ${5.0180 + props.y} ${-7.0850 + props.x} ${5.0510 + props.y}L${-7.2760 + props.x} ${3.5640 + props.y}C${-7.5160 + props.x} ${3.5950 + props.y} ${-7.7610 + props.x} ${3.6220 + props.y} ${-8.0090 + props.x} ${3.6460 + props.y}L${-7.8630 + props.x} ${5.1390 + props.y}C${-8.1190 + props.x} ${5.1640 + props.y} ${-8.3780 + props.x} ${5.1860 + props.y} ${-8.6410 + props.x} ${5.2040 + props.y}L${-8.7430 + props.x} ${3.7070 + props.y}C${-8.9870 + props.x} ${3.7240 + props.y} ${-9.2330 + props.x} ${3.7370 + props.y} ${-9.4830 + props.x} ${3.7480 + props.y}L${-9.4220 + props.x} ${5.2460 + props.y}C${-9.6800 + props.x} ${5.2570 + props.y} ${-9.9400 + props.x} ${5.2640 + props.y} ${-10.2030 + props.x} ${5.2670 + props.y}L${-10.2230 + props.x} ${3.7670 + props.y}C${-10.3460 + props.x} ${3.7690 + props.y} ${-10.4700 + props.x} ${3.7700 + props.y} ${-10.5950 + props.x} ${3.7700 + props.y}C${-10.7190 + props.x} ${3.7700 + props.y} ${-10.8430 + props.x} ${3.7690 + props.y} ${-10.9660 + props.x} ${3.7670 + props.y}L${-10.9860 + props.x} ${5.2670 + props.y}C${-11.2490 + props.x} ${5.2640 + props.y} ${-11.5090 + props.x} ${5.2570 + props.y} ${-11.7670 + props.x} ${5.2460 + props.y}L${-11.7060 + props.x} ${3.7480 + props.y}C${-11.9560 + props.x} ${3.7370 + props.y} ${-12.2020 + props.x} ${3.7240 + props.y} ${-12.4460 + props.x} ${3.7070 + props.y}L${-12.5480 + props.x} ${5.2040 + props.y}C${-12.8110 + props.x} ${5.1860 + props.y} ${-13.0700 + props.x} ${5.1640 + props.y} ${-13.3260 + props.x} ${5.1390 + props.y}L${-13.1810 + props.x} ${3.6460 + props.y}C${-13.4290 + props.x} ${3.6220 + props.y} ${-13.6730 + props.x} ${3.5950 + props.y} ${-13.9130 + props.x} ${3.5640 + props.y}L${-14.1040 + props.x} ${5.0510 + props.y}C${-14.3660 + props.x} ${5.0180 + props.y} ${-14.6240 + props.x} ${4.9800 + props.y} ${-14.8760 + props.x} ${4.9400 + props.y}L${-14.6370 + props.x} ${3.4590 + props.y}C${-14.8820 + props.x} ${3.4190 + props.y} ${-15.1220 + props.x} ${3.3760 + props.y} ${-15.3560 + props.x} ${3.3300 + props.y}L${-15.6470 + props.x} ${4.8010 + props.y}C${-15.9080 + props.x} ${4.7500 + props.y} ${-16.1630 + props.x} ${4.6940 + props.y} ${-16.4110 + props.x} ${4.6350 + props.y}L${-16.0620 + props.x} ${3.1760 + props.y}C${-16.3010 + props.x} ${3.1190 + props.y} ${-16.5320 + props.x} ${3.0590 + props.y} ${-16.7540 + props.x} ${2.9950 + props.y}L${-17.1660 + props.x} ${4.4380 + props.y}C${-17.4240 + props.x} ${4.3640 + props.y} ${-17.6730 + props.x} ${4.2860 + props.y} ${-17.9120 + props.x} ${4.2040 + props.y}L${-17.4280 + props.x} ${2.7850 + props.y}C${-17.6560 + props.x} ${2.7070 + props.y} ${-17.8720 + props.x} ${2.6260 + props.y} ${-18.0740 + props.x} ${2.5430 + props.y}L${-18.6450 + props.x} ${3.9300 + props.y}C${-18.8950 + props.x} ${3.8270 + props.y} ${-19.1330 + props.x} ${3.7190 + props.y} ${-19.3550 + props.x} ${3.6070 + props.y}L${-18.6800 + props.x} ${2.2670 + props.y}C${-18.8840 + props.x} ${2.1650 + props.y} ${-19.0650 + props.x} ${2.0610 + props.y} ${-19.2250 + props.x} ${1.9580 + props.y}L${-20.0360 + props.x} ${3.2210 + props.y}C${-20.2690 + props.x} ${3.0710 + props.y} ${-20.4780 + props.x} ${2.9160 + props.y} ${-20.6620 + props.x} ${2.7550 + props.y}L${-19.6730 + props.x} ${1.6270 + props.y}C${-19.8110 + props.x} ${1.5050 + props.y} ${-19.9040 + props.x} ${1.4000 + props.y} ${-19.9650 + props.x} ${1.3140 + props.y}L${-21.1890 + props.x} ${2.1800 + props.y}C${-21.3500 + props.x} ${1.9530 + props.y} ${-21.4620 + props.x} ${1.7180 + props.y} ${-21.5200 + props.x} ${1.4770 + props.y}L${-20.0620 + props.x} ${1.1260 + props.y}C${-20.0650 + props.x} ${1.1100 + props.y} ${-20.0660 + props.x} ${1.0990 + props.y} ${-20.0660 + props.x} ${1.0900 + props.y}C${-20.0660 + props.x} ${1.0810 + props.y} ${-20.0650 + props.x} ${1.0700 + props.y} ${-20.0620 + props.x} ${1.0550 + props.y}L${-21.5200 + props.x} ${0.7030 + props.y}C${-21.4620 + props.x} ${0.4620 + props.y} ${-21.3500 + props.x} ${0.2270 + props.y} ${-21.1890 + props.x} ${props.y}L${-19.9650 + props.x} ${0.8660 + props.y}C${-19.9040 + props.x} ${0.7810 + props.y} ${-19.8110 + props.x} ${0.6750 + props.y} ${-19.6730 + props.x} ${0.5540 + props.y}L${-20.6620 + props.x} ${-0.5740 + props.y}C${-20.4780 + props.x} ${-0.7350 + props.y} ${-20.2690 + props.x} ${-0.8910 + props.y} ${-20.0360 + props.x} ${-1.0400 + props.y}L${-19.2250 + props.x} ${0.2220 + props.y}C${-19.0650 + props.x} ${0.1190 + props.y} ${-18.8840 + props.x} ${0.0160 + props.y} ${-18.6800 + props.x} ${-0.0870 + props.y}L${-19.3550 + props.x} ${-1.4260 + props.y}C${-19.1330 + props.x} ${-1.5390 + props.y} ${-18.8950 + props.x} ${-1.6470 + props.y} ${-18.6450 + props.x} ${-1.7500 + props.y}L${-18.0740 + props.x} ${-0.3620 + props.y}C${-17.8720 + props.x} ${-0.4460 + props.y} ${-17.6560 + props.x} ${-0.5270 + props.y} ${-17.4280 + props.x} ${-0.6040 + props.y}L${-17.9120 + props.x} ${-2.0240 + props.y}C${-17.6730 + props.x} ${-2.1060 + props.y} ${-17.4240 + props.x} ${-2.1840 + props.y} ${-17.1660 + props.x} ${-2.2570 + props.y}L${-16.7540 + props.x} ${-0.8150 + props.y}C${-16.5320 + props.x} ${-0.8780 + props.y} ${-16.3010 + props.x} ${-0.9390 + props.y} ${-16.0620 + props.x} ${-0.9950 + props.y}L${-16.4110 + props.x} ${-2.4550 + props.y}C${-16.1630 + props.x} ${-2.5140 + props.y} ${-15.9080 + props.x} ${-2.5690 + props.y} ${-15.6470 + props.x} ${-2.6210 + props.y}L${-15.3560 + props.x} ${-1.1490 + props.y}C${-15.1220 + props.x} ${-1.1960 + props.y} ${-14.8820 + props.x} ${-1.2390 + props.y} ${-14.6370 + props.x} ${-1.2780 + props.y}L${-14.8760 + props.x} ${-2.7590 + props.y}C${-14.6240 + props.x} ${-2.8000 + props.y} ${-14.3660 + props.x} ${-2.8370 + props.y} ${-14.1040 + props.x} ${-2.8710 + props.y}L${-13.9130 + props.x} ${-1.3830 + props.y}C${-13.6730 + props.x} ${-1.4140 + props.y} ${-13.4290 + props.x} ${-1.4420 + props.y} ${-13.1810 + props.x} ${-1.4660 + props.y}L${-13.3260 + props.x} ${-2.9590 + props.y}C${-13.0700 + props.x} ${-2.9840 + props.y} ${-12.8110 + props.x} ${-3.0050 + props.y} ${-12.5480 + props.x} ${-3.0230 + props.y}L${-12.4460 + props.x} ${-1.5270 + props.y}C${-12.2020 + props.x} ${-1.5440 + props.y} ${-11.9560 + props.x} ${-1.5570 + props.y} ${-11.7060 + props.x} ${-1.5670 + props.y}L${-11.7670 + props.x} ${-3.0660 + props.y}C${-11.5090 + props.x} ${-3.0760 + props.y} ${-11.2490 + props.x} ${-3.0830 + props.y} ${-10.9860 + props.x} ${-3.0870 + props.y}L${-10.9660 + props.x} ${-1.5870 + props.y}C${-10.8430 + props.x} ${-1.5890 + props.y} ${-10.7190 + props.x} ${-1.5890 + props.y} ${-10.5950 + props.x} ${-1.5890 + props.y}C${-10.4700 + props.x} ${-1.5890 + props.y} ${-10.3460 + props.x} ${-1.5890 + props.y} ${-10.2230 + props.x} ${-1.5870 + props.y}L${-10.2030 + props.x} ${-3.0870 + props.y}C${-9.9400 + props.x} ${-3.0830 + props.y} ${-9.6800 + props.x} ${-3.0760 + props.y} ${-9.4220 + props.x} ${-3.0660 + props.y}L${-9.4830 + props.x} ${-1.5670 + props.y}C${-9.2330 + props.x} ${-1.5570 + props.y} ${-8.9870 + props.x} ${-1.5440 + props.y} ${-8.7430 + props.x} ${-1.5270 + props.y}L${-8.6410 + props.x} ${-3.0230 + props.y}C${-8.3780 + props.x} ${-3.0050 + props.y} ${-8.1190 + props.x} ${-2.9840 + props.y} ${-7.8630 + props.x} ${-2.9590 + props.y}L${-8.0090 + props.x} ${-1.4660 + props.y}C${-7.7610 + props.x} ${-1.4420 + props.y} ${-7.5160 + props.x} ${-1.4140 + props.y} ${-7.2760 + props.x} ${-1.3830 + props.y}L${-7.0850 + props.x} ${-2.8710 + props.y}C${-6.8230 + props.x} ${-2.8370 + props.y} ${-6.5660 + props.x} ${-2.8000 + props.y} ${-6.3130 + props.x} ${-2.7590 + props.y}L${-6.5520 + props.x} ${-1.2780 + props.y}C${-6.3070 + props.x} ${-1.2390 + props.y} ${-6.0670 + props.x} ${-1.1960 + props.y} ${-5.8340 + props.x} ${-1.1490 + props.y}L${-5.5420 + props.x} ${-2.6210 + props.y}C${-5.2810 + props.x} ${-2.5690 + props.y} ${-5.0270 + props.x} ${-2.5140 + props.y} ${-4.7790 + props.x} ${-2.4550 + props.y}L${-5.1270 + props.x} ${-0.9950 + props.y}C${-4.8880 + props.x} ${-0.9390 + props.y} ${-4.6570 + props.x} ${-0.8780 + props.y} ${-4.4350 + props.x} ${-0.8150 + props.y}L${-4.0240 + props.x} ${-2.2570 + props.y}C${-3.7660 + props.x} ${-2.1840 + props.y} ${-3.5170 + props.x} ${-2.1060 + props.y} ${-3.2770 + props.x} ${-2.0240 + props.y}L${-3.7610 + props.x} ${-0.6040 + props.y}C${-3.5330 + props.x} ${-0.5270 + props.y} ${-3.3180 + props.x} ${-0.4460 + props.y} ${-3.1150 + props.x} ${-0.3620 + props.y}L${-2.5450 + props.x} ${-1.7500 + props.y}C${-2.2940 + props.x} ${-1.6470 + props.y} ${-2.0570 + props.x} ${-1.5390 + props.y} ${-1.8340 + props.x} ${-1.4260 + props.y}L${-2.5090 + props.x} ${-0.0870 + props.y}C${-2.3060 + props.x} ${0.0160 + props.y} ${-2.1240 + props.x} ${0.1190 + props.y} ${-1.9640 + props.x} ${0.2220 + props.y}L${-1.1540 + props.x} ${-1.0400 + props.y}C${-0.9200 + props.x} ${-0.8910 + props.y} ${-0.7110 + props.x} ${-0.7350 + props.y} ${-0.5270 + props.x} ${-0.5740 + props.y}L${-1.5160 + props.x} ${0.5540 + props.y}C${-1.3780 + props.x} ${0.6750 + props.y} ${-1.2850 + props.x} ${0.7810 + props.y} ${-1.2250 + props.x} ${0.8660 + props.y}L${props.x} ${props.y}Z"/>
            <path opacity="0.9" fill="#F38401"   d="M${-5.6210 + props.x} ${1.7980 + props.y}C${-5.9770 + props.x} ${2.1320 + props.y} ${-6.5770 + props.x} ${2.4230 + props.y} ${-7.3560 + props.x} ${2.6410 + props.y}C${-8.1350 + props.x} ${2.8580 + props.y} ${-9.0620 + props.x} ${2.9920 + props.y} ${-10.0370 + props.x} ${3.0300 + props.y}C${-11.0110 + props.x} ${3.0670 + props.y} ${-11.9950 + props.x} ${3.0060 + props.y} ${-12.8810 + props.x} ${2.8530 + props.y}C${-13.7660 + props.x} ${2.6990 + props.y} ${-14.5190 + props.x} ${2.4600 + props.y} ${-15.0570 + props.x} ${2.1600 + props.y}C${-15.5940 + props.x} ${1.8610 + props.y} ${-15.8960 + props.x} ${1.5130 + props.y} ${-15.9290 + props.x} ${1.1560 + props.y}C${-15.9620 + props.x} ${0.7980 + props.y} ${-15.7250 + props.x} ${0.4430 + props.y} ${-15.2430 + props.x} ${0.1320 + props.y}C${-14.7620 + props.x} ${-0.1800 + props.y} ${-14.0550 + props.x} ${-0.4380 + props.y} ${-13.1990 + props.x} ${-0.6120 + props.y}C${-12.3440 + props.x} ${-0.7870 + props.y} ${-11.3740 + props.x} ${-0.8720 + props.y} ${-10.3950 + props.x} ${-0.8590 + props.y}L${-10.5950 + props.x} ${1.0900 + props.y}L${-5.6210 + props.x} ${1.7980 + props.y}Z"/>
            <g class="name-bord">
            <path fill="url(#paint6${ props.index }_linear)" fill-opacity="0.4" stroke="url(#paint7${ props.index }_linear)" d="M${-55.3840 + props.x} ${-37.0540 + props.y}C${-56.0890 + props.x} ${-40.4640 + props.y} ${-53.4870 + props.x} ${-43.6630 + props.y} ${-50.0050 + props.x} ${-43.6670 + props.y}L${31.1600 + props.x} ${-43.7610 + props.y}C${34.5870 + props.x} ${-43.7650 + props.y} ${37.1830 + props.x} ${-40.6670 + props.y} ${36.5800 + props.x} ${-37.2930 + props.y}L${32.5940 + props.x} ${-14.9980 + props.y}C${32.1240 + props.x} ${-12.3690 + props.y} ${29.8330 + props.x} ${-10.4570 + props.y} ${27.1620 + props.x} ${-10.4660 + props.y}L${-45.4760 + props.x} ${-10.7030 + props.y}C${-48.0780 + props.x} ${-10.7120 + props.y} ${-50.3170 + props.x} ${-12.5420 + props.y} ${-50.8440 + props.x} ${-15.0900 + props.y}L${-55.3840 + props.x} ${-37.0540 + props.y}Z"/>
            <path fill="url(#paint8${ props.index }_linear)" fill-opacity="0.6" stroke="url(#paint9${ props.index }_linear)" d="M${-51.2730 + props.x} ${-35.8830 + props.y}C${-51.7660 + props.x} ${-38.0740 + props.y} ${-50.0980 + props.x} ${-40.1560 + props.y} ${-47.8520 + props.x} ${-40.1520 + props.y}L${28.6730 + props.x} ${-40.0120 + props.y}C${30.8460 + props.x} ${-40.0080 + props.y} ${32.4910 + props.x} ${-38.0450 + props.y} ${32.1140 + props.x} ${-35.9050 + props.y}L${28.6880 + props.x} ${-16.4590 + props.y}C${28.3920 + props.x} ${-14.7780 + props.y} ${26.9250 + props.x} ${-13.5550 + props.y} ${25.2180 + props.x} ${-13.5670 + props.y}L${-43.5760 + props.x} ${-14.0260 + props.y}C${-45.2040 + props.x} ${-14.0370 + props.y} ${-46.6090 + props.x} ${-15.1690 + props.y} ${-46.9670 + props.x} ${-16.7570 + props.y}L${-51.2730 + props.x} ${-35.8830 + props.y}Z"/>
            <text text-anchor="middle"  x='${-8.210 + props.x}' y='${-21.2610 + props.y}' fill="#FFFFFF">
              <tspan>${props.name}</tspan>
            </text>
            </g>
          `;
      defs.value = `
              <linearGradient id="paint6${ props.index }_linear" x1="${-9.3410 + props.x}" y1="${-47.1180 + props.y}" x2="${-8.7470 + props.x}" y2="${-8.3150 + props.y}" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF9900" stop-opacity="0"/>
                <stop offset="1" stop-color="#FFAF37"/>
                </linearGradient>
                <linearGradient id="paint7${ props.index }_linear" x1="${-9.5840 + props.x}" y1="${-43.0520 + props.y}" x2="${-9.8040 + props.x}" y2="${-10.1280 + props.y}" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0"/>
                <stop offset="1" stop-color="#FFAF37"/>
                </linearGradient>
                <linearGradient id="paint8${ props.index }_linear" x1="${-49.3430 + props.x}" y1="${-26.3420 + props.y}" x2="${30.7950 + props.x}" y2="${-25.6020 + props.y}" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFAF37" stop-opacity="0.34"/>
                <stop offset="0.484375" stop-color="#FFAF37"/>
                <stop offset="1" stop-color="#FFAF37" stop-opacity="0.34"/>
                </linearGradient>
                <linearGradient id="paint9${ props.index }_linear" x1="${-9.7060 + props.x}" y1="${-40.7300 + props.y}" x2="${-10.4830 + props.x}" y2="${-12.8500 + props.y}" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0"/>
                <stop offset="0.494279" stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
            `;
    }, {
      immediate: true,
    });
    return {
      path,
      defs
    };
  },
});
</script>

<style lang="scss">
@keyframes iconJump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
  .name-bord {
    position: relative;
    animation: iconJump 1.5s ease-in-out infinite;
  }
</style>
