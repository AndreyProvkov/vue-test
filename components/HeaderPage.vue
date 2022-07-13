<template>
  <header class="header">
    <a href="#modal-form" class="open-form">&#43;</a>
    <h1 class="header__title">
      Добавление товара
    </h1>
    <select v-model="selected" class="sort-select" @change="onSort">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  data () {
    return {
      selected: 'default',
      options: [
        { text: 'По умолчанию', value: 'default' },
        { text: 'По наименованию', value: 'name' },
        { text: 'Сначала дешёвые', value: 'min' },
        { text: 'Сначала дорогие', value: 'max' }
      ]
    }
  },
  methods: {
    onSort () {
      this.$emit('sort', this.selected)
    }
  }
}
</script>

<style scoped lang="scss">
    %text-style {
      font-weight: 400;
      color: #B4B4B4;
    }
    %block-style {
      cursor: url('/hover.svg'), auto;
      box-shadow: 0 .2rem .5rem rgba(0, 0, 0, 0.1);
      background-color: #FFFEFB;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.6rem;
      &__title {
          font-weight: 600;
          font-size: 2.8rem;
          line-height: 3.5rem;
          color: #3F3F3F;
          margin: 0;
          @media screen and (max-width: 669px) {
            display: none;
        }
      }
    }
    .sort-select {
      appearance: none;
      font-family: 'Source Sans Pro', sans-serif;
      padding: 1rem 2.7rem 1rem 1.6rem ;
      border-radius: .4rem;
      border: none;
      background-image: url('/select-arrow.png');
      background-repeat: no-repeat;
      background-position: calc(100% - 1.6rem) 55%;
      outline: none;
      @extend %text-style;
      @extend %block-style;
    }
    .open-form {
      text-decoration: none;
      padding: 1.6rem;
      border-radius: 50%;
      font-size: 2rem;
      line-height: 1rem;
      transition: .5s color, .5s box-shadow;
      display: none;
      @extend %text-style;
      @extend %block-style;
      &:hover {
        color: #3F3F3F;
        box-shadow: 0 .2rem .5rem rgba(0, 0, 0, 0.3);
      }
      &:active {
        background-color:rgb(238, 235, 227);
      }
      @media screen and (max-width: 669px) {
        display: inline-block;
      }
    }
</style>
