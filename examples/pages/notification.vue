<template>
  <div>
    <p>基础用法</p>
    <v-button @click="openNotification1">打开通知</v-button>
    <v-button @click="openNotification2">打开通知（仅标题）</v-button>
    <v-button @click="openNotification7">打开通知（不会关闭）</v-button>

    <p>带描述性</p>
    <v-button
      type="success"
      @click="openNotification3">成功通知</v-button>
    <v-button
      type="warning"
      @click="openNotification4">警告通知</v-button>
    <v-button
      type="danger"
      @click="openNotification5">失败通知</v-button>
    <v-button
      type="info"
      @click="openNotification6">信息通知</v-button>
  </div>
</template>

<script>
  export default {
    methods: {
      openNotification1() {
        this.$notify({
          title: '通知',
          message: '这是一条通知消息，这是一条通知消息',
        });
      },

      openNotification2() {
        this.$notify({
          title: '仅标题的通知'
        });
      },

      openNotification3() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的消息',
          type: 'success'
        });
      },

      openNotification4() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的消息',
          type: 'warning'
        });
      },

      openNotification5() {
        this.$notify({
          title: '失败',
          message: '这是一条失败的消息',
          type: 'error'
        });
      },

      openNotification6() {
        this.$notify({
          title: '信息',
          message: '这是一条信息的消息',
          type: 'info'
        });
      },

      openNotification7() {
        this.$notify({
          title: '通知',
          message: '这是一条不会自动关闭的通知消息',
          duration: 0
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  button {
    margin: 2px 5px;
  }
</style>