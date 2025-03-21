import vue from "@vitejs/plugin-vue";
import MotionResolver from "motion-v/resolver";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [MotionResolver()],
    }),
  ],
});
