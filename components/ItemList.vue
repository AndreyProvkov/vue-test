<template>
  <section>
    <transition-group class="list-item" name="list" tag="div">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        @deleteItem="deleteItem($event)"
      />
      <div :key="'empty-space'" class="fill-empty-space" />
      <div :key="'empty-space1'" class="fill-empty-space" />
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
  }
  .fill-empty-space {
    height: 0;
    flex-basis: 32%;
    @media screen and (max-width: 1068px) {
      flex-basis: 31%;
    }
    @media screen and (max-width: 899px) {
      flex-basis: 48%;
    }
    @media screen and (max-width: 669px) {
      flex-basis: 31%;
    }
    @media screen and (max-width: 534px) {
      flex-basis: 48%;
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
