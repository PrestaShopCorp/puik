import { ref } from 'vue';
import { PuikSortableList, PuikIcon } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

const list1 = ref([
  {
    id: 1,
    name: 'list-1-item 1',
    initialOrder: 1,
    imgSrc: 'https://t.ly/Ku50h'
  },
  {
    id: 2,
    name: 'list-1-item 2',
    initialOrder: 2,
    imgSrc: 'https://t.ly/hkQSL'
  },
  {
    id: 3,
    name: 'list-1-item 3',
    initialOrder: 3,
    imgSrc: 'https://t.ly/MeB5s'
  },
  {
    id: 4,
    name: 'list-1-item 4',
    initialOrder: 4,
    imgSrc: 'https://t.ly/UfeAc'
  },
  {
    id: 5,
    name: 'list-1-item 5',
    initialOrder: 5,
    imgSrc: 'https://rb.gy/bvcz13'
  },
  {
    id: 6,
    name: 'list-1-item 6',
    initialOrder: 6,
    imgSrc: 'https://rb.gy/3wn9bd'
  }
]);

export default {
  title: 'Components/SortableList',
  component: PuikSortableList,
  argTypes: {
    id: {
      control: 'text',
      description: 'Id of the sortable list',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    options: {
      control: 'object',
      description: 'Options of the sortable list',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    list: {
      control: 'object',
      description: 'List of the sortable list',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    itemKey: {
      control: 'text',
      description: 'Item key of the sortable list',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    tag: {
      control: 'text',
      description: 'Tag of the sortable list',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    iconPosition: {
      control: 'text',
      description: 'Icon position of the sortable list',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    displayPositionNumbers: {
      control: 'boolean',
      description: 'Display position numbers of the sortable list',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    }
  },
  args: {
    id: 'puik-list-id',
    list: list1,
    itemKey: 'id'
  }
} as Meta;

const Template: StoryFn = (args: Args) => ({
  components: {
    PuikSortableList,
    PuikIcon
  },
  setup() {
    return { args };
  },
  template: '<puik-sortable-list v-bind="args"></puik-sortable-list>'
});

export const Default = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
        <!--VueJS Snippet-->

        <!--HTML/CSS Snippet-->
        `,
        language: 'html'
      }
    }
  }
};
