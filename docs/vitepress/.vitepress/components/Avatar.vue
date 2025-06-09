<template>
  <div class="flex flex-col gap-y-4">
    <div>
      <PuikAvatar
        :id="id"
        :size="size"
        :type="type"
        :mode="mode"
        :src="src"
        :alt="alt"
        :icon="icon"
        :firstName="firstName"
        :lastName="lastName"
      />
      <PuikAvatar
        :id="id"
        :size="size"
        :type="type"
        :mode="mode"
        :src="src"
        :alt="alt"
        :icon="icon"
        :firstName="firstName"
        :lastName="lastName"
      />
      <PuikAvatar
        :id="id"
        :size="size"
        :type="type"
        :mode="mode"
        :src="src"
        :alt="alt"
        :icon="icon"
        :firstName="firstName"
        :lastName="lastName"
      />
    </div>
    <div class="flex flex-col gap-y-2">
      <puik-input
        v-model="id"
        label="ID"
        placeholder="Enter ID"
      />
      <puik-select
        v-model="size"
        id="avatar-size-select"
        label="Size"
        :options="Object.values(PuikAvatarSize).map(size => ({ label: size, value: size }))"
      />
      <puik-select
        v-model="type"
        id="avatar-type-select"
        label="Type"
        :options="Object.values(PuikAvatarType).map(type => ({ label: type, value: type }))"
      />
      <puik-select
        v-model="mode"
        id="avatar-mode-select"
        label="Mode"
        :options="Object.values(PuikAvatarMode).map(mode => ({ label: mode, value: mode }))"
      />
      <puik-input
        v-model="src"
        label="Image Source"
        placeholder="Enter image URL"
      />
      <puik-input
        v-model="alt"
        label="Alt Text"
        placeholder="Enter alt text"
      />
      <puik-input
        v-model="icon"
        label="Icon"
        placeholder="Enter icon name"
      />
      <puik-input
        v-model="firstName"
        label="First Name"
        placeholder="Enter first name"
      />
      <puik-input
        v-model="lastName"
        label="Last Name"
        placeholder="Enter last name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {  PuikAvatarMode,  PuikAvatarSize, PuikAvatarType } from '@prestashopcorp/puik-components';

const id = ref('avatar-id');
const size = ref(PuikAvatarSize.Medium);
const type = ref(PuikAvatarType.Initials);
const mode = ref(PuikAvatarMode.Primary);
const src = ref('https://picsum.photos/id/823/200');
const alt = ref('puik-avatar-alt');
const icon = ref('home');
const firstName = ref('Presta');
const lastName = ref('Shop');
</script>
