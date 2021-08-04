import { ref } from 'vue';
export function useStore() {
  const state: {
    [x: string]: any
  } = {
    height: ref(null),
    tableData: ref([]),
    stripe: ref(null),
    tooltip: ref(null),
    width: ref(null),
    infScroll: ref(null),
  }
  return {
    state
  }
}