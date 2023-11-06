<template>
  <div
    :id="id"
    :class="`puik-avatar puik-avatar--${size} puik-avatar--${type} puik-avatar--${mode}`"
  >
    <img v-if="src && type == PuikAvatarType.PHOTO" :src="src" :alt="alt" />
    <puik-icon
      v-else-if="icon && type == PuikAvatarType.ICON"
      :icon="icon"
      :font-size="iconFontSize"
      :color="colorMode"
    />
    <div
      v-else
      :key="initials"
      :class="`puik-avatar_initials puik-avatar_initials--${size}`"
    >
      {{ initials }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import PuikIcon from '../../icon'
import {
  avatarProps,
  PuikAvatarMode,
  PuikAvatarType,
  PuikAvatarSize,
} from './avatar'

defineOptions({
  name: 'PuikAvatar',
})

const props = defineProps(avatarProps)

const iconFontSize = computed(() => {
  if (props.size === PuikAvatarSize.SMALL) {
    return '1rem'
  } else if (props.size === PuikAvatarSize.MEDIUM) {
    return '1.5rem'
  } else if (props.size === PuikAvatarSize.LARGE) {
    return '2rem'
  } else if (props.size === PuikAvatarSize.JUMBO) {
    return '2.8rem'
  } else {
    return '1rem'
  }
})

const colorMode = computed(() => {
  if (props.mode === PuikAvatarMode.PRIMARY) {
    return 'white'
  }
  return 'black'
})

const initials = computed(() => {
  const firstInitial = props.firstname
    ? props.firstname
        .replace(/[^a-zA-Z0-9]/g, '')
        .charAt(0)
        .toUpperCase()
    : ''
  const lastInitial = props.lastname
    ? props.lastname
        .replace(/[^a-zA-Z0-9]/g, '')
        .charAt(0)
        .toUpperCase()
    : ''
  const initialsValue = props.singleInitial
    ? firstInitial || lastInitial || 'P'
    : firstInitial && lastInitial
    ? firstInitial + lastInitial
    : firstInitial && props.firstname.length > 1
    ? firstInitial +
      props.firstname
        .replace(/[^a-zA-Z0-9]/g, '')
        .charAt(1)
        .toUpperCase()
    : lastInitial && props.lastname.length > 1
    ? lastInitial +
      props.lastname
        .replace(/[^a-zA-Z0-9]/g, '')
        .charAt(1)
        .toUpperCase()
    : 'PS'
  return initialsValue
})
</script>
