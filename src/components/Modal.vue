<template>
  <teleport to=".modals-container">
      <div
        v-if="modelValue"
        class="modal"
      >
        <h2>{{ title }}</h2>
        <slot />
        <button @click="$emit('update:modelValue', false)">
          Hide modal
        </button>
        <div>
          Username: {{ userData.username }}
        </div>
      </div>
    </teleport>
</template>

<script setup>
/*  Import */
import { inject } from 'vue';

/* Props */
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

/* Emits */
const emit = defineEmits(['update:modelValue'])

/* User data */
const userData = inject('userData')
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