import Product from '@/types/Product'
import { StoreOptions, createStore } from 'vuex'

export default createStore({
  state: {
    product: {id: 0,
        title: "string",
        price: 0,
        description: "string",
        category: "string",
        image: "string",
        rating: {
            rate: 0,
            count: 0
        }} as Product
  },
  getters: {
    getPost(state){
        return {...state.product}
    }
  },
  mutations: {
    changePost(state, payload){
        state.product = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
