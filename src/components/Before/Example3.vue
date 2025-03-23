<script setup lang="ts">
import { onMounted, ref } from "vue";

const visible = ref(false);
const elRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (elRef.value) observer.observe(elRef.value);
});
</script>

<template>
  <div class="spacer">스크롤을 내려보세요 ⬇️</div>
  <div ref="elRef" :class="['box', { visible }]">
    📺 스크롤을 내리면 이 영역이 화면에 나타납니다.
  </div>
</template>

<style scoped>
.spacer {
  height: 120vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 1.2rem;
  color: #888;
}

.box {
  padding: 2rem;
  margin: 0 auto 100px;
  max-width: 400px;
  text-align: center;
  background-color: #fffbe7;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 2s ease, transform 2s ease;
}

.box.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
