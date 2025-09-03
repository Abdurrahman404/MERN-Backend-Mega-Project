const http = require('http'); //create a server without node modules 



const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
   if(req.url === '/')
    { res.statusCode = 200 ; 
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello ice tea ")}
    else if (req.url === '/about')
    { res.statusCode = 200 ; 
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello ice tea about page ")}
     
})



server.listen(port , hostname , () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})