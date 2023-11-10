export interface ControlsProps {
  disabled?: boolean
}

export const controlsEmits = ['increase', 'decrease']
export type ControlsEmits = typeof controlsEmits
