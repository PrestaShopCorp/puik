import { PuikCard } from '@puik/components'
import type { Story, Meta } from '@storybook/vue3'

export default {
  title: 'Styles/Grid',
} as Meta

function generateStory(defaultViewport?: string) {
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

  const Template: Story = () => ({
    components: { PuikCard },
    template: htmlTemplate,
  })

  const Story: Story = Template.bind({})
  Story.parameters = {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: htmlTemplate,
        language: 'html',
      },
    },
  }

  if (defaultViewport) Story.parameters.viewport = { defaultViewport }

  return Story
}

export const Lg = generateStory()
export const Md = generateStory('md')
export const Sm = generateStory('sm')
