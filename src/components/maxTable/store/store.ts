import { ref, VNode, watch } from 'vue';
export function useStore():{
    setColumn: (props:{prop: string, label: string}, solt?:VNode) => void
      state:{
        [x:string]: any
      }
    } {
    const height = ref(null);
    const tableData = ref([]);
    const stripe = ref(null);
    const tooltip = ref(null);
    const width = ref(null);
    const infScroll = ref(null);
    const columns = ref<{
      prop: string,
      label: string,
      solt?: VNode
    }[]>([]);
  watch(tableData, newValue => {
  }, {
    deep: true
  });
  watch(columns, newValue => {
    console.log(`newValue`, newValue)
  })
  const setColumn = (props:{prop: string, label: string}, solt?:VNode) => {
    let index: number | null = null; 
    const col = columns.value.some((col, i: number) => {
      index = i
      console.log(`col`, col)
      return col.prop === props.prop;
    })
    console.log(`col`, col, index)
    if(col && index !== null) {
      columns.value[index] = {
        ...props,
        solt
      };
    } else {
      columns.value.push({
        ...props,
        solt
      })
    }
    console.log(`columns`, columns)
  }
  return {
    setColumn,
    state: {
      height,
      tableData,
      stripe,
      tooltip,
      width,
      infScroll,
      columns
    }
  }
}