<template>
  <div :class="classes" v-clickoutside="handleClose">
    <div :class="prefixCls + '-selection'" @click="toggleMenu">
      <span v-if="selected" :class="prefixCls + '-value'">{{ selected }}</span>
      <span v-else :class="prefixCls + '-placeholder'">请选择</span>
      <i class="v-icon v-icon-arrow-down-b"></i>
    </div>

    <transition name="v-select-zoom">
      <div v-show="visible" :class="prefixCls + '-dropdown'">
        <ul :class="prefixCls + '-list'">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
  import clickoutside from '../../utils/clickoutside';

  const prefixCls = 'v-select';

  export default {
    name: prefixCls,

    directives: { clickoutside },

    props: {
      value: String,
      disabled: Boolean
    },

    data() {
      return {
        prefixCls,
        visible: false,
        selected: null
      }
    },

    computed: {
      classes() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-visible`]: this.visible,
            [`${prefixCls}-disabled`]: this.disabled
          }
        ];
      }
    },

    methods: {
      toggleMenu() {
        if (this.disabled) {
          return;
        }

        this.visible = !this.visible;
      },

      hideMenu() {
        this.visible = false;
      },

      handleClose() {
        this.hideMenu();
      },

      select(value, label) {
        this.selected = label;
        this.$emit('input', value);
        this.hideMenu();

        this.$children.forEach(child => {
          if (child.value === value) {
            child.selected = true;
          } else {
            child.selected = false;
          }
        });
      }
    },

    mounted() {
      this.$children.forEach(child => {
        child.$on('on-select-change', (value, label) => {
          this.select(value, label);
        });

        if (this.value && this.value === child.value) {
          this.select(child.value, child.label);
        }
      });
    }
  };
</script>