<template>
  <div
    :id="id"
    :class="`puik-avatar puik-avatar--${size} puik-avatar--${type} puik-avatar--${mode}`"
  >
    <img
      v-if="src && type == PuikAvatarType.PHOTO"
      :src="src"
      :alt="alt"
      :data-test="dataTest != undefined ? `image-${dataTest}` : undefined"
    />
    <puik-icon
      v-else-if="icon && type == PuikAvatarType.ICON"
      :icon="icon"
      :font-size="ICONS_FONTSIZE[props.size]"
      :color="COLOR_MODE[props.mode]"
      :data-test="dataTest != undefined ? `icon-${dataTest}` : undefined"
    />
    <div
      v-else
      :key="initials"
      :class="`puik-avatar_initials puik-avatar_initials--${size}`"
      :data-test="dataTest != undefined ? `initials-${dataTest}` : undefined"
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
  PuikAvatarType,
  ICONS_FONTSIZE,
  COLOR_MODE,
} from './avatar'

defineOptions({
  name: 'PuikAvatar',
})

const props = defineProps(avatarProps)

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
