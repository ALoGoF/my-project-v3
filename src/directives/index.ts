import drag from './drag';
interface directive {
  [x:string]: any
}
const directives: directive = {
  drag,
};

export default {
  install (Vue: any) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  }
}