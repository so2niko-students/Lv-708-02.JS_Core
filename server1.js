const http = require('http');
const url = require('url');
const fs = require('fs');

/*
post - add - додати запис
delete - видалити запис
update - оновити запис
get - read - зчитати дані

*/

const getFileName = id => `./data/data-${ id }.json`;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const q = url.parse(req.url, true).query;
    const id = q.id;
    const fName = getFileName(id);
    switch(q.m){
        case 'g' : {//userID - id
            fs.readFile('tasks', (err, data) => {
                if(err){
                    console.error(err);
                    return res.end('<br>ERROR.');
                } 

                // const fData = JSON.parse(data);
                // const fDataStr = JSON.stringify(fData);
                res.write(data);
                console.log(data);
                
                res.end('<br>End.');
            });
            break;
        }
        case 'p' : {//userID - id, description - d [100 symbols]
            res.write('post');
            //вичитати файл 
            res.end('<br>End.');
            break;
        }
        case 'u' : {
            res.write('update');
            
            res.end('<br>End.');
            break;
        }
        case 'd' : {
            res.write('delete');
            
            res.end('<br>End.');
            break;
        }
        default : {
            res.write('no method');
                
            res.end('<br>End.');
            break;
        }
    }

}).listen(8080);