const fs = require('fs');

const writeFile = (fileContent) => {
    fs.write('./dist/index.html', fileContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Team Profile Generated')
        }
    });
};

module.exports = writeFile;