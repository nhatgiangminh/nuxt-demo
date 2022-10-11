export default {
  FETCH_ORDER (state, payload) {
    state.orders = payload
  },
  SET_TRANGTHAI_ORDER (state, payload) {
    const { order, index } = payload
    order.trangthai = 1
    state.orders[index] = order
    // console.log(state.orders)
  }
}
