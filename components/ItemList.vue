<template>
  <section class="list-item">
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <div class="fill-empty-space"></div>
  </section>
</template>

<script>
export default {
  name: 'ItemList'
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
