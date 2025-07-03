<template>
  <div class="flex flex-col gap-6 w-full">
    <puik-textarea
      id="textarea-1"
      v-model="value"
      placeholder="Default textarea"
      data-test="textarea-default"
    />
    <puik-textarea
      id="textarea-2"
      v-model="value"
      placeholder="Disabled textarea"
      :disabled="true"
      data-test="textarea-disabled"
    />
    <puik-textarea
      id="textarea-3"
      v-model="value"
      placeholder="Readonly textarea"
      :readonly="true"
      data-test="textarea-readonly"
    />
    <puik-textarea
      id="textarea-4"
      v-model="value"
      placeholder="With error"
      error="This is an error message"
      data-test="textarea-error"
    />
    <puik-textarea
      id="textarea-5"
      v-model="value"
      placeholder="With character count"
      :max-length="50"
      data-test="textarea-charcount"
    />
    <puik-textarea
      id="textarea-6"
      v-model="value"
      placeholder="Auto-grow textarea"
      :auto-grow="true"
      :rows="2"
      :max-rows="6"
      data-test="textarea-autogrow"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
