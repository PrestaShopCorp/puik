<template>
  <div
    class="flex flex-col space-y-3 text-xs sm:flex-row sm:space-y-0 sm:space-x-4"
  >
    <div class="w-24 shrink-0">
      <div class="flex flex-col justify-center h-10">
        <div class="text-sm font-semibold text-slate-900 dark:text-slate-200">
          {{ name }}
        </div>
      </div>
    </div>
    <div
      class="grid flex-1 min-w-0 grid-cols-5 gap-x-4 gap-y-3 2xl:grid-cols-10 2xl:gap-x-2"
    >
      <div v-for="(color, idx) in colors" :key="idx" class="relative flex">
        <div class="cursor-pointer space-y-1.5">
          <div
            class="w-full h-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
            :class="color.class"
          ></div>
          <div
            class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0"
          >
            <div
              class="w-6 font-medium text-slate-900 dark:text-white 2xl:w-full"
            >
              {{ color.name }}
            </div>
            <div class="lowercase text-slate-500 dark:text-slate-400">
              {{ color.hex }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Color {
  class: string
  name: string
  hex: string
}
interface ColorItemProps {
  name: string
  colors: Color[]
}

const props = defineProps<ColorItemProps>()
</script>

<style scoped></style>
