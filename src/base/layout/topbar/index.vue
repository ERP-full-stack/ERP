<template>
  <div class="topbar">
    <div class="logo">
      Personal ERP
    </div>
    <div class="info">
      <!--<span class="username">{{this.$store.state.user.username}}</span>-->
      <!--<span class="logout" @click="logout">注销</span>-->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      if (this.$store.dispatch('user/logout')) {
        this.$router.push({
          path: '/login',
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .topbar {
    flex: none;
    width: 100%;
    height: 50px;
    background: #4d317c;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      color: #fff;
      font-size: 26px;
      margin-left: 25px;
      font-family: '幼圆';
    }
    .info {
      margin-right: 20px;
      span {
        margin-left: 10px;
      }
      .logout {
        cursor: pointer;
        color: #fff;
      }
    }
  }
</style>
