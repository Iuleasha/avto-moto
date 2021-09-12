const fs = require('fs');
const pathToEntry = './build/index.html';
const fontFolder = './build/static/media';
const splitBy = '</title>';
const builtHTMLContent = fs.readFileSync(pathToEntry).toString();
const parts = builtHTMLContent.split(splitBy);

let fileWithPreload = [
    parts[0],
    splitBy,
];

fs.readdirSync(fontFolder).forEach(file => {
    if (file.includes('woff')) {
        fileWithPreload.push(`<link rel='preload' href='/static/media/${file}' as='font'>`);
    }
});

fileWithPreload = [
    ...fileWithPreload,
    parts[1],
];

fs.writeFileSync(pathToEntry, fileWithPreload.join(''));
