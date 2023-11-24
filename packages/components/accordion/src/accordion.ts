import type accordion from './accordion.vue';

export interface AccordionProps {
  name: string
  title?: string
  subTitle?: string
  icon?: string
  disabled?: boolean
  dataTest?: string
}

export type AccordionInstance = InstanceType<typeof accordion>;
