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
            list_comment      : [],
            number_comment    : 0,
            url_image_firebase: SKREP_STORAGE[parseInt(this.$route.params.image_id)].image.replace('.', '').replace(' ', '').replace(' ', '') .replace(' ', '') .replace(' ', '').replace(' ', '')  
        }
    },
    methods:{
        async saveComment(){
            if(window.localStorage.getItem(this.url_image_firebase)) return
            if(window.localStorage.getItem('uid') && window.localStorage.getItem('email') && window.localStorage.getItem('password')){
                let current_time = new Date().getTime();                                                                                   
                await __setDoc(__doc(__Firestore, "comments", this.url_image_firebase + '/' + this.url_image_firebase + '/'+ current_time), {
                    comment: this.textarea_comment,
                    email: window.localStorage.getItem('email'),
                    time: current_time
                }).then(() => { 
                    alert('опубликовано')
                    window.location.reload()
                })

                window.localStorage.setItem(this.url_image_firebase, this.url_image_firebase)
            } else{
                alert('войдите в систему'); window.location.href = '/😊/Semen-Skrepecki-Registration-Login'
            }
        },
        async readCommentDataBase(){
            let q = __query(__collection(__Firestore, 'comments/' + this.url_image_firebase + '/' + this.url_image_firebase))
            let querySnapshot = await __getDocs(q)
            querySnapshot.forEach((doc) => {
                this.number_comment++
                let newMessage = { comment: doc.data().comment, email: doc.data().email }
                this.list_comment.push(newMessage)
            })
        }
    },
    created(){
        this.readCommentDataBase()
    }
}
</script>
