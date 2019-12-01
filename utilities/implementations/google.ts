module.exports = {
    searchGoogle: (executablePath: string, url: string) =>
        require('child_process').execFile(executablePath, [url], (err: string, data: string) =>
            Boolean(err) ? console.error(err) : console.log(data)
        )
}
