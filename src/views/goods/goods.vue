<template>
  <div class="goods">
    <div class="goodsHeader">
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
  name: 'goods',
  components: { formCommon },
}
</script>

<style lang='less' scoped>
.goodsHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>