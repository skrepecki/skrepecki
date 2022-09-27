<template>
    <div class="container-fluid tm-mt-60" style="text-align:center;" id="form-login-register">
        <h2 class="tm-text-primary mb-5">Регистрация/Вход</h2>
        <form id="contact-form" class="tm-contact-form mx-auto">
          <div class="form-group">
            <input type="email" v-model="email" class="form-control rounded-0" placeholder="Email" required>
          </div>
          <div class="form-group">
            <input type="text" v-model="password" class="form-control rounded-0" placeholder="Password" required>
          </div>
          <div class="form-group tm-text-right">
            <button type="button" class="btn btn-primary" v-on:click="intentLogin">Логин</button>
          </div>
        </form>
    </div>
</template>
<script>

    export default{
        data(){
            return{
              email: null, password: null
            }
        },
        methods: {
          intentLogin(){
            __createUserWithEmailAndPassword(__Auth, this.email, this.password).then((userCredential) => {
              const user = userCredential.user
              window.localStorage.setItem('email', this.email)
              window.localStorage.setItem('password', this.password)
              window.localStorage.setItem('uid', user.uid)
              this.enter_with_email_and_password(this.email, this.password)
            }).catch((error) => {
              const errorCode = error.code
              const errorMessage = error.message
              this.enter_with_email_and_password(this.email, this.password)       
            })
          },
          enter_with_email_and_password(pageEmail, pagePassword){
               __signInWithEmailAndPassword(__Auth, pageEmail, pagePassword).then((userCredential) => {
                   const user = userCredential.user;
                   window.localStorage.setItem('email', pageEmail)
                   window.localStorage.setItem('password', pagePassword)
                   window.localStorage.setItem('uid', user.uid)
                   window.location.reload() 
               }).catch((error) => {
                   const errorCode = error.code;
                   const errorMessage = error.message;
               })
           }  
        },
        created(){
            if(localStorage.getItem('email') && localStorage.getItem('password') && localStorage.getItem('uid')){
              __signInWithEmailAndPassword(__Auth, localStorage.getItem('email'), localStorage.getItem('password')).then((userCredential) => {
                 const user = userCredential.user;
                 document.title                                           = localStorage.getItem('email')
                 document.getElementById('form-login-register').innerHTML = '<h4>Вы вошли как ' + localStorage.getItem('email') + '<h4></br></br>'
              })
            } 
            
        }
    }
</script>