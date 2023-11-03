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
  if (props.firstname !== '' && props.lastname !== '') {
    return props.firstname[0]?.toUpperCase() + props.lastname[0]?.toUpperCase()
  } else if (props.firstname.length > 1 && !props.lastname) {
    return props.firstname[0]?.toUpperCase() + props.firstname[1]?.toUpperCase()
  } else if (props.lastname.length > 1 && !props.firstname) {
    return props.lastname[0]?.toUpperCase() + props.lastname[1]?.toUpperCase()
  } else {
    return 'PS'
  }
})
</script>
