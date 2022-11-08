/*
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-07 14:50:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 10:06:10
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'], 
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/global.scss";'
      }
    }
  }
})
