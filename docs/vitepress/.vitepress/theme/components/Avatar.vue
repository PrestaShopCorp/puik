<template>
  <div class="flex gap-x-4">
    <PuikAvatar
      id="avatar-initials"
      :size="size"
      type="initials"
      :mode="mode"
      :firstName="firstName"
      :lastName="lastName"
    />
    <PuikAvatar
      id="avatar-photo"
      :size="size"
      type="photo"
      :mode="mode"
      :src="src"
      :alt="alt"
    />
    <PuikAvatar
      id="avatar-icon"
      :size="size"
      type="icon"
      :icon="icon"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {  PuikAvatarMode,  PuikAvatarSize, PuikAvatarType } from '@prestashopcorp/puik-components';

const size = ref(PuikAvatarSize.Medium);
const type = ref(PuikAvatarType.Initials);
const mode = ref(PuikAvatarMode.Primary);
const src = ref('https://picsum.photos/id/823/200');
const alt = ref('puik-avatar-alt');
const icon = ref('home');
const firstName = ref('Presta');
const lastName = ref('Shop');
</script>
