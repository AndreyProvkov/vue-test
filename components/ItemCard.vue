<template>
  <div class="item">
    <div class="item__image">
      <img src="/camera.jpg" alt="camera" />
    </div>
    <h2>Наименование товара</h2>
    <p class="item__description">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <div class="item__price"></div>
    <button class="btn-remove item__remove">
      <BtnRemove />
    </button>
  </div>
</template>

<script>
import BtnRemove from './btn-remove.vue'
export default {
  components: { BtnRemove }
}
</script>
