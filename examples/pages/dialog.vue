<template>
  <div>
    <p>基础用法</p>
    <v-button @click="visible = true;">显示对话框</v-button>
    <v-dialog v-model="visible">
      <span>这是一段信息</span>
      <span slot="footer">
        <v-button @click="visible = false">取 消</v-button>
        <v-button type="primary" @click="visible = false">确 定</v-button>
      </span>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    },

    watch: {
      visible(val) {
        console.log('watch -- ', val);
      }
    }
  };
</script>

<style lang="scss" scoped>
  button {
    margin: 2px 5px;
  }
</style>