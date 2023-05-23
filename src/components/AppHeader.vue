<script>
export default {
  name: "AppHeader",
}

// defineProps({
//   msg: String,
// })
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="d-flex flex-wrap align-items-center">
        <img class="img-fluid" src="../assets/yugioh-logo.png" alt="">
        <h1 class="ms-2">Yu-Gi-Oh Api</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
  img {
    width: 5rem;
  }
  
  h1 {
    font-size: 2rem;
  }
</style>