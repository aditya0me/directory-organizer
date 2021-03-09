const fs = require("fs");
const path = require("path");

function checkFileOrNot(src){
    return fs.lstatSync(src).isFile();
}

function directoryContent(src){
    return fs.readdirSync(src);
}



function viewTree(src,spacing){
    let isFile=checkFileOrNot(src);
   // let arrOfPathTokens = src.split("\\");
    //let cur = arrOfPathTokens[arrOfPathTokens.length - 1];
    //console.log(isFile)
    if(isFile){
        //let buffer = fs.readFileSync(src,"utf-8");
        //console.log(spacing,cur," *");
        console.log(spacing,path.basename(src),"*");
    }else{
       // console.log(spacing,cur);
       console.log(spacing,path.basename(src));
        let contents = directoryContent(src);
        for(let i=0;i<contents.length;i++){
            viewTree(src+"\\"+contents[i],spacing+"\t");
        }
    }

}

module.exports={
    viewTree:viewTree
}