<template>
    <section>
        <div class="flex">
            <NavBar active-item="post"></NavBar>
            <div class="m-5">
                <h3 class="text-5xl font-extrabold mb-5">Posts</h3>
                <div class="shadow-md sm:rounded-lg p-4">
                    <div class="pb-4 bg-white dark:bg-gray-900">
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="relative mt-1 flex">
                            <input type="text" id="table-search"
                                v-model="title"
                                class="block p-2 pl-10 w-32 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Title">
                            <select v-model="category"
                                class="block p-2 pl-10 w-44 text-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3">
                                <option value="" disabled selected>Select a category</option>
                                <option value="Sports">Sports</option>
                                <option value="News">News</option>
                                <option value="Others">Others</option>
                                <option value="General Knowledge">General Knowledge</option>
                            </select>
                            <button class="btn btn-info w-12 rounded-lg ml-2" @click="filterPost(category,title)">
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
                                    Post Title
                                </th>
                                <th scope="col" class="py-3 px-6 w-48">
                                    Post Category
                                </th>
                                <th scope="col" class="py-3 px-6 w-72">
                                    Post Content
                                </th>
                                <th scope="col" class="py-3 px-6 w-48">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="post in posts"
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
                                    {{ post.Payload.title }}
                                </th>
                                <td class="py-4 px-6">
                                    {{ post.Payload.category }}
                                </td>
                                <td class="py-4 px-6">
                                    {{ post.Payload.content }}
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
                    <div v-if="posts[0] == null" class="m-auto w-72 text-center">
                        <img src="../assets/nodata.png" alt="">
                        <span class="text-danger">There is no post available here</span>
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
            posts: [],
            baseUrl: import.meta.env.VITE_BASE_URL,
            token: {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },
            category:"",
            title:""
        }
    },
    methods: {

        async getAllPost() {
            const response = await axios.get(this.baseUrl + "post/all", this.token)
                .catch((err) => {
                    // console.log(err);
                    // if (err.response.data.message == "Wrong authentication token") {
                    //     localStorage.removeItem('id');
                    //     localStorage.removeItem('token');
                    //     this.$router.push('/')
                    // }
                });
            console.log(response);
            this.posts = response.data.Data;
            return this.posts;
        },
        async filterPost(category,title){
            const postFound = await axios.get(this.baseUrl + "post"+"?category=" + category+"&title="+title, this.token)
                // .then((res) => {
                //     this.posts = res.data.Data;
                //     console.log(res)
                // })
                .catch((err) => {
                    console.log(err);
                    this.posts = []
                });
                if(postFound){
                    this.posts = postFound.data.Data
                }
            return this.posts;
        },
        async deleteItem(id) {
            console.log(id);
            await axios.delete(this.baseUrl + "post/" + id, this.token);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Post delete successfully',
                showConfirmButton: false,
                timer: 1500
            })
            this.getAllPost();
        },
    },
    mounted() {
        this.getAllPost();
    }

}
</script>
<style scoped>

</style>