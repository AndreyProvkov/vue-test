<template>
  <div class="item">
    <div class="item__image">
      <img class="item__image-el" :src="item.linkImg" alt="image">
    </div>
    <div class="item__description">
      <h2 class="item__title">
        {{item.name}}
      </h2>
      <p class="item__text">
        {{item.description}}
      </p>
      <div class="item__price">
        {{item.price | divideNumber}} руб.
      </div>
    </div>
    <button class="btn-remove item__btn-remove">
      <BtnRemove />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    item: Object
  }
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
    flex-basis: 31%;
    flex-shrink: 1;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    &__image {
      margin-bottom: 1.6rem;
      overflow: hidden;
      border-top-left-radius: .4rem;
      border-top-right-radius: .4rem;
      max-height: 20rem;
      &-el {
        object-fit: cover;
        transition: .5s all;
        width: 100%;
        max-height: 20rem;
      }
    }
    &__description {
      padding: 0 1.6rem 2.4rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__title {
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.5rem;
      margin: 0;
      @media screen and (max-width: 970px) {
        font-size: 1.7rem;
      }
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
      @media screen and (max-width: 970px) {
        font-size: 1.4rem;
      }
    }
    &__price {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3rem;
      @media screen and (max-width: 1060px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 970px) {
        font-size: 1.6rem;
      }
    }
    &__btn-remove {
      position: absolute;
      cursor: url('/hover.svg'), auto;
      top: -.8rem;
      right: -.8rem;
      transition: .5s all;
      opacity: 0;
      @keyframes shaking {
        0%,
        100% {
          transform: translateX(0%);
          transform-origin: 50% 50%;
        }
        15% {
          transform: translateX(-0.5rem) rotate(6deg);
        }
        30% {
          transform: translateX(0.2rem) rotate(-6deg);
        }
        45% {
          transform: translateX(-0.2rem) rotate(3.6deg);
        }
        60% {
          transform: translateX(0.1rem) rotate(-2.4deg);
        }
        75% {
          transform: translateX(-0.05rem) rotate(1.2deg);
        }
      }
      &:hover {
        animation: shaking 0.5s ease;
      }
    }
    &:hover &__image-el {
      transform: scale(1.1);
    }
    &:hover &__btn-remove {
      opacity: 1;
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
