import { ref } from 'vue'
import PuikExpansionPanelGroup from './../src/expansion-panel-group.vue'
import PuikExpansionPanel from './../src/expansion-panel.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/ExpansionPanelGroup',
  component: PuikExpansionPanelGroup,
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Allow multiple panel to be expanded',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    modelValue: {
      control: 'select',
      options: ['panel-1', 'panel-2', 'panel-3'],
      description: 'v-model to control expanded panels',
      table: {
        defaultValue: {
          summary: 'null',
        },
      },
    },
  },
  args: {
    multiple: false,
    modelValue: 'panel-2',
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikExpansionPanelGroup,
    PuikExpansionPanel,
  },
  setup() {
    const expandedPanels = ref('panel-1')
    return { args, expandedPanels }
  },
  template: `
    <puik-expansion-panel-group v-model="expandedPanels" v-bind="args">
      <puik-expansion-panel title="Title 1" name="panel-1">
        Content expansion panel 1
      </puik-expansion-panel>
      <puik-expansion-panel name="panel-2">
        <template #title>
          Title 2
        </template>
        Content expansion panel 2
      </puik-expansion-panel>
      <puik-expansion-panel title="Title 3" name="panel-3">
        Content expansion panel 3
      </puik-expansion-panel>
    </puik-expansion-panel-group>
  `,
})

export const Default = Template.bind({})
Default.args = {
  multiple: false,
}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-expansion-panel-group>
        <puik-expansion-panel title="Title 1" name="panel-1">
          Content expansion panel 1
        </puik-expansion-panel>
        <puik-expansion-panel name="panel-2">
          <template #title>
            Title 2
          </template>
          Content expansion panel 2
        </puik-expansion-panel>
        <puik-expansion-panel title="Title 3" name="panel-3">
          Content expansion panel 3
        </puik-expansion-panel>
      </puik-expansion-panel-group>

      <!--HTML/CSS Snippet-->
      <div class="puik-expansion-panel-group">
        <div class="puik-expansion-panel">
          <button aria-expanded="false" aria-controls="puik-expansion-panel-6664" class="puik-expansion-panel__title">Title 1 <div class="puik-icon material-icons-round" style="font-size: 20px;">keyboard_arrow_up</div>
          </button>
          <div id="puik-expansion-panel-6664" class="puik-expansion-panel__content"> Content expansion panel 1 </div>
        </div>
        <!--
          State classes
          Active: "puik-expansion-panel--expanded"
        -->
        <div class="puik-expansion-panel puik-expansion-panel--expanded">
          <button aria-expanded="true" aria-controls="puik-expansion-panel-3261" class="puik-expansion-panel__title"> Title 2 <div class="puik-icon material-icons-round" style="font-size: 20px;">keyboard_arrow_down</div>
          </button>
          <div id="puik-expansion-panel-3261" class="puik-expansion-panel__content"> Content expansion panel 2 </div>
        </div>
        <div class="puik-expansion-panel">
          <button aria-expanded="false" aria-controls="puik-expansion-panel-7108" class="puik-expansion-panel__title">Title 3 <div class="puik-icon material-icons-round" style="font-size: 20px;">keyboard_arrow_up</div>
          </button>
          <div id="puik-expansion-panel-7108" class="puik-expansion-panel__content"> Content expansion panel 3 </div>
        </div>
      </div>
      `,
      language: 'html',
    },
  },
}
