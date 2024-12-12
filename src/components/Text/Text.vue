<template>
  <p v-if="label" class="text-black" :class="classObj" style="">
    <slot>{{ label }}</slot>
    <slot name="ejemplo"></slot>
  </p>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  const props = withDefaults(defineProps<{
    label?: string,
    primary?: boolean,
    secondary?: boolean,
    size?: 'sm' | 'md' | 'lg' | 'xl',
    style?: string
  }>(), ({
    primary: true,
    label: 'Label Placeholder'
  }))

  console.log(props)
  const classObj = computed(() => ({
    'text-black': props.primary,
    'text-red-500': props.secondary,
    'text-xs': props.size === 'xs',
    'text-md': props.size === 'md',
    'text-lg': props.size === 'lg',
    'text-xl': props.size === 'xl',
  }));
</script>