<template>
  <div class="container flex flex-col text-start">
    <div class="flex items-center">
      <label for="input" class="text-sm" :class="classObj">{{ label }}</label>
      <span v-if="props.required" className="text-red-500">*</span>
    </div>
    <input class="text-black border border-gray-200 pl-1 line-height-2"
      :class="inputClassObj"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="emit('update:modelValue', $event.target.value)"
    /> 
    <p v-if="props.errorMsg" className="mt-1 text-xs text-red-500" role="alert" aria-live="polite">
      {{ errorMsg }}
    </p>
</div>
</template>

<script lang="ts" setup>

  import { computed } from 'vue';
  const modelValue = defineModel();
  const emit = defineEmits();

  const props = withDefaults(defineProps<{
    type?: string,
    modelValue?: string,
    size?: string,
    backgroundColor?: string,
    primary?: boolean,
    secondary?: boolean,
    onChange?: (evt: any) => void
    placeholder?: string,
    label?: string
    title?: string
    inputClass?: string
    labelClass?: string
    required?: boolean
    errorMsg?: string
    disabled?: boolean
  }>(), { primary: true, placeholder: 'placeholder', title: 'title', type: 'text' });

// NOTE: THIS IS JUST AN EXAMPLE ON HOW TO ADD BASE CLASES TO THE COMPONENT
 const classObj = computed(() => ({
  'text-black': props.primary,
  'text-red-500': props.secondary
 }));

 const inputClassObj = computed(() => ({
  ...props.inputClass,
  'bg-gray-100 pointer-events-none': props.disabled,
  'bg-black text-white': props.secondary
 }))

</script>

