<template>
  <div>
    <transition :name="prefixCls + '-fade'">
      <div
        v-show="visible"
        :class="prefixCls + '-shadow'"
        @click="handleClose"></div>
    </transition>

    <transition :name="prefixCls + '-ease'">
      <div :class="prefixCls" :style="styles" v-show="visible">
        <!-- header -->
        <div :class="prefixCls + '-header'">
          <span class="header-title">{{ title }}</span>
          <i v-if="closable"
             class="header-close v-icon v-icon-android-close"
             @click="handleClose"></i>
        </div>

        <!-- body -->
        <div v-if="$slots.body">
          <slot name="body"></slot>
        </div>
        <div :class="prefixCls + '-body'" v-else>
          <slot></slot>
        </div>

        <!-- footer -->
        <div :class="prefixCls + '-footer'" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const prefixCls = 'v-dialog';

  export default {
    name: prefixCls,

    props: {
      value: Boolean,
      title: String,
      top: String,
      width: [Number, String],
      minWidth: [Number, String],
      closable: {
        default: true,
        type: Boolean
      }
    },

    data() {
      return {
        prefixCls,
        visible: false
      };
    },

    computed: {
      styles() {
        let style = {};

        if (this.top) {
          style['top'] = `${this.top}`;
        }

        if (this.minWidth) {
          style['min-width'] = `${this.minWidth}px`;
        }

        if (this.width) {
          style['width'] = `${this.width}px`;
          style['min-width'] = 'initial';
        }

        return style;
      }
    },

    watch: {
      value(val) {
        this.visible = val;
      },

      visible(val) {
        this.$emit('input', val);

        if (val) {
          this.$emit('open');
        } else {
          this.$emit('close');
        }
      }
    },

    methods: {
      handleClose() {
        this.visible = false;
      }
    },

    mounted() {
      if (this.value) {
        this.visible = this.value;
      }
    }
  };
</script>