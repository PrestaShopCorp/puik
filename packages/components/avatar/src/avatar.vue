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
      :color="mode === PuikAvatarMode.PRIMARY ? 'white' : 'black'"
    />
    <div v-else :class="`puik-avatar_initials puik-avatar_initials--${size}`">
      {{ initials }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
const iconFontSize = ref()
const initials = ref('PS')

props.size === PuikAvatarSize.SMALL
  ? (iconFontSize.value = '1rem')
  : props.size === PuikAvatarSize.MEDIUM
  ? (iconFontSize.value = '1.5rem')
  : props.size === PuikAvatarSize.LARGE
  ? (iconFontSize.value = '2rem')
  : props.size === PuikAvatarSize.JUMBO
  ? (iconFontSize.value = '2.8rem')
  : '1rem'

props.firstname !== '' && props.lastname !== ''
  ? (initials.value =
      props.firstname[0]?.toUpperCase() + props.lastname[0]?.toUpperCase())
  : props.firstname.length > 1 && !props.lastname
  ? (initials.value =
      props.firstname[0]?.toUpperCase() + props.firstname[1]?.toUpperCase())
  : props.lastname.length > 1 && !props.firstname
  ? (initials.value =
      props.lastname[0]?.toUpperCase() + props.lastname[1]?.toUpperCase())
  : (initials.value = 'PS')
</script>
