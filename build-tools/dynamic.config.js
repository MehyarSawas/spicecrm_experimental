const fs = require('fs');
const path = require('path');
const dynamicModules = [
    {
        path: path.resolve(__dirname, '../src/admincomponents/admincomponents.module.ts'),
        chunkName: 'admincomponents'
    },
    {
        path: path.resolve(__dirname, '../src/globalcomponents/globalcomponents.ts'),
        chunkName: 'globalcomponents'
    },
    {
        path: path.resolve(__dirname, '../src/objectcomponents/objectcomponents.ts'),
        chunkName: 'objectcomponents'
    },
    {
        path: path.resolve(__dirname, '../src/portalcomponents/portalcomponents.ts'),
        chunkName: 'portalcomponents'
    },
    {
        path: path.resolve(__dirname, '../src/objectfields/objectfields.ts'),
        chunkName: 'objectfields'
    },
    {
        path: path.resolve(__dirname, '../src/workbench/workbench.module.ts'),
        chunkName: 'workbench'
    },
    {
        path: path.resolve(__dirname, '../src/systemcomponents/systemcomponents.ts'),
        chunkName: 'systemcomponents'
    }
];

const mainDirs = [
    path.resolve(__dirname, `../src/include`),
    path.resolve(__dirname, `../src/modules`),
];

if (fs.existsSync(path.resolve(__dirname, `../src/custom`))) {
    mainDirs.push(path.resolve(__dirname, `../src/custom`));
}

mainDirs.forEach(mainDir => {
    fs.readdirSync(mainDir).forEach(moduleDir => {
        const moduleFileInfo = fs.readdirSync(path.resolve(mainDir, moduleDir), {withFileTypes: true}).find(i => i.isFile() && i.name.endsWith('.ts'));
        if (!moduleFileInfo) return;
        dynamicModules.push({
            path: path.resolve(mainDir, moduleDir, moduleFileInfo.name),
            chunkName: moduleDir
        });
    });
});

module.exports = dynamicModules;
