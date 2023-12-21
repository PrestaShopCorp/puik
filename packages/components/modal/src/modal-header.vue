<template>
  <div class="puik-modal__header">
    <div class="puik-modal__header__title">
      <puik-icon
        v-if="getTitleIconName"
        class="puik-modal__header__icon"
        :class="[`puik-modal__header__icon--${variant}`]"
        :icon="getTitleIconName"
        font-size="1.5rem"
      />
      <DialogTitle
        class="puik-h2"
        :data-test="
          dataTest !== undefined ? `title-${dataTest}` : undefined
        "
      >
        <slot>{{ title }}</slot>
      </DialogTitle>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DialogTitle } from 'radix-vue';
import { ModalHeaderProps, DESTRUCTIVE_ICON_NAME } from './modal-header';
import { PuikModalVariants, ModalInjectionKey, ModalContext } from './modal';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { computed, inject } from 'vue';

defineOptions({
  name: 'PuikModalHeader'
});

const props = defineProps<ModalHeaderProps>();

const { variant, dataTest } = inject(ModalInjectionKey) as ModalContext;

const getTitleIconName = computed(() => {
  return variant === PuikModalVariants.Destructive
    ? DESTRUCTIVE_ICON_NAME
    : props.icon;
});
</script>

<style scoped>

</style>
