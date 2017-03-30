<template>
  <div>
    <p>选项框</p>
    <v-select v-model="select">
      <v-option label="北京市" value="Beijing"></v-option>
      <v-option label="上海市" value="Shanghai"></v-option>
      <v-option label="广州市" value="Guangzhou"></v-option>
      <v-option label="深圳市" value="Shenzhen"></v-option>
    </v-select>
    <p class="result">{{ select }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        select: 'Beijing'
      };
    }
  };
</script>

<style lang="scss" scoped>
  .result {
    color: #20a0ff;
  }
</style>