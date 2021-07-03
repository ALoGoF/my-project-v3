import { BindingTypes } from "@vue/compiler-core";

class Drag {
  el: any;
  binding: any;
  constructor(el: any, binding: any) {
    console.log(`binding`, binding)
    this.el = el;
    this.binding = binding;
    el.onmousedown = (e: Event) => this.onMouseDown(e);
    el.onmousemove = (e: Event) => this.onMouseMove(e);
  };
  onMouseDown(e: Event) {
    this.el.setCapture&& this.el.setCapture();
    this.el.setAttribute('style', "cursor: move; dragable: true");
    this.el.setAttribute('dragable', true);
    console.log(`e`, e)
  };
  onMouseMove(e: Event) {
    
  }
};
export default {
  mounted(el: Element, binding: Object) {
    new Drag(el, binding);
  }
};