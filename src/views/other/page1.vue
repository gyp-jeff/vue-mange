<template>
  <div class="page1">
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
  name: 'page1',
  components: { formCommon },
}
</script>

<style>
.pageHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>