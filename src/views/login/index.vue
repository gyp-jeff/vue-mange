<template>
  <div class="login" v-loading='loading'>
    <div class="loginWindow">
      <h3 class="login_title">后台管理系统登录</h3>
      <el-form :model="form" label-width="100px">
        <el-form-item label="用户名" label-width="80px" :rules="[{ required: true, message: '年龄不能为空',trigger: 'blur'}]">
          <el-input v-model="username" :placeholder="'请输入用户名'" size="small"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px" :rules="[{ required: true, message: '密码不能为空',trigger: 'blur'}]">
          <el-input v-model="password" :placeholder="'请输入密码'" show-password size="small"></el-input>
        </el-form-item>
        <el-form-item class="submit" label-width="80px">
          <el-button type="primary" size="mimi">清空</el-button>
          <el-button type="primary" size="mimi" @click='loginUser'>登录用户</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getLoginUser } from '@/require/api'
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      username: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    loginUser(token) {
      this.loading = true
      let userLoginInfo = { username: this.username, password: this.password }
      getLoginUser(userLoginInfo).then((res) => {
        if (res.status == 200) {
          if (res.data == '') {
            this.loading = false
            this.$message({
              type: 'warning',
              message: '请输入正确的用户名和密码',
              center: true,
            })
          } else {
            localStorage.setItem('token', res.data)
            this.$router.push({ name: 'home' })
          }
        }
      })
    },
  },
}
</script>

<style lang='less' scoped>
.loginWindow {
  width: 400px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  .login_title {
    margin: 0 auto 30px auto;
    text-align: center;
  }
  .submit {
    margin-left: 40px;
  }
}
</style>