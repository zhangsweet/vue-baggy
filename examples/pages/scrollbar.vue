<template>
  <div>
    <p>滚动条</p>
    <v-scrollbar class="my-scrollbar">
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
      <div class="kolom"></div>
    </v-scrollbar>
  </div>
</template>

<style scoped>
  .my-scrollbar {
    background: #eee;
    width: 400px;
    max-height: 400px;
  }

  .kolom {
    width: 650px;
    height: 250px;
    margin: 50px;
    background-color: #20a0ff;
  }
</style>