import { ref } from 'vue'
import PuikDateRangePicker from './../src/date-range-picker.vue'
import type { Meta, Story, Args } from '@storybook/vue3'

export default {
  title: 'Components/DateRangePicker',
  component: PuikDateRangePicker,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the component',
      table: {
        defaultValue: { summary: false },
        category: 'Common',
      },
    },
    error: {
      control: 'boolean',
      description: 'Display the component button on error',
      table: {
        defaultValue: { summary: false },
        category: 'Common',
      },
    },
    printedFormat: {
      control: 'text',
      description:
        'Change printed format of date in button according to ISO 8601 format',
      table: {
        defaultValue: { summary: 'MM-dd-yyyy' },
        category: 'Advanced',
      },
    },
    columns: {
      control: {
        type: 'number',
        min: 2,
        max: 3,
        step: 1,
      },
      description: 'Select the number of calendar be displayed',
      table: {
        defaultValue: { summary: 2 },
        category: 'Advanced',
      },
    },
    soloCalendars: {
      control: 'boolean',
      description:
        'Allow to change month/year separately on each calendar (only with 2 calendars)',
      table: {
        defaultValue: { summary: false },
        category: 'Advanced',
      },
    },
    rangeOptions: {
      control: 'boolean',
      description: 'Display the quick range options list',
      table: {
        defaultValue: { summary: false },
        category: 'Common',
      },
    },
    autoApply: {
      control: 'boolean',
      description: 'Apply changes directly after click',
      table: {
        defaultValue: { summary: false },
        category: 'Common',
      },
    },
    disabledDates: {
      control: 'none',
      description: `Allows you to deactivate certain dates in the calendars.
      This can be done in different ways:
        - Function (date) => boolean : disabled date then function return true
        - [Date] : disabled dates in the Array
        - Date : disabled the only date given
        - { startDate: Date, endDate: Date } : disabled date in the range (startDate and endDate included)`,
      table: {
        category: 'Advanced',
      },
    },
  },
  args: {
    disabled: false,
    error: false,
    printedFormat: 'MM-dd-yyyy',
    columns: 2,
    soloCalendars: false,
    rangeOptions: false,
    autoApply: false,
    disabledDates: undefined,
  },
} as Meta

const Template: Story = (args: Args) => ({
  components: {
    PuikDateRangePicker,
  },
  setup() {
    const myValue = ref({ startDate: undefined, endDate: undefined })
    return { args, myValue }
  },
  template: `<puik-date-range-picker v-bind="args" v-model="myValue"></puik-date-range-picker>`,
})

export const Default = Template.bind({})
Default.args = {}
Default.parameters = {
  docs: {
    source: {
      code: `
      <!--VueJS Snippet-->
      <puik-date-range-picker v-model="myValue"></puik-date-range-picker>
      <!--HTML/CSS Snippet-->
      
      `,
      language: 'html',
    },
  },
}
