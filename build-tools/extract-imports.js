const ts = require("typescript");
const fs = require("fs");
const path = require("path");
const dynamicModules = require('./dynamic.config.js');

function getRelevantImportStatements(filePath) {
    const sourceCode = fs.readFileSync(filePath, "utf-8");
    const sourceFile = ts.createSourceFile(
        path.basename(filePath),
        sourceCode,
        ts.ScriptTarget.Latest,
        true
    );

    const importedBindingsMap = new Map(); // identifier -> full import statement
    const declarationSet = new Set();

    // Step 1: Collect imported identifiers and full import text
    ts.forEachChild(sourceFile, (node) => {
        if (ts.isImportDeclaration(node)) {
            const fullImportText = sourceCode.slice(node.pos, node.end).trim();
            const namedBindings = node.importClause?.namedBindings;

            // import { A, B } from '...';
            if (namedBindings && ts.isNamedImports(namedBindings)) {
                namedBindings.elements.forEach((el) => {
                    importedBindingsMap.set(el.name.text, fullImportText);
                });
            }

            // import A from '...';
            if (node.importClause?.name) {
                importedBindingsMap.set(node.importClause.name.text, fullImportText);
            }

            // import * as X from '...';
            if (namedBindings && ts.isNamespaceImport(namedBindings)) {
                importedBindingsMap.set(namedBindings.name.text, fullImportText);
            }
        }
    });

    // Step 2: Find elements in DECLARATIONS array
    ts.forEachChild(sourceFile, function findDeclarations(node) {
        if (
            ts.isVariableStatement(node) &&
            node.declarationList.declarations.length > 0
        ) {
            const decl = node.declarationList.declarations[0];
            if (
                ts.isIdentifier(decl.name) &&
                decl.name.text === "DECLARATIONS" &&
                decl.initializer &&
                ts.isArrayLiteralExpression(decl.initializer)
            ) {
                decl.initializer.elements.forEach((el) => {
                    if (ts.isIdentifier(el)) {
                        declarationSet.add(el.text);
                    }
                });
            }
        }

        ts.forEachChild(node, findDeclarations);
    });

    // Step 3: Get unique full import statements used in DECLARATIONS
    const uniqueImports = new Set();
    for (const name of declarationSet) {
        const importStatement = importedBindingsMap.get(name);
        if (importStatement) {
            uniqueImports.add(importStatement);
        }
    }

    return Array.from(uniqueImports);
}



    let content = fs.readFileSync(path.resolve(__dirname, '../src/workbench/workbench.module.ts'), 'utf8');

    if (!content.includes('declarations')) return;

    getRelevantImportStatements(path.resolve(__dirname, '../src/workbench/workbench.module.ts')).forEach(importStatement => {
        content += importStatement.replace('import', 'export') + '\n';
    });

    console.log(content);
    //fs.writeFileSync(dynamicModule.path, content);
