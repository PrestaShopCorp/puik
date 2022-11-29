import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PuikTimeline from '../src/timeline.vue'
import PuikProgressBar from '../../progress-bar'
import type { MountingOptions, VueWrapper } from '@vue/test-utils'
import type { TimelineProps } from '../src/timeline'

describe('Timeline tests', () => {
  let wrapper
  const defaultProps: TimelineProps = {
    items: [
      { width: 10, percentage: 10 },
      { width: 40, percentage: 0 },
      { width: 50, percentage: 0 },
    ],
  }
  const factory = (
    props = defaultProps,
    options: MountingOptions<any> = {}
  ) => {
    wrapper = mount(PuikTimeline, {
      props,
      ...options,
    })
  }
  it('should have 3 ProgressBar if items has a length of 3', () => {
    factory()
    expect(wrapper.findAll(PuikProgressBar)).toHaveLength(3)
  })
})
