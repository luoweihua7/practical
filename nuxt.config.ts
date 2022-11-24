// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';

const env = process.env.npm_lifecycle_event;

const transpile = env === 'build' ? ['element-plus'] : [];

export default defineNuxtConfig({
  build: {
    transpile: [...transpile, '@babel/runtime', 'lodash-es'],
    extractCSS: {
      allChunks: true,
    },
  },
  runtimeConfig: {
    env, // 不在public部分为仅在服务器下可用
    public: { env }, // 客户端js中使用
  },
  modules: [
    ['nuxt-purgecss', {}], // include purgecss
  ],
  css: ['@/assets/main.scss'],
  components: {
    dirs: [
      '~/components',
      { extensions: ['vue', 'ts', 'js'], path: 'node_modules/element-plus/es' },
      'node_modules/@element-plus/icons-vue',
    ],
  },
  vite: {
    // ssr: {
    //   noExternal: ['element-plus/es', 'lodash-es', /vue-i18n/],
    // },
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
