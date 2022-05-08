import request from './request.js'

// 请求手机数据
export const getPhoneInfo = () => {
  return request.get('/phone')
}

export const getOrderInfo = () => {
  return request.get('/order')
}

export const getChartInfo = () => {
  return request.get('/chart')
}
// user 页面表单数据
export const getUserPage = () => {
  return request.get('/userPage')
}
// 获取所有用户信息
export const getUserInfo = (page) => {
  return request({
    url: '/getuserinfo',
    method: 'GET',
    params: { page: page }
  })
}

// 添加新用户
export const sendAddressInfo = (val) => {
  console.log(val)
  return request({
    url: '/senduserpage',
    method: 'POST',
    data: val
  })
}

// 发送完整用户数据
export const sendAllUser = (val) => {
  console.log(val)
  return request({
    url: '/sendalluser',
    method: 'PUT',
    data: val
  })
}


// 删除用户
export const delUser = (val) => {
  return request({
    url: '/deluser',
    method: 'DELETE',
    data: val
  })
}

// 发送搜索框内容
export const sendInputValue = (val) => {
  console.log(val);
  return request({
    url: '/getinputvalue',
    method: 'GET',
    params: { val: val }
  })
}

// 搜索后用户数据
export const getAllInputValue = (page) => {
  console.log(page);
  return request({
    url: '/getAllInputValue',
    method: 'GET',
    params: { page: page }
  })
}