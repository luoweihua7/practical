import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';

const env = process.env.npm_lifecycle_event;

export default defineNuxtConfig({
  build: {
    transpile: ['element-plus/es'],
    extractCSS: {
      allChunks: true,
    },
  },
  runtimeConfig: {
    env, // 不在public部分为仅在服务器下可用
    public: { env }, // 客户端js中使用
  },
  modules: [],
  css: ['@/assets/main.scss'],
  components: true,
  vite: {
    plugins: [
      ElementPlus({ useSource: true, defaultLocale: 'zh-cn' }),
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: 'sass', ssr: true })], // 注意ssr配置参数
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: 'sass', ssr: true })],
      }),
    ],
  },
});
