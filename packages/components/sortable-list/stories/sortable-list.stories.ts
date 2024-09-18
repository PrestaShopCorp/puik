import { ref } from 'vue';
import {
  PuikSortableList,
  PuikSortableListIconPosition,
  PuikIcon,
  PuikSortableListTag
} from '@prestashopcorp/puik-components';
import { Meta, StoryFn, Args } from '@storybook/vue3';

const sortableListIconPosition = Object.values(PuikSortableListIconPosition);
const sortableListIconPositionSummary = sortableListIconPosition.join('|');

const sortableListTag = Object.values(PuikSortableListTag);
const sortableListTagSummary = sortableListTag.join('|');

const itemKey = ref('id');

const defaultList = ref([
  {
    id: 1,
    title: 'list-1-item 1',
    description: 'description',
    imgSrc: 'https://t.ly/Ku50h',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 2,
    title: 'list-1-item 2',
    description: 'description',
    imgSrc: 'https://t.ly/hkQSL',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 3,
    title: 'list-1-item 3',
    description: 'description',
    imgSrc: 'https://t.ly/MeB5s',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 4,
    title: 'list-1-item 4',
    description: 'description',
    imgSrc: 'https://t.ly/UfeAc',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  }
]);

const sharedList1 = ref([
  {
    id: 1,
    title: 'list-1-item 1',
    description: 'description',
    imgSrc: 'https://t.ly/Ku50h',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 2,
    title: 'list-1-item 2',
    description: 'description',
    imgSrc: 'https://t.ly/hkQSL',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 3,
    title: 'list-1-item 3',
    description: 'description',
    imgSrc: 'https://t.ly/MeB5s',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 4,
    title: 'list-1-item 4',
    description: 'description',
    imgSrc: 'https://t.ly/UfeAc',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  }
]);

const sharedList2 = ref([
  {
    id: 7,
    title: 'list-2-item 1',
    description: 'description',
    imgSrc: 'https://rb.gy/3wn9bd',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 8,
    title: 'list-2-item 2',
    description: 'description',
    imgSrc: 'https://rb.gy/bvcz13',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  }
]);

const customlist = ref([
  {
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  }
]);

const eventsList = ref([
  {
    id: 1,
    title: 'list-1-item 1',
    description: 'description',
    imgSrc: 'https://t.ly/Ku50h',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 2,
    title: 'list-1-item 2',
    description: 'description',
    imgSrc: 'https://t.ly/hkQSL',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 3,
    title: 'list-1-item 3',
    description: 'description',
    imgSrc: 'https://t.ly/MeB5s',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 4,
    title: 'list-1-item 4',
    description: 'description',
    imgSrc: 'https://t.ly/UfeAc',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
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
      description:
        'Options of the sortable list',
      table: {
        type: {
          summary: 'type SortableOptionsProp',
          detail: `
// see https://github.com/SortableJS/Sortable#options (see details for default values)

// Import
import { type SortableOptions } from '@prestashopcorp/puik-components'
`
        },
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
        },
        type: {
          summary: 'ListItem[]',
          detail: `
// ListItem
{
  title?: string
  description?: string
  imgSrc?: string
  [key: string]: any
}

// list prop
ListItem[]
          `
        }
      }
    },
    displayPositionNumbers: {
      control: 'boolean',
      description: 'Display position numbers of the sortable list',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      },
      defaultValue: { summary: 'true' }
    },
    itemKey: {
      control: 'text',
      description: 'Item key of the sortable list',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    tag: {
      control: 'select',
      options: sortableListTag,
      description: 'The HTML Tag of the sortable list container',
      table: {
        type: {
          summary: sortableListTagSummary,
          detail: `
// Import
Import type { PuikSortableListTag } from '@prestashopcorp/puik-components';

// Details
enum PuikSortableListTag {
  Menu = 'menu',
  Ol = 'ol',
  Ul = 'ul',
}
`
        },
        defaultValue: { summary: 'ul' }
      }
    },
    iconPosition: {
      control: 'select',
      options: sortableListIconPosition,
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
    },
    dataTest: {
      control: 'text',
      description: 'Set the data-test attribute on the sortable list'
    }
  },
  args: {
    listId: 'default-list',
    displayPositionNumbers: true,
    iconPosition: 'right',
    list: defaultList.value,
    itemKey: 'id',
    tag: 'ul'
  }
} as Meta;

const DefaultTemplate: StoryFn = (args: Args) => ({
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
  render: DefaultTemplate,
  args: {
    listId: 'default-list',
    list: defaultList.value
  },
  parameters: {
    docs: {
      description: {
        story: `
A listItem is an object that can include any key/value pair. However, the keys 'title', 'description', and 'imgSrc' are specifically used to generate the default UI of the list items.

 Here is a detailed description of these keys:
- 'title': A string representing the title of the list item. It is displayed as the main text of the item.
- 'description': A string providing additional information about the list item. It is displayed below the title.
- 'imgSrc': A string URL pointing to an image. It is displayed before the content (title, description).

Note: These keys are all optional, and you can include other keys as per your requirements by using the custom-content slot instead (see Custom Content Slot section).
          `
      },
      source: {
        code: `
<!--VueJS Snippet-->
const list = [
  {
    id: 1,
    title: 'list-1-item 1',
    description: 'description',
    imgSrc: 'https://t.ly/Ku50h',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 2,
    title: 'list-1-item 2',
    description: 'description',
    imgSrc: 'https://t.ly/hkQSL',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 3,
    title: 'list-1-item 3',
    description: 'description',
    imgSrc: 'https://t.ly/MeB5s',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    id: 4,
    title: 'list-1-item 4',
    description: 'description',
    imgSrc: 'https://t.ly/UfeAc',
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  }
];

<puik-sortable-list 
  :list-id="args.listId" 
  :options="args.options" 
  :list="list" 
  :displayPositionNumbers="args.displayPositionNumbers" 
  :item-key="args.itemKey" 
  :tag="args.tag" 
  :iconPosition="args.iconPosition">
</puik-sortable-list>
        `,
        language: 'html'
      }
    }
  }
};

const CustomContentSlotTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikSortableList,
    PuikIcon
  },
  setup() {
    return { args };
  },
  template: `
<puik-sortable-list v-bind="args">
  <template #custom-content="{ element, index }">
    <p>{{ element.customKey }}</p>
    <p>{{ element.anotherKey }}</p>
  </template>
</puik-sortable-list>
  `
});

