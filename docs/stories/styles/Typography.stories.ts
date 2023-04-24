import type { Meta, Story } from '@storybook/vue3'

export default {
  title: 'Styles/Typography',
} as Meta

function generateStory(htmlTemplate: string) {
  const Template: Story = () => ({
    template: htmlTemplate,
  })

  const Story = Template.bind({})

  Story.parameters = {
    controls: { hideNoControlsWarning: true },
    docs: {
      source: {
        code: htmlTemplate,
        language: 'html',
      },
    },
  }

  return Story
}

export const Title = generateStory(`
  <h1 class="puik-jumbotron">.puik-jumbotron</h1>
  <h1 class="puik-h1">.puik-h1</h1>
  <h2 class="puik-h2">.puik-h2</h2>
  <h3 class="puik-h3">.puik-h3</h3>
  <h4 class="puik-h4">.puik-h4</h4>
  <h5 class="puik-h5">.puik-h5</h5>
  <h6 class="puik-h6">.puik-h6</h6>
`)

export const BrandTitle = generateStory(`
  <h1 class="puik-brand-jumbotron">.puik-brand-jumbotron</h1>
  <h1 class="puik-brand-h1">.puik-brand-h1</h1>
  <h2 class="puik-brand-h2">.puik-brand-h2</h2>
`)

export const Body = generateStory(`
  <p class="puik-body-large-bold">.puik-body-large-bold</p>
  <p class="puik-body-large">.puik-body-large</p>
  <p class="puik-body-default-bold">.puik-body-default-bold</p>
  <p class="puik-body-default">.puik-body-default</p>
  <p class="puik-body-small-bold">.puik-body-small-bold</p>
  <p class="puik-body-small">.puik-body-small</p>
  <p class="puik-body-default-link">.puik-body-default-link</p>
`)
