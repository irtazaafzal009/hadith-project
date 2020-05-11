export const state = () => ({
  posts:[]
})

export const mutations = {
  SET_POSTS(state,posts){
    state.posts = posts;
  }
}

export const actions = {
  allUsers({commit}){
    const axios = require('axios');
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      commit('SET_POSTS', response.data)
    })
  }
}

