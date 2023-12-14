<template>
  <DialogPortal>
    <DialogOverlay class="puik-modal-overlay">
      <DialogContent
        class="puik-modal"
        :class="[`puik-modal--${size}`]"
      >
        <VisuallyHidden>
          <DialogDescription>{{ description }}</DialogDescription>
        </VisuallyHidden>
        <PuikModalClose
          v-if="variant !== PuikModalVariants.Dialog"
          as-child
        >
          <puik-button
            class="puik-modal__close"
            variant="text"
            :data-test="
              dataTest ? `closeButton-${dataTest}` : undefined
            "
            @click="$emit('closed')"
          >
            <puik-icon
              icon="close"
              font-size="1.5rem"
            />
          </puik-button>
        </PuikModalClose>
        <slot />
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>

<script setup lang="ts">
import { DialogPortal, DialogContent, DialogOverlay, DialogDescription, VisuallyHidden } from 'radix-vue';
import { ModalInjectionKey, ModalContext, PuikModalVariants } from './modal';
import { PuikButton } from '@prestashopcorp/puik-components/button';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import { PuikModalClose } from '@prestashopcorp/puik-components/modal';
import { inject } from 'vue';

defineEmits<{closed: []}>();

const { size, dataTest, variant, description } = inject(ModalInjectionKey) as ModalContext;
</script>

<style scoped>

</style>
