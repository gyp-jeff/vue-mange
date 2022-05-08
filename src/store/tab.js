export default {
  namespaced: true,
  state: {
    isCollapse: false,
    breadCrumb: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home',
      }
    ],
    currentBreadCrumb: {
      path: '/',
      name: 'home',
      label: '首页',
      icon: 's-home',
      url: 'Home/Home',
    },
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    shiftTag(state, val) {
      state.currentBreadCrumb = val
    },
    selectBreadCrumb(state, val) {
      state.currentBreadCrumb = val
      // console.log(state.currentBreadCrumb);
      let allBreadCrumb = state.breadCrumb.map(item => item.path);
      if (!allBreadCrumb.some(item => { return item == state.currentBreadCrumb.path })) {
        state.breadCrumb.push(val)
      }
    },
    removeTag(state, val) {
      let deleteTag = [];
      state.breadCrumb.forEach(item => {

        if (val.path !== item.path) {
          deleteTag.push(item)
        }
        state.breadCrumb = deleteTag
      })
    }
  }
}