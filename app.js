const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'to add values',
    builder: {
        title: {
            describe:'note-title',
            demandOption: true,
            type: "string"        },
        body: {
            describe:'note-body',
            demandOption: true,
            type: "string"
        }
            },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'to remove the notes',
    builder: {
        title: {
            describe: 'note-title',
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'to list the notes',
    handler: function(){
        notes.listNote()
    }
})

yargs.command({
    command: 'read',
    describe: 'to read the notes',
    builder: {
        title: {
            describe: "title to be read",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()













// // if (process.argv[2] === "add"){
// //     console.log("adding..")
// // } else if (process.argv[2] === 'remove'){
// //     console.log("removing..")
// // }



// // console.log(chalk.green.inverse.bold.bgCyan("success"));
// // const note = require('./notes.js');
// // const content = note();
// // console.log(content);
// // console.log(validator.isURL("fftp://hhh.paavaiezhil.com"));