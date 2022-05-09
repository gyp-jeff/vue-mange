// 导航数据
const menu = [
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
]
//手机购买表格数据
const tableData = [
    {
        name: 'oppo',
        todayBuy: 100,
        mothBuy: 300,
        totalBuy: 800,
    },
    {
        name: 'vivo',
        todayBuy: 100,
        mothBuy: 300,
        totalBuy: 800,
    },
    {
        name: 'iphone',
        todayBuy: 100,
        mothBuy: 300,
        totalBuy: 800,
    },
    {
        name: 'xiaomi',
        todayBuy: 100,
        mothBuy: 300,
        totalBuy: 800,
    },
    {
        name: 'meizu',
        todayBuy: 100,
        mothBuy: 300,
        totalBuy: 800,
    },
    {
        name: 'samsung',
        todayBuy: 100,
        mothBuy: 300,
        totalBuy: 800,
    },
];

const countData = [
    { name: '今日支付订单', value: 1234, icon: 'success', color: '#2ec7c9' },
    { name: '今日收藏订单', value: 210, icon: 'star-on', color: '#ffb980' },
    { name: '今日未支付订单', value: 1234, icon: 's-goods', color: '#5ab1ef' },
    { name: '本月支付订单', value: 1234, icon: 'success', color: '#2ec7c9' },
    { name: '本月收藏订单', value: 210, icon: 'star-on', color: '#ffb980' },
    { name: '本月未支付订单', value: 1234, icon: 's-goods', color: '#5ab1ef' },
]

const chartData = [
    {
        data: [{ iphone: 3000, xiaomi: 2000, meizu: 1568, oppo: 5426, vivo: 4561, year: 20220101 },
        { iphone: 4564, xiaomi: 855, meizu: 3568, oppo: 2426, vivo: 1561, year: 20220202 },
        { iphone: 4400, xiaomi: 3000, meizu: 568, oppo: 2426, vivo: 3561, year: 20220303 },
        { iphone: 4600, xiaomi: 2000, meizu: 1568, oppo: 1426, vivo: 4561, year: 20220304 },
        { iphone: 3000, xiaomi: 4500, meizu: 1568, oppo: 5026, vivo: 1561, year: 20220305 },
        { iphone: 3400, xiaomi: 2000, meizu: 1568, oppo: 3026, vivo: 2361, year: 20220306 },
        { iphone: 1100, xiaomi: 3500, meizu: 4468, oppo: 5426, vivo: 4761, year: 20220307 },],
    },
    {
        bar: [{ newUser: 20, activeUser: 202, week: '周一' },
        { newUser: 50, activeUser: 245, week: '周二' },
        { newUser: 100, activeUser: 136, week: '周三' },
        { newUser: 33, activeUser: 356, week: '周四' },
        { newUser: 10, activeUser: 258, week: '周五' },
        { newUser: 46, activeUser: 107, week: '周六' },
        { newUser: 56, activeUser: 444, week: '周日' },
        ]
    },
    {
        pie: [{ iphone: 464, xiaomi: 855, meizu: 358, oppo: 226, vivo: 161 }],

    }
]

const userPage = [
    {
        model: 'name',
        label: '姓名',
        type: 'input'
    },
    {
        model: 'age',
        label: '年龄',
        type: 'input'
    },
    {
        model: 'sex',
        label: '性别',
        type: 'select',
        opts: [
            {
                label: '男',
                value: '男'
            },
            {
                label: '女',
                value: '女'
            }
        ]
    },
    {
        model: 'birth',
        label: '出生日期',
        type: 'date'
    },
    {
        model: 'addr',
        label: '地址',
        type: 'input'
    }
]

