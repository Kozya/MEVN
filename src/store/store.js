import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  state: {
    orders: [],
    shops: {},
    totalPrice: 0,
  },
  getters: {
  },
  mutations: {
    addOrder(state, order) {
      state.orders.unshift(order);
    },
    setTotalPrice(state, price) {
      state.totalPrice = price;
    },
    setShops(state, shops) {
      state.shops = shops;
    }
  },
  actions: {
    async getShops({ commit }) {
      const response = await axios.get("api/shops");
      commit('setShops', response.data);
    }

  },
  modules: {
  }
})
