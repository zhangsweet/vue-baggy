<template>
  <label :class="checkboxClasses">
    <span :class="inputClasses">
      <span :class="innerClasses"></span>
      <input
        type="checkbox"
        :value="label"
        :class="originalClasses"
        :disabled="disabled"
        v-model="model">
    </span>
    <slot>{{ value }}</slot>
  </label>
</template>

<script>
  import { oneOf } from '../../utils/assist';

  const prefixCls = 'v-checkbox';

  export default {
    name: prefixCls,

    props: {
      value: [Array, Boolean],
      label: [String, Number],
      disabled: Boolean
    },

    computed: {
      checkboxClasses() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-checked`]: this.checkedClasses,
            [`${prefixCls}-disabled`]: this.disabled
          }
        ];
      },

      inputClasses() {
        return `${prefixCls}-input`;
      },

      innerClasses() {
        return `${prefixCls}-inner`;
      },

      originalClasses() {
        return `${prefixCls}-original`;
      },

      checkedClasses() {
        if (typeof this.model === 'boolean') {
          return this.model;
        } else {
          return oneOf(this.label, this.model);
        }
      },

      isGroup() {
        let parent = this.$parent;
        return (parent.$options.name === 'v-checkbox-group');
      },

      model: {
        get() {
          return this.isGroup ? this.$parent.value : this.value;
        },
        set(val) {
          if (this.isGroup) {
            this.$emit('on-checkbox-change', val);
          } else {
            this.$emit('input', val);
          }
        }
      },
    }
  };
</script>