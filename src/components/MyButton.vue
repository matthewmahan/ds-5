<template>
  <button
    aria-label="button"
    class="rounded-lg px-5 py-3 text-white font-semibold leading-tight text-base font-medium shadow-sm"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { createComponent, SetupContext } from '@vue/composition-api';

export default createComponent({
  name: 'my-button',
  setup: (props: any, context: SetupContext) => {
    const onClick = () => {
      console.log('clicked!');
      context.emit('click');
    };

    return {
      onClick
    };
  }
});
</script>

<style>
button {
  @apply bg-blue-500 rounded-lg px-5 py-3 text-white font-semibold leading-tight text-base font-medium border-transparent shadow;
}

button:hover {
  @apply bg-blue-700 rounded-lg px-5 py-3 text-white font-semibold leading-tight text-base font-medium border-transparent shadow;
}
</style>
