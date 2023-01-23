<template>
    <router-view  :key="$route.fullPath" />
</template>
<script>
export  default {
    name: 'app',    
    props:['route'],
    data() {
        return {
            title: 'YOUR APP NAME'
        }
    },
    async mounted() {

    }
}
</script>