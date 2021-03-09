const fs = require("fs");
const path = require("path");

function checkFileOrNot(src){
    return fs.lstatSync(src).isFile();
}

function directoryContent(src){
    return fs.readdirSync(src);
}


function viewFlat(src){
    let isFile=checkFileOrNot(src);
    //console.log(isFile)
    if(isFile){
        let buffer = fs.readFileSync(src,"utf-8");
        console.log(src)
        //console.log(src+"=>"+buffer);
    }else{
        console.log(src);
        let contents = directoryContent(src);
        for(let i=0;i<contents.length;i++){
            let child = contents[i];
            //let dirNamePath = src +"\\" +child;
            let dirNamePath = path.join( src,child ) ;
            viewFlat(src+"/"+contents[i]);
        }
    }

}


module.exports = {
    viewFlat:viewFlat
}