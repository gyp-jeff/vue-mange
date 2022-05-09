<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top:20px">
      <!-- 登录用户 -->
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg">
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">总管理员</p>
          </div>
        </div>
        <hr style="margin-top:20px">
        <div class="loginInfo">
          <p>上次登录时间：<span>{{timeStr}}</span></p>
          <p>上次登录地点：<span>南京</span></p>
        </div>
      </el-card>
      <!-- 品牌购买表格 -->
      <el-card style="margin-top:20px;height:400px">
        <el-table :data="tableData">
          <el-table-column v-for="(val,key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="16" style="margin-top:20px">
      <div class="numInfo">
        <el-card v-for="item in countData" :key='item.name' :body-style="{display:'flex',padding:0,width:'260px',height:'100%'}" shadow="hover">
          <i class=" icon" :class="'el-icon-'+item.icon" :style="{background:item.color}"></i>
          <div class="detail">
            <p class="num">￥{{item.value}}</p>
            <p class="text">￥{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <!-- 折线图 -->
      <el-card style="height:280px;margin-top:20px" shadow='hover'>
        <div style='height:280px' ref="lineChart"> </div>
      </el-card>
      <div class="graph" style="display:flex;justify-content:space-between;margin-top:20px">
        <!-- 柱状图 -->
        <el-card style="height:260px; shadow='hover'">
          <div style="height:260px;width:396px" ref="bar"></div>
        </el-card>
        <!-- 饼图 -->
        <el-card style="height:260px;width:396px" shadow='hover'>
          <div style="height:260px;width:396px" ref="pie"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getPhoneInfo, getOrderInfo, getChartInfo } from '@/require/api'
import * as echarts from 'echarts'
export default {
  name: 'home',
  async mounted() {
    let { data: phoneData } = await getPhoneInfo()
    this.tableData = phoneData
    let { data: orderData } = await getOrderInfo()
    this.countData = orderData
    let { data: chartData } = await getChartInfo()
    // 折线图数据
    this.chartData = chartData[0].data
    this.chartYear = chartData[0].data.map((item) => {
      return item.year
    })
    // 柱状图数据
    this.barData = chartData[1].bar
    // 饼图数据
    this.pieData = chartData[2].pie[0]
    // console.log(this.pieData)
    this.getLineChart()
    this.getBarChart()
    this.getPieChart()
    // 获取当前时间
    this.getTimeStr()
  },
  data() {
    return {
      userImg: require('../../assets/img/touxiang.jpg'),
      tableData: [],
      tableLabel: {
        name: '品牌',
        todayBuy: '今日购买',
        mothBuy: '本月购买',
        totalBuy: '总购买',
      },
      countData: [],
      chartData: [],
      chartYear: [],
      barData: [],
      pieData: [],
      timeStr: '',
    }
  },
  methods: {
    // 折线图
    getLineChart() {
      // 品牌数据
      const brand = Object.keys(this.chartData[0]).splice(0, 4)
      const xAxis = { type: 'category', boundaryGap: false, data: this.chartYear }
      const series = []
      brand.forEach((val, index) => {
        series.push({
          name: brand[index],
          type: 'line',
          stack: 'Total',
          data: this.chartData.map((item) => {
            delete item.year
            return item[val]
          }),
        })
      })
      var option = {
        // 图表详细信息显示位置
        tooltip: {
          trigger: 'axis',
        },
        // 图例
        legend: {},
        // x轴数据
        xAxis: xAxis,
        yAxis: { type: 'value' },
        // 图上数据
        series: series,
      }
      var myChart = echarts.init(this.$refs.lineChart)
      myChart.setOption(option)
      // console.log(series)
    },
    // 柱状图
    getBarChart() {
      const week = this.barData.map((item) => {
        return item.week
      })
      const userNum = Object.keys(this.barData[0]).splice(0, 2)
      const series = []
      userNum.forEach((item, index) => {
        series.push({
          name: index % 2 === 0 ? '新增用户' : '活跃用户',
          type: 'bar',
          emphasis: {
            focus: 'series',
          },
          data: this.barData.map((val) => {
            return val[item]
          }),
        })
      })
      // console.log(series)
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {},
        xAxis: [
          {
            type: 'category',
            data: week,
          },
        ],
        yAxis: [{ type: 'value' }],
        series: series,
      }
      var myChart = echarts.init(this.$refs.bar)
      myChart.setOption(option)
    },
    // 饼图
    getPieChart() {
      const data = []
      for (let i in this.pieData) {
        data.push({ name: i, value: this.pieData[i] })
      }
      const option = {
        tooltip: { trigger: 'item' },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '购买品牌数量',
            type: 'pie',
            radius: '50%',
            data: data,
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      }
      const myChart = echarts.init(this.$refs.pie)
      myChart.setOption(option)
    },
    // 获取当前时间
    getTimeStr() {
      let year, month, day
      let date = new Date()
      year = date.getFullYear()
      month = date.getMonth() + 1
      day = date.getDate()
      month = month < 10 ? '0' + month : month
      day = day < 10 ? '0' + day : day
      this.timeStr = year + '-' + month + '-' + day
      return this.timeStr
    },
  },
}
</script>

<style lang="less" scoped>
.user {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .userInfo {
    display: flex;
    font-size: 14px;
    color: #00a4ff;
    flex-direction: column;
    align-items: center;
  }
}
.loginInfo {
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
}
.numInfo {
  display: flex;
  height: 160px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  .el-card {
    height: 70px;
  }
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 89px;
  height: 100%;
  font-size: 40px;
  color: #fff;
}
.detail {
  margin-left: 20px;
  .num {
    font-weight: 700;
  }
  .text {
    font-size: 10px;
    color: #bfbfbf;
  }
}
</style>