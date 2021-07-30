<script lang="ts">
import { defineComponent, PropType, ref, h, watchEffect } from 'vue'
interface data {
  [x: string]: any
}
export default defineComponent({
  emits: ['handleRowClick'],
  props: {
    height: {
      type: Number as PropType<number>,
    },
    tableData: {
      type: Object as PropType<data[]>,
      default: []
    },
    stripe: {
      type: Boolean as PropType<boolean>,
      default: true
    },
    width: {
      type: Number as PropType<number>,
      default: 1040
    },
    infScroll: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup(props, {emit, slots}) {
    const colLabels = ref<string[]>([]);
    const colProps = ref<string[]>([]);
    const colWidth = ref<number[]>([]);
    const colTooltip = ref<boolean[]>([]);
    const colAlign = ref<string[]>([]);
    const colChild = ref<any[]>([]);
      watchEffect(() => {
          if(slots.default) {
            const childNode = slots.default();
            console.log('childNode :>> ', childNode);
            colLabels.value = childNode.map(item => {
              return item.props && item.props.label
            })
            colProps.value = childNode.map(item => {
              return item.props && item.props.prop
            })
            colWidth.value = childNode.map(item => {
              return (item.props && Number(item.props.width) || 80)
            });
            colTooltip.value = childNode.map(item => {
              return item.props && item.props.tooltip
            });
            colAlign.value = childNode.map(item => {
              return item.props && item.props.align
            });
            colChild.value = childNode.map(item => {
              return item.children
            });
          };
      })
    return () => {
      return h('div', Object.assign({
        class: 'table-wrap'
      },props.height?{
        style:`height: ${( props.height/2/1548 ) * 100}vh;`,
      }:{}),[
        h('div',{
          class: "scale-wrap",
          style: `width: ${(props.width/3785)*100}vw`
        },[
          h('table', {
            class: "table-header",
            style: "table-layout:fixed",
            border: "0",
            cellpadding: "0",
            cellspacing: "0",
          },[...colWidth.value.map(width => {
            return h('col', {
              width: `${ (width / 3785) * 100 }%`
            })
            }),
            h('tr', {},[...colLabels.value.map((label, index) => {
              return h('th', {}, h('div', {
                class:'header-text table-col' ,
                style: `text-align: ${colAlign.value[index]}`}, label))
            })])
            ]),
            h('div', Object.assign({
              class: `table-body ${props.stripe?'stripe':'normal-s'}`
            }, props.height?{
              style: `height: ${((props.height - 70) / 1548) * 100}vh`
            }:{}),props.infScroll?[h('table',{
                    style: "table-layout:fixed",
                    border: "0",
                    cellpadding: "0",
                    cellspacing: "0"
                    },[h('colgroup',{},[...colWidth.value.map(width => {
                      return h('col', {
                        width: `${ (width / 3785) * 100 }%`
                      })
                      })]),
                      ...props.tableData.map((item, index) => {
                        return h('tr', {
                          key: index,
                          onClick: $event => { emit('handleRowClick', item) }
                        }, colProps.value.map((prop, i) => {
                          return colChild.value[i]?h('td',{
                            key: i,
                            style:`text-align: ${ colAlign.value[i] }`
                          }, [colChild.value[i].default(item)] ):h('td', {
                            key: i,
                            title: `${ colTooltip.value[i]?item[prop]:'' }`,
                            style:`text-align: ${ colAlign.value[i] }`
                          }, [h('div', {
                              class: `${ colTooltip.value[i]?'text-overflow':'' } col-text table-col`
                            }, item[prop])])
                        }))
                      })
                    ]),h('table',{
                    style: "table-layout:fixed",
                    border: "0",
                    cellpadding: "0",
                    cellspacing: "0"
                    },[h('colgroup',{},[...colWidth.value.map(width => {
                      return h('col', {
                        width: `${ (width / 3785) * 100 }%`
                      })
                      })]),
                      ...props.tableData.map((item, index) => {
                        return h('tr', {
                          key: index,
                          onClick: $event => { emit('handleRowClick', item) }
                        }, colProps.value.map((prop, i) => {
                          return colChild.value[i]?h('td',{
                            key: i,
                            style:`text-align: ${ colAlign.value[i] }`
                          }, [colChild.value[i].default(item)] ):h('td', {
                            key: i,
                            title: `${ colTooltip.value[i]?item[prop]:'' }`,
                            style:`text-align: ${ colAlign.value[i] }`
                          }, [h('div', {
                              class: `${ colTooltip.value[i]?'text-overflow':'' } col-text table-col`
                            }, item[prop])])
                        }))
                      })
                    ])
                  ]:[h('table',{
                    style: "table-layout:fixed",
                    border: "0",
                    cellpadding: "0",
                    cellspacing: "0"
                    },[h('colgroup',{},[...colWidth.value.map(width => {
                      return h('col', {
                        width: `${ (width / 3785) * 100 }%`
                      })
                      })]),
                      ...props.tableData.map((item, index) => {
                        return h('tr', {
                          key: index,
                          onClick: $event => { emit('handleRowClick', item) }
                        }, colProps.value.map((prop, i) => {
                          return colChild.value[i]?h('td',{
                            key: i,
                            style:`text-align: ${ colAlign.value[i] }`
                          }, [colChild.value[i].default(item)] ):h('td', {
                            key: i,
                            title: `${ colTooltip.value[i]?item[prop]:'' }`,
                            style:`text-align: ${ colAlign.value[i] }`
                          }, [h('div', {
                              class: `${ colTooltip.value[i]?'text-overflow':'' } col-text table-col`
                            }, item[prop])])
                        }))
                      })
                    ])])
        ])
      ])
    }
  },
})
</script>


<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 0;
    height: 10px;
}
  .table-wrap {
    font-size: 40px;
    &.small-font {
      font-size: 36px;
    }
    &.large-font {
      font-size: 44px
    }
  }
  .scale-wrap {
    transform: scale(0.5) translate(-50%, -50%);
    font-size: inherit;
      table {
        width: 100%;
        font-size: inherit;
        tr {
          position: relative;
           td, th {
            height: 40px;
            line-height: 40px;
           }
        }
      }
    .table-header {
      .header-text {
        font-family: Alibaba PuHuiTi;
        text-align: left;
        color: #E3EDFF;
        }
        tr {
          background: linear-gradient(267.69deg, rgba(0, 43, 64, 0.4) 1.37%, rgba(20, 46, 100, 0.79) 100%);
          th {
            border-bottom: 1 solid rgba(59, 86, 99, 1);
            box-sizing: border-box;
          }
        }
    }
    .table-body {
        overflow: auto;
        .col-text {
          font-family: Alibaba PuHuiTi;
          color: #FFFFFF;
        }
        .col-number {
          font-family: DIN;
          color: #FFFFFF;
        }
        &.stripe {
          tr:nth-child(2n + 1) {
            background: linear-gradient(267.69deg, rgba(0, 43, 64, 0.4) 1.37%, rgba(20, 46, 100, 0.79) 100%);
            td {
            border-bottom: 1 solid rgba(59, 86, 99, 1);;
            box-sizing: border-box;
            }
          }
        }
        &.normal-s {
          td {
            border-bottom: 1 solid rgba(59, 86, 99, 1);;
            box-sizing: border-box;
          }
        }
    }
  }
</style>