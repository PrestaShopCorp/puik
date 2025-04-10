# Puik v2 - Breaking Changes and Available Components

## Breaking Changes

In the transition from Puik v1 to Puik v2, we made several significant changes to improve the library's performance, usability, and maintainability. Here are the key changes that you should be aware of:

- **Monorepo Structure**: In Puik v2, we moved to a monorepo structure. This structure includes separate libraries for Vue 3 components, Web components, a component resolver for our Vue 3 component library, a CSS library containing all the classes used in our components, and a Tailwind CSS preset that contains all the design tokens used to create the components. This change was made to improve the modularity and maintainability of the project.
  
  :warning: **Please note that this new structure may affect the import paths for the Puik library in your project. We recommend checking the README files for each package to understand the correct import paths.**

- **Snackbar Component**: In Puik v1, the Snackbar component was implemented using Headless UI. In Puik v2, we moved to using Radix Vue for the Snackbar component. This change was made to improve the component's accessibility and flexibility. If you're using the Snackbar component in your project, please refer to the Storybook documentation for details on how to adapt your code to this change.

- **Future Changes**: Please note that all components that were implemented using Headless UI in Puik v1 may be moved to Radix Vue in future releases of Puik v2. We recommend regularly checking the Storybook documentation for the latest updates.

Please note that as Puik v2 is still in beta, additional breaking changes may be introduced as we continue to improve and expand the library. We recommend regularly checking this document and the Storybook documentation for the latest updates.

## Available Components

Here is the list of available components in the Vue and Web-Components version of Puik v2.

| Components                   | Vue Components | Web Components | Breaking Changes |
| --------------------------- | -------------- | -------------- | ---------------- |
| Accordion                   | ✅  | ✅            |                  |
| Accordion-group             | ✅  | ✅            |                  |
| Alert                       | ✅  | ✅            | since v2.3.0 - Design:  The `puik-link` has replaced by a Link Button (text variant button) - [see updated stories for use](https://uikit.prestashop.com/?path=/docs/components-alert--docs)      |
| Avatar                      | ✅  | ✅            |                  |
| Badge                       | ✅  | ✅            |                  |
| Breadcrumb                  | ✅  | ✅            |                  |
| Button                      | ✅  | ✅            |                  |
| Button-group                | ✅  | ✅            |                  |
| Card                        | ✅  | ✅            |                  |
| Checkbox                    | ✅  | ✅            |                  |
| Chip                        | ✅  | ✅            |                  |
| Divider                     | ✅  | ✅            |                  |
| Icon                        | ✅  | ✅            |                  |
| Input                       | ✅  | ❌            |                  |
| Label                       | ✅  | ✅            |                  |
| Link                        | ✅  | ✅            |                  |
| Menu                        | ✅  | ❌            |                  |
| Modal                       | ✅  | ❌            |                  |
| Notification-bar            | ✅  | ✅            |                  |
| Pagination                  | ✅  | ❌            |                  |
| Progress-bar                | ✅  | ✅            |                  |
| Progress-stepper            | ✅  | ✅            |                  |
| Progress-stepper-step       | ✅  | ✅            |                  |
| Radio                       | ✅  | ✅            |                  |
| Rating-card                 | ✅  | ✅            |                  |
| Select                      | ✅  | ❌            | since v2.4.0 - global refactoring - [see updated stories for use](https://uikit.prestashop.com/?path=/docs/components-select--docs)                |
| Sidebar                     | ✅  | ✅            |                  |
| Sidebar-group-item          | ✅  | ❌            |                  |
| Sidebar-item                | ✅  | ✅            |                  |
| Sidebar-title               | ✅  | ✅            |                  |
| Skeleton-loader             | ✅  | ✅            |                  |
| Skeleton-loader-group       | ✅  | ✅            |                  |
| Snackbar                    | ✅  | ❌            | since v2.0.0 - Previously implemented with Headless UI, now moved to Radix Vue - [see updated stories for use](https://uikit.prestashop.com/?path=/docs/components-snackbar--docs) |
| Sortable-list               | ✅  | ❌            |                  |
| Spinner-loader              | ✅  | ✅            |                  |
| Switch                      | ✅  | ✅            |                  |
| Tab-navigation              | ✅  | ✅            |                  |
| Tab-navigation-group-panels | ✅  | ✅            |                  |
| Tab-navigation-group-titles | ✅  | ✅            |                  |
| Tab-navigation-panel        | ✅  | ✅            |                  |
| Tab-navigation-title        | ✅  | ✅            |                  |
| Table                       | ✅  | ❌            |                  |
| Table-search-input          | ✅  | ❌            |                  |
| Tag                         | ✅  | ✅            |                  |
| Textarea                    | ✅  | ✅            |                  |
| Tooltip                     | ✅  | ✅            |                  |
