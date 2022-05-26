<script setup>
import { onMounted } from 'vue'
import { getListAPI } from '../request/api'

const getList = () => {
  getListAPI().then(res => {console.log(res)})
  setTimeout(() => {
    getListAPI().then(res => {console.log(res)})
  }, 200);
  setTimeout(() => {
    getListAPI().then(res => {console.log(res)})
  }, 400);
}

onMounted(() => {
  getList()
})
</script>
<template>


</template>