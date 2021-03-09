const fs = require("fs");
const path = require("path");
const util = require("../utility/util.js");


function organizeHelper(src) {
    //console.log("organize command called ok",src);
    if (src == undefined) {
        // if no folder is specified , then we will send the current working directory
        src = process.cwd();
    }

    organizeFiles(src);


}

function checkFileOrNot(src) {

    return fs.lstatSync(src).isFile();
}

function directoryContent(src) {
    return fs.readdirSync(src);
}

function checkExtension(src) {
    let extOfCurFile = src.split(".").pop();
    //console.log(extOfCurFile);
    let types = util.utility.types;
    for (let type in types) {
        for (let i = 0; i < types[type].length; i++) {
            //console.log(types[type][i]);
            if (extOfCurFile == types[type][i]) {
                return type;
            }
        }
    }

    return "others";
}

function sendThisFile(src, dest) {
    if (fs.existsSync(dest) == false) {
        fs.mkdirSync(dest);
    }

    let nameOfFileInDestinationFolder = path.basename(src);
    let pathOfFileInDestinationFolder = path.join(dest, nameOfFileInDestinationFolder);
    fs.copyFileSync(src, pathOfFileInDestinationFolder);
}


function organizeFiles(src){
    let folderToMake = path.join(src, "Organized_files");
    //console.log(folderToMake);
    if (fs.existsSync(folderToMake) == false) {
        fs.mkdirSync(folderToMake);
    }

    //orgnaize(source to destination)
    organize(src, folderToMake);
}

function organize(src, dest) {
    let isFile = checkFileOrNot(src);

    if (isFile == true) {
        //it's file
        // console.log(src,"*");

        //check for extension
        let specifiSubfolderName = checkExtension(src);
        //console.log(specifiSubfolderName,"  ->  ",path.basename(src));
        //copy this file to dest\media or dest\app or dest\documents 
        sendThisFile(src, path.join(dest, specifiSubfolderName));

    } else {

        //it's folder
        //console.log(src);
        //read all it's contents
        let child = directoryContent(src);
        for (let i = 0; i < child.length; i++) {
            let children = child[i];
            let childrenNamePath = path.join(src, children);
            organize(childrenNamePath, dest);
        }

    }
}




module.exports = {
    organizeHelper
}