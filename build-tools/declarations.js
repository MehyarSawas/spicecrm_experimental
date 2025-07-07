const fs = require('fs');
const dynamicModules = require('./dynamic.config.js');

dynamicModules.forEach(dynamicModule => {

    let content = fs.readFileSync(dynamicModule.path, 'utf8');

    if (!content.includes('declarations')) return;

    const declarations = content.match(/declarations:[\s\S]+?]/g)[0];
    content = content.replace(declarations, 'declarations: DECLARATIONS')
        .replace('@NgModule', `\n export const ${declarations.replace('declarations:', 'DECLARATIONS = ')}; \n\n @NgModule`);

    [...content.matchAll(/import.*\/components\/.+";/g)].forEach(i => {
        content += i[0].replace('import', 'export');
    });

    fs.writeFileSync(dynamicModule.path, content);
});
