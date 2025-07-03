<template>
  <div class="flex items-center justify-center">
    <puik-button @click="openModal">
      open modal
    </puik-button>
    <puik-modal
      :title="title"
      :title-icon="titleIcon"
      :main-button-text="mainButtonText"
      :second-button-text="secondButtonText"
      :side-button-text="sideButtonText"
      :is-open="isOpen"
      :isMainButtonDisabled="isMainButtonDisabled"
      :variant="variant"
      :size="size"
      :data-test="dataTest"
      @close="closeModal"
      @button-main="logAction('main action')"
      @button-second="logAction('second action')"
      @button-side="logAction('side action')"
    >
      <section class="flex flex-col gap-4">
      <h3 class="puik-h3">El Famoso Lorem Ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        aspernatur modi totam explicabo, veniam tempore praesentium
        laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
        reprehenderit repudiandae facere maiores non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        aspernatur modi totam explicabo, veniam tempore praesentium
        laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
        reprehenderit repudiandae facere maiores non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        aspernatur modi totam explicabo, veniam tempore praesentium
        laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
        reprehenderit repudiandae facere maiores non.
      </p>
    </section>
    </puik-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const mainButtonText = ref('Confirm');
const secondButtonText = ref('Cancel');
const sideButtonText = ref('Help');
const title = ref('Modal Title');
const titleIcon = ref('');
const variant = ref('default');
const size = ref('medium');
const dataTest = ref('modal-test');
const isMainButtonDisabled = ref(false);

const openModal = () => {
  isOpen.value = true;
};
const closeModal = () => {
  isOpen.value = false;
};
const logAction = (actionName: string) => {
  console.log(actionName);
  closeModal();
}

</script>
