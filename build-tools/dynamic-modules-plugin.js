const dynamicModules = require('./dynamic.config.js');
const path = require("path");

/**
 * add entry points for the dynamic modules to esbuild to separately bundle the lazy loading modules
 */
const dynamicImportPlugin = {
    name: 'dynamic-modules',
    setup(build) {
        build.initialOptions.entryNames = '[name]';
        build.initialOptions.keepNames = true;

        dynamicModules.forEach(dynamicModule => {
            build.initialOptions.entryPoints[dynamicModule.chunkName] = dynamicModule.path;
        });

        build.onStart(() => {
            console.log('build started!!');
        });

        build.onResolve({filter: /DynamicModuleLoader/}, args => {
            return {
                path: path.resolve(args.resolveDir, args.path),
                namespace: 'metadata-service'
            };
        });

        build.onLoad({filter: /.+/}, args => {
            return {
                contents: 'export function devModeModuleImporter(s) {}',
                loader: 'ts',
                resolveDir: path.resolve(__dirname, '../build-tools')
            }
        });
    },
};

module.exports = [dynamicImportPlugin];
