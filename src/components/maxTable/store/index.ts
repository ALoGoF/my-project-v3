import { watch, ref } from 'vue'
import { useStore } from './store';
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
  const store = useStore();
  Object.keys(propMap).forEach(key => {
    store.state[key].value = props[key]
  });
  watchProp(props, store);
  return store;
}

function watchProp(props: any, store: any) {
  Object.keys(propMap).forEach(key => {
    watch(() => props[key], (newValue, pre) => {
      console.log(`newValue`, newValue)
      store.state[key].value = newValue;
    })
  })
}
