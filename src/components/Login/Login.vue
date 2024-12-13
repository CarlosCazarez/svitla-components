<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import Input from '../Input/Input.vue';
  import Button from '../Button/Button.vue'

  const email = ref('');
  const password = ref('');

  const props = defineProps<{
    username: string,
    password: string,
    className?: string,
    handleForgetPassword?: (evt: Event) => void
    handleSignIn?: (evt: Event) => void
  }>();

const classObj = computed(() => {
  const propClasses = props.className
  return{
    propClasses
  }
});
</script>

<template>
  <div :class="classObj">
    <Input class="mb-2" label="Email" placeholder="email@logocompan" v-model="email" error-msg="Invalid format"/>
    <Input label="Password" placeholder="Password..." v-model="password" />
    <div class="flex justify-between mt-4">
      <div><input class="mr-2" type="checkbox" name="remember-me"><label for="remember-meß">Remember me</label></div>
      <div :onclick="props.handleForgetPassword" class="text-blue-500 font-semibold underline underline-offset-4 hover:cursor-pointer">Forget Password?</div>
    </div>
    <Button :onclick="props.handleSignIn"label="Sign In" class="mt-[50px]" style="width: 100%;"/>
  </div>
</template>