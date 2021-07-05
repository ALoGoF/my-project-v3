export default {
  mounted(el: Element, binding: Object) {
    document.addEventListener('click', (e: MouseEvent) => {
      console.log(`e`, e);
    })
  }
}