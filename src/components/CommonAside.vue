<template>
  <el-menu :default-active="this.currentBreadCrumb.name" class="el-menu-vertical-demo" background-color='#545c64' text-color='#fff' active-text-color='#ffd04b' :collapse="isCollapse">
    <h3>{{isCollapse ? '管理':'后台管理系统'}}</h3>
    <!-- 一级页面 -->
    <el-menu-item v-for="item in noChildren" :index="item.name+''" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <!-- 其他页面 -->
    <el-submenu v-for="item in hasChildren" :key="item.path" :index="item.name+''">
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item :index="subItem.name+''" @click="clickMenu(subItem)">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home',
        },
        {
          path: '/goods',
          name: 'goods',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage',
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage',
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/Page1',
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/Page2',
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      })
      this.$store.commit('tab/selectBreadCrumb', item)
    },
  },
  computed: {
    ...mapState('tab', ['currentBreadCrumb']),
    noChildren() {
      return this.menu.filter((item) => !item.children)
    },
    hasChildren() {
      return this.menu.filter((item) => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  },
}
</script>

<style lang='less'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>