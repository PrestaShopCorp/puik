import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import {
  PuikTabNavigation,
  PuikTabNavigationGroupTitles,
  PuikTabNavigationGroupPanels,
  PuikTabNavigationTitle,
  PuikTabNavigationPanel,
} from '..'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

let wrapper: VueWrapper<any>
const factory = (template: string, options: MountingOptions<any> = {}) => {
  wrapper = mount({
    components: {
      PuikTabNavigation,
      PuikTabNavigationGroupTitles,
      PuikTabNavigationGroupPanels,
      PuikTabNavigationTitle,
      PuikTabNavigationPanel,
    },
    template,
    ...options,
  })
}

const getTabNavigationGroupTitlesHtml = () =>
  wrapper.find('.puik-tab-navigation__group-titles')
const getTabNavigationGroupTitlesComponent = () =>
  wrapper.findComponent(PuikTabNavigationGroupTitles)

const template = `
<puik-tab-navigation name="name-example" :default-position="2">
  <puik-tab-navigation-group-titles aria-label="aria-label-example">
    <puik-tab-navigation-title :position="1">
      title 1
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="2">
      title 2
    </puik-tab-navigation-title>
    <puik-tab-navigation-title :position="3" disabled>
      title 3
    </puik-tab-navigation-title>
  </puik-tab-navigation-group-titles>

  <puik-tab-navigation-group-panels>
    <puik-tab-navigation-panel :position="1">
    Content 1
    </puik-tab-navigation-panel>
    <puik-tab-navigation-panel :position="2">
    Content 2
    </puik-tab-navigation-panel>
    <puik-tab-navigation-panel :position="3">
    Content 3
    </puik-tab-navigation-panel>
  </puik-tab-navigation-group-panels>
</puik-tab-navigation>
`

describe('TabNavigationGroupTitles tests', () => {
  it('should be a vue instance', () => {
    factory(template)
    expect(getTabNavigationGroupTitlesComponent).toBeTruthy()
  })
  it('As ariaLabel prop value is "aria-label-example", aria-label attribute of puik-tab-navigation-group-titles should be "aria-label-example"', () => {
    factory(template)
    expect(getTabNavigationGroupTitlesHtml().attributes('aria-label')).toBe(
      'aria-label-example'
    )
  })
})
