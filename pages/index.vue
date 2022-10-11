<template>
  <div>
    <a-col :span="8" :offset="8">
      <UserProfile />
    </a-col>
    <br/>
    <a-col :span="24">
      <UserOrder/>
    </a-col>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import UserOrder from '../components/UserOrder.vue'
export default {
  name: 'home',
  components: { UserProfile, UserOrder },
  async asyncData ({ app, store }) {
    const response = await app.$axios.get('/order/ordersell', { params: { loai: 0, limit: 1000 } })
    const { data } = response
    store.dispatch('orders/fetchOrders', { orders: data.data })
    return { orders: data }
  }
}
</script>
