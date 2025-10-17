import { type UseSnackbarProps, type SnackbarsState, type SnackbarProps } from './snackbar';
import { generateId } from '@prestashopcorp/puik-utils';

const DEFAULT_SNACKBARS_LIMIT = 0;
const DEFAULT_SNACKBAR_REMOVE_DELAY = 5000;

export const useSnackbar = (
  props: UseSnackbarProps,
  snackbarsState: SnackbarsState,
  snackbarsLimit: number = DEFAULT_SNACKBARS_LIMIT,
  removeDelay: number = DEFAULT_SNACKBAR_REMOVE_DELAY
) => {
  const id = `puik-snackbar-${generateId()}`;
  const duration = removeDelay;
  snackbarsState.push({ ...props, id, duration } as SnackbarProps);
  if (snackbarsState.length > snackbarsLimit) {
    snackbarsState = snackbarsState.slice(-snackbarsLimit);
  }
  const removeSnackbar = (snackbarsState: SnackbarsState) => {
    snackbarsState = snackbarsState.filter(snackbar => snackbar.open !== false);
    return snackbarsState;
  };
  const dissmissSnackbar = (id: string) => {
    setTimeout(() => {
      snackbarsState = snackbarsState.map(snackbar => {
        if (snackbar.id === id) {
          snackbar.open = false;
        }
        return snackbar;
      });
      return snackbarsState;
    }, removeDelay);
  };
  dissmissSnackbar(id);
  return { snackbarsState, id, dissmissSnackbar, removeSnackbar };
};
