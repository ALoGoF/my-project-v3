import { reactive, InjectionKey } from "vue";

export default {
  state: reactive({
    message: 'Hello world!'
  }),
  setMessage(message: string) {
    this.state.message = message;
  }
}
export interface IInjectStore {
  state: {message: string}
  setMessage: (message: string) => void
};

export const storeKey:InjectionKey<IInjectStore> = Symbol('STOREKEY'); 

export function  injectStore(): IInjectStore {
  const state = reactive({
    message: "Hello world!"
  });
  function setMessage(message: string) {
    state.message = message;
  };
  const storeKey = null
  return  {
    state, 
    setMessage
  }
}