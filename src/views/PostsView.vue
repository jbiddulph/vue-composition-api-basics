
<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/posts/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
    <div>
      <button 
        @click="counter.increaseCounter(1)" 
        class="counter-button"
        :class="{'yellow' : counter.oddOrEven === 'odd'}"
      >
        {{ counter.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

/*
  Posts
*/
const posts = ref([
  {
    id: 'id1',
    title: 'post 1'
  },
  {
    id: 'id2',
    title: 'post 2'
  },
  {
    id: 'id3',
    title: 'post 3'
  }
])
 const counter = useCounterStore()
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}
.yellow {
  background: yellow;
}
</style>