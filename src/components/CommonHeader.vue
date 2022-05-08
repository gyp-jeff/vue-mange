<template>
  <div class="commonHeader">
    <!-- 左侧区域 -->
    <div class="l-content">
      <el-button plain icon='el-icon-menu' size='mini' @click="handleMenu"></el-button>
      <!-- <h3 style="color:#fff">首页</h3> -->
      <!-- 面包屑标签 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ name: item.name }" v-for="item in breadCrumb" :key="item.path+''">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 右侧头像区域 -->
    <div class="r-content">
      <el-dropdown trigger='click' size='mini'>
        <span class="el-dropdown-link">
          <img :src="userImg" class="user">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'commonHeader',
  data() {
    return {
      userImg: require('../assets/img/touxiang.jpg'),
    }
  },
  computed: {
    ...mapState('tab', ['breadCrumb', 'currentBreadCrumb']),
  },
  methods: {
    handleMenu() {
      this.$store.commit('tab/collapseMenu')
    },
  },
  watch: {
    '$route.name': {
      handler(toName) {
        this.$store.commit('tab/shiftTag', { name: toName })
      },
      deep: true, // 深度监听
      immediate: true, // 第一次初始化渲染就可以监听到
    },

    // $route: {
    //   // $route可以用引号，也可以不用引号
    //   handler(to, from) {
    //     console.log('路由变化了')
    //     console.log('当前页面路由：' + to)
    //     console.log('上一个路由：' + from)
    //   },
    //   deep: true, // 深度监听
    //   immediate: true, // 第一次初始化渲染就可以监听到
    // },
    // currentBreadCrumb() {
    //   console.log(this.currentBreadCrumb)
    //   console.log(this.$route.name)
    //   // this.$store.commit('tab/currentBreadCrumb', this.currentBreadCrumb)
    // },
  },
}
</script>

<style lang='less' scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.commonHeader {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  /deep/ .el-breadcrumb__inner.is-link {
    font-weight: 400;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    :hover {
      color: #fff;
    }
  }
}
</style>
