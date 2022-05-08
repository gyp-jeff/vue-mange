<template>
  <div class="tableCommon">
    <el-table :data="tableData" stripe>
      <el-table-column v-for="item in tableLabel" :key="item.prop" :prop="item.prop" :label="item.label" :width="item.width?item.width:180" align="center">
        <template slot-scope="scope">
          <span>{{scope.row[item.prop]}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delInfo(scope.row)">删除</el-button>
        </template>
      </el-table-column>
      <el-pagination class="pager" layout="prev,pager,next" :total="config.total" :current-page.sync="config.page" @current-change="changePage" :page-size="20"></el-pagination>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total" :page-size.sync='pageSize' @current-change='changePage' class="pager">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'tableCommon',
  props: {
    tableLabel: Array,
    tableData: Array,
    config: Object,
    pageSize: {
      type: [String, Number],
      default: 8,
    },
    total: {
      type: [String, Number],
      default: 8,
    },
  },
  methods: {
    handleEdit(row) {
      // console.log(row)
      this.$emit('edit', row)
    },
    delInfo(row) {
      this.$emit('del', row)
    },
    changePage(val) {
      this.$emit('changePage', val)
    },
  },
}
</script>

<style lang="less" scoped>
.tableCommon {
  height: calc(100%-62px);
  background-color: #fff;
  .pager {
    position: absolute;
    bottom: 0;
    right: 10px;
  }
}
</style>