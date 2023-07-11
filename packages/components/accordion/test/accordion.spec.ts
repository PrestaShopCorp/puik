import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikAccordionGroup from '../src/accordion-group.vue'
import PuikAccordion from '../src/accordion.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

let wrapper: VueWrapper<any>
const factory = (template: string, options: MountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      'puik-accordion-group': PuikAccordionGroup,
      'puik-accordion': PuikAccordion,
    },
    template,
    ...options,
  })
}

export const getAccordion = (wrapper) => wrapper.findComponent(PuikAccordion)
export const getAccordionContent = (component) =>
  component.find('.puik-accordion__content')
export const getAccordionHeader = (component) =>
  component.find('.puik-accordion__header')
export const getAccordionTitle = (component) =>
  component.find('.puik-accordion__header__content__title')
export const getAccordionSubTitle = (component) =>
  component.find('.puik-accordion__header__content__sub-title')
export const getAccordionExpandIcon = (component) =>
  component.find('.puik-accordion__header__expand__icon')
export const getAccordionIcon = (component) =>
  component.find('.puik-accordion__header__icon')

describe('Accordion tests', () => {
  it('should be a vue instance', () => {
    const template = `
      <puik-accordion-group>
        <puik-accordion name="accordion-1" title="title-1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title-2">
          Content 2
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)
    expect(wrapper).toBeTruthy()
  })

  it('should accordion emit event', () => {
    const template = `
      <puik-accordion-group>
        <puik-accordion name="accordion-1" title="title-1">
          Content 1
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordion = getAccordion(wrapper)
    getAccordionHeader(accordion).trigger('click')
    expect(accordion.emitted('click')).toBeTruthy()
  })

  it('should accordion display title', () => {
    const title = 'title 1'
    const template = `
      <puik-accordion-group modelValue="accordion-1">
        <puik-accordion name="accordion-1" title="${title}">
          Content 1
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordion = getAccordion(wrapper)
    expect(getAccordionTitle(accordion).text()).toContain(title)
  })

  it('should accordion display sub-title', () => {
    const subTitle = 'sub-title 1'
    const template = `
      <puik-accordion-group modelValue="accordion-1">
        <puik-accordion name="accordion-1" sub-title="${subTitle}">
          Content 1
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordion = getAccordion(wrapper)
    expect(getAccordionSubTitle(accordion).text()).toContain(subTitle)
  })

  it('should accordion title have aria-controls', () => {
    const title = 'title 1'
    const template = `
      <puik-accordion-group modelValue="accordion-1">
        <puik-accordion name="accordion-1">
          <template #title>${title}</template>
          Content 1
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordion = getAccordion(wrapper)
    const contentId = getAccordionContent(accordion).attributes('id')
    const accordionTitle = getAccordionHeader(accordion)
    expect(accordionTitle.attributes('aria-controls')).toBe(contentId)
  })

  it('should default slot render correctly', () => {
    const content = 'Content 1'
    const template = `
      <puik-accordion-group modelValue="accordion-1">
        <puik-accordion name="accordion-1" title="title 1">
          ${content}
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordion = getAccordion(wrapper)
    expect(getAccordionContent(accordion).text()).toBe(content)
  })

  it('should be disabled', () => {
    const template = `
      <puik-accordion-group>
        <puik-accordion name="accordion-1" disabled>
          Content
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordion = getAccordion(wrapper)
    expect(accordion.classes()).toContain('puik-accordion--disabled')
    expect(getAccordionHeader(accordion).attributes('disabled')).toBeDefined()
  })

  it('should have icon', () => {
    const icon = 'home'
    const template = `
      <puik-accordion-group>
        <puik-accordion name="accordion-1" icon="${icon}">
          Content
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    expect(getAccordionIcon(wrapper).text()).toBe(icon)
  })
})
