<template>
  <label :class="radioClasses">
    <span :class="inputClasses">
      <span :class="innerClasses"></span>
      <input 
        type="radio"
        :value="label"
        :class="originalClasses"
        :disabled="disabled"
        v-model="model">
    </span>
    <slot>{{ value }}</slot>
  </label>
</template>

<script>
  const prefixCls = 'v-radio';

  export default {
    name: prefixCls,

    props: {
      value: [String, Number],
      label: [String, Number],
      disabled: Boolean
    },

    computed: {
      radioClasses() {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-checked`]: (this.model === this.label),
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

      isGroup() {
        let parent = this.$parent;
        return (parent.$options.name === 'v-radio-group');
      },

      model: {
        get() {
          return this.isGroup ? this.$parent.value : this.value;
        },

        set(val) {
          if (this.isGroup) {
            this.$emit('on-radio-change', val);
          } else {
            this.$emit('input', val);
          }
        }
      }
    }
  };
</script>