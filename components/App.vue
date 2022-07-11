<template>
  <div class="container">
    <HeaderPage class="header-block" />
    <AddFormItem class="form-block" />
    <ItemList class="list-block" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang='scss'>
  .container {
    padding: 3.2rem;
    padding-bottom: 0;
    max-width: 137.6rem;
    margin: 0 auto;
  }
  .form-block {
    float: left;
    position: sticky;
    top: 2.4rem;
    margin-right: 1.6rem;
    @media screen and (max-width: 664px) {
      display: none;
    }
  }
</style>
