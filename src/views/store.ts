import { reactive } from "vue"
export const store = {
  state: reactive<{
    [x: string]: any
  }>({
    message: "hello World"
  }),
  setState(key: string, value: any) {
    this.state[key] = value
  },
  clearState(key: string, value: any) {
    this.state[key] = ''
  }
}