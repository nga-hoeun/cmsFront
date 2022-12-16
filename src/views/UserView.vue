<template>
    <section>
        <div class="flex">
            <NavBar active-item="user"></NavBar>
            <div class="m-5">
                <h3 class="text-5xl font-extrabold mb-5">Users</h3>
                <div class="shadow-md sm:rounded-lg p-4">
                    <div class="pb-4 bg-white dark:bg-gray-900">
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative mt-1 flex">
                            <input type="text" id="table-search"
                                v-model="name"    
                                class="block p-2 pl-10 w-32 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="UserName">
                            <input type="text" id="table-search"
                                v-model="age"
                                class="block p-2 pl-10 w-24 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3"
                                placeholder="Age">
                            <select v-model="gender"
                                class="block p-2 pl-10 w-44 text-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3">
                                <option value="" disabled selected>Select a gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                            <button class="btn btn-info w-12 rounded-lg ml-2" @click="filterUser(name, gender, age)">
                                <img src="../assets/search.png">
                            </button>
                        </div>
                    </div>
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="py-3 px-6 w-48">
                                    Username
                                </th>
                                <th scope="col" class="py-3 px-6 w-48">
                                    Gender
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Age
                                </th>
                                <th scope="col" class="py-3 px-6 w-72">
                                    Email
                                </th>
                                <th scope="col" class="py-3 px-6 w-48">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users"
                                class="overflow-scroll bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="p-4 w-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row"
                                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ user.Payload.username }}
                                </th>
                                <td class="py-4 px-6">
                                    {{ user.Payload.gender }}
                                </td>
                                <td class="py-4 px-6">
                                    {{ user.Payload.age }}
                                </td>
                                <td class="py-4 px-6">
                                    {{ user.Payload.email }}
                                </td>
                                <td class="py-4 px-6">
                                    <div>
                                        <span class="btn btn-info"
                                            @click="showEdit(post.id, post.Payload.title, post.Payload.content, post.Payload.category)">Edit</span>
                                        <span class="btn btn-danger ml-2" @click="deleteItem(post.id)">Delete</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="users[0] == null" class="m-auto w-72 text-center">
                        <img src="../assets/nodata.png" alt="">
                        <span class="text-danger">There is no user available</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import Swal from "sweetalert2"
import axios from "axios"
export default {
    components: { NavBar },
    data() {
        return {
            users: [],
            baseUrl: import.meta.env.VITE_BASE_URL,
            token: {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },
            name:"",
            age:"",
            gender:""
        }
    },
    methods: {
        async getListUsers() {
            const usersToFind = await axios.get(this.baseUrl + 'user/list/' + this.userId, this.token)
                .catch(err => {
                    if (err.response.data.message == "Wrong authentication token") {
                        localStorage.removeItem('id');
                        localStorage.removeItem('token');
                        this.$router.push('/')
                    }
                })
            this.users = usersToFind.data.User
            console.log(this.users)
            return this.users
        },
        async filterUser(name, gender, age) {
            const foundUsers = await axios.get(this.baseUrl + 'user/query/' + this.userId + '/?username=' + name + "&gender=" + gender + "&age=" + age, this.token)
                .catch((err) => {
                    console.log(err);
                    this.users = [];
                });
            console.log(foundUsers)
            if (foundUsers) {
                this.users = foundUsers.data.users
            }
            return this.users
        },
        async deleteUser(id){
            console.log(id);
            await axios.delete(this.baseUrl + "user/" + id, this.token);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Post delete successfully',
                showConfirmButton: false,
                timer: 1500
            })
            this.getListUsers();
        },
    },
    mounted() {
        this.getListUsers()
    }

}
</script>
<style scoped>

</style>