<template>
  <teleport to=".modals-container">
      <div
        v-if="modelValue"
        class="modal-dark"
      >
        <h2>{{ title }}</h2>
        <slot />
        <button @click="$emit('update:modelValue', false)">
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
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: PerformanceServerTiming,
    default: 'No title specified'
  }
})

/*
Emits 
*/
const emit = defineEmits(['update:modelValue'])

</script>

<style>
.modal-dark {
  background: #333;
  color: white;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>