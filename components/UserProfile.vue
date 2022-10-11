<template>
  <div class="user-data-container">
    <a-card :title="userData.full_name" class="user-card">
      <div class="user-data">
        <div class="label">
          <span>Email:</span>
          <span>Phone:</span>
          <span>Address:</span>
          <span>CCCD:</span>
        </div>
        <div class="data">
          <p>{{userData.email}}</p>
          <p>{{userData.phone_number}}</p>
          <p>{{userData.address}}</p>
          <p>{{userData.cmt.slice(0,8)}}***</p>
        </div>
      </div>
      <template slot="actions" >
        <button @click="logoutHandle">Logout</button>
      </template>
    </a-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    userData () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    async logoutHandle () {
      try {
        const response = await this.$auth.logout()
        console.log('logout', response)
      } catch (err) {
        console.log('logoutErr', err)
      }
    }
  }
}
</script>
<style scoped>
  .user-data-container {
    padding: 30px;
    background-color: #ececec;
  }

  .user-card {
    /* -webkit-box-shadow: 5px 5px 7px -7px rgba(0, 0, 0, 85%); */
    box-shadow: 5px 5px 7px -7px rgba(0 0 0 / 85%);
  }

  .user-data {
    display: flex;
    font-size: 16px;
  }

  .user-data .label {
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  .user-data .label span {
    margin-bottom: 1em;
    font-weight: 600;
  }

  button:hover {
    cursor: pointer;
  }
</style>
