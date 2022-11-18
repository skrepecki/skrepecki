<template>
    <section>
        <iframe width="33%" v-bind:src="item" title="Семен Скрепецкий Стримы" v-for="(item, index) in video_list" v-bind:key="index"></iframe>
        <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
        </video>
    </section>
</template>

<script>
    export default{
        data(){
            return{
                video_list: YOUTUBE_ARRAY
            }
        }
    }
</script>



