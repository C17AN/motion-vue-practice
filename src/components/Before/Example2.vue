<script setup lang="ts">
import { ref } from "vue";

const items = ref(["A", "B", "C", "D", "E"]);

const shuffle = () => {
  items.value = [...items.value].reverse();
};
</script>

<template>
  <div class="list-container">
    <button @click="shuffle" class="shuffle-btn">순서 바꾸기</button>
    <div class="list">
      <div class="item" v-for="item in items" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-container {
  text-align: center;
}

.shuffle-btn {
  margin-bottom: 1rem;
  padding: 8px 16px;
  border: none;
  background-color: #007acc;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

.list {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.item {
  width: 50px;
  height: 50px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 1px solid #ccc;
}
</style>
