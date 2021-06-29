<script lang="ts">
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup(props, { slots, emit }) {
    return () => h('ul', {
      class: 'list-wrap',
    },
    slots);
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
  }
</style>
