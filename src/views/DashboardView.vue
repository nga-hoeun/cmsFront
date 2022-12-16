<template>
    <section>
        <div class="flex">
            <NavBar active-item="dashboard"></NavBar>
            <div class="p-3 ml-6">
                <h3 class="text-5xl font-extrabold">DashBoard</h3>
                <div class="flex justify-center m-auto">
                    <CardComponent nav-items="Users" :item-amount="users.length"></CardComponent>
                    <CardComponent nav-items="Posts" :item-amount="posts.length"></CardComponent>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import CardComponent from '../components/CardComponent.vue';
import axios from 'axios'
export default{
    components:{NavBar, CardComponent},
    data() {
        return {
            token: {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            },
            users:[],
            posts: [],
            baseUrl: import.meta.env.VITE_BASE_URL,
        };
    },
    methods: {
        async getListUsers(){
            const usersToFind = await axios.get(this.baseUrl+'user/list/'+this.userId, this.token)
            this.users = usersToFind.data.User
            return this.users
        },
        async getAllPost() {
            const response = await axios.get(this.baseUrl + "post/all", this.token)
                .catch(err => {
                    if (err.response.data.message == "Wrong authentication token") {
                        localStorage.removeItem('id');
                        localStorage.removeItem('token');
                        this.$router.push('/')
                    }
                });
            if (response) {
                this.all = response.data.Data.length;
                this.posts = response.data.Data;
            }
            this.getListUsers();
            return this.posts;
        }
    },
    mounted(){
        this.getAllPost()
    }
}
</script>