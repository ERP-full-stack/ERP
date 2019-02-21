<template>
  <div class="a-menu">
    <el-menu
      default-active="2"
      :unique-opened="true"
      :router="true"
      class="el-menu-vertical-demo lqy-menu">
      <template v-for="(item, index) in menu">
        <el-submenu index="1" v-if="item.children" :key="index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.label}}</span>
          </template>
          <el-menu-item v-for="(cell, key) in item.children"
                        :index="cell.path">{{cell.label}}</el-menu-item>
          <!--<el-submenu index="1-4">-->
            <!--<template slot="title">选项4</template>-->
            <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
          <!--</el-submenu>-->
        </el-submenu>
        <el-menu-item :index="item.path" v-else :key="index">
          <!--<i class="iconfont" :class="item.icon"></i>-->
          <i class="el-icon-location"></i>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          label: '首页',
          path: '/',
          icon: 'icon-warning',
        },
        {
          label: '概览',
          path: '/overview/list',
          icon: 'icon-custom',
        },
        {
          label: '报表模块',
          path: '/overview/list',
          icon: 'icon-custom',
          children: [
            {
              label: '报表1',
              path: '/report/report1/index',
              icon: 'icon-custom',
            },
            {
              label: '报表2',
              path: '/report/report2/index',
              icon: 'icon-custom',
            }
          ]
        },
        {
          label: '日历',
          path: '/calendar',
          icon: 'icon-custom',
        },
      ],
    };
  },
  methods: {
    routerLink(item) {
      this.$router.push({
        path: item.path,
      });
    },
  },
};
</script>

<style scoped lang="scss">
  .a-menu {
    flex: none;
    width: 160px;
    height: 100%;
    background: #f1f1f5;
    border-right: 1px solid #dbd9e1;
  }
  .el-menu {
    border-right: none
  }
</style>
