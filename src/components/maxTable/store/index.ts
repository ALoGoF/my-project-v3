import { watch } from 'vue'
interface Iprop {
  [x: string]: any
}
const propMap:Iprop = {
  height: "height",
  tableData: "tableData",
  stripe: "stripe",
  width: "width",
  infScroll: "infScroll"
}

export function createStore(table: any, props: any) {
  if(!table) {
    throw new Error('table is required');
  };
  watchProp(props)
}
function setPropValue() {
  
}
function watchProp(props: any) {
  Object.keys(propMap).map(key => {
    return watch(() => props[propMap[key]], (newValue, oldValue) => {

    })
  })
}