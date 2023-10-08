<template>
  <div class="modals">
    <h1>modals</h1>
    <div>
      <label>Show dark modal?</label>
      <input v-model="showDarkModal" type="checkbox">
    </div>
    <button @click="showModal=true">Show button</button>
    <Component 
      v-model="showModal"
      :is="showDarkModal ? ModalDark : Modal"
      title="My modal title via prop"
      >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio laborum odit consequuntur reiciendis recusandae. Dolores quisquam nisi cumque laborum adipisci modi, ratione aliquid perferendis dicta incidunt ipsam? Quidem, provident?</p>
    </Component>
  </div>
</template>

<script setup>
/*
imports
*/
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'


/*
modals
*/
const showDarkModal = ref(false)
const showModal = ref(false)
</script>
