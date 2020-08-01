import './promise-polyfill'
import { app } from './app'
import Vue from 'vue';

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

app.$mount('#app')
