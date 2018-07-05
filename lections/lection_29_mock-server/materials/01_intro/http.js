const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    const headers = request.headers;

    // console.log(headers);

    const urlObj = url.parse(request.url);

    // console.log(urlObj);

    response.setHeader('container-id', '9231');
    response.write(urlObj.path);
    response.end();
})
.listen(3000);

