<template>
    <section class="relative">
        <div v-if="isShow" class="w-full h-screen absolute z-20 mt-5">
            <div class="m-auto w-96 mt-5">
                <div class="bg-gray-300 rounded-lg mt-5 m-auto"  v-if="isShow" >
                    <form class="px-4 py-3 items-center" enctype="multipart/form-data" @submit.prevent="createCategory">
                        <div class="last:mb-0">
                            <label class="block font-bold mt-2">Title</label>
                            <div class="">
                                <div class="relative">
                                    <input v-model="category"
                                        class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800"
                                        placeholder="Name">
                                </div>
                            </div>
                        </div>
                        <div class="last:mb-0">
                            <label class="block font-bold mt-2" for="file_input">Upload Icon</label>
                            <input
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input" type="file" ref="file" @change="selectFile">
                        </div>
                        <div class="mt-5 ">
                            <button class="px-4 py-2 bg-red-300 border-red-300 rounded-lg font-bold mr-2"
                                @click="canCle">Cancel</button>
                            <button type="submit"
                                class="px-4 py-2 bg-blue-300 border-blue-300 rounded-lg font-bold">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="flex" :class="{ 'blur-sm': isShow }">
            <NavBar active-item="category"></NavBar>
            <div class="m-5">
                <h3 class="text-5xl font-extrabold mb-5">Categories</h3>
                <div class="shadow-md sm:rounded-lg p-4">
                    <div class="pb-4 bg-white dark:bg-gray-900">
                        <label for="table-search" class="sr-only">Search</label>
                        <div class="flex justify-between">
                            <div class="relative mt-1 flex">
                                <select v-model="name"
                                    class="block p-2 pl-10 w-44 text-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3">
                                    <option value="" disabled selected>Select a category</option>
                                    <option v-for="category in allCategory">{{ category.Payload.name }}</option>
                                </select>
                                <button class="btn btn-info w-12 rounded-lg ml-2" @click="filterCategory(name)">
                                    <img src="../assets/search.png">
                                </button>
                            </div>
                            <div>
                                <button class="btn btn-info" @click='onHandleAddCategory'>Add +</button>
                            </div>
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
                                <th scope="col" class="py-3 px-6">
                                    Order
                                </th>
                                <th scope="col" class="py-3 px-6 w-40">
                                    Category Icon
                                </th>
                                <th scope="col" class="py-3 px-6 w-48">
                                    Category Name
                                </th>
                                <th scope="col" class="py-3 px-6">
                                    Amount Post
                                </th>
                                <th scope="col" class="py-3 px-6 w-48">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="category in categories"
                                class="overflow-scroll bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="p-4 w-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox"
                                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="py-4 px-6">

                                </td>
                                <th scope="row"
                                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <img :src=cloudFrontUrl+category.Payload.icon alt="">
                                </th>
                                <td class="py-4 px-6">
                                    {{ category.Payload.name }}
                                </td>
                                <td class="py-4 px-6">
                                    <!-- {{numberOfEachCategory(category.Payload.name)}} -->
                                </td>
                                <td class="py-4 px-6">
                                    <div>
                                        <span class="btn btn-info"
                                            @click="showEdit(category.id, category.Payload.title, category.Payload.content, category.Payload.category)">Edit</span>
                                        <span class="btn btn-danger ml-2" @click="deleteItem(category.id)">Delete</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- <div v-if="categories[0] == null" class="m-auto w-72 text-center">
                        <img src="../assets/nodata.png" alt="">
                        <span class="text-danger">There is no category available here</span>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
import NavBar from '../components/NavBar.vue';
export default {
    components: { NavBar },
    data() {
        return {
            categories: [],
            baseURL: import.meta.env.VITE_BASE_URL,
            file: "",
            name:"",
            isShow: false,
            category:"",
            allCategory: [],
            cloudFrontUrl:import.meta.env.VITE_CLOUDFRONT_URL
        }
    },
    methods: {
        selectFile(){
            this.file = this.$refs.file.files[0]
            console.log(this.file)
        },
        async createCategory(){
            const fd = new FormData();
            fd.append('name',this.category)
            fd.append("icon",this.file)
            const headers = { 'Content-Type': 'multipart/form-data' };
            console.log(fd)
            await axios.post(this.baseURL+"category",fd,{headers}).then(res=>{
                console.log(res.data)
            })
            this.isShow = false
            this.getAllCategories();
        },
        async filterCategory(name) {
            const categoryFound = await axios.get(this.baseURL + "category/" + name)
                .catch((err) => {
                    console.log(err);
                    this.categories = []
                });
            if (categoryFound) {
                // console.log(categoryFound)
                this.categories = categoryFound.data.Category
            }
            return this.categories;
        },
        async getAllCategories() {
            const allCategories = await axios.get(this.baseURL + "category")
                .catch(err => {
                    console.log(err)
                })
            if (allCategories) {
                this.categories = allCategories.data.Data
                this.allCategory = allCategories.data.Data
                console.log(this.categories)
            }
            return this.categories
        },
        async deleteItem(id) {
            await axios.delete(this.baseURL + "category/" + id, this.token);
            this.getAllCategories();

        },
        onHandleAddCategory() {
            this.isShow = !this.isShow;
        },
        canCle(){
            this.isShow = false
        }

    },
    computed: {
        // numberOfEachCategory(){
        //     return this.filterCategory(category)
        // }
    },
    mounted() {
        this.getAllCategories();
    }

}
</script>
<style scoped>

</style>