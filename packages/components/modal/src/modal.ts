import type Modal from './modal.vue';
import { InjectionKey } from 'vue';

export enum PuikModalVariants {
  Destructive = 'destructive',
  Feedback = 'feedback',
  Dialog = 'dialog',
}

export enum PuikModalSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ModalProps {
  variant?: `${PuikModalVariants}`
  size?: `${PuikModalSizes}`
  description?: string
  dataTest?: string
}

export type ModalContext = Required<Pick<ModalProps, 'variant' | 'size'>> & Pick<ModalProps, 'dataTest' | 'description'>;

export const ModalInjectionKey = Symbol('PuikModalInjectionKey') as InjectionKey<ModalContext>;

export type ModalInstance = InstanceType<typeof Modal>;
