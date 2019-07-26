const git = require('simple-git');
const fs = require('fs');

fs.readdir(process.argv[2], (err, files) => {
    files.filter(file => fs.lstatSync(process.argv[2] + file).isDirectory()).forEach(project => {

        if (fs.existsSync(process.argv[2] + project + '\\.git')) {

            git(process.argv[2] + project).raw(
                [
                    'pull',
                    'origin',
                    'develop'
                ], (err, result) => {
                    if (Boolean(result)) {
                        console.log(result);
                    }
                    if (Boolean(err)) {
                        console.log(err);
                    }
                });
        }
    })
});
