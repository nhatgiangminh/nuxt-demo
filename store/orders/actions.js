export default {
  fetchOrders (vuexContext, { orders }) {
    const { commit } = vuexContext
    commit('FETCH_ORDER', orders)
  },
  setTrangThai (vuexContext, { order }) {
    const { state, commit } = vuexContext
    const index = state.orders.findIndex(item => item.id === order.id)
    commit('SET_TRANGTHAI_ORDER', { order, index })
  }
}
