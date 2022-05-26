<script setup>
import {onMounted} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
onMounted(() => {
  window.localStorage.setItem('xtoken', '1234')
})
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

