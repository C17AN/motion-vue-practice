<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <div class="spacer">스크롤을 내려보세요 ⬇️</div>
  <motion.div
    class="box"
    :initial="{ opacity: 0, y: 30 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once: true }"
    :transition="{ duration: 2, ease: 'easeIn' }"
  >
    📺 스크롤을 내리면 이 영역이 화면에 나타납니다.
  </motion.div>
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
}
</style>
