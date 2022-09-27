<template>
  <section>
    <MenuTop />
    <router-view />
    <Footer />
  </section>
</template>

<script>
  import MenuTop from './components/MenuTop.vue'
  import Footer from './components/Footer.vue';

  export default {
    components: {
      MenuTop,
      Footer
    }
  }
</script>


