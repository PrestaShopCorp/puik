import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikExpansionPanelGroup from '../src/expansion-panel-group.vue'
import PuikExpansionPanel from '../src/expansion-panel.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

let wrapper: VueWrapper<any>
const factory = (template: string, options: MountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      'puik-expansion-panel-group': PuikExpansionPanelGroup,
      'puik-expansion-panel': PuikExpansionPanel,
    },
    template,
    ...options,
  })
}

const getExpansionPanel = () => wrapper.findComponent(PuikExpansionPanel)
const getExpansionPanels = () => wrapper.findAllComponents(PuikExpansionPanel)
const getExpansionPanelContent = (component) =>
  component.find('.puik-expansion-panel__content')
const getExpansionPanelTitle = (component) =>
  component.find('.puik-expansion-panel__title')

describe('ExpansionPanelGroup props tests', () => {
  it('should be a vue instance', () => {
    const template = `
      <puik-expansion-panel-group>
        <puik-expansion-panel name="panel-1" title="title-1">
          Content panel 1
        </puik-expansion-panel>
        <puik-expansion-panel name="panel-2" title="title-2">
          Content panel 2
        </puik-expansion-panel>
        <puik-expansion-panel name="panel-3" title="title-3">
          Content panel 3
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)
    expect(wrapper).toBeTruthy()
  })

  it('should expansion-panel emit event', () => {
    const template = `
      <puik-expansion-panel-group>
        <puik-expansion-panel name="panel-1" title="title-1">
          Content panel 1
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)

    const expansionPanel = getExpansionPanel()
    getExpansionPanelTitle(expansionPanel).trigger('click')
    expect(expansionPanel.emitted('click')).toBeTruthy()
  })

  it('should expansion-panel display title using prop', () => {
    const title = 'title 1'
    const template = `
      <puik-expansion-panel-group modelValue="panel-1">
        <puik-expansion-panel name="panel-1" title="${title}">
          Content panel 1
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)

    const expansionPanel = getExpansionPanel()
    expect(getExpansionPanelTitle(expansionPanel).text()).toContain(title)
  })

  it('should expansion-panel display title using prop', () => {
    const title = 'title 1'
    const template = `
      <puik-expansion-panel-group modelValue="panel-1">
        <puik-expansion-panel name="panel-1">
          <template #title>${title}</template>
          Content panel 1
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)

    const expansionPanel = getExpansionPanel()
    expect(getExpansionPanelTitle(expansionPanel).text()).toContain(title)
  })

  it('should expansion-panel title have aria-controls', () => {
    const title = 'title 1'
    const template = `
      <puik-expansion-panel-group modelValue="panel-1">
        <puik-expansion-panel name="panel-1">
          <template #title>${title}</template>
          Content panel 1
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)

    const expansionPanel = getExpansionPanel()
    const contentId = getExpansionPanelContent(expansionPanel).attributes('id')
    const expansionPanelTitle = getExpansionPanelTitle(expansionPanel)
    expect(expansionPanelTitle.attributes('aria-controls')).toBe(contentId)
  })

  it('should default slot render correctly', () => {
    const content = 'Content panel 1'
    const template = `
      <puik-expansion-panel-group modelValue="panel-1">
        <puik-expansion-panel name="panel-1" title="title 1">
          ${content}
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)

    const expansionPanel = getExpansionPanel()
    expect(getExpansionPanelContent(expansionPanel).text()).toBe(content)
  })
})

describe('ExpansionPanelGroup expand/collapse tests', () => {
  it('should expansion-panel be expanded', () => {
    const template = `
      <puik-expansion-panel-group modelValue="panel-1">
        <puik-expansion-panel name="panel-1" title="title-1">
          Content panel 1
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)

    const expansionPanel = getExpansionPanel()
    expect(expansionPanel.classes()).toContain('puik-expansion-panel--expanded')
  })

  it('should expansion-panels title have aria-expanded', () => {
    const template = `
      <puik-expansion-panel-group modelValue="panel-1">
        <puik-expansion-panel name="panel-1" title="title-1">
          Content panel 1
        </puik-expansion-panel>
        <puik-expansion-panel name="panel-2" title="title-2">
          Content panel 2
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)

    const expansionPanelsTitles = getExpansionPanels().map((expansionPanel) =>
      getExpansionPanelTitle(expansionPanel)
    )
    expect(expansionPanelsTitles[0].attributes('aria-expanded')).toBe('true')
    expect(expansionPanelsTitles[1].attributes('aria-expanded')).toBe('false')
  })

  it('should have multiple panels expanded', () => {
    const template = `
      <puik-expansion-panel-group :modelValue="['panel-1', 'panel-2']" multiple>
        <puik-expansion-panel name="panel-1" title="title 1">
          Content panel 1
        </puik-expansion-panel>
        <puik-expansion-panel name="panel-2" title="title 2">
          Content panel 2
        </puik-expansion-panel>
        <puik-expansion-panel name="panel-3" title="title 3">
          Content panel 3
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)

    const expansionPanelsExpanded = wrapper.findAll(
      '.puik-expansion-panel--expanded'
    )
    expect(expansionPanelsExpanded.length).toBe(2)
  })
})
