var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  
    const responseData= {
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
    };

    switch(req.url){
        case '/welcome' :
            res.writeHead(200, {'Content-Type':'text/plain'});
            res.end('Welcome to Dominos!')
            break;

        case'/contact':
            res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify(responseData));
            break;

        default:
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('404 error');
            break;
    }
}

httpServer.listen(8081,()=>{
    console.log('Listening to post 8081')
});

module.exports = httpServer;
