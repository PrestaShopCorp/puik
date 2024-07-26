import '@prestashopcorp/puik-components/table-search-input/style/css';
import type TableSearchInput from './table-search-input.vue';

export enum PuikTableSearchInputTypes {
  Text = 'text',
  Range = 'range',
}

export type inputRange = {
  min?: number
  max?: number
};

export type searchOption = {
  searchBy: string
  inputText?: string
  inputRange?: inputRange
};
export interface TableSearchInputProps {
  name?: string
  column?: string
  searchSubmit?: boolean
  searchReset?: boolean
  searchType?: `${PuikTableSearchInputTypes}`
}

export type TableSearchInputInstance = InstanceType<typeof TableSearchInput>;
