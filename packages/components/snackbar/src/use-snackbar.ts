import { type UseSnackbarProps, type SnackbarsState, type SnackbarProps } from './snackbar';
import { generateId } from '@prestashopcorp/puik-utils';

const DEFAULT_SNACKBARS_LIMIT = 0;
const DEFAULT_SNACKBAR_REMOVE_DELAY = 5000;

export const useSnackbar = (
  props: UseSnackbarProps,
  sackbarsState: SnackbarsState,
  snackbarsLimit: number = DEFAULT_SNACKBARS_LIMIT,
  removeDelay: number = DEFAULT_SNACKBAR_REMOVE_DELAY
) => {
  const id = `snackbar-${generateId()}`;
  const duration = removeDelay;
  sackbarsState.push({ ...props, id, duration } as SnackbarProps);
  if (sackbarsState.length > snackbarsLimit) {
    sackbarsState = sackbarsState.slice(-snackbarsLimit);
  }
  const removeSnackbar = (sackbarsState: SnackbarsState) => {
    sackbarsState = sackbarsState.filter(snackbar => snackbar.open !== false);
    return sackbarsState;
  };
  const dissmissSnackbar = (id: string) => {
    setTimeout(() => {
      sackbarsState = sackbarsState.map(snackbar => {
        if (snackbar.id === id) {
          snackbar.open = false;
        }
        return snackbar;
      });
      return sackbarsState;
    }, removeDelay);
  };
  dissmissSnackbar(id);
  return { sackbarsState, id, dissmissSnackbar, removeSnackbar };
};
