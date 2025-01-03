<template>
    <div class="divider" :style="dividerStyle"></div>
  </template>

<script>


export default {
  name: 'CustomDivider',
  props: {
    thickness: {
      type: String,
      default: '1px'  // Толщина по умолчанию
    },
    color: {
      type: String,
      default: '#000' // Цвет по умолчанию
    },
    styleType: {
      type: String,
      default: 'solid' // Стиль по умолчанию
    },
    margin: {
      type: String,
      default: '0' // Отступы по умолчанию
    }
  },
  computed: {
    dividerStyle() {
      return {
        borderTop: `${this.thickness} ${this.styleType} ${this.color}`,
        margin: this.margin,
        width: '100%', // Ширина разделителя
      };
    }
  }
}
</script>
<style scoped>
.divider {
  width: 100%; /* Разделитель занимает всю ширину контейнера */
}
</style>