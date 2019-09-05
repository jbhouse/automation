var { exec } = require('child_process');

exec("mvn spring-boot:run | grep --line-buffered INFO", (err: string, stdout: string, stderr: string) => {
    if (err) {
        console.log("error: ", err);
        return;
    } // node couldn't execute the command
    console.log(stdout);
    console.log(stderr);
});