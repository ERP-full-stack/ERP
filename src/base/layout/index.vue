<template>
   <div class="layout">
     <Topbar></Topbar>
     <div class="content">
       <Menu></Menu>
       <div class="main">
         <router-view></router-view>
       </div>
     </div>
   </div>
</template>

<script>
import Menu from './menu/';
import Topbar from './topbar/';

export default {
  components: {
    Menu,
    Topbar,
  },
  mounted() {
    window.onresize = () => {
//      this.$bus.$emit('GLOBAL_RESIZE');
    };
  },
};
</script>

<style scoped lang="scss">
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      display: flex;
      flex-direction: row;
      .main {
        position: relative;
        flex: 1;
        padding: 0 16px 5px 16px;
        overflow: auto;
      }
    }
  }
</style>
