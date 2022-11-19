<template>
    <div>    
        <video class="custom___video"  width="33%" controls v-for="(__url, index) in list__streams" v-bind:key="index">
            <source v-bind:src="__url" type="video/mp4">
        </video> 
    </div>
</template>
<script>
export default{
    data(){
        return{
            list__streams : streamHosting,
        }
    }
}
</script>

<style scoped>
.custom___video{
    width: 25%!important;
}
</style>