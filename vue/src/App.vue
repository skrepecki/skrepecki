<template>
  <section>
    <MenuTop />
    <router-view />
    <Footer />
  </section>
</template>

<script>
  import MenuTop from './components/MenuTop'
  import Footer from './components/Footer'

  export default {
    components: {
      MenuTop,
      Footer
    }
  }
</script>


