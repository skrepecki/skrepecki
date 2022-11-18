<template>
    <section>
        <iframe width="33%" v-bind:src="item" title="Семен Скрепецкий Стримы" v-for="(item, index) in video_list" v-bind:key="index"></iframe>
        
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



