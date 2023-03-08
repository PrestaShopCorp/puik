import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikExpansionPanelGroup from '../src/expansion-panel-group.vue'
import PuikExpansionPanel from '../src/expansion-panel.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('ExpansionPanelGroup tests', () => {
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

    const expansionPanel = wrapper.findComponent(PuikExpansionPanel)
    expansionPanel.find('.puik-expansion-panel__title').trigger('click')
    expect(expansionPanel.emitted('click')).toBeTruthy()
  })

  it('should expansion-panel be expanded', () => {
    const template = `
      <puik-expansion-panel-group modelValue="panel-1">
        <puik-expansion-panel name="panel-1" title="title-1">
          Content panel 1
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory(template)

    const expansionPanel = wrapper.findComponent(PuikExpansionPanel)
    expect(expansionPanel.classes()).toContain('puik-expansion-panel--expanded')
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

    const expansionPanel = wrapper.findComponent(PuikExpansionPanel)
    expect(
      expansionPanel.find('.puik-expansion-panel__title').text()
    ).toContain(title)
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

    const expansionPanel = wrapper.findComponent(PuikExpansionPanel)
    expect(
      expansionPanel.find('.puik-expansion-panel__title').text()
    ).toContain(title)
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
