import fs from 'node:fs/promises';
const urlPath = (path) => new URL(path, import.meta.url);

const sourceFolder = await fs.readdir(urlPath('./source'));
const sourceFiles = sourceFolder.filter((file) => file.endsWith('.source.js'));

for (const sourceFile of sourceFiles) {
  const module = await import(urlPath(`./source/${sourceFile}`));

  const outputFile = sourceFile.replace(/.source.js$/, '');
  fs.writeFile(urlPath(`./output/${outputFile}`), module.default);
}
