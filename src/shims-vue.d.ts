/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'lodash'

declare module '*.json' {
  const value: any;
  export default value;
}
declare module '*.js' {
  const value: any;
  export default value;
  
}

declare module '*.svg' {
  const value: any;
  export default value;
}