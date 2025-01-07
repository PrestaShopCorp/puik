import { type SnackbarProps, PuikSnackbarActions, PuikSnackbarDispatchActions, SnackbarsState } from './snackbar';

const SNACKBAR_LIMIT = 1;
const SNACKBAR_REMOVE_DELAY = 5000;

function addToRemoveQueue(snackbarId: string, snackbarTimeouts: Map<string, ReturnType<typeof setTimeout>>, state: SnackbarsState) {
  if (snackbarTimeouts.has(snackbarId)) { return; }

  const timeout = setTimeout(() => {
    snackbarTimeouts.delete(snackbarId);
    dispatch({
      type: PuikSnackbarActions.Remove,
      snackbarId
    }, snackbarTimeouts, state);
  }, SNACKBAR_REMOVE_DELAY);

  snackbarTimeouts.set(snackbarId, timeout);
}

function dispatch(action: PuikSnackbarDispatchActions, snackbarTimeouts: Map<string, ReturnType<typeof setTimeout>>, state: SnackbarsState) {
  switch (action.type) {
    case PuikSnackbarActions.Add:
      state.snackbars = [action.snackbar, ...state.snackbars].slice(0, SNACKBAR_LIMIT);
      break;

    case PuikSnackbarActions.Update:
      state.snackbars = state.snackbars.map(s =>
        s.id === action.snackbar.id ? { ...s, ...action.snackbar } : s
      );
      break;

    case PuikSnackbarActions.Dismiss: {
      const { snackbarId } = action;

      if (snackbarId) {
        addToRemoveQueue(snackbarId, snackbarTimeouts, state);
      } else {
        state.snackbars.forEach((snackbar) => {
          addToRemoveQueue(snackbar.id, snackbarTimeouts, state);
        });
      }

      state.snackbars = state.snackbars.map(s =>
        s.id === snackbarId
          ? { ...s, open: false }
          : s
      );
      break;
    }

    case PuikSnackbarActions.Remove:
      state.snackbars = state.snackbars.filter(s => s.id !== action.snackbarId);
      break;
  }
}

export const useSnackbar = (props: SnackbarProps, snackbarTimeouts: Map<string, ReturnType<typeof setTimeout>>, state: SnackbarsState) => {
  const id = props.id;

  const update = (props: SnackbarProps) =>
    dispatch({
      type: PuikSnackbarActions.Update,
      snackbar: { ...props }
    }, snackbarTimeouts, state);

  const dismiss = () => dispatch({ type: PuikSnackbarActions.Dismiss, snackbarId: props.id }, snackbarTimeouts, state);

  dispatch({
    type: PuikSnackbarActions.Add,
    snackbar: {
      ...props,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) { dismiss(); }
      }
    }
  }, snackbarTimeouts, state);

  return {
    id,
    dismiss,
    update
  };
};
