<template>
  <div class="user">
    <el-dialog :title="add == 'add' ? '新增用户':'修改用户'" :visible.sync='dialogVisible'>
      <form-common :form="operateForm" :formLabel="operateFormLabel" :inline="true" ref="form" :rules="rules"></form-common>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirm">提交</el-button>
      </div>
    </el-dialog>
    <div class="userHeader">
      <el-button @click="setDialogVisible" type="primary" size="small">+ 新增</el-button>
      <form-common :form="searchForm" :formLabel="formLabel" :inline="true" @inputText='getInputText'>
        <el-button type="primary" @click="getList" size="small">搜索</el-button>
      </form-common>
    </div>
    <table-common :tableLabel="tableLabel" :config="config" :tableData="tableData" :total='totalNumber' @edit="userEdit" @del="delUser" @changePage='currentPage'></table-common>
  </div>
</template>
<script>
import formCommon from '@/components/formCommon.vue'
import { getUserPage, sendAddressInfo, getUserInfo, sendAllUser, delUser, sendInputValue, getAllInputValue } from '@/require/api'
import TableCommon from '@/components/tableCommon.vue'
export default {
  components: { formCommon, TableCommon },
  name: 'user',
  async mounted() {
    let { data: userPage } = await getUserPage()
    this.operateFormLabel = userPage
    let { data: userInfo } = await getUserInfo(this.currentPageNumber)
    // console.log(userInfo)
    this.tableData = userInfo[0]
    this.totalNumber = userInfo[1]
  },
  data() {
    return {
      // dialog标题文字判断
      add: '',
      // dialog 可见性
      dialogVisible: false,
      operateFormLabel: [],
      operateForm: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: '',
      },
      searchForm: {
        searchContent: '',
      },
      formLabel: [
        {
          model: 'searchContent',
          label: '',
          type: 'input',
        },
      ],
      rules: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
        // age: [{ required: true, message: '年龄不能为空', trigger: 'blur' }],
      },
      tableLabel: [
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'age',
          label: '年龄',
        },
        {
          prop: 'sex',
          label: '性别',
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 250,
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320,
        },
      ],
      tableData: [],
      config: {
        page: 1,
        total: 30,
      },
      rowData: {},
      delVisible: false,
      inputValue: '',
      currentPageNumber: 1,
      totalNumber: 0,
      isSearchValue: false,
      loading: true,
    }
  },
  methods: {
    setDialogVisible() {
      this.dialogVisible = true
      this.add = 'add'
      this.operateForm = {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: '',
      }
    },
    // 确认修改用户信息
    async confirm() {
      if (this.add === 'add') {
        await sendAddressInfo(this.operateForm)
        let { data: userInfomation } = await getUserInfo(this.currentPageNumber)
        this.tableData = userInfomation[0]
        this.totalNumber = userInfomation[1]
        this.$message({
          message: '新增用户成功！',
          type: 'success',
        })
      } else {
        await sendAllUser([this.rowData, this.operateForm])
        let { data: userInfo } = await getUserInfo(this.currentPageNumber)
        this.tableData = userInfo[0]
        this.totalNumber = userInfo[1]
        this.$message({
          message: '修改用户成功！',
          type: 'success',
        })
      }
      this.dialogVisible = false
    },
    getList() {
      this.isSearchValue = true
      sendInputValue(this.inputValue).then((res) => {
        // console.log(res)
      })
      getAllInputValue().then((res) => {
        if (res.status == 200) {
          console.log(res)
          this.tableData = res.data[0]
          this.totalNumber = res.data[1]
        }
      })
    },
    // 删除用户
    delUser(row) {
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          delUser(row).then(async (res) => {
            if (res.status == 200) {
              this.$message({
                type: 'success',
                message: '删除成功!',
              })
              getUserInfo(this.currentPageNumber).then((res) => {
                if (res.status == 200) {
                  this.tableData = res.data[0]
                  this.totalNumber = res.data[1]
                }
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    // 编辑用户信息
    userEdit(row) {
      // console.log(row)
      this.dialogVisible = true
      this.add = 'edit'
      this.rowData = JSON.parse(JSON.stringify(row))
      this.operateForm = JSON.parse(JSON.stringify(row))
    },
    // 获取搜索框内容
    getInputText(val) {
      this.inputValue = val
    },
    // 获取当前页码
    currentPage(page) {
      this.currentPageNumber = page
      if (!this.isSearchValue) {
        getUserInfo(page).then((res) => {
          if (res.status == 200) {
            this.tableData = res.data[0]
            this.totalNumber = res.data[1]
          }
        })
      } else {
        console.log('ok')
        getAllInputValue(this.currentPageNumber).then((res) => {
          if (res.status == 200) {
            console.log(res)
            this.tableData = res.data[0]
            this.totalNumber = res.data[1]
          }
        })
      }
    },
  },
}
</script>

<style lang='less' scoped>
.userHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>