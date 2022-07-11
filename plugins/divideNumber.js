import Vue from 'vue'

export default () => {
  Vue.filter('divideNumber', (value) => {
    return value.toLocaleString('ru-RU')
  })
}
