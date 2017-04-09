<template>
  <div :class="classes">
    <input
      v-if="type !== 'textarea'"
      :type="type"
      :value="currentValue"
      :class="prefixCls + '-text'"
      :disabled="disabled"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput">
    <textarea
      v-else
      :value="currentValue"
      :class="prefixCls + '-textarea'"
      :disabled="disabled"
      :placeholder="placeholder"
      :rows="rows"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"></textarea>
  </div>
</template>

<script>
  import { oneOf } from '../../utils/assist';

  const prefixCls = 'v-input';

  export default {
    name: prefixCls,

    props: {
      type: {
        default: 'input',
        validator(value) {
          return oneOf(value, ['input', 'password', 'textarea']);
        }
      },
      value: [String, Number],
      placeholder: [String, Number],
      disabled: Boolean,
      rows: {
        default: 2,
        type: [String, Number]
      }
    },

    data() {
      return {
        prefixCls,
        currentValue: this.value
      };
    },

    computed: {
      classes() {
        return [
          prefixCls,
          {
            [`${prefixCls}-area`]: this.type === 'textarea',
          } 
        ];
      }
    },

    methods: {
      handleInput(event) {
        this.$emit('input', event.target.value);
        this.$emit('change');
      },

      handleFocus() {
        this.$emit('focus');
      },

      handleBlur() {
        this.$emit('blur');
      }
    }
  };
</script>