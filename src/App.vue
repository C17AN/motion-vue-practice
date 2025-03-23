<script setup lang="ts">
import { ref, shallowRef, watchEffect } from "vue";

// 현재 예시 번호 (1 또는 2)
const selectedExample = ref(1);

// 동적 컴포넌트 import용 ref
const BeforeComponent = shallowRef();
const AfterComponent = shallowRef();

// 예시 번호가 바뀌면 컴포넌트를 동적으로 import
watchEffect(async () => {
  const before = await import(
    `./components/Before/Example${selectedExample.value}.vue`
  );
  const after = await import(
    `./components/After/Example${selectedExample.value}.vue`
  );
  BeforeComponent.value = before.default;
  AfterComponent.value = after.default;
});
</script>

<template>
  <div class="container">
    <!-- 예시 선택 버튼 -->
    <div class="button-group">
      <button
        v-for="n in 3"
        :key="n"
        :class="{ active: selectedExample === n }"
        @click="selectedExample = n"
      >
        예시 {{ n }}
      </button>
    </div>

    <!-- 좌우 비교 영역 -->
    <div class="split-view">
      <div class="panel">
        <h2>Before</h2>
        <component :is="BeforeComponent" />
      </div>
      <div class="panel">
        <h2>After (motion)</h2>
        <component :is="AfterComponent" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
}

.button-group {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
}

.button-group button {
  padding: 10px 16px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.button-group .active {
  background: #007acc;
  color: white;
  border-color: #007acc;
}

.split-view {
  display: flex;
  gap: 2rem;
}

.panel {
  flex: 1;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background: #fafafa;
  text-align: center;
}
</style>
