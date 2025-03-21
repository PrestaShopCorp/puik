---
title: Accordion
description: An Accordion is a UI component that organizes content into collapsible sections, allowing users to expand or collapse specific panels to view or hide related information.
name: accordion
aria: https://www.w3.org/WAI/ARIA/apg/patterns/accordion
---

<script setup>
    import Accordion from '@vitepress/components/PuikAccordion.vue';
    import AccordionGroup from '@vitepress/components/PuikAccordionGroup.vue';
</script>

## Accordion

An Accordion is a UI component that organizes content into collapsible sections, allowing users to expand or collapse specific panels to view or hide related information.

<Accordion />

## Accordion Group

### Accordion Group

An Accordion Group manages multiple accordion items, ensuring only one section is expanded at a time (optional) or allowing multiple sections to be open simultaneously.

<AccordionGroup />
