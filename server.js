const http = require('http')

    //creating a server with the HTTP variable
    const server = http.createServer(function(req, res) {

    //headers are created using response, 2. they are similar to the head tag in html. So they basically give more info about the document whether it is html, plain text or JSON (used when creating APIs) but they don't show on the browser just like the head tag.
    // res.writeHead(200, { 'Content-Type': 'text/plain'}); //a plain text content type

    // res.writeHead(200, { 'Content-Type': 'application/json'}); //a JSON content type
    res.writeHead(200, { 'Content-Type': 'text/html'}); //an HTML content type

    //send back some information using the response
    // res.end("Welcome to your first server practice!"); //a plain text response. This shows on the browser when you run localhost:4000 i.e the IP address and the port which was created)

    // for JSON content type
    // res.end(` 
    //     {
    //         "name": "Abike",
    //         "College": "Covenant University",
    //         "Occupation": "Software developer"
    //     }
    // `); 

    res.end(`
        <html>
            <head>
                <title>HTML Server</title>
            </head>
            <body style="background: purple; color: white; text-align: center;">
                <h1>Welcome!!!!</h1>
                <p>Hi, I am Abike. Welcome to my HTTP Server Practical.</p>
            </body>
        </html>
    `)
});

    //congratulations, you've succeded in creating your first server.
    //node cannot do anything with this server because we have not created a port yet.
    //we create a port by saving the code in a variable i.e the const server above
    //using the variable to create a port

server.listen(4000, '127.0.0.1'); //takes in the port number and the IP address. 127.0.0.1 is the local host and can be replaced with 'localhost'

//to console.log a message when the server is created.
console.log("Yes, you have created a server!");

//to start up the server on windows, hold down the control key and press j (which opens the terminal interface, use the bash terminal for this) and then type node server.js (the name of the file)
//you can restart the server by hoding down the control key and press c. This stops the current server
//then go to the broswer and type localhost:4000