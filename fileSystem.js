//file system in nodejs:
//create files
//read files
//update files
//delete files
//name files

//create file - you want to create a file that didn't use to exist in your current local directoy or local path
//you first require the module fs which is file system then use the fs to perform a particular action.

var fs = require('fs');
    //fs.writeFile, fs.open, fs.appendFile to create a file. the writefile and the appendfile can be used to update and create a file. the major differnce is that the append file adds to what used to be in the code unlike the writefile which overrides the previous texts.

    // fs.writeFile('myFirstFile.txt', 'Welcome to your first file system practice.', (err) => { //myFirstFile is the name of the file and the .txt shows it is a plain text type, the hello world is the content of the file and the err shows a message in case there is an error in creating the. the err is a callback here. It and data (which is used to render.)
    //     //if there is an error throw error
    //     if (err) throw err;
    //     //to console.log a message when the file is created.
    //     console.log('You have successfully created your first file');
    // });

    //to edit the file using writeFile
    // fs.writeFile('myFirstFile.txt', 'Welcome to your first file system practice Abike. ⧵n You are doing well baby girl.', (err) => {
    //     if (err) throw err;

    //     console.log('You did this too babe girl');
    // });

    // // we updated the file myFirstFile.txt from Welcome to your first file system practice. to Welcome to your first file system practice Abike. ⧵n You are doing well baby girl.

    //to edit the file using appendFile
    // fs.appendFile('myFirstFile.txt', "Welcome to your first file system practice Laabike. ⧵n You've got this babe' baby girl. You are learning file system diligently.", (err) => {
    //     if (err) throw err;

    //     console.log('You did this too babe girl');
    // });

    //read file - displaying the content of the file somewhere eg and html file that you want to show it's content on the browser
    //since you want to render the html page to a browser, first create a server for it so you render it on the browser and not on the console.
    //using readFile without creating server leads to the data being a buffer
    // fs.readFile('index.html', (err, data) => {
    //     if (err) throw err;
    //     console.log(data) //the data here is currently in buffer - bytes?
    // })

    //to import the http server and make it read on the browser
// var http = require('http');

// var Server = http.createServer((req, res) => {
//     fs.readFile('index.html', (err, data) => {
//         if (err) throw err;
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// });

// Server.listen(4000);

// console.log("Yes, you have created a server for your http file!");

//deleting files
//if the file does not exist, there will degfinitely be an error. if you don't throw the error though, you wouldn't know what went wrong.
// fs.unlink('toDo.text', (err) => {
//     if (err) throw err;
//     console.log("Your file has been deleted successfully.")
// })

//for files that do exist
// fs.unlink('toBeDeleted.text', (err) => {
//     if (err) throw err;
//     console.log("Your file has been deleted successfully.")
// })

// fs.unlink('toBeDeleted.txt', (err) => {
//     if (err) throw err;
//     console.log("Your file has been deleted successfully.")
// });

//to rename files
fs.rename('toberenamed.txt','toBeRenamed.txt', (err) => {
    if (err) throw err;
    console.log('Your file was renamed successfully.')
})

