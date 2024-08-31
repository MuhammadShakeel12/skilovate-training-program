const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1 style = "font-family:cursive">Welcome to Skilovate</h1>');
            break;

        case '/contact':
            const contactPath = path.join(__dirname, 'index.html');
            fs.readFile(contactPath, (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Page not found');
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(data);
                }
            });
            break;  

        case '/training':
            const trainingPath = path.join(__dirname, 'index2.html');
            fs.readFile(trainingPath, (err, data) => {
                if (err) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Page not found');  
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');  
                    res.end(data);
                }
            });
            break;

        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Page not found</h1>');
            break;
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000');
});
