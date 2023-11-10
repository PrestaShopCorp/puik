import { PuikCard } from '@prestashopcorp/puik-components'
import type { StoryFn, StoryObj, Meta } from '@storybook/vue3'

export default {
  title: 'Styles/Grid',
} as Meta

const htmlTemplate = `<div class="puik-grid">
  <puik-card>1 col</puik-card>
  <puik-card>1 col</puik-card>
  <puik-card>1 col</puik-card>
  <puik-card>1 col</puik-card>
  <puik-card>1 col</puik-card>
  <puik-card>1 col</puik-card>
  <puik-card class="col-span-2">2 col</puik-card>
  <puik-card class="col-span-2">2 col</puik-card>
  <puik-card class="col-span-2">2 col</puik-card>
  <puik-card class="col-span-3">3 col</puik-card>
  <puik-card class="col-span-3">3 col</puik-card>
  <puik-card class="col-span-3">3 col</puik-card>
  <puik-card class="col-span-3">3 col</puik-card>
  <puik-card class="col-span-4">4 col</puik-card>
  <puik-card class="col-span-4">4 col</puik-card>
  <puik-card class="col-span-4">4 col</puik-card>
</div>`

const Template: StoryFn = () => ({
  components: { PuikCard },
  template: htmlTemplate,
})

function generateStory(defaultViewport?: string): StoryObj {
  const Story: StoryObj = {
    render: Template,
    parameters: {
      controls: { hideNoControlsWarning: true },
      docs: {
        source: {
          code: htmlTemplate,
          language: 'html',
        },
      },
    },
  }

  if (defaultViewport && Story.parameters)
    Story.parameters.viewport = { defaultViewport }

  return Story
}

export const Lg = generateStory('lg')
export const Md = generateStory('md')
export const Sm = generateStory('sm')
