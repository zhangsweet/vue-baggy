<template>
  <div>
    <p>多选框</p>
    <v-checkbox v-model="checked" label="orange">橘子</v-checkbox>
    <p class="result">{{ checked }}</p>

    <p>多选框</p>
    <v-checkbox v-model="once" label="orange">橘子</v-checkbox>
    <p class="result">{{ once }}</p>

    <p>多选框组</p>
    <v-checkbox v-model="fruit" label="apple">苹果</v-checkbox>
    <v-checkbox v-model="fruit" label="banana">香蕉</v-checkbox>
    <v-checkbox v-model="fruit" label="pear">梨子</v-checkbox>
    <p class="result">{{ fruit }}</p>

    <p>多选框组</p>
    <v-checkbox-group v-model="city">
      <v-checkbox label="beijing">北京</v-checkbox>
      <v-checkbox label="shanghai">上海</v-checkbox>
      <v-checkbox label="guangzhou">广州</v-checkbox>
      <v-checkbox label="shenzhen">深圳</v-checkbox>
    </v-checkbox-group>
    <p class="result">{{ city }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
        once: [],
        fruit: [],
        city: []
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