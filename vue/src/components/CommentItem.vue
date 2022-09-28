<template>
     <div class="container-fluid tm-container-content">
        <div class="row tm-mb-50">
            <h3 class="col-12 tm-text-primary">Комментарии {{number_comment}}</h3><p v-if="!number_comment" class="comment">Прокомментируйте первым, что вы видите на картине, что вы чувствуете ?¿</p>
        </div>
        <div class="row tm-mb-50">
            <div class="col-md-6 col-12" v-for="(item, index) in list_comment" v-bind:key="index">                      
                <p class="comment">{{ item.comment }}</p>
                <p class="comment">{{ item.email }}</p>
            </div>    
            <div class="col-md-6 col-12">
                <div class="form-group"><textarea class="form-control rounded-0" placeholder="Ваш Комментарий" v-model="textarea_comment"></textarea></div>
                <div class="form-group tm-text-right"><button type="button" class="btn btn-primary" v-on:click="saveComment">Опубликовать</button></div>
            </div>
        </div>
     </div>
</template>
<script>
export default{
    data() {
        return {
            textarea_comment  : '',
            list_comment      : [{comment: 'comment 123', email: 'email 456'}, {comment: 'comment', email: 'email email'}, {comment: 'comment', email: 'email email'}],
            number_comment    : 0,
            url_image_firebase: SKREP_STORAGE[parseInt(this.$route.params.image_id)].image.replace('.', '').replace(' ', '').replace(' ', '') .replace(' ', '') .replace(' ', '').replace(' ', '')  
        }
    },
    methods:{
        async saveComment(){
            alert(this.url_image_firebase)
            if(window.localStorage.getItem(this.url_image_firebase)) return

            if(window.localStorage.getItem('uid') && window.localStorage.getItem('email') && window.localStorage.getItem('password')){
                let current_time = new Date().getTime();                                                                                   
                await setDoc(doc(firestore, "comments", url_image_firebase + '/' + url_image_firebase + '/'+ current_time), {
                    comment: comment_value,
                    email: window.localStorage.getItem('email'),
                    time: current_time
                }).then(() => { 
                    document.getElementById('textarea_comment').value = ''
                    firebase_get_data_from_custom_image() 
                    alert('опубликовано')
                })

                window.localStorage.setItem(this.url_image_firebase, this.url_image_firebase)
            } else{
                alert('войдите в систему'); window.location.href = '/😊/Semen-Skrepecki-Registration-Login'
            }
            

        }
    },
    created(){

    }
}
</script>
