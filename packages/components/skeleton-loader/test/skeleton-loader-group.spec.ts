import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikSkeletonLoader from '../src/skeleton-loader.vue'
import PuikSkeletonLoaderGroup from '../src/skeleton-loader-group.vue'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'

describe('SkeletonLoaderGroup tests', () => {
  let wrapper: VueWrapper<any>
  const getSkeletonLoaderGroup = () =>
    wrapper.find('.puik-skeleton-loader-group')
  const factory = (
    template: string,
    propsData: Record<string, any> = {},
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount({
      template,
      props: {
        ...propsData,
      },
      ...options,
      components: {
        PuikSkeletonLoader,
        PuikSkeletonLoaderGroup,
      },
    })
  }
  it('should be a vue instance', () => {
    const template = `
      <puik-skeleton-loader-group>
        <puik-skeleton-loader variant="h1"></puik-skeleton-loader>
        <puik-skeleton-loader variant="h2"></puik-skeleton-loader>
        <puik-skeleton-loader variant="h3"></puik-skeleton-loader>
      </puik-skeleton-loader-group>
    `
    factory(template)
    expect(wrapper).toBeTruthy()
  })
  it('should display the skeleton loader group with tag span', () => {
    const tag = 'span'
    const template = `
      <puik-skeleton-loader-group tag="${tag}">
        <puik-skeleton-loader variant="h1"></puik-skeleton-loader>
        <puik-skeleton-loader variant="h2"></puik-skeleton-loader>
        <puik-skeleton-loader variant="h3"></puik-skeleton-loader>
      </puik-skeleton-loader-group>
    `
    factory(template)
    expect(getSkeletonLoaderGroup().element.tagName).toBe(tag.toUpperCase())
  })
})
