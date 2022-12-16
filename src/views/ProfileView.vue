<template>
    <section>
        <div class="flex">
            <NavBar active-item="profile"></NavBar>
            <div class="mx-auto mt-5">
                <div
                    class="justify-around lg:justify-center items-center block md:flex shadow-md sm:rounded-lg p-4 w-full">
                    <div class="flex items-center justify-center mb-6 md:mb-0 px-5">
                        <div class="lg:mx-10">
                            <img src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&amp;options[accessoriesChance]=93"
                                alt="John Doe"
                                class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800">
                        </div>
                    </div>
                    <div class="flex items-center justify-center px-5">
                        <div class="space-y-3 text-center md:text-left lg:mx-12">
                            <h1 class="text-2xl"> Hello, <b>{{ userInfo.username }}</b>! </h1>
                            <p>Last login <b>12 mins ago</b> from <b>127.0.0.1</b></p>
                            <div class="flex justify-center md:block">
                                <div
                                    class="inline-flex items-center capitalize leading-none text-sm border rounded-full py-1.5 px-4 bg-blue-500 border-blue-500 text-white">
                                    <span class="inline-flex justify-center items-center w-4 h-4 mr-2"><svg
                                            viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                            <path fill="currentColor"
                                                d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <form class="rounded-lg flex-col bg-gray-50 flex my-3 p-2 shadow-md block">
                        <div class="flex-1 p-6">
                            <div class="last:mb-0">
                                <label class="block font-bold mb-2">Avatar</label>
                                <div class="">
                                    <div class="flex items-stretch justify-start relative">
                                        <label class="inline-flex">
                                            <a class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3"
                                                disabled="false">
                                                <span class="inline-flex justify-center items-center w-6 h-6">
                                                    <svg viewBox="0 0 24 24" width="16" height="16"
                                                        class="inline-block">
                                                        <path fill="currentColor"
                                                            d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span class="px-2">Upload</span>
                                            </a>
                                            <input type="file"
                                                class="absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1">
                                        </label><!---->
                                    </div>
                                </div>
                                <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Max 500kb</div>
                            </div>
                            <div class="last:mb-0">
                                <label class="block font-bold mt-2">Name</label>
                                <div class="">
                                    <div class="relative">
                                        <input name="username" autocomplete="username" required="" type="text"
                                            v-model="name"
                                            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                                    </div>
                                </div>
                            </div>
                            <div class="last:mb-0">
                                <label class="block font-bold mt-2">E-mail</label>
                                <div class="">
                                    <div class="relative">
                                        <input name="email" autocomplete="email" required="" type="email"
                                            v-model="email"
                                            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                                    </div>
                                </div>
                            </div>
                            <div class="last:mb-0">
                                <label class="block font-bold mt-2">Age</label>
                                <div class="">
                                    <div class="relative">
                                        <input required="" v-model="age"
                                            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                                    </div>
                                </div>
                            </div>
                            <div class="last:mb-0">
                                <label class="block font-bold mt-2">Gender</label>
                                <div class="">
                                    <div class="relative">
                                        <select v-model="gender"
                                            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer>
                            <div class="flex items-center justify-start flex-wrap mb-3 ml-6">
                                <button @click="editUser(userId)"
                                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                                    type="submit"><!---->
                                    <span class="px-2">Submit</span>
                                </button>
                            </div>
                        </footer>
                    </form>
                    <form class="rounded-lg flex-col bg-gray-50 flex my-3 p-2 shadow-md block">
                        <div class="flex-1 p-6">
                            <div class="mb-6 last:mb-0">
                                <label class="block font-bold mb-2">Current password</label>
                                <div class="">
                                    <div class="relative">
                                        <input name="password_current" autocomplete="current-password" required=""
                                            v-model="password" type="password"
                                            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                                    </div>
                                </div>
                                <div class="text-xs text-gray-500 dark:text-slate-400 mt-1">Required. Your current
                                    password</div>
                            </div>
                            <hr class="my-6 -mx-6 dark:border-slate-800 border-t border-gray-100">
                            <div class="mb-6 last:mb-0">
                                <label class="block font-bold mb-2">New password</label>
                                <div class="">
                                    <div class="relative">
                                        <input name="password" autocomplete="new-password" required="" type="password" v-model="newPassword"
                                            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10"
                                            aria-autocomplete="list">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-6 last:mb-0">
                                <label class="block font-bold mb-2">Confirm password</label>
                                <div class="">
                                    <div class="relative">
                                        <input name="password_confirmation" autocomplete="new-password" required="" v-model="confirmPassword"
                                            type="password"
                                            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer>
                            <div class="flex items-center justify-start flex-wrap ml-6 mb-3">
                                <button
                                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600 py-2 px-3 mr-3 last:mr-0 mb-3"
                                    type="submit">
                                    <span class="px-2">Submit</span>
                                </button>
                            </div>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import axios from "axios"
import Cryptojs from "crypto-js"
import Swal from "sweetalert2"
export default {
    components: { NavBar },
    data() {
        return {
            userId: localStorage.getItem("id"),
            baseUrl: import.meta.env.VITE_BASE_URL,
            token: {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },
            userInfo: {},
            name: "",
            email: "",
            age: "",
            gender: "",
            password: "",
            newPassword:"",
            confirmPassword:""
        }
    },
    methods: {
        decryptWithAES(data){
            // console.log(ciphertext)
            // const passphrase = 'THESECRET';
            // const bytes = Cryptojs.AES.decrypt(ciphertext, passphrase);
            // const originalText = bytes.toString(Cryptojs.enc.Utf8);
            // return originalText;
            return Cryptojs.AES.decrypt(data.toString(), 'secret').toString(Cryptojs.enc.Utf8);
        },
        async getUserLogin(id) {
            const user = await axios.get(this.baseUrl + "user/" + id, this.token)
                .catch((err) => {
                    console.log(err)
                    if (err.response.data.message == "Wrong authentication token") {
                        localStorage.removeItem('id');
                        localStorage.removeItem('token');
                        this.$router.push('/')
                    }
                });
            this.userInfo = user.data.User[0].Payload;
            this.name = this.userInfo.username
            this.email = this.userInfo.email
            this.age = this.userInfo.age
            this.gender = this.userInfo.gender
            this.password = this.decryptWithAES(this.userInfo.password)
            console.log(this.decryptWithAES(this.userInfo.password))
            return this.userInfo;
        },
        async editUser(id) {
            console.log(this.editedUserInfo, id);
            const userInfo = {
                username:this.name,
                email:this.email,
                age:this.age,
                gender:this.gender
            }
            await axios.put(this.baseUrl + "user/" + id, userInfo, this.token)
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Profile edit successfully',
                showConfirmButton: false,
                timer: 1500
            })
            this.getUserLogin(this.userId)
        }

    },
    mounted() {
        this.getUserLogin(this.userId)
    }
}
</script>