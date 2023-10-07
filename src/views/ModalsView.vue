<template>
  <div class="modals">
    <h1>modals</h1>
    <button @click="showModal = true">Show button</button>
    <teleport to=".modals-container">
      <div
        v-if="showModal"
        class="modal"
      >
        <h2>this is the modal</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio laborum odit consequuntur reiciendis recusandae. Dolores quisquam nisi cumque laborum adipisci modi, ratione aliquid perferendis dicta incidunt ipsam? Quidem, provident?</p>
        <button @click="showModal = false">
          Hide modal
        </button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
/*
imports
*/
import { ref } from 'vue'
/*
modals
*/

const showModal = ref(false)
</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>