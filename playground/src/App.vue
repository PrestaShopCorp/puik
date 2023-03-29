<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue'
import { PuikButton, PuikModal, ModalStyle, ModalSize } from '@puik/components'

const maModaleIsOpen = ref(false)

const openModalBro = () => {
  maModaleIsOpen.value = true
}

const closeModal = () => {
  maModaleIsOpen.value = false
}
</script>

<template>
  <div class="app-container">
    <puik-button variant="primary" @click="openModalBro"
      >Click me motafucka !</puik-button
    >
    <puik-modal
      title="Ma modale de fouuuuuuuuuuuuu malade BROOOOO"
      :modal-style="ModalStyle.Feedback"
      :modal-size="ModalSize.Small"
      icon-name="home"
      :is-open="maModaleIsOpen"
      main-button-text="OK"
      second-button-text="Fuck"
      side-button-text="LOL"
      :has-close-button="true"
      @close="closeModal"
      @buttonSecond="closeModal"
    >
      <template #content>
        <div class="flex flex-col gap-7">
          <section class="flex">
            <div>
              <h3>Build for Prestashop - coming soon</h3>
              <p>
                Use Prestashop Integration Framework that includes several
                shiiiiiiit
              </p>
            </div>
            <puik-button variant="tertiary">
              Stay informed
              <span class="puik-icon puik-button__right-icon">open_in_new</span>
            </puik-button>
          </section>

          <section class="flex">
            <div>
              <h3>On premises module</h3>
              <p>Single-purchase module build with shiiiiiiit</p>
            </div>
          </section>

          <section class="flex">
            <div>
              <h3>Theme</h3>
              <p>
                Single-purchase theme that your customers can download to
                shiiiiiiit
              </p>
            </div>
          </section>

          <section class="flex">
            <div>
              <h3>El Famoso Lorem Ipsumos</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                aspernatur modi totam explicabo, veniam tempore praesentium
                laborum ipsam ullam deleniti ducimus saepe, labore, eveniet in
                reprehenderit repudiandae facere maiores non.
              </p>
            </div>
          </section>
        </div>
      </template>
    </puik-modal>
  </div>
</template>

<style lang="scss">
html,
body {
  @apply w-screen h-screen m-0;
  #app {
    @apply w-full h-full;
    .app-container {
      @apply w-full h-full;
    }
  }
}
</style>
