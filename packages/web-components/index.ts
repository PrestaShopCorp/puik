import PuikAccordionCe from './components/accordion';
import PuikAccordionGroupCe from './components/accordion-group';
import PuikAlertCe from './components/alert';
import PuikAvatarCe from './components/avatar';
import PuikBadgeCe from './components/badge';
import PuikBreadcrumbCe from './components/breadcrumb';
import PuikButtonCe from './components/button';
import PuikButtonGroupCe from './components/button-group';
import PuikCardCe from './components/card';
import PuikCheckboxCe from './components/checkbox';
import PuikChipCe from './components/chip';
import PuikDividerCe from './components/divider';
import PuikIconCe from './components/icon';
import PuikInputCe from './components/input';
import PuikLabelCe from './components/label';
import PuikLinkCe from './components/link';
import PuikMenuCe from './components/menu';
import PuikMenuItemCe from './components/menu-item';
import PuikMenuItemSeparatorCe from './components/menu-item-separator';
import PuikMenuItemTitleCe from './components/menu-item-title';
import PuikModalCe from './components/modal';
import PuikPaginationCe from './components/pagination';
import PuikProgressBarCe from './components/progress-bar';
import PuikProgressStepperCe from './components/progress-stepper';
import PuikProgressStepperStepCe from './components/progress-stepper-step';
import PuikRadioCe from './components/radio';
import PuikSelectCe from './components/select';
import PuikSidebarCe from './components/sidebar';
import PuikSidebarGroupItemCe from './components/sidebar-group-item';
import PuikSidebarItemCe from './components/sidebar-item';
import PuikSidebarTitleCe from './components/sidebar-title';
import PuikSkeletonLoaderCe from './components/skeletonLoader';
import PuikSkeletonLoaderGroupCe from './components/skeleton-loader-group';
// import PuikSnackbarCe from './components/snackbar';
import PuikSpinnerLoaderCe from './components/spinner-loader';
import PuikSwitchCe from './components/switch';
import PuikTabNavigationCe from './components/tab-navigation';
import PuikTabNavigationGroupPanelsCe from './components/tab-navigation-group-panels';
import PuikTabNavigationGroupTitlesCe from './components/tab-navigation-group-titles';
import PuikTabNavigationPanelCe from './components/tab-navigation-panel';
import PuikTabNavigationTitleCe from './components/tab-navigation-title';
import PuikTableCe from './components/table';
import PuikTagCe from './components/tag';
import PuikTextareaCe from './components/textarea';
import PuikTooltipCe from './components/tooltip';

