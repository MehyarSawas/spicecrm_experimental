
export function devModeModuleImporter(moduleMetadata) {

    let importFn;

    const dirArray = moduleMetadata.path.split('/');
    let dir = dirArray[1];
    const file = dirArray.pop();

    switch (dirArray[0]) {
        case 'modules':
            importFn = import(`../modules/${dir}/${file}.ts`);
            break;
        case 'include':
            importFn = import(`../include/${dir}/${file}.ts`);
            break;
        case 'custom':
            importFn = import(`../custom/${dir}/${file}.ts`);
            break;
        default:
            dir = dirArray[0];
            importFn = import(`../${dir}/${file}.ts`);
    }

    return importFn;
}
