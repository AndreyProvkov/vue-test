<template>
  <section class="list-item">
    <ItemCard
      v-for='item in items'
      :key='item.id'
      :item="item"
    />
    <div class="fill-empty-space"></div>
  </section>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: Array
  }
}
</script>

<style scoped lang='scss'>
  .list-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
  }
  .fill-empty-space {
    height: 0;
    flex-basis: 31%;
  }
</style>
