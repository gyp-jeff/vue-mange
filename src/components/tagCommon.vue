<template>
  <div class="tag">
    <slot name="tag">
      <el-tag v-for="tag in breadCrumb" :key="tag.path+''" :closable="tag.name=='home'? false:true" type="" @click="shiftWeb(tag)" @close="removeTag(tag)">
        {{tag.label}}
      </el-tag>
    </slot>
  </div>

</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('tab', ['breadCrumb']),
  },
  methods: {
    ...mapMutations('tab', ['removeTag']),
    // 跳转内容
    shiftWeb(item) {
      this.$router.push({ name: item.name })
    },
    // 删除标签
    removeTag(item) {
      let length = this.breadCrumb.length - 1
      var index
      this.breadCrumb.forEach((a, i) => {
        if (a.name == item.name) {
          index = i
        }
      })
      this.$store.commit('tab/removeTag', item)
      console.log(index)
      if (index == length) {
        this.$router.push({
          name: this.breadCrumb[index - 1].name,
        })
      } else {
        this.$router.push({
          name: this.breadCrumb[index].name,
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.el-tag {
  margin-right: 5px;
  cursor: pointer;
}
</style>