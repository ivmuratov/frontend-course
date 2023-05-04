import { Project } from 'ts-morph';

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
  return layers.some(layer => value.startsWith(layer));
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach(importDeclaration => {
    const value = importDeclaration.getModuleSpecifierValue();
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();
