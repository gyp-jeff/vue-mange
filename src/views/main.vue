<template>
  <div class="home">
    <el-container style="height:100vh">
      <el-aside width="auto">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <el-main>
          <tag-common></tag-common>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import tagCommon from '@/components/tagCommon.vue'
export default {
  name: 'mainPart',
  components: { CommonAside, CommonHeader, tagCommon },
}
</script>

<style scoped lang='less' scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>
