import { AllowedComponentProps, VNodeProps } from 'vue';

export type ExtractComponentPropType<T extends new (...args: any[]) => any> = Omit<InstanceType<T>['$props'], keyof VNodeProps | keyof AllowedComponentProps>;
