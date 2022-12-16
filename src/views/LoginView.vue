<template>
  <div
    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mt-8">
    <form @submit.prevent="logIn">
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" v-model="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email" required>
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
          password</label>
        <input type="password" v-model="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password" required>
      </div>
      <button
      type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Login</button>
    </form>
  </div>

</template>
  
<script>
import axios from "axios"
export default {
  data() {
    return {
      email: "",
      password: "",
      gender: "",
      username: "",
      age: null,
      isLogin: true,
      signUpInfo: {},
      baseUrl: import.meta.env.VITE_BASE_URL
    }
  },
  methods: {
    changeStatus() {
      this.isLogin = !this.isLogin
    },
    async logIn() {
      console.log(this.baseUrl)
      await axios.post(this.baseUrl + "user/logIn", { email: this.email, password: this.password }).then(res => {
        if (res.data.message == "login") {
          localStorage.setItem("token", res.data.data.token)
          localStorage.setItem('role', res.data.role)
          localStorage.setItem("id", res.data.id)
          this.$router.push("/home");
        }
      })
        .catch((err) => {
          let errorResponse = err.response.data.message
          if (errorResponse == "Wrong Email Address!!") {
            alert("Wrong Email Address!!")
          } else if (errorResponse == "Wrong Password!!") {
            alert("Wrong Password")
          }
        })
    },
    async signUp() {
      if (this.allRequired) {
        this.signUpInfo = {
          username: this.username,
          email: this.email,
          gender: this.gender,
          age: this.age
        }
        await axios.post(this.baseUrl + "user/signUp", this.signUpInfo).then(res => {
          console.log(res.data)
          this.isLogin = true
        })
      } else {
        alert("All fields are required!!")
      }
    }
  },
  computed: {
    allRequired() {
      if (this.username != "" && this.gender != "" && this.email != "" && this.age != null) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  /* height: 100%; */
  margin-top: 7.5%;
}

.card {
  width: 40%;
  margin-top: auto;
  margin-bottom: auto;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.social_icon span {
  font-size: 60px;
  margin-left: 10px;
  color: #FFC312;
}

.social_icon span:hover {
  color: white;
  cursor: pointer;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: #FFC312;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;

}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: black;
  background-color: #FFC312;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: rgb(255, 255, 255);
}

.links a {
  margin-left: 4px;
}

.links a:hover {
  cursor: pointer;
  color: turquoise
}

.forget a {
  color: white
}
</style>