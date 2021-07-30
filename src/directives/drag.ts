class Drag {
  el: any;

  x: number;

  y: number;

  constructor(el: any, binding: any) {
    this.el = el;
    this.x = 0;
    this.y = 0;
    el.onmousedown = (e: MouseEvent) => this.onMouseDown(e);
  }

  setStyle(options: {[x:string]: any}) {
    Object.keys(options).forEach((key: string) => {
      this.el.style[key] = options[key];
    });
  }

  onMouseDown(e: MouseEvent) {
    this.el.setCapture && this.el.setCapture();
    this.el.setAttribute('dragable', true);
    this.setStyle({
      position: 'absolute',
      cursor: 'move',
      display: 'block',
      'z-index': '1',
    });
    this.x = e.clientX - this.el.offsetLeft;
    this.y = e.clientY - this.el.offsetTop;
    document.onmousemove = (e: MouseEvent) => this.onMouseMove(e);
    document.onmouseup = (e: MouseEvent) => this.onMouseUp(e);
    return false;
  }

  onMouseUp(e: MouseEvent) {
    this.x = 0;
    this.y = 0;
    this.setStyle({
      cursor: 'default',
    });
    this.el.realseCapture && this.el.realseCapture();
    document.onmousemove = null;
    document.onmouseup = null;
  }

  onMouseMove(e: MouseEvent) {
    const left = e.clientX - this.x;
    const top = e.clientY - this.y;
    this.setStyle({
      left: `${left}px`,
      top: `${top}px`,
    });
  }

  onDragOver(e: DragEvent) {
    e.preventDefault();
  }
}
export default {
  mounted(el: Element, binding: Object) {
    new Drag(el, binding);
  },
};
