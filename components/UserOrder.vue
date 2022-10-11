<template>
  <div class="user-orders-container">
    <a-table :columns="columns" :data-source="getOrders">
      <span slot="lailo" slot-scope="lailo">
        <p :class="lailo < 0 ? 'am' : 'duong'">{{lailo}}</p>
      </span>
      <span slot="action" slot-scope="record">
        <span class="active-row" v-if="record.trangthai === 1">Activated</span>
        <button v-if="record.trangthai === 0" @click="activateHandle(record)">Chua Kich Hoat</button>
      </span>
    </a-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'Name'
  },
  {
    dataIndex: 'tongban',
    key: 'tongban',
    title: 'Tổng bán'
  },
  {
    dataIndex: 'price_total',
    key: 'price_total',
    title: 'Tổng giá'
  },
  {
    dataIndex: 'lailo',
    key: 'lailo',
    title: 'Lãi Lỗ',
    scopedSlots: { customRender: 'lailo' }
  },
  {
    title: 'Trang Thai',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  data () {
    return {
      columns
    }
  },
  // mounted () {
  //   console.log(this.$store.state.orders.orders)
  // },
  computed: {
    ...mapGetters('orders', ['getOrders'])
  },
  methods: {
    activateHandle (record) {
      this.$store.dispatch('orders/setTrangThai', { order: record })
    }
  }
}

</script>
<style scoped>
  .active-row {
    color: lightgreen;
  }

  button {
    border: none;
    background-color: rgba(227 252 0 / 57.3%);
    color: gray;
  }

  button:hover {
    cursor: pointer;
    background-color: rgba(0 128 0 / 40.5%);
  }

  .am {
    color: red;
  }

  .duong {
    color: green;
  }
</style>
