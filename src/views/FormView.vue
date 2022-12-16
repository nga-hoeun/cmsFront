<template>
    <section>
        <div class="flex w-full">
            <NavBar active-item="form"></NavBar>
            <div class="w-75">
                <div class="w-75 p-4 m-5 border rounded-lg bg-slate-50 shadow-md">
                    <form @submit.prevent="createNewPost">
                        <div class="last:mb-0">
                            <label class="block font-bold mt-2">Title</label>
                            <div class="">
                                <div class="relative">
                                    <input required="" v-model="title"
                                        placeholder="Put your title here"
                                        class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                                </div>
                            </div>
                        </div>
                        <div class="last:mb-0">
                            <label class="block font-bold mt-2">Category</label>
                            <div class="">
                                <div class="relative">
                                    <select v-model="category"
                                    class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-slate-800 pl-10">
                                        <option value="" disabled>Select a category</option>
                                        <option :value=category.Payload.name v-for="category in categories">{{category.Payload.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="last:mb-0">
                            <label class="block font-bold mt-2">Content</label>
                            <div class="flex border border-gray-900 p-2">
                                <ul class="flex list-none">
                                    <li class="px-3">
                                        <img src="../assets/bold.png" alt="" class="w-4">
                                    </li>
                                    <li class="px-3">
                                        <img src="../assets/underline.png" alt="" class="w-4">
                                    </li>
                                    <li class="px-3">
                                        <img src="../assets/italic.png" alt="" class="w-4">
                                    </li>
                                    <li class="px-3">
                                        <div class="image-upload">
                                            <label for="file-input">
                                                <img src="../assets/link.png" alt="" class="w-4">
                                            </label>
                                            <input type="file" id="file-input"
                                            ref="file"
                                            @change="selectFile">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <textarea class="w-full h-64" v-model="content">

                            </textarea>
                        </div>
                        <div class="text-right mt-2">
                            <button type="submit" class="px-4 py-2 bg-blue-300 border-blue-300 rounded-lg font-bold">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import axios from "axios"
export default {
    components: { NavBar },
    data(){
        return {
            categories:[],
            baseURL:import.meta.env.VITE_BASE_URL,
            category:"",
            title:"",
            content:""
        }

    },
    methods:{
        async getAllCategories() {
            const allCategories = await axios.get(this.baseURL+"category")
            .catch(err=>{
                console.log(err)
            })
            if(allCategories.data.Data[0]){
                this.categories = allCategories.data.Data
                console.log(this.categories)
            }
            return this.categories
        },
        selectFile(){
            this.file = this.$refs.file.files[0]
            console.log(this.file)
        },
        async createNewPost(){
            const fd = new FormData();
            fd.append('title',this.title)
            fd.append('category',this.category)
            fd.append('content', this.content)
            fd.append("icon",this.file)
            const headers = { 'Content-Type': 'multipart/form-data' };
            console.log(fd)
            await axios.post(this.baseURL+"post",fd,{headers}).then(res=>{
                console.log(res.data)
            })
        }
    },
    mounted(){
        this.getAllCategories();
    }
}
</script>
<style>
.image-upload>input{
    display: none;
}
</style>