const init = () => {
  if (!customElements.get('puik-accordion-ce')) {
    customElements.define('puik-accordion-ce', PuikAccordionCe);
  }
  if (!customElements.get('puik-accordion-group-ce')) {
    customElements.define('puik-accordion-group-ce', PuikAccordionGroupCe);
  }
  if (!customElements.get('puik-alert-ce')) {
    customElements.define('puik-alert-ce', PuikAlertCe);
  }
  if (!customElements.get('puik-avatar-ce')) {
    customElements.define('puik-avatar-ce', PuikAvatarCe);
  }
  if (!customElements.get('puik-badge-ce')) {
    customElements.define('puik-badge-ce', PuikBadgeCe);
  }
  if (!customElements.get('puik-breadcrumb-ce')) {
    customElements.define('puik-breadcrumb-ce', PuikBreadcrumbCe);
  }
  if (!customElements.get('puik-button-ce')) {
    customElements.define('puik-button-ce', PuikButtonCe);
  }
  if (!customElements.get('puik-tooltip-ce')) {
    customElements.define('puik-button-group-ce', PuikButtonGroupCe);
  }
  if (!customElements.get('puik-card-ce')) {
    customElements.define('puik-card-ce', PuikCardCe);
  }
  if (!customElements.get('puik-checkbox-ce')) {
    customElements.define('puik-checkbox-ce', PuikCheckboxCe);
  }
  if (!customElements.get('puik-chip-ce')) {
    customElements.define('puik-chip-ce', PuikChipCe);
  }
  if (!customElements.get('puik-divider-ce')) {
    customElements.define('puik-divider-ce', PuikDividerCe);
  }
  if (!customElements.get('puik-icon-ce')) {
    customElements.define('puik-icon-ce', PuikIconCe);
  }
  if (!customElements.get('puik-input-ce')) {
    customElements.define('puik-input-ce', PuikInputCe);
  }
  if (!customElements.get('puik-label-ce')) {
    customElements.define('puik-label-ce', PuikLabelCe);
  }
  if (!customElements.get('puik-link-ce')) {
    customElements.define('puik-link-ce', PuikLinkCe);
  }
  if (!customElements.get('puik-menu-ce')) {
    customElements.define('puik-menu-ce', PuikMenuCe);
  }
  if (!customElements.get('puik-menu-item-ce')) {
    customElements.define('puik-menu-item-ce', PuikMenuItemCe);
  }
  if (!customElements.get('puik-menu-item-separator-ce')) {
    customElements.define(
      'puik-menu-item-separator-ce',
      PuikMenuItemSeparatorCe
    );
  }
  if (!customElements.get('puik-menu-item-title-ce')) {
    customElements.define('puik-menu-item-title-ce', PuikMenuItemTitleCe);
  }
  if (!customElements.get('puik-modal-ce')) {
    customElements.define('puik-modal-ce', PuikModalCe);
  }
  if (!customElements.get('puik-pagination-ce')) {
    customElements.define('puik-pagination-ce', PuikPaginationCe);
  }
  if (!customElements.get('puik-progress-bar-ce')) {
    customElements.define('puik-progress-bar-ce', PuikProgressBarCe);
  }
  if (!customElements.get('puik-radio-ce')) {
    customElements.define('puik-radio-ce', PuikRadioCe);
  }
  if (!customElements.get('puik-select-ce')) {
    customElements.define('puik-select-ce', PuikSelectCe);
  }
  if (!customElements.get('puik-sidebar-ce')) {
    customElements.define('puik-sidebar-ce', PuikSidebarCe);
  }
  if (!customElements.get('puik-progress-stepper-ce')) {
    customElements.define('puik-progress-stepper-ce', PuikProgressStepperCe);
  }
  if (!customElements.get('puik-progress-stepper-step-ce')) {
    customElements.define('puik-progress-stepper-step-ce', PuikProgressStepperStepCe);
  }
  if (!customElements.get('puik-sidebar-group-item-ce')) {
    customElements.define('puik-sidebar-group-item-ce', PuikSidebarGroupItemCe);
  }
  if (!customElements.get('puik-sidebar-item-ce')) {
    customElements.define('puik-sidebar-item-ce', PuikSidebarItemCe);
  }
  if (!customElements.get('puik-sidebar-title-ce')) {
    customElements.define('puik-sidebar-title-ce', PuikSidebarTitleCe);
  }
  if (!customElements.get('puik-skeleton-loader-ce')) {
    customElements.define('puik-skeleton-loader-ce', PuikSkeletonLoaderCe);
  }
  if (!customElements.get('puik-skeleton-loader-group-ce')) {
    customElements.define(
      'puik-skeleton-loader-group-ce',
      PuikSkeletonLoaderGroupCe
    );
  }
  // if (!customElements.get('puik-snackbar-ce')) {
  //   customElements.define('puik-snackbar-ce', PuikSnackbarCe);
  // }
  if (!customElements.get('puik-spinner-loader-ce')) {
    customElements.define('puik-spinner-loader-ce', PuikSpinnerLoaderCe);
  }
  if (!customElements.get('puik-switch-ce')) {
    customElements.define('puik-switch-ce', PuikSwitchCe);
  }
  if (!customElements.get('puik-tab-navigation-ce')) {
    customElements.define('puik-tab-navigation-ce', PuikTabNavigationCe);
  }
  if (!customElements.get('puik-tab-navigation-group-panels-ce')) {
    customElements.define(
      'puik-tab-navigation-group-panels-ce',
      PuikTabNavigationGroupPanelsCe
    );
  }
  if (!customElements.get('puik-tab-navigation-group-titles-ce')) {
    customElements.define(
      'puik-tab-navigation-group-titles-ce',
      PuikTabNavigationGroupTitlesCe
    );
  }
  if (!customElements.get('puik-tab-navigation-panel-ce')) {
    customElements.define(
      'puik-tab-navigation-panel-ce',
      PuikTabNavigationPanelCe
    );
  }
  if (!customElements.get('puik-tab-navigation-title-ce')) {
    customElements.define(
      'puik-tab-navigation-title-ce',
      PuikTabNavigationTitleCe
    );
  }
  if (!customElements.get('puik-table-ce')) {
    customElements.define('puik-table-ce', PuikTableCe);
  }
  if (!customElements.get('puik-tag-ce')) {
    customElements.define('puik-tag-ce', PuikTagCe);
  }
  if (!customElements.get('puik-textarea-ce')) {
    customElements.define('puik-textarea-ce', PuikTextareaCe);
  }
  if (!customElements.get('puik-tooltip-ce')) {
    customElements.define('puik-tooltip-ce', PuikTooltipCe);
  }
};

export {
  PuikAccordionCe,
  PuikAccordionGroupCe,
  PuikAlertCe,
  PuikAvatarCe,
  PuikBadgeCe,
  PuikBreadcrumbCe,
  PuikButtonCe,
  PuikButtonGroupCe,
  PuikCardCe,
  PuikCheckboxCe,
  PuikChipCe,
  PuikDividerCe,
  PuikIconCe,
  PuikInputCe,
  PuikLabelCe,
  PuikLinkCe,
  PuikMenuItemCe,
  PuikMenuItemSeparatorCe,
  PuikMenuItemTitleCe,
  PuikModalCe,
  PuikPaginationCe,
  PuikProgressBarCe,
  PuikProgressStepperCe,
  PuikProgressStepperStepCe,
  PuikRadioCe,
  PuikSelectCe,
  PuikSidebarCe,
  PuikSidebarGroupItemCe,
  PuikSidebarItemCe,
  PuikSidebarTitleCe,
  PuikSkeletonLoaderCe,
  PuikSkeletonLoaderGroupCe,
  // PuikSnackbarCe,
  PuikSpinnerLoaderCe,
  PuikSwitchCe,
  PuikTabNavigationCe,
  PuikTabNavigationGroupPanelsCe,
  PuikTabNavigationGroupTitlesCe,
  PuikTabNavigationPanelCe,
  PuikTabNavigationTitleCe,
  PuikTableCe,
  PuikTagCe,
  PuikTextareaCe,
  PuikTooltipCe,
  init
};

export default init;
