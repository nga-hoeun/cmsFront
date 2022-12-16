<template>
    <div style="background-image: url('https://cdn.wallpapersafari.com/47/66/aDF4vy.jpg');
        background-size: cover;">
        <div class="flex">
            <NavBar active-item="home"></NavBar>
            <div class="flex content-around items-center m-5">
                <div class="text-center">
                    <h1 class="text-5xl font-extrabold dark:text-white p-2">Content Management System</h1>
                    <p class="text-2xl font-bold dark:text-white p-2">Welcome to our content management system. From here you will be able to explore the
                        content and also be able to create your own content as well.</p>
                    <button type="button" class="text-dark text-2xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mt-2 w-32 p-3">
                        <router-link to="/dashboard"> Explore </router-link>
                    </button>
                </div>
                <div class="w-full">
                    <img src="../assets/cms1.png">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: { NavBar }
}
</script>
<style>

</style>