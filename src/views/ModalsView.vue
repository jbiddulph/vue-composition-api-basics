<template>
  <div class="modals">
    <h1>modals</h1>
    <button @click="showModal = true">Show button</button>
    <Modal v-if="showModal" title="My modal title via prop">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio laborum odit consequuntur reiciendis recusandae. Dolores quisquam nisi cumque laborum adipisci modi, ratione aliquid perferendis dicta incidunt ipsam? Quidem, provident?</p>
    </Modal>
  </div>
</template>

<script setup>
/*
imports
*/
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
/*
modals
*/

const showModal = ref(false)
</script>
