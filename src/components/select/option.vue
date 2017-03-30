<template>
  <li
    :class="classes"
    @click.stop="select(value, label)">{{ label }}</li>
</template>

<script>
  const prefixCls = 'v-option';

  export default {
    name: prefixCls,

    props: {
      label: [String, Number],
      value: [String, Number]
    },

    data() {
      return {
        selected: false
      };
    },

    computed: {
      classes() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-selected`]: this.selected
          }
        ];
      }
    },

    methods: {
      select(value, label) {
        this.$emit('on-select-change', value, label);
      }
    }
  };
</script>