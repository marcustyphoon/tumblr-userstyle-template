import fs from 'node:fs/promises';
const urlPath = (path) => new URL(path, import.meta.url);

/**
 * Removes the extra indentation that Prettier adds to an inline template string.
 * This function must be called "css" to make Prettier and the Styled Components editor extension
 * treat the template string as CSS.
 */
export const css = (...template) => {
  const string = String.raw(...template);
  return string
    .split('\n')
    .filter((line, i) => i || line)
    .map((line) => line.replace(/^ {2}/, ''))
    .join('\n');
};

const getCssMap = async () => {
  try {
    return JSON.parse(await fs.readFile(urlPath('./cssmap.json')));
  } catch (e) {
    await import(urlPath('./fetch-map.js'));
    return JSON.parse(await fs.readFile(urlPath('./cssmap.json')));
  }
};
const cssMap = await getCssMap();

export const keyToClasses = (...keys) => keys.flatMap((key) => cssMap[key]).filter(Boolean);

export const keyToCss = (...keys) =>
  `:is(${keyToClasses(...keys)
    .map((className) => `.${className}`)
    .join(', ')})`;
