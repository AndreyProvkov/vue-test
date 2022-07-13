<template>
  <div class="wrapper-loader">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'ListLoader'
}
</script>

<style scoped lang="scss">
    .wrapper-loader {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f3f3f3;
      z-index: 1;
    }
    .loader {
      border: 1.3rem solid #c5c5c5;
      border-top: 1.3rem solid #3F3F3F;
      border-radius: 50%;
      width: 8rem;
      height: 8rem;
      animation: spin 1.5s linear infinite;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
</style>
