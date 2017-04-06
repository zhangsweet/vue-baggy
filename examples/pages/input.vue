<template>
  <div>
    <p>输入框</p>
    <v-input v-model="input" placeholder="请输入..."></v-input>
    <p class="result">{{ input }}</p>

    <p>密码框</p>
    <v-input
      v-model="password"
      type="password"
      placeholder="请输入..."
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"></v-input>
    <p class="result">{{ password }}</p>

    <p>文本域</p>
    <v-input
      v-model="textarea"
      type="textarea"
      placeholder="请输入..."
      rows="4"></v-input>
    <p class="result">{{ textarea }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: '',
        password: '',
        textarea: ''
      };
    },

    methods: {
      handleFocus() {
        console.log('focus');
      },

      handleBlur() {
        console.log('blur');
      },

      handleChange() {
        console.log(this.password);
      }
    }
  };
</script>

<style lang="scss" scoped>
  label {
    margin: 0 5px;
  }

  .result {
    color: #20a0ff;
  }
</style>