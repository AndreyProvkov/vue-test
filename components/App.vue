<template>
  <div class="container">
    <HeaderPage />
    <AddFormItem @addItem="add" />
    <ItemList v-show="items.length" :items="items" @deleteItem="deleteItem($event)" />
    <transition name="no-items" tag="span">
      <span v-show="!items.length" class="no-items">Товаров нет</span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: []
    }
  },
  watch: {
    items () {
      sessionStorage.setItem('listItems', JSON.stringify(this.items))
    }
  },
  created () {
    if (!sessionStorage.getItem('listItems')) {
      const newArr = []
      for (let i = 0; i < 9; i++) {
        newArr.push(
          {
            id: i,
            name: 'Наименование товара',
            description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
            linkImg: '/camera.jpg',
            price: 10000 + i
          }
        )
      }
      sessionStorage.setItem('listItems', JSON.stringify(newArr))
    }
    this.items = JSON.parse(sessionStorage.getItem('listItems'))
  },
  methods: {
    add (obj) {
      const item = {
        id: new Date().getTime(),
        name: obj.name,
        description: obj.description,
        linkImg: obj.link,
        price: Number(obj.price.replace(/\s/g, ''))
      }
      this.items.unshift(item)
    },
    deleteItem (id) {
      this.items = this.items.filter(item => item.id !== id)
    }
  }
}
</script>

<style scoped lang='scss'>
  .container {
    padding: 3.2rem;
    padding-bottom: 0;
    max-width: 137.6rem;
    margin: 0 auto;
  }
  .no-items {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #3F3F3F;
  }
  .no-items-enter-active,
  .no-item-leave-active {
    transition: opacity 0.5s ease;
  }
  .no-items-enter,
  .no-items-leave {
    opacity: 0;
  }
</style>
