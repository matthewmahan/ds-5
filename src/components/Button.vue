<template>
  <button
    class="rounded px-3 py-2 font-regular leading-tight text-base shadow-sm"
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
  @apply px-3 py-2 leading-tight text-base rounded;
}

button:hover {
  @apply bg-blue-700 text-white border-transparent shadow;
}

</style>
