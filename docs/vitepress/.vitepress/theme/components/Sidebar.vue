<template>
  <puik-sidebar>
    <puik-sidebar-item title="Home" icon="home" />
    <puik-sidebar-item title="Dashboard" icon="trending_up" />
    <puik-sidebar-title>Section title</puik-sidebar-title>
    <puik-sidebar-group-item
      title="Orders"
      icon="shopping_basket"
      name="group-1"
      active
    >
      <puik-sidebar-item title="Title 1" active />
      <puik-sidebar-item title="Title 2" />
      <puik-sidebar-item title="Title 3" />
    </puik-sidebar-group-item>
    <puik-sidebar-group-item title="Catalog" icon="store" name="group-2">
      <puik-sidebar-item title="Title 1" />
      <puik-sidebar-item title="Title 2" />
      <puik-sidebar-item title="Title 3" />
    </puik-sidebar-group-item>
    <puik-sidebar-group-item title="Customers" icon="people" name="group-3">
      <puik-sidebar-item title="Title 1" />
      <puik-sidebar-item title="Title 2" />
      <puik-sidebar-item title="Title 3" />
    </puik-sidebar-group-item>
    <puik-sidebar-item title="Settings" icon="settings" />
    <puik-sidebar-item
      title="New modules added customization"
      icon="extension"
    />
  </puik-sidebar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

</script>
