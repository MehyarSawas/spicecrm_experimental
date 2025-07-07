const fs = require("fs");

module.exports = html => {
    html = html.replaceAll(/chunk-.+?"/g, 'app/$&');
    html = html.replaceAll('main.js', "app/main.js");
    html = html.replaceAll('scripts.js', "app/scripts.js");
    html = html.replaceAll('styles.css', "app/styles.css");

    fs.writeFileSync('./index.html', html);

    return html;
};