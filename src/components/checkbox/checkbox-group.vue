<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls = 'v-checkbox-group';

  export default {
    name: prefixCls,

    props: {
      value: [Array, Boolean]
    },

    mounted() {
      this.$children.forEach(child => {
        child.$on('on-checkbox-change', value => {
          this.$emit('input', value);
        });
      });
    }
  };
</script>