let userInfo = [
    {
        name: '小明',
        sex: '男',
        age: '18',
        birth: '1998-11-15',
        addr: '江苏省南京市雨花台区',
    },
    {
        name: '小红',
        sex: '女',
        age: '18',
        birth: '1998-11-15',
        addr: '江苏省南京市建邺区',
    },
    {
        name: '小王',
        sex: '女',
        age: '19',
        birth: '2000-01-11',
        addr: '江苏省南京市江宁区',
    },
    {
        name: '小李',
        sex: '女',
        age: '18',
        birth: '1998-11-15',
        addr: '江苏省南京市建邺区',
    },
    {
        name: '小张',
        sex: '女',
        age: '18',
        birth: '1994-11-15',
        addr: '江苏省南京市建邺区',
    },
    {
        name: '小鞋',
        sex: '女',
        age: '18',
        birth: '1999-11-15',
        addr: '江苏省南京市建邺区',
    },
    {
        name: '小吕',
        sex: '女',
        age: '18',
        birth: '1993-11-15',
        addr: '江苏省南京市建邺区',
    },
    {
        name: '小陈',
        sex: '女',
        age: '18',
        birth: '1991-11-15',
        addr: '江苏省南京市建邺区',
    },
    {
        name: '小丁',
        sex: '女',
        age: '18',
        birth: '1995-11-15',
        addr: '江苏省南京市建邺区',
    },
    {
        name: '小龚',
        sex: '女',
        age: '16',
        birth: '1997-11-15',
        addr: '江苏省南京市建邺区',
    },
    {
        name: '小胡',
        sex: '女',
        age: '18',
        birth: '2000-11-15',
        addr: '江苏省南京市江宁区',
    },
    {
        name: '小芳',
        sex: '女',
        age: '18',
        birth: '2001-11-15',
        addr: '江苏省南京市玄武区',
    },
    {
        name: '小四',
        sex: '女',
        age: '18',
        birth: '2000-11-15',
        addr: '江苏省南京市雨花台区',
    },
    {
        name: '美羊羊',
        sex: '女',
        age: '18',
        birth: '2000-11-15',
        addr: '江苏省南京市建邺区',
    },
]
// 分页用户数据
let paginationUserInfo = []
// 搜索用户数据
let newArray = []
// 用户当前分页
let currentPage = null
// 模拟 token
let token = 'cf180c899350c2569482a823615260c01652020362355'


//引入 express 包
const express = require('express');
//创建应用对象
const app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    next();
})
// user页面数据
app.get('/userPage', (req, res) => {
    res.send(userPage)
})
// 手机表格数据
app.get('/phone', (req, res) => {

    res.send(tableData);
});
// 订单数据
app.get('/order', (req, res) => {
    res.send(countData)
})
// 图表数据
app.get('/chart', (req, res) => {
    res.send(chartData)
})
// 接收新用户
app.post('/senduserpage', (req, res) => {
    // console.log(req.body);
    userInfo.unshift(req.body)
    // console.log(userInfo);
    res.send(req.body)
})
// 接收所有用户数据
app.put('/sendalluser', (req, res) => {
    console.log(req.body);
    let rowData = req.body[0];
    let operateForm = req.body[1];
    userInfo.filter((item) => {
        if (item.name === rowData.name && item.age === rowData.age && item.sex === rowData.sex && item.birth === rowData.birth && item.addr === rowData.addr) {
            item.name = operateForm.name
            item.age = operateForm.age
            item.sex = operateForm.sex
            item.birth = operateForm.birth
            item.addr = operateForm.addr
        }
    })

    // console.log(userInfo);
    res.send(req.body)
})

// 删除用户数据
app.delete('/deluser', (req, res) => {
    userInfo.forEach((item, index) => {
        if (item.name === req.body.name && item.age === req.body.age && item.sex === req.body.sex && item.birth === req.body.birth && item.addr === req.body.addr) {
            userInfo.splice(index, 1)
        }
    })
    res.send(req.body)
})

// 获取用户数据
app.get('/getuserinfo', (req, res) => {
    paginationUserInfo.splice(0, paginationUserInfo.length)
    if (!req.query.page) {
        userInfo.filter((item, index) => {
            if (index < 8) {
                paginationUserInfo.push(item)
            }
        })
    } else {
        currentPage = req.query.page
        userInfo.filter((item, index) => {
            if (index >= 8 * (req.query.page - 1) && index <= 8 * (req.query.page - 1) + 7) {
                paginationUserInfo.push(item)
            }
        })
    }
    res.send([paginationUserInfo, userInfo.length])
})

// 获取搜索框内容
app.get('/getinputvalue', (req, res) => {
    let reg = new RegExp(req.query.val)
    newArray.splice(0, newArray.length)
    userInfo.filter(item => {
        if (reg.test(item.name) || reg.test(item.age) || reg.test(item.addr) || reg.test(item.birth)) {
            newArray.push(item)
        }
    })
    // console.log(newArray);
    res.send(req.query)
})

// 搜索后显示用户数据
app.get('/getAllInputValue', (req, res) => {
    paginationUserInfo.splice(0, paginationUserInfo.length)
    currentPage = req.query.page
    if (!currentPage) {
        newArray.filter((item, index) => {
            if (index < 8) {
                paginationUserInfo.push(item)
            }
        })
    } else {
        newArray.filter((item, index) => {
            if (index >= 8 * (currentPage - 1) && index <= 8 * (currentPage - 1) + 7) {
                paginationUserInfo.push(item)
            }
        })
    }
    // console.log(paginationUserInfo);
    res.send([paginationUserInfo, newArray.length])
})

app.get('/loginuser', (req, res) => {
    if (req.query.username == 'admin' && req.query.password == 'admin') {
        res.send(token)
    } else {
        res.send()
    }

})

//监听端口 启动服务
app.listen(3000, () => {
    console.log('服务已经启动.. 端口 3000 监听中....');
});