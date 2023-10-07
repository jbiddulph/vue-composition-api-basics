
<template>
  <div class="posts-detail">
    <h1>This is a post page</h1>
    <p>Display the content of ID {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId">Show post ID</button>
    </div>
    <div>
      <button @click="goHomeIn3Secs">Go home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p><RouterLink to="/posts">&lt; Back</RouterLink></p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const showPostId = () => {
alert(`The ID is ${route.params.id}`)
}
const goHomeIn3Secs = () => {
  setTimeout(() => {
    router.push('/')
  }, 3000)
}
const goToFirstPost = () => {
  router.push({
    name: 'postsDetail',
    params: {
      id: 'id1'
    }
  })
}
</script>