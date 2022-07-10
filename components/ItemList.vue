<template>
  <section class="items">
    <select class="sort-select items__sort-select">
      <option value="name" selected>
        По наименованию
      </option>
      <option value="min">
        Сначала дешёвые
      </option>
      <option value="max">
        Сначала дорогие
      </option>
    </select>
    <section class="list-item">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </section>
  </section>
</template>

<script>

export default {
  name: 'ItemList'
}
</script>

<style scoped lang='scss'>
  .items {
    &__sort-select {
      margin-bottom: 1.6rem;
      display: block;
      margin-left: auto;
    }
  }
  .sort-select {
    appearance: none;
    cursor: url('/hover.svg'), auto;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #B4B4B4;
    padding: 1rem 2.7rem 1rem 1.6rem ;
    background: #FFFEFB;
    box-shadow: 0 .2rem .5rem rgba(0, 0, 0, 0.1);
    border-radius: .4rem;
    border: none;
    position: relative;
    background: url('/select-arrow.png') no-repeat ;
    background-position: calc(100% - 1.6rem) 55%;
    outline: none;
  }
  .list-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
  }
</style>
