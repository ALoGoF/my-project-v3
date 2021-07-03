<script lang="ts">
import {
  defineComponent, h, onMounted, PropType, ref
} from 'vue';
import _ from 'lodash';
import { emitter } from '@/main';
interface Item {
  id: number,
  name: string,
  email: string,
  address: string,
  active: boolean
}
export default defineComponent({
  components: {
  },
  props: {
    list: {
      type: Array as PropType<Item[]>,
      default: [],
    },
  },
  setup(props, { slots, emit }) {
    const activeIndex = ref<number>();
    function handlerClick(e: DocumentEvent, index: number) {
      activeIndex.value = index;
      emitter.emit('foo', {a: 222222222})
    };
    // function lazyLoad() {
    //   const itemList = document.querySelectorAll('.list-item');
    //   const wrapBox = document.querySelector<Element>('.list-wrap');
    //   wrapBox?.addEventListener('scroll', (e: Event) => {
    //     const scrollTop = wrapBox.scrollTop;
    //     console.log(`scrollTop`, scrollTop)
    //   })
    //   itemList.forEach(item => {
    //     const ctx = item.getBoundingClientRect();
    //     // console.log(`ctx`, ctx);
    //   })
    // };
    onMounted(() => {
      // lazyLoad();
    })
    return () => h('ul', {
      class: 'list-wrap',
    },
     props.list.map((item, index) => h('li', {
      class: `list-item ${(activeIndex.value === index) ? 'is-active' : ''}`,
      style: `animation-delay: ${index * 0.25}s`,
      onClick: ($event: DocumentEvent) => { handlerClick($event, index); },
    },
    slots.scoped?
    [
      h('div', null, slots.scoped(props.list[index]))
    ]
    :[
      h('div',{class: ''},
      [
        h('span', { class: 'name' }, [item.name]),
        h('span', { class: 'email' }, [item.email]),
        h('p', { class: 'address' }, [item.address]),
      ])
    ])));
  },
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-track {
    /*背景内阴影*/
    /*-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);*/
    border-radius: 10px;
    /*滚动条背景颜色*/
    /*background-color: rgba(0, 163, 245, 0.4);*/
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #eff1f7;
}
/*滑块hover效果*/
::-webkit-scrollbar-thumb:hover {
    border-radius: 5px;
     /*内阴影*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #eef2ff
}

  .list-wrap {
    width: 450px;
    max-height: 400px;
    overflow: auto;
    margin: 0 auto;
    padding: 10px;
  }

.list-item:hover {
  transform: scaleY(1.05);
  background: #ccc;
}
.is-active {
  transform: scaleY(1.05);
  background: #ccc;
}
.item {
  line-height: 36px;
  padding: 20px;
  border-bottom: 1px dashed #ccc;
  box-sizing: border-box;
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
.list-item {
  transition: 0.28s;
  text-align: left;
  cursor: pointer;
  animation-duration: 1s;
  animation-name: itemMove;
  animation-timing-function: ease-in-out
}

@keyframes itemMove {
  50% {
    transform: scale(1.02);
    background: #ccc;
  }
  100% {
    transform: scale(1);
    background: #fff;
  }
}
</style>
