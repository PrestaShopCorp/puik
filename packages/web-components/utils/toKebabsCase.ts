export const toKebabCase = (name: string): string => {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

export default toKebabCase;
