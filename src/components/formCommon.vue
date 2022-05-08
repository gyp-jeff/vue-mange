<template>
  <div class="formCommon">
    <el-form ref="form" :model="form" label-width="100px" :inline='inline'>
      <el-form-item :label='item.label' v-for="item in formLabel" :key="item.label" :rules="rules" :prop="item.model">
        <el-input v-if="item.type == 'input'" v-model="form[item.model]" :placeholder="'请输入'+item.label" size="small" @change="getText"></el-input>
        <el-date-picker v-if="item.type == 'date'" type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="form[item.model]" size="small"></el-date-picker>
        <el-select v-if="item.type == 'select'" placeholder="请选择" v-model="form[item.model]" size="small">
          <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <slot></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'formCommon',
  created() {
    console.log(this.formLabel)
  },
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
    rules: Object,
  },
  methods: {
    getText(val) {
      this.$emit('inputText', val)
    },
  },
}
</script>

<style>
</style>