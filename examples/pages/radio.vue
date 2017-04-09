<template>
  <div>
    <p>单选框</p>
    <v-radio v-model="checked" label="orange">橘子</v-radio>
    <p class="result">{{ checked }}</p>

    <p>禁用状态</p>
    <v-radio v-model="fruit2" label="apple" disabled>苹果</v-radio>
    <v-radio v-model="fruit2" label="banana" disabled>香蕉</v-radio>
    <p class="result">{{ fruit2 }}</p>
    
    <p>单选框组</p>
    <v-radio v-model="fruit" label="apple">苹果</v-radio>
    <v-radio v-model="fruit" label="banana">香蕉</v-radio>
    <v-radio v-model="fruit" label="pear">梨子</v-radio>
    <p class="result">{{ fruit }}</p>

    <p>单选框组</p>
    <v-radio-group v-model="city">
      <v-radio label="beijing">北京</v-radio>
      <v-radio label="shanghai">上海</v-radio>
      <v-radio label="guangzhou">广州</v-radio>
      <v-radio label="shenzhen">深圳</v-radio>
    </v-radio-group>
    <p class="result">{{ city }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: '',
        fruit: 'banana',
        fruit2: 'banana',
        city: 'shanghai'
      };
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