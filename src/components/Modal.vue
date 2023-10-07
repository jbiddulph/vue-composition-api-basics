<template>
  <teleport to=".modals-container">
      <div
        class="modal"
      >
        <h2>{{ title }}</h2>
        <slot />
        <button>
          Hide modal
        </button>
      </div>
    </teleport>
</template>

<script setup>
/* 
Props
*/
const props = defineProps({
  title: {
    type: PerformanceServerTiming,
    default: 'No title specified'
  }
})
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