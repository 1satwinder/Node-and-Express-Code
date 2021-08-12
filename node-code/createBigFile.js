const {writeFile} = require('fs');

for(let i=0; i<=10000; i++){
    writeFile("./content/bigFile.txt", `Hello World ${i} \n` , {flag:'a'}, (err,result) => {
        if(err){console.log(err);}
        console.log("Done Writing");
    });
}

