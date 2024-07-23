import { ref } from 'vue';
import { PuikSortableList, PuikSortableListIconPosition, PuikIcon } from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

const sortableListIconPosition = Object.values(PuikSortableListIconPosition);
const sortableListIconPositionSummary = sortableListIconPosition.join('|');

const list1 = ref([
  {
    id: 1,
    title: 'list-1-item 1',
    description: 'description',
    initialOrder: 1,
    imgSrc: 'https://t.ly/Ku50h'
  },
  {
    id: 2,
    title: 'list-1-item 2',
    description: 'description',
    initialOrder: 2,
    imgSrc: 'https://t.ly/hkQSL'
  },
  {
    id: 3,
    title: 'list-1-item 3',
    description: 'description',
    initialOrder: 3,
    imgSrc: 'https://t.ly/MeB5s'
  },
  {
    id: 4,
    title: 'list-1-item 4',
    description: 'description',
    initialOrder: 4,
    imgSrc: 'https://t.ly/UfeAc'
  },
  {
    id: 5,
    title: 'list-1-item 5',
    description: 'description',
    initialOrder: 5,
    imgSrc: 'https://rb.gy/3wn9bd'
  },
  {
    id: 6,
    title: 'list-1-item 6',
    description: 'description',
    initialOrder: 6,
    imgSrc: 'https://rb.gy/bvcz13'
  }
]);

export default {
  title: 'Components/SortableList',
  component: PuikSortableList,
  argTypes: {
    listId: {
      control: 'text',
      description: 'Identifier of the sortable list',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    options: {
      control: 'object',
      description: 'Options of the sortable list (see https://github.com/SortableJS/Sortable#options)',
      table: {
        defaultValue: {
          summary: 'see details',
          detail: `
group: "name",  // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
sort: true,  // sorting inside list
delay: 0, // time in milliseconds to define when the sorting should start
delayOnTouchOnly: false, // only delay if user is using touch
touchStartThreshold: 0, // px, how many pixels the point should move before cancelling a delayed drag event
disabled: false, // Disables the sortable if set to true.
store: null,  // @see Store
animation: 150,  // ms, animation speed moving items when sorting, 0 — without animation
easing: "cubic-bezier(1, 0, 0, 1)", // Easing for animation. Defaults to null. See https://easings.net/ for examples.
handle: ".my-handle",  // Drag handle selector within list items
filter: ".ignore-elements",  // Selectors that do not lead to dragging (String or Function)
preventOnFilter: true, // Call event.preventDefault() when triggered filter
draggable: ".item",  // Specifies which items inside the element should be draggable

dataIdAttr: 'data-id', // HTML attribute that is used by the toArray() method

ghostClass: "sortable-ghost",  // Class name for the drop placeholder
chosenClass: "sortable-chosen",  // Class name for the chosen item
dragClass: "sortable-drag",  // Class name for the dragging item

swapThreshold: 1, // Threshold of the swap zone
invertSwap: false, // Will always use inverted swap zone if set to true
invertedSwapThreshold: 1, // Threshold of the inverted swap zone (will be set to swapThreshold value by default)
direction: 'horizontal', // Direction of Sortable (will be detected automatically if not given)

forceFallback: false,  // ignore the HTML5 DnD behaviour and force the fallback to kick in

fallbackClass: "sortable-fallback",  // Class name for the cloned DOM Element when using forceFallback
fallbackOnBody: false,  // Appends the cloned DOM Element into the Document's Body
fallbackTolerance: 0, // Specify in pixels how far the mouse should move before it's considered as a drag.

dragoverBubble: false,
removeCloneOnHide: true, // Remove the clone element when it is not showing, rather than just hiding it
emptyInsertThreshold: 5, // px, distance mouse must be from empty sortable to insert drag element into it
  `
        }
      }
    },
    list: {
      control: 'array',
      description: 'List of the sortable list',
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
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
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
        type: {
          summary: 'HTML tag'
        },
        defaultValue: { summary: 'div' }
      }
    },
    iconPosition: {
      control: 'text',
      description: 'Drag icon position of the sortable list items',
      table: {
        type: {
          summary: sortableListIconPositionSummary,
          detail: `
// Import
import type { PuikSortableListIconPosition } from '@prestashopcorp/puik-components';

// Details
enum PuikSortableListIconPosition {
  Left = 'left',
  Right = 'right',
}
          `
        },
        defaultValue: { summary: 'right' }
      }
    }
  },
  args: {
    listId: 'puik-list-id',
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
