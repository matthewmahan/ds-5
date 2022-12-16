<template>
  <div id="app">
    <div class="flex flex-col items-center justify-center p-3 min-h-full">
      <h1
        class="my-4 text-3xl font-sans text-center font-medium tracking-wider text-blue-700"
      >
        Vue.js Modal transition
      </h1>
      <button
        @click="onToggle"
        class="bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-blue-600"
      >
        Open
      </button>
    </div>
    <transition name="fade">
      <div v-if="isModalVisible">
        <div
          @click="onToggle"
          class="absolute bg-black opacity-50 inset-0 z-0"
        ></div>
        <div
          class="w-full max-w-lg px-5 py-4 relative mx-auto my-auto rounded shadow-lg bg-white"
        >
          <div>
            <div class="flex-auto leading-6">
              <h2 class="text-xl pb-2 font-regular font-sans ">Mark as Reviewed</h2>
              <p class="py-2 text-base text-gray-700 font-sans ">
                Do you want to mark all fields as reviewed
              </p>
            </div>
            <div class="text-right pt-4 space-x-4 md:block">
              <button
                class="font-sans rounded md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border border-ds-grey-30 text-ds-grey-80 rounded-md hover:shadow-lg hover:bg-gray-100 hover:text-blue-500"
              >
              Cancel
              </button>
              <button
                class="font-sans rounded md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border border-ds-grey-30 text-ds-grey-80 rounded-md hover:shadow-lg hover:bg-gray-100 hover:text-blue-500"
              >
              Option
              </button>
              <button
                @click="onToggle"
                class="font-sans rounded md:mb-0 bg-ds-blue-50 border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-ds-blue-60"
              >
              Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    }
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style>

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
