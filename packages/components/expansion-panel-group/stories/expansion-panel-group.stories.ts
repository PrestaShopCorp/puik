import PuikExpansionPanelGroup from './../src/expansion-panel-group.vue'
import PuikExpansionPanel from './../src/expansion-panel.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/ExpansionPanelGroup',
  component: PuikExpansionPanelGroup,
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikExpansionPanelGroup,
    PuikExpansionPanel,
  },
  setup() {
    return { args }
  },
  template: `
    <puik-expansion-panel-group v-bind="args">
      <puik-expansion-panel title="Title 1" name="1">
        Content expansion panel 1
      </puik-expansion-panel>
      <puik-expansion-panel title="Title 2" name="2">
        Content expansion panel 2
      </puik-expansion-panel>
      <puik-expansion-panel title="Title 3" name="3">
        Content expansion panel 3
      </puik-expansion-panel>
    </puik-expansion-panel-group>
  `,
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow multiple panel to be open',
      table: {
        defaultValue: {
          summary: false,
        },
      },
      modelValue: {
        control: 'text',
        description: 'Set the open panels',
        table: {
          defaultValue: {
            summary: null,
          },
        },
      },
    },
    args: {
      multiple: false,
      modelValue: null,
    },
  },
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-expansion-panel-group>
        <puik-expansion-panel title="Title 1" name="1">
          Content expansion panel 1
        </puik-expansion-panel>
        <puik-expansion-panel title="Title 2" name="2">
          Content expansion panel 2
        </puik-expansion-panel>
        <puik-expansion-panel title="Title 3" name="3">
          Content expansion panel 3
        </puik-expansion-panel>
      </puik-expansion-panel-group>

      <!--HTML/CSS Snippet-->
      <div class="puik-expansion-panel-group">
        <div class="puik-expansion-panel puik-expansion-panel--expanded">
          <button aria-expanded="true" aria-controls="puik-expansion-panel-7876" class="puik-expansion-panel__title">Title 1 <div class="puik-icon material-icons-round" style="font-size: 20px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-expansion-panel-7876" class="puik-expansion-panel__content" style=""> Contenu expansion panel 1 </div>
        </div>
        <div class="puik-expansion-panel">
          <button aria-expanded="false" aria-controls="puik-expansion-panel-1838" class="puik-expansion-panel__title">Title 2 <div class="puik-icon material-icons-round" style="font-size: 20px;">keyboard_arrow_up</div>
          </button>
          <div id="puik-expansion-panel-1838" class="puik-expansion-panel__content" style="display: none;"> Contenu expansion panel 2 </div>
        </div>
        <div class="puik-expansion-panel">
          <button aria-expanded="false" aria-controls="puik-expansion-panel-713" class="puik-expansion-panel__title">Title 3 <div class="puik-icon material-icons-round" style="font-size: 20px;">keyboard_arrow_up</div>
          </button>
          <div id="puik-expansion-panel-713" class="puik-expansion-panel__content" style="display: none;"> Contenu expansion panel 3 </div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
