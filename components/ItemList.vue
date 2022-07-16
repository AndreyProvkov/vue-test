<template>
  <section>
    <transition-group class="list-item" name="list" tag="div">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        @deleteItem="deleteItem($event)"
      />
    </transition-group>
  </section>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    items: Array
  },
  methods: {
    deleteItem (id) {
      this.$emit('deleteItem', id)
    }
  }
}
</script>

<style scoped lang='scss'>
  .list-item {
    grid-gap: 1.6rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    @media screen and (max-width: 944px) {
      grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));
    }
    @media screen and (max-width: 669px) {
      grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
    }
  }
  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all .5s ease;
  }
  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: scale(0);
  }
  .list-leave-active {
    position: absolute;
  }
</style>
