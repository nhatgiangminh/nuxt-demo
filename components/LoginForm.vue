<template>
  <div class="login">
    <a-row type="flex">
      <a-col :span="8" :offset="8">
        <div class="form-container">
          <a-form layout="vertical" :form="form" @submit.prevent="userLogin">
            <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
              <a-input v-decorator="decorators.userName" placeholder="Username" />
            </a-form-item>
            <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
              <a-input v-decorator="decorators.password" placeholder="Password" type="password" />
            </a-form-item>
            <a-form-item>
              <a-button html-type="submit" type="primary" :disabled="hasErrors(form.getFieldsError())">Submit</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
    <!-- <a-row>
      <a-col :span="12" :offset="6">
        <p>{{ userName }}</p>
        <p>{{ passWord }}</p>
      </a-col>
    </a-row> -->
  </div>
</template>

<script>

const decorators = {
  userName: ['userName', {
    rules: [{ required: true, message: 'Please fill out your username!' }]
  }],
  password: ['password', {
    rules: [{ required: true, message: 'Password is not be empty!' }]
  }]
}
const hasErrors = (fieldsError) => {
  Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  data () {
    return {
      decorators,
      hasErrors,
      form: this.$form.createForm(this, { name: 'vertical_login' })
    }
  },
  // mounted () {
  //   this.$nextTick(() => this.form.validateFields())
  // },
  methods: {
    userLogin () {
      this.form.validateFields(async (errors, values) => {
        if (!errors) {
          try {
            const response = await this.$auth.loginWith('local', { data: { phone_number: values.userName, password: values.password } })
            console.log(response)
            console.log(this.$store.state.auth.user)
          } catch (e) {
            alert('Username or password is incorrect! Try again')
          };
        }
      })
    },
    userNameError () {
      const { isFieldTouched, getFieldError } = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },
    passwordError () {
      const { isFieldTouched, getFieldError } = this.form
      return isFieldTouched('password') && getFieldError('password')
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 50px;
}
</style>
