function viewHelper(mode,dirSpecified){
   // console.log("view command called");
   
    if(mode=="flat"){
        //viewFlat(dirSpecified);
        //console.log("working");
        const flat = require("./flatFile.js");
        flat.viewFlat(dirSpecified);
    }
    else if(mode == "tree"){

        const tree = require("./treeFile.js");
        //viewTree(dirSpecified);
        tree.viewTree(dirSpecified,"");
    }

    else{
        console.log("Wrong mode of view command. mycli help");
    }
}

module.exports = {
    viewHelper
}


function viewTree(src){
    console.log("Tree view called");
}