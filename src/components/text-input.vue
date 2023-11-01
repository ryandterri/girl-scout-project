<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: String,
  label: String
})
const emits = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val)
})

</script>

<template>
  <div>
    <label class="block font-bold mb-2 text-sm text-gray-900">{{ label}}</label>
    <input type="tel" class="p-2 border border-gray-300 rounded-lg" v-model="model"/>
  </div>
</template>

<style scoped>

</style>