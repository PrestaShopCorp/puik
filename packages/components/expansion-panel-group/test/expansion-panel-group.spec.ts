import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikExpansionPanelGroup from '../src/expansion-panel-group.vue'
import PuikExpansionPanel from '../src/expansion-panel.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('ExpansionPanelGroup tests', () => {
  let wrapper: VueWrapper<any>
  const factory = (
    template: string,
    data: Record<string, any> = () => ({}),
    options: MountingOptions<any> = {}
  ) => {
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
        <puik-expansion-panel >
        </puik-expansion-panel>
      </puik-expansion-panel-group>
    `
    factory()
    expect(wrapper).toBeTruthy()
  })
})
