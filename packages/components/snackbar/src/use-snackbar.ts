import { type SnackbarProps, PuikSnackbarActions, PuikSnackbarDispatchActions, SnackbarsState } from './snackbar';

const DEFAULT_SNACKBARS_LIMIT = 1;
const DEFAULT_SNACKBAR_REMOVE_DELAY = 5000;

function addToRemoveQueue(
  snackbarId: string,
  snackbarTimeouts: Map<string, ReturnType<typeof setTimeout>>,
  state: SnackbarsState,
  removeDelay: number = DEFAULT_SNACKBAR_REMOVE_DELAY
) {
  if (snackbarTimeouts.has(snackbarId)) { return; }

  const timeout = setTimeout(() => {
    snackbarTimeouts.delete(snackbarId);
    dispatch({
      type: PuikSnackbarActions.Remove,
      snackbarId
    }, snackbarTimeouts, state);
  }, removeDelay);

  snackbarTimeouts.set(snackbarId, timeout);
}

function dispatch(
  action: PuikSnackbarDispatchActions,
  snackbarTimeouts: Map<string, ReturnType<typeof setTimeout>>,
  state: SnackbarsState,
  snackbarsLimit: number = DEFAULT_SNACKBARS_LIMIT,
  removeDelay: number = DEFAULT_SNACKBAR_REMOVE_DELAY
) {
  switch (action.type) {
    case PuikSnackbarActions.Add:
      state.snackbars = [...state.snackbars, action.snackbar].slice(-snackbarsLimit);
      break;

    case PuikSnackbarActions.Update:
      state.snackbars = state.snackbars.map(s =>
        s.id === action.snackbar.id ? { ...action.snackbar, ...s } : s
      );
      break;

    case PuikSnackbarActions.Dismiss: {
      const { snackbarId } = action;

      if (snackbarId) {
        addToRemoveQueue(snackbarId, snackbarTimeouts, state, removeDelay);
      } else {
        state.snackbars.forEach((snackbar) => {
          addToRemoveQueue(snackbar.id, snackbarTimeouts, state, removeDelay);
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

export const useSnackbar = (
  props: SnackbarProps,
  snackbarTimeouts: Map<string, ReturnType<typeof setTimeout>>,
  state: SnackbarsState,
  snackbarsLimit: number = DEFAULT_SNACKBARS_LIMIT,
  removeDelay: number = DEFAULT_SNACKBAR_REMOVE_DELAY
) => {
  const id = props.id;

  const update = (props: SnackbarProps) =>
    dispatch({
      type: PuikSnackbarActions.Update,
      snackbar: { ...props }
    },
    snackbarTimeouts,
    state,
    snackbarsLimit,
    removeDelay
    );

  const dismiss = () =>
    dispatch(
      { type: PuikSnackbarActions.Dismiss, snackbarId: props.id },
      snackbarTimeouts,
      state,
      snackbarsLimit,
      removeDelay
    );

  dispatch(
    {
      type: PuikSnackbarActions.Add,
      snackbar: {
        ...props,
        open: true,
        onOpenChange: (open: boolean) => {
          if (!open) { dismiss(); }
        }
      }
    },
    snackbarTimeouts,
    state,
    snackbarsLimit,
    removeDelay
  );

  return {
    id,
    dismiss,
    update
  };
};
