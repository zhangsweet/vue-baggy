<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls = 'v-radio-group';

  export default {
    name: prefixCls,

    props: {
      value: [String, Number]
    },

    mounted() {
      this.$children.forEach(child => {
        child.$on('on-radio-change', value => {
          this.$emit('input', value);
        });
      });
    }
  };
</script>