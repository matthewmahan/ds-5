<template>
  <button
    class="rounded shadow-sm"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { createComponent, SetupContext } from '@vue/composition-api';

export default createComponent({
  name: 'button',
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
button-primary {
  @apply px-3 py-2 leading-tight text-base rounded;
}

</style>
