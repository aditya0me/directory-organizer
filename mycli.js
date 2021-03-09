#! /usr/bin/env node
let input=process.argv.slice(2);
let cmd=input[0];

let view = require("./commands/view"); //let view = require("./commands/view.js");//emiti lekhi le bi chaliba
let help = require("./commands/help");
let organize = require("./commands/organize"); 

switch(cmd){
    case "organize":
        organize.organizeHelper(input[1]);
        //console.log(process.cwd());
        //console.log(typeof input[1]);
        break;
    case "help":
        help.helpHelper();
        break;
    case "view":
        //console.log(cmd);
        view.viewHelper(input[2],input[1]);
        break;
    default:
        console.log("wrong command entered");
        break;
}