import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikAccordionGroup from '../src/accordion-group.vue'
import PuikAccordion from '../src/accordion.vue'
import { getAccordion, getAccordionHeader } from './accordion.spec'
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

const getAccordionGroup = () => wrapper.find('.puik-accordion-group')
const getAccordions = () => wrapper.findAll('.puik-accordion')

describe('AccordionGroup collapse/expand tests', () => {
  it('should be a vue instance', () => {
    const template = `
      <puik-accordion-group>
        <puik-accordion name="accordion-1" title="title-1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title-2">
          Content 2
        </puik-accordion>
        <puik-accordion name="accordion-3" title="title-3">
          Content 3
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)
    expect(wrapper).toBeTruthy()
  })

  it('should accordion be expanded', () => {
    const template = `
      <puik-accordion-group model-value="accordion-1">
        <puik-accordion name="accordion-1" title="title-1">
          Content 1
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordion = getAccordion(wrapper)
    expect(accordion.classes()).toContain('puik-accordion--expanded')
  })

  it('should accordions title have aria-expanded', () => {
    const template = `
      <puik-accordion-group modelValue="accordion-1">
        <puik-accordion name="accordion-1" title="title-1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title-2">
          Content 2
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordionsHeaders = getAccordions().map((accordion) =>
      getAccordionHeader(accordion)
    )
    expect(accordionsHeaders[0].attributes('aria-expanded')).toBe('true')
    expect(accordionsHeaders[1].attributes('aria-expanded')).toBe('false')
  })

  it('should have multiple accordions expanded', () => {
    const template = `
      <puik-accordion-group :modelValue="['accordion-1', 'accordion-2']" multiple>
        <puik-accordion name="accordion-1" title="title 1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title 2">
          Content 2
        </puik-accordion>
        <puik-accordion name="accordion-3" title="title 3">
          Content 3
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const accordionsExpanded = wrapper.findAll('.puik-accordion--expanded')
    expect(accordionsExpanded.length).toBe(2)
  })
})
describe('AccordionGroup props tests', () => {
  it('should have dense class', () => {
    const template = `
      <puik-accordion-group dense>
        <puik-accordion name="accordion-1" title="title 1">
          Content 1
        </puik-accordion>
        <puik-accordion name="accordion-2" title="title 2">
          Content 2
        </puik-accordion>
        <puik-accordion name="accordion-3" title="title 3">
          Content 3
        </puik-accordion>
      </puik-accordion-group>
    `
    factory(template)

    const group = getAccordionGroup()
    expect(group.classes()).toContain('puik-accordion-group--dense')
  })
})
