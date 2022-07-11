<template>
  <form id="modal-form" class="form-add">
    <label :class="`form-add__name ${form.name.length === 0 ? 'form-add_required' : ''}`">
      <span class="form-add__name-span">
        Наименование товара
      </span>
      <input
        class="form-add__name-input"
        type="text"
        placeholder="Введите наименование товара"
        v-model.trim='inputName'
      >
      <span class="form-add__alert">Поле является побязательным</span>
    </label>
    <label class="form-add__text">
      <span class="form-add__text-span">
        Описание товара
      </span>
      <textarea
        class="form-add__text-input"
        placeholder="Введите описание товара"
        v-model.trim="inputDescription"
      />
    </label>
    <label class="form-add__link form-add_required">
      <span class="form-add__link-span">
        Ссылка на изображение товара
      </span>
      <input class="form-add__link-input" type="text" placeholder="Введите ссылку">
      <span class="form-add__alert">Поле является побязательным</span>
    </label>
    <label class="form-add__price form-add_required">
      <span class="form-add__price-span">
        Цена товара
      </span>
      <input class="form-add__price-input" type="text" placeholder="Введите цену">
      <span class="form-add__alert">Поле является побязательным</span>
    </label>
    <button type="button" disabled class="form-add__btn-add">
      Добавить товар
    </button>
    <a class='form-add__modal-close' href="#close">&#10006;</a>
  </form>
</template>

<script>
export default {
  name: 'AddFormItem',
  data () {
    return {
      form: {
        name: '',
        description: '',
        link: '',
        price: 0
      }
    }
  },
  methods: {
    deleteSpaces (str) {
      return str.replace(/\s+/g, ' ')
    },
    firstLetterUppercase (str) {
      return str[0].toUpperCase() + str.slice(1)
    },
    normalizeText (str) {
      return this.firstLetterUppercase(this.deleteSpaces(str))
    }
  },
  computed: {
    inputName: {
      get () {
        return this.form.name
      },
      set (val) {
        if (val) {
          this.form.name = this.normalizeText(val)
        } else {
          this.form.name = val
        }
      }
    },
    inputDescription: {
      get () {
        return this.form.description
      },
      set (val) {
        if (val) {
          this.form.description = this.normalizeText(val)
        } else {
          this.form.description = val
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
    %form-span {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3rem;
        letter-spacing: -0.02em;
        margin-bottom: .4rem;
        color: #49485E;
        display: inline-block;
        position: relative;
    }
    %form-span-required {
        content: '';
        width: .4rem;
        height: .4rem;
        background: #FF8484;
        border-radius: 50%;
        position: absolute;
    }
    %form-input {
        width: 100%;
        box-sizing: border-box;
        background: #FFFEFB;
        box-shadow: 0 .2rem .5rem rgba(0, 0, 0, 0.1);
        border-radius: .4rem;
        padding: 1rem 1.6rem;
        outline: none;
        border: .1rem solid transparent;
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.5rem;
        font-family: inherit;
        text-align: left;
        color: #3F3F3F;
        &::placeholder {
            color: #B4B4B4;
        }
        &:focus {
            border: .1rem solid rgba(43, 168, 226, 0.8);
        }
    }
    .form-add {
        $form: &;
        float: left;
        position: sticky;
        top: 2.4rem;
        margin-right: 1.6rem;
        background: #FFFEFB;
        box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.04), 0 .6rem 1rem rgba(0, 0, 0, 0.02);
        border-radius: .4rem;
        max-width: 28.4rem;
        padding: 2.4rem;
        &:target {
          display: block;
          float: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          @media screen and (min-width: 665px) {
            float: left;
            position: sticky;
            top: 2.4rem;
            margin-right: 1.6rem;
          }
        }
        @media screen and (max-width: 664px) {
          display: none;
          margin-right: 0;
        }
        &__modal-close {
          position: absolute;
          right: 0.5rem;
          top: 0.5rem;
          padding: 0.8rem;
          text-decoration: none;
          font-size: 1.5rem;
          line-height: 1rem;
          cursor: url('/hover.svg'), auto;
          background-color: #FFFEFB;
          color: #B4B4B4;
          transition: .3s color;
          display: none;
          &:hover {
            color: #3F3F3F;
          }
          &:active {
            color: #000;
          }
          @media screen and (max-width: 664px) {
            display: inline-block;
          }
        }
        &__name,
        &__text,
        &__link,
        &__price {
            margin-bottom: 1.6rem;
            display: block;
            &-span {
                @extend %form-span;
            }
            &-input {
                @extend %form-input;
            }
        }
        &__price {
            margin-bottom: 2.4rem;
        }
        &__name,
        &__link,
        &__price {
            position: relative;
            &-span {
                &::after {
                    @extend %form-span-required;
                }
            }
        }
        &__text-input {
            resize: none;
            height: 10.8rem;
        }
        &__alert {
          position: absolute;
          color: #FF8484;
          font-weight: 400;
          font-size: .8rem;
          line-height: 1rem;
          letter-spacing: -0.02em;
          bottom: -1.2rem;
          left: 0;
          display: none;
        }
        &__btn-add {
          width: 100%;
          border-radius: 1rem;
          outline: none;
          border: none;
          padding: 1rem;
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 1.2rem;
          line-height: 1.5rem;
          letter-spacing: -0.02em;
          cursor: url('/hover.svg'), auto;
          background: #7BAE73;
          color: #FFFFFF;
          &:disabled {
              background: #EEEEEE;
              color: #B4B4B4;
              cursor: default;
          }
          &:enabled {
            &:active {
              background: #588351;
            }
          }
        }
        &_required {
          input[type='text'] {
            &:focus {
              border: 1px solid #FF8484;
              & + #{ $form }__alert {
                display: block;
              }
            }
          }
        }
}
</style>
