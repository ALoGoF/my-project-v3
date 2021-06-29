<script lang="ts">
import { defineComponent, h, PropType } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      default: '',
    },
    email: {
      type: String as PropType<string>,
      default: '',
    },
    address: {
      type: String as PropType<string>,
      default: '',
    },
  },
  setup(props, { emit, slots }) {
    function itemClick() {

    }
    return () => h('li', {
      class: 'list-item',
      onClick: itemClick,
    },
    [
      h('span', { class: 'name' }, [props.name]),
      h('span', { class: 'email' }, [props.email]),
      h('p', { class: 'address' }, [props.address]),
    ]);
  },
});
</script>

<style lang="scss" scoped>
.list-item:hover {
  transform: scaleY(1.05);
  background: #ccc;
}
.list-item {
  transition: .3s;
  text-align: left;
  line-height: 36px;
  border-bottom: 1px dashed #ccc;
  cursor: pointer;
  padding: 20px;
  .name {
    font-size: 24px;
    padding: 10px;
  }
  .email {
    font-size: 16px;
    padding: 5px;
  }
  .address {
    font-size: 18px;
    padding: 5px;
  }

}
</style>
