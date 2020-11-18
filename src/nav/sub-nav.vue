<template>
  <div class="diff-sub-nav" :class="{active}" v-click-outside="close">
    <span class="diff-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
    <span class="diff-sub-nav-icon" :class="{open}">
      <diff-icon name="right"></diff-icon>
    </span>
    </span>
    <template v-if="vertical">
      <transition
        name="x"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div class="diff-sub-nav-popover" :class="{vertical}" v-show="open">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="diff-sub-nav-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
  import ClickOutside from '../click-outside'
  import DiffIcon from '../icon/icon'
  export default {
    name: 'diff-sub-nav',
    data() {
      return {
        open: false,
      }
    },
    props: {
      name: {type: String, required: true},
    },
    computed: {
      active() {
        return this.root.namePath.indexOf(this.name) >= 0 ? true : false
      }
    },
    methods: {
      // beforeEnter(el,done){}, /* 进入动画前一帧 */
      enter(el, done) { /* 进入动画 */
        el.style.height = 'auto'
        let {height} = el.getBoundingClientRect() // 取得 auto 后的实际高度
        el.style.height = '0px' // 还原成 0
        el.getBoundingClientRect() // 让再计算一次高度
        el.style.height = `${height}px` // 再次设置为 实际高度
        /*
        * 之所以要再计算一次高度是因为 浏览器会对多次赋值操作进行合并
        * 如果先把高度设置为 0，又马上设置为 height，那么浏览器会直接设置成 height 的值
        * el.getBoundingClientRect()执行了这一步操作之后，浏览器必须要计算一次高度
        * 只能先把 0 先设置到页面，再计算高度
        * */
        el.addEventListener('transitionend',()=>{
          done()
        })
      },
      afterEnter(el,done) { /* 进入动画结束后 */
        el.style.height = 'auto'
        /* 进入完成后要变成auto，因为有二级菜单存在，高度不固定。 */
        done()
      },
      leave(el) { /* 离开动画 */
        let {height} = el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.getBoundingClientRect()
        el.style.height = `0px`
        el.addEventListener('transitionend', () => {
          done()
          // 这里要等过渡动画结束了以后再调用 done，
          // 否则会马上执行 afterLeave 以后的操作变为 auto
          // afterLeave 以后马上变成 display none
        })
      },
      afterLeave(el, done) { /* 离开动画后 */
        el.style.height = `auto`
        done()
      },
      onClick() { this.open = !this.open },
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        } else {
        }
      },
      close() {
        this.open = false
      }
    },
    inject: ['root', 'vertical'],
    directives: {
      ClickOutside
    },
    components: {
      DiffIcon
    }
  }
</script>

<style scoped lang="scss">
  @import 'var';
  .x-enter-active, .x-leave-active {
    transition: all 5s;
  }
  .diff-sub-nav {
    position: relative;
    user-select: none;
    cursor: pointer;
    &.active {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
    &-label {
      display: block;
      padding: 10px 20px;
    }
    &-icon {
      display: none;
    }
    &-popover {
      transition: all .3s;
      background: #fff;
      position: absolute;
      top: 100%;
      left: 0;
      white-space: nowrap;
      margin-top: 4px;
      @extend .box-shadow;
      border-radius: 4px;
      font-size: $font-size;
      min-width: 8em;
      &.vertical {
        overflow: hidden;
        position: static;
        box-shadow: none;
        border: none;
        border-radius: 0;
      }
    }
  }
  .diff-sub-nav .diff-sub-nav {
    &.active {
      position: relative;
      &::after {
        display: none;
      }
    }
    .diff-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
    .diff-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .diff-sub-nav-icon {
      display: inline-flex;
      margin-left: 1em;
      svg {fill: $light-color;height: .8em;width: .8em;}
      &.open {
        transform: rotate(180deg);
        transition: all .2s;
      }
    }
  }
</style>
