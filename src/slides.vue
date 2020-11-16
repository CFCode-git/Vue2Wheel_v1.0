<template>
  <div class="diff-slides"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd"
  >
    <div class="diff-slides-window" ref="window">
      <div class="diff-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="diff-slides-dots">
      <!--      https://cn.vuejs.org/v2/guide/list.html#%E5%9C%A8-v-for-%E9%87%8C%E4%BD%BF%E7%94%A8%E5%80%BC%E8%8C%83%E5%9B%B4 -->
      <span v-for="n in childrenLength"
            :class="{'active':selectedIndex === n-1}"
            @click="select(n-1)">
        {{n}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'diff-slides',
    props: {
      selected: {type: String},
      autoPlay: {type: Boolean, default: true}
    },
    data() {
      return {
        childrenLength: 0,
        lastSelectedIndex: undefined,
        timerId: undefined,
        // 移动端
        startTouch: undefined,
      }
    },
    mounted() {
      this.updateChildren()
      this.playAutomatically()
      this.childrenLength = this.$children.length
    },
    updated() {
      this.updateChildren()
    },
    methods: {
      onMouseEnter() {
        this.pause()
      },
      onMouseLeave() {
        this.playAutomatically()
      },
      select(newIndex) {
        this.lastSelectedIndex = this.selectedIndex
        if (newIndex === -1) { newIndex = this.names.length - 1 }
        if (newIndex === this.names.length) {newIndex = 0}
        this.$emit('update:selected', this.names[newIndex])
      },
      playAutomatically() {
        if (this.timerId) return
        let run = () => {
          let index = this.names.indexOf(this.getSelected())
          let newIndex = index - 1
          this.select(newIndex) // 告诉外界选中 newIndex
          this.timerId = setTimeout(run, 2000)
        }
        this.timerId = setTimeout(run, 2000)
      },
      pause() {
        window.clearTimeout(this.timerId)
        this.timerId = undefined
      },
      getSelected() {
        let first = this.$children[0]
        return this.selected || first.name
      },
      updateChildren() {
        const selected = this.getSelected()
        this.$children.forEach(vm => {
          let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
          if (this.timerId || this.startTouch) { // timerId 存在： 正在轮播
            // 如果当前是最后一个，下一个第一个，reverse还是false
            if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
              reverse = false
            }
            // 如果当前是第一个，要去最后一个，reverse为true 逆向
            if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
              reverse = true
            }
          }
          vm.reverse = reverse
          this.$nextTick(() => {
            vm.selected = selected
          })
        })
      },
      onTouchStart(e) {
        this.pause()
        if (e.touches.length > 1) return
        this.startTouch = e.touches[0]
      },
      onTouchMove() {
      },
      onTouchEnd(e) {
        let endTouch = e.changedTouches[0]
        let {clientX: x1, clientY: y1} = this.startTouch
        let {clientX: x2, clientY: y2} = endTouch
        // 根据起始点和结束点的角度是否大于 30度 判断用户是在左右滑动还是上下翻页
        let distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
        let deltaY = Math.abs(y1 - y2)
        let rate = distance / deltaY
        if (rate > 2) {
          if (x2 > x1) {
            console.log(this.selectedIndex)
            this.select(this.selectedIndex - 1)
          } else {
            console.log(this.selectedIndex)
            this.select(this.selectedIndex + 1)
          }
        }
        this.$nextTick(() => {
          this.playAutomatically()
        })
      },
    },
    computed: {
      names() {
        return this.$children.map(vm => vm.name)
      },
      selectedIndex() {
        return this.names.indexOf(this.selected) === -1 ?
          0 :
          this.names.indexOf(this.selected)
      }
    }
  }
</script>

<style scoped lang="scss">
  .diff-slides {
    &-wrapper {
      position: relative;
    }
    &-window {
      overflow: hidden;
    }
    &-dots {
      padding:8px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #ddd;
        margin:0 8px;
        font-size: 12px;
        &:hover{
          cursor:pointer;
        }
        &.active {
          background: #a49fff;
          color:white;
          &:hover{
            cursor:default;
          }
        }
      }
    }
  }
</style>
