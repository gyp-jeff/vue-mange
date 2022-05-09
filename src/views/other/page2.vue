<template>
  <div class="page2">
    <div class="pageHeader">
      <el-button type="primary" size="small">+ 新增</el-button>
      <form-common>
        <el-button type="primary" size="small">搜索</el-button>
      </form-common>
    </div>
    <el-table></el-table>
  </div>
</template>

<script>
import formCommon from '@/components/formCommon.vue'
export default {
  name: 'page2',
  components: { formCommon },
}
</script>

<style lang='less' scoped>
.pageHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>