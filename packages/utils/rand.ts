let idCounter = 0;

/**
 * Generate a unique incremental ID
 */
export const generateId = (): number => ++idCounter;
