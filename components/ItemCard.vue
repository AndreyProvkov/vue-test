<template>
  <div class="item">
    <div class="item__image">
      <img class="item__image-el" src="/camera.jpg" alt="camera">
    </div>
    <div class="item__description">
      <h2 class="item__title">
        Наименование товара
      </h2>
      <p class="item__text">
        Довольно-таки интересное описание товара в несколько строк. Довольно-таки
        интересное описание товара в несколько строк
      </p>
      <div class="item__price">
        10 000 руб.
      </div>
    </div>
    <button class="btn-remove item__btn-remove">
      <BtnRemove />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ItemList'
}
</script>

<style scoped lang='scss'>
  .item {
    color: #3F3F3F;
    max-width: 33.2rem;
    background: #FFFEFB;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.04), 0 0.6rem 1rem rgba(0, 0, 0, 0.02);
    border-radius: 0.4rem;
    position: relative;
    cursor: url('/hover.svg'), auto;
    &__image {
      margin-bottom: 1.6rem;
      &-el {
        object-fit: cover;
        width: 100%;
      }
    }
    &__description {
      padding: 0 1.6rem 2.4rem;
    }
    &__title {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.5rem;
      margin: 0;
    }
    &__text {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2rem;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
      max-height: 15rem;
    }
    &__price {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3rem;
    }
    &__btn-remove {
      position: absolute;
      top: -.8rem;
      right: -.8rem;
    }
  }

  .btn-remove {
    width: 3.2rem;
    height: 3.2rem;
    background: #FF8484;
    box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    border: none;
    padding: .8rem;
  }
</style>
