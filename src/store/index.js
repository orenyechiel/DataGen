import { createStore } from 'vuex'

export default createStore({
  state: {
    shopingList: [
      {
        id: 1,
        ingredient: "Tomato",
        price: "4.20",
        description: "The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant."
      },
      {
        id: 2,
        ingredient: "Banana",
        price: "6.20",
        description: "The Banana is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant."
      },
      {
        id: 3,
        ingredient: "Mango",
        price: "3.10",
        description: "The Mango is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant."
      },
    ]
  },
  getters: {
    getShoppingList(state) {
      return state.shopingList
    },
    getTotalPrice(state) {
      let total = 0
      state.shopingList.map(i => {
        total += Number(i.price)
      })
      return total
    },
  },
  mutations: {
    deleteItem(state, payload) {
      console.log(payload)
      const formated = state.shopingList.filter(i => i.id !== payload);
      state.shopingList = formated;
    },
    addProduct(state, payload) {
      state.shopingList.push(payload)
    }
  },
  // actions: {},
})
