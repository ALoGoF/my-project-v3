
<script lang="ts">
import { defineComponent, watch, h, ref } from 'vue'
export default defineComponent({
  props: {
    path: {
      type: String,
      default: ''
    },
    data: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const path = ref<string>('')
    watch(props, () => {
      const pathArr = props.path.match(/d="(.*)"/);
      path.value = pathArr ? pathArr[1]: '';
    },
    {
      immediate: true
    });
    return () => {
      return h('svg',{
        'xmlns':"http://www.w3.org/2000/svg",
        'xmlns:xlink':"http://www.w3.org/1999/xlink"
      },
      [h('g',
      Object.assign({},props.data?{
        filter: "url(#filter22_i)"
      }: {}),
        [h('path',
          Object.assign({
            d: path.value,
            class: 'village_path'
          }, props.data? {
            "stroke":"#16ECFF",
            "stroke-width":"2",
            "stroke-linecap":"square",
            "stroke-linejoin":"round",
            'fill':"#041E29",
            'fill-opacity':"0.05"
          }:{
            "fill":"#041E29",
            "fill-opacity":"0.05" ,
            "stroke":"#1AA2E7" ,
            "stroke-opacity":"0.3" ,
            "stroke-width":"3" ,
            "stroke-linecap":"square" ,
            "stroke-linejoin":"round" ,
            "stroke-dasharray":"10 10",
          }))
        ])
      ])
    }
  },
})
</script>


<style lang="scss" scoped>

</style>