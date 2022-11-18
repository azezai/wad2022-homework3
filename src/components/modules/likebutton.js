const state = {
    imgFile: require('../assets/me.png'),
    imgAlt: '960e'
  }
  
  const getters = {
    getImgFile: state => state.imgFile,
    getImgAlt: state => state.imgAlt
  }
  
  const mutations = {
    CHANGE_IMAGE: (state, val) => {
      const { img, alt } = val
      state.imgFile = img
      state.imgAlt = alt
    }
  }
  
  const actions = {
    changeImage: ({ commit }) => {
      const val = {
        img: require('../assets/me.png'),
        alt: 'cake'
      }
      commit('CHANGE_IMAGE', val)
    }
  }
  
  export default {
    state,
    getters,
    mutations,
    actions
  }
  