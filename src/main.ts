/*
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-07 14:50:19
 * @LastEditors: 
 * @LastEditTime: 2022-11-08 11:46:41
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import GlobalComponent from './components/cpns/global-component.vue'
const app = createApp(App)
app.component('GlobalComponent', GlobalComponent)
app.mount('#app')
