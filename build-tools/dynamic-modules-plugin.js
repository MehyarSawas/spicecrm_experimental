const fs = require('fs');
const dynamicModules = require('./dynamic.config.js');

/**
 * add entry points for the dynamic modules to esbuild to separately bundle the lazy loading modules
 * then append an export variable at the end of the dynamic module typescript file to exclude all its export
 * components from tree shaking
 */
const dynamicImportPlugin = {
    name: 'dynamic-modules',
    setup(build) {

        build.initialOptions.entryNames = '[name]';

        dynamicModules.forEach(dynamicModule => {

            build.initialOptions.entryPoints[dynamicModule.chunkName] = dynamicModule.path;

            appendExcludeTreeShakingVariable();
        });
    },
};

/**
 * append and export variable to the end of the module typescript file to prevent tree shaking the export components
 */
function appendExcludeTreeShakingVariable(dynamicModule) {
    const moduleContent = getContentWithoutExport(dynamicModule.path);
    const moduleExportsMatch = moduleContent.match(/exports:\s*\[(.+)]/);

    if (!moduleExportsMatch[1]) return;

    const dynamicExports = [];
    const components = moduleExportsMatch[1].split(',');

    components.forEach(c => dynamicExports.push(`'${c}': ${c}`));

    fs.writeFileSync(
        dynamicModule.path,
        `${moduleContent}/* dynamic-exports */ export const dynamicComponents = {${dynamicExports.join(',')}};`
    );
}

/**
 * get the module typescript file content and trim the added export variable
 */
function getContentWithoutExport(fileName) {
    return fs.readFileSync(fileName).toString().replace(/\/\* dynamic-exports \*\/ export const dynamicComponents = \{.+};/, '');
}

module.exports = [dynamicImportPlugin];
