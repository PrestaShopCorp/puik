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
      :color="AVATAR_MODE[props.mode]"
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
import { getInitialLetter } from '@puik/utils'
import PuikIcon from '../../icon'
import {
  avatarProps,
  PuikAvatarType,
  ICONS_FONTSIZE,
  AVATAR_MODE,
} from './avatar'

defineOptions({
  name: 'PuikAvatar',
})

const props = defineProps(avatarProps)

const initials = computed(() => {
  const firstInitial = props.firstname
    ? getInitialLetter(props.firstname, 0)
    : ''

  const lastInitial = props.lastname ? getInitialLetter(props.lastname, 0) : ''

  const initialsValue = props.singleInitial
    ? firstInitial || lastInitial || 'P'
    : firstInitial && lastInitial
    ? firstInitial + lastInitial
    : firstInitial && props.firstname.length > 1
    ? firstInitial + getInitialLetter(props.firstname, 1)
    : lastInitial && props.lastname.length > 1
    ? lastInitial + getInitialLetter(props.lastname, 1)
    : 'PS'

  return initialsValue
})
</script>
