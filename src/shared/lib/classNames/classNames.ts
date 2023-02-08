type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods).filter(([_, value]) => value)
    .map(([className]) => className),
].join(' ');
