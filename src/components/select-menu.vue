<script setup>

import { computed } from "vue";

const props = defineProps({
  label: String,
  options: Array,
  multiple: Boolean,
  placeholder: String,
  modelValue: String
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
    <select :multiple="multiple" v-model="model" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 p-2.5">
      <option v-if="placeholder" :value="undefined">{{ placeholder }}</option>
      <option v-for="option in options" :value="option">{{option}}</option>
    </select>
  </div>
</template>

<style scoped>

</style>