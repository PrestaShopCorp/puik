<template>
  <div
    :id="id"
    :class="`puik-avatar puik-avatar--${size} puik-avatar--${type} puik-avatar--${mode}`"
    :data-test="dataTest"
    role="img"
    :aria-label="ariaLabel || altText"
    tabindex="0"
  >
    <img
      v-if="src && type == PuikAvatarType.Photo"
      :src="src"
      :alt="alt || avatarAltDefault"
      :data-test="dataTest != undefined ? `image-${dataTest}` : undefined"
    >
    <puik-icon
      v-else-if="icon && type == PuikAvatarType.Icon"
      :icon="icon"
      :font-size="ICONS_FONTSIZE[props.size]"
      :color="AVATAR_MODE[props.mode]"
      :data-test="dataTest != undefined ? `icon-${dataTest}` : undefined"
      role="img"
      :aria-label="ariaLabel ||iconAltText"
    />
    <div
      v-else
      :key="initials"
      :class="`puik-avatar_initials puik-avatar_initials--${size}`"
      :data-test="dataTest != undefined ? `initials-${dataTest}` : undefined"
      role="img"
      :aria-label="ariaLabel || initialsAltText"
    >
      {{ initials }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLocale } from '@prestashopcorp/puik-locale';
import { getInitialLetter } from '@prestashopcorp/puik-utils';
import { PuikIcon } from '@prestashopcorp/puik-components/icon';
import {
  AvatarProps,
  PuikAvatarType,
  ICONS_FONTSIZE,
  AVATAR_MODE,
  PuikAvatarMode,
  PuikAvatarSize
} from './avatar';

defineOptions({
  name: 'PuikAvatar'
});

const props = withDefaults(defineProps<AvatarProps>(), {
  mode: PuikAvatarMode.Primary,
  type: PuikAvatarType.Initials,
  size: PuikAvatarSize.Medium,
  firstName: '',
  lastName: ''
});

const { t } = useLocale();
const avatarAltDefault = t('puik.avatar.altDefault');

const initials = computed(() => {
  const firstInitial = props.firstName
    ? getInitialLetter(props.firstName, 0)
    : '';

  const lastInitial = props.lastName ? getInitialLetter(props.lastName, 0) : '';

  const initialsValue = props.singleInitial
    ? firstInitial || lastInitial || 'P'
    : firstInitial && lastInitial
      ? firstInitial + lastInitial
      : firstInitial && props.firstName.length > 1
        ? firstInitial + getInitialLetter(props.firstName, 1)
        : lastInitial && props.lastName.length > 1
          ? lastInitial + getInitialLetter(props.lastName, 1)
          : 'PS';

  return initialsValue;
});

const altText = computed(() => {
  if (props.type === PuikAvatarType.Photo) {
    return props.alt || avatarAltDefault;
  } else if (props.type === PuikAvatarType.Icon) {
    return props.icon || avatarAltDefault;
  } else {
    return initials.value;
  }
});

const iconAltText = computed(() => props.icon || avatarAltDefault);
const initialsAltText = computed(() => initials.value);
</script>

<style lang="scss">
@use '@prestashopcorp/puik-theme/src/base.scss';
@use '@prestashopcorp/puik-theme/src/puik-avatar.scss';
@use '@prestashopcorp/puik-theme/src/puik-icon.scss';
</style>
