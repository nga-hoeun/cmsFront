<template>
    <div 
    class="w-64 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h3 class="text-2xl">{{navItems}}</h3>
        <div class="flex justify-between items-center">
            <h2 class="text-4xl">{{itemAmount}}</h2>
            <svg aria-hidden="true"
                class="w-12 h-12 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                    clip-rule="evenodd"></path>
            </svg>
        </div>
    </div>

</template>

<script>
export default{
    props:{
        navItems:String,
        itemAmount:Number
    }
}
</script>
