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

export const getAccordion = () => wrapper.findComponent(PuikAccordion)
export const getAccordionContent = (component) =>
  component.find('.puik-accordion__content')
export const getAccordionTitle = (component) =>
  component.find('.puik-accordion__title')

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

    const accordion = getAccordion()
    getAccordionTitle(accordion).trigger('click')
    expect(accordion.emitted('click')).toBeTruthy()
  })

  it('should accordion display title using prop', () => {
    const title = 'title 1'
    const template = `
      <puik-accordion-group modelValue="accordion-1">
        <puik-accordion name="accordion-1" title="${title}">
          Content 1
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordion = getAccordion()
    expect(getAccordionTitle(accordion).text()).toContain(title)
  })

  it('should accordion display title using slot', () => {
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

    const accordion = getAccordion()
    expect(getAccordionTitle(accordion).text()).toContain(title)
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

    const accordion = getAccordion()
    const contentId = getAccordionContent(accordion).attributes('id')
    const accordionTitle = getAccordionTitle(accordion)
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

    const accordion = getAccordion()
    expect(getAccordionContent(accordion).text()).toBe(content)
  })
})
