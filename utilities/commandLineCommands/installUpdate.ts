var maven = require('./maven');

maven.execute(process.argv[2], ['clean', 'install', '-U']);