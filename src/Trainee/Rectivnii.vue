<template>
    <div>
      <h1>Добавление нового свойства в объект</h1>
      <input v-model="newKey" placeholder="Введите новый ключ" />
      <input v-model="newValue" placeholder="Введите новое значение" />
      <button @click="addProperty">Добавить свойство</button>
  
      <h2>Объект:</h2>
      <pre>{{ myObject }}</pre>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      myObject: { existingProperty: 'Существующее значение' },
      newKey: '',
      newValue: ''
    };
  },
  methods: {
    addProperty() {
      if (this.newKey && this.newValue) {
        this.$set(this.myObject, this.newKey, this.newValue);
        this.newKey = ''; 
        this.newValue = ''; 
      }
    }
  }
};
</script>

<style></style>