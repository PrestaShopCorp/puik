<template>
  <div class="flex items-center justify-center">
    <puik-tab-navigation name="demo-tabs" :default-position="1">
      <puik-tab-navigation-group-titles aria-label="Demo tab navigation">
        <puik-tab-navigation-title :position="1">
          <puik-icon icon="home" font-size="18px" color="black" node-type="span" />
          Home
        </puik-tab-navigation-title>
        <puik-tab-navigation-title :position="2" :disabled="true">
          Disabled
        </puik-tab-navigation-title>
        <puik-tab-navigation-title :position="3">
          Settings
        </puik-tab-navigation-title>
      </puik-tab-navigation-group-titles>
      <puik-tab-navigation-group-panels>
        <puik-tab-navigation-panel :position="1">
          <div>Welcome to the Home tab!</div>
        </puik-tab-navigation-panel>
        <puik-tab-navigation-panel :position="2">
          <div>This tab is disabled.</div>
        </puik-tab-navigation-panel>
        <puik-tab-navigation-panel :position="3">
          <div>Settings content here.</div>
        </puik-tab-navigation-panel>
      </puik-tab-navigation-group-panels>
    </puik-tab-navigation>
  </div>
</template>

<script setup lang="ts">
</script>
