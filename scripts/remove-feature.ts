import { Project, SyntaxKind, Node } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isArticleEnabled
const featureState = process.argv[3]; // example off / on

if (!removedFeatureName) {
  throw new Error('Enter the feature-flag');
}

if (!featureState) {
  throw new Error('Enter the feature-state (on / off)');
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Incorrect the feature-state. Enter on / off');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
  let isToggleFeatures = false;
  node.forEachChild(child => {
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeatures') {
      isToggleFeatures = true;
    }
  });
  return isToggleFeatures;
}

files.forEach(sourceFile => {
  sourceFile.forEachDescendant(node => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

      if (!objectOptions) return;

      const featureNameProp = objectOptions.getProperty('name');
      const onFuncProp = objectOptions.getProperty('on');
      const offFuncProp = objectOptions.getProperty('off');

      const onFunction = onFuncProp?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const offFunction = offFuncProp?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const featureName = featureNameProp?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1);

      if (featureName !== removedFeatureName) return;

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }

      if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  });
});

project.save();
