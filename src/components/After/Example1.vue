<script setup lang="ts">
import { AnimatePresence, motion } from "motion-v";
import { ref } from "vue";

const expanded = ref(false);
</script>

<template>
  <motion.div class="card" @click="expanded = !expanded">
    <h3>🧑‍💻 프론트엔드 개발자</h3>
    <AnimatePresence>
      <motion.div
        v-if="expanded"
        :initial="{ opacity: 0, height: 0 }"
        :animate="{ opacity: 1, height: 'auto' }"
        :exit="{ opacity: 0, height: 0 }"
        :transition="{
          opacity: { duration: 0.2 },
          height: { duration: 0.4, ease: 'easeInOut' },
        }"
        class="details-wrapper"
      >
        <p class="details">
          프론트엔드 개발자는 서비스의 UX를 개선하고
          <br />
          화면에 표시되는 영역을 개발합니다.
        </p>
      </motion.div>
    </AnimatePresence>
  </motion.div>
</template>

<style scoped>
.card {
  width: 300px;
  background: #e7f4ff;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.details-wrapper {
  overflow: hidden;
}

.details {
  margin-top: 0.5rem;
  line-height: 1.4;
}
</style>
