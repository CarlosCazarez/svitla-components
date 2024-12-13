<template>
  <div class="container flex flex-col text-start">
    <div class="flex items-center mb-1">
      <label for="input" class="text-md text font-semibold" :class="classObj">{{ label }}</label>
      <span v-if="props.required" className="text-red-500">*</span>
    </div>
    <input class="text-black border-2 border-gray-200 pl-2 line-height-5 rounded-[10px] h-12"
      :class="inputClassObj"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @input="handleInput"
    /> 
    <p v-if="props.errorMsg" className="mt-1 text-sm text-red-500" role="alert" aria-live="polite">
      {{ errorMsg }}
    </p>
</div>
</template>

<script lang="ts" setup>

  import { computed } from 'vue';
  const emit = defineEmits(['update:modelValue']);

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

 const inputClassObj = computed(() => {
  const inputClasses = props.inputClass;
  return {
    inputClasses,
    'bg-gray-100 pointer-events-none': props.disabled,
    'bg-black text-white': props.secondary,
  }
});

const handleInput = (evt: Event) => {
  const input = evt.target as HTMLInputElement;
  emit('update:modelValue', input.value)
}
</script>