export const CustomContentSlot = {
  render: CustomContentSlotTemplate,
  args: {
    listId: 'custom-list',
    list: customlist.value
  },
  parameters: {
    docs: {
      description: {
        story: `
Using the customContent slot with the named template '#custom-content' (click show code for more details)
          `
      },
      source: {
        code: `
<!--VueJS Snippet-->
const customlist = ref([
  {
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  },
  {
    customKey: 'A custom Value',
    anotherKey: 'Another custom value'
  }
]);

<puik-sortable-list v-bind="args">
  <template #custom-content="{ element, index }">
    <p>{{ element.customKey }}</p>
    <p>{{ element.anotherKey }}</p>
  </template>
</puik-sortable-list>
        `,
        language: 'html'
      }
    }
  }
};

const SharedTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikSortableList,
    PuikIcon
  },
  setup() {
    const argsList1 = {
      listId: 'shared-list-1',
      list: sharedList1.value,
      itemKey: itemKey.value
    };
    const argsList2 = {
      listId: 'shared-list-2',
      list: sharedList2.value,
      itemKey: itemKey.value
    };
    const options = {
      group: 'shared'
    };
    return { args, argsList1, argsList2, options };
  },
  template: `
    <div style="width: 100%; display: flex; gap: 2rem">
      <puik-sortable-list v-bind="argsList1" :options="options" style="flex-grow: 1;"></puik-sortable-list>
      <puik-sortable-list v-bind="argsList2" :options="options" style="flex-grow: 1;"></puik-sortable-list>
    </div>
  `
});

export const Shared = {
  render: SharedTemplate,
  args: {},
  parameters: {
    docs: {
      description: {
        story: `
  Using Sortable JS options : Shared option example here (for more options see https://github.com/SortableJS/Sortable#options)
  `
      },
      source: {
        code: `
<!--VueJS Snippet-->
import { type SortableOptions } from '@prestashopcorp/puik-components';

let options: SortableOptionsProp = {
  group: "shared",  // Name of the group for shared sortable lists
};

// Using the options in the component
<div style="width: 100%; display: flex; gap: 2rem">
  <puik-sortable-list 
    :list-id="argsList1.listId" 
    :list="argsList1.list" 
    :itemKey="argsList1.itemKey" 
    :options="options" 
    style="flex-grow: 1;">
  </puik-sortable-list>
  
  <puik-sortable-list 
    :list-id="argsList2.listId" 
    :list="argsList2.list" 
    :itemKey="argsList2.itemKey" 
    :options="options" 
    style="flex-grow: 1;">
  </puik-sortable-list>
</div>
        `,
        language: 'html'
      }
    }
  }
};

const EventsTemplate: StoryFn = (args: Args) => ({
  components: {
    PuikSortableList,
    PuikIcon
  },
  setup() {
    const logEvent = (name: string, event: any) => {
      console.log(name, event);
    };
    return { args, logEvent };
  },
  template: `
    <puik-sortable-list
      v-bind="args"
      @end="logEvent('end', $event)"
      @choose="logEvent('choose event', $event)"
      @unchoose="logEvent('update event', $event)"
      @start="logEvent('unchoose event', $event)"
      @add="logEvent('add event', $event)"
      @update="logEvent('update event', $event)"
      @sort="logEvent('sort event', $event)"
      @remove="logEvent('remove event', $event)"
      @filter="logEvent('filter event', $event)"
      @move="logEvent('move event', $event)"
      @clone="logEvent('clone event', $event)"
      @list-changed="logEvent('list-changed', $event)"
    />
  `
});

export const Events = {
  render: EventsTemplate,
  args: {
    listId: 'events-list',
    list: eventsList.value
  },
  parameters: {
    docs: {
      description: {
        story: `
Using the sortable js events in the component (view the browser console to inspect different behaviors)

-  set of events available in the sortable library (all return an object of type CustomEvents)
See https://github.com/SortableJS/Sortable#events
- exception of the list-changed event specific to Puik and which returns the updated list
        `
      },
      source: {
        code: `
<!--VueJS Snippet-->
const logEvent = (name, event) => {
  console.log(name, event);
};

<puik-sortable-list
  v-bind="args"
  @end="logEvent('end', $event)"
  @choose="logEvent('choose event', $event)"
  @unchoose="logEvent('update event', $event)"
  @start="logEvent('unchoose event', $event)"
  @add="logEvent('add event', $event)"
  @update="logEvent('update event', $event)"
  @sort="logEvent('sort event', $event)"
  @remove="logEvent('remove event', $event)"
  @filter="logEvent('filter event', $event)"
  @move="logEvent('move event', $event)"
  @clone="logEvent('clone event', $event)"
  @list-changed="logEvent('list-changed', $event)"
/>
        `,
        language: 'html'
      }
    }
  }
};
