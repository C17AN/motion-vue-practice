<script setup lang="ts">
import { ref } from "vue";

const expanded = ref(false);
</script>

<template>
  <div class="card" @click="expanded = !expanded">
    <h3>🧑‍💻 프론트엔드 개발자</h3>
    <transition name="fade-slide" appear>
      <div v-if="expanded" class="details-wrapper">
        <p class="details">
          프론트엔드 개발자는 서비스의 UX를 개선하고
          <br />
          화면에 표시되는 영역을 개발합니다.
        </p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  background: #f4f4f4;
  padding: 1rem;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
}

.details-wrapper {
  overflow: hidden;
}

/* === Transition 설정 === */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: max-height 0.4s ease-in-out, opacity 0.2s ease-in-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  max-height: 0;
  opacity: 0;
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  max-height: 200px; /* 충분한 높이 값 */
  opacity: 1;
}

.details {
  margin-top: 0.5rem;
  line-height: 1.4;
}
</style>
