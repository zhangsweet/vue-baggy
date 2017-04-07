<template>
  <div>
    <transition :name="prefixCls + '-fade'">
      <div
        v-show="visible"
        :class="prefixCls + '-shadow'"
        @click="handleClose"></div>
    </transition>

    <transition :name="prefixCls + '-ease'">
      <div :class="prefixCls" v-show="visible">
        <!-- header -->
        <div :class="prefixCls + '-header'">
          <span class="header-title">标题</span>
          <i class="header-close v-icon v-icon-android-close"
             @click="handleClose"></i>
        </div>

        <!-- body -->
        <div :class="prefixCls + '-body'">
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
      value: Boolean
    },

    data() {
      return {
        prefixCls,
        visible: false
      };